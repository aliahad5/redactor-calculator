import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

type SourceKey =
  | 'usaspending'
  | 'sam'
  | 'fpds'
  | 'usa-foia'
  | 'california'
  | 'texas'
  | 'new-york';

type SourceConfig = {
  label: string;
  supportsLiveFederalAwards: boolean;
  verificationStatus: '✅ Verified' | '⚠️ Partial';
  retrievalNote: string;
};

type UsaSpendingAwardResult = {
  internal_id?: number;
  generated_internal_id?: string;
  'Award ID'?: string;
  'Recipient Name'?: string;
  'Award Amount'?: number;
  'Start Date'?: string;
  'End Date'?: string;
  'Awarding Agency'?: string;
  'Awarding Sub Agency'?: string;
  Description?: string;
};

type UsaSpendingSearchResponse = {
  results?: UsaSpendingAwardResult[];
  page_metadata?: {
    page?: number;
    hasNext?: boolean;
  };
};

type AwardDetail = {
  generated_unique_award_id?: string | null;
  description?: string | null;
  type_description?: string | null;
  total_obligation?: number | null;
  base_exercised_options?: number | null;
  period_of_performance?: {
    start_date?: string | null;
    end_date?: string | null;
    potential_end_date?: string | null;
  } | null;
  latest_transaction_contract_data?: {
    type_of_contract_pricing_description?: string | null;
  } | null;
};

type ContractRecord = {
  vendorOrganizationName: string;
  contractTitle: string;
  industrySegment: string;
  contractType: string;
  awardAmount: number;
  awardAmountDisplay: string;
  agencyDepartment: string;
  contractStatus: 'Past' | 'Active' | 'Upcoming';
  contractPeriod: string;
  source: string;
  sourceUrl: string;
  verificationStatus: '✅ Verified' | '⚠️ Partial';
  awardId: string;
  description: string;
};

type CachedPayload = {
  expiresAt: number;
  payload: {
    source: SourceKey;
    sourceLabel: string;
    generatedAt: string;
    retrievalNote: string;
    emptyMessage: string;
    records: ContractRecord[];
  };
};

type FederalAwardResults = {
  awards: UsaSpendingAwardResult[];
  successfulSearches: number;
  failedSearches: number;
};
const EMPTY_MESSAGE =
  'No verified public contract data found. Recommend manual FOIA search via USASpending.gov or relevant procurement portals.';

const USASPENDING_SEARCH_URL = 'https://api.usaspending.gov/api/v2/search/spending_by_award/';
const USASPENDING_AWARD_URL = 'https://api.usaspending.gov/api/v2/awards/';
const CACHE_TTL_MS = 60 * 60 * 1000;
const MAX_PAGES_PER_QUERY = 10;
const MAX_DETAIL_CONCURRENCY = 8;

const SOURCE_CONFIG: Record<SourceKey, SourceConfig> = {
  usaspending: {
    label: 'USASpending.gov',
    supportsLiveFederalAwards: true,
    verificationStatus: '✅ Verified',
    retrievalNote:
      'Live federal contract and IDV awards from the public USAspending API. Records without exact public amounts or required period dates are excluded.',
  },
  sam: {
    label: 'SAM.gov (Contract Opportunities & Awards)',
    supportsLiveFederalAwards: false,
    verificationStatus: '⚠️ Partial',
    retrievalNote:
      'SAM.gov opportunity and award searches often require portal/API access and may not expose exact award amounts in unauthenticated public responses.',
  },
  fpds: {
    label: 'FPDS-NG (Federal Procurement Data System)',
    supportsLiveFederalAwards: true,
    verificationStatus: '⚠️ Partial',
    retrievalNote:
      'USAspending procurement File D1 is derived from FPDS. Records are verified through USAspending and linked to FPDS PIID searches for source cross-checking.',
  },
  'usa-foia': {
    label: 'USA.gov FOIA Libraries',
    supportsLiveFederalAwards: false,
    verificationStatus: '⚠️ Partial',
    retrievalNote:
      'FOIA library pages provide disclosure records, not a normalized contract-award feed with exact award amounts.',
  },
  california: {
    label: 'California State Procurement Portal',
    supportsLiveFederalAwards: false,
    verificationStatus: '⚠️ Partial',
    retrievalNote:
      'The state portal does not provide a normalized unauthenticated feed matching the required exact-award data model.',
  },
  texas: {
    label: 'Texas State Procurement Portal',
    supportsLiveFederalAwards: false,
    verificationStatus: '⚠️ Partial',
    retrievalNote:
      'The state portal does not provide a normalized unauthenticated feed matching the required exact-award data model.',
  },
  'new-york': {
    label: 'New York State Contracts Reporter',
    supportsLiveFederalAwards: false,
    verificationStatus: '⚠️ Partial',
    retrievalNote:
      'The state portal does not provide a normalized unauthenticated feed matching the required exact-award data model.',
  },
};

const CONTRACT_AWARD_TYPE_CODES = ['A', 'B', 'C', 'D'];
const IDV_AWARD_TYPE_CODES = [
  'IDV_A',
  'IDV_B',
  'IDV_B_A',
  'IDV_B_B',
  'IDV_B_C',
  'IDV_C',
  'IDV_D',
  'IDV_E',
];
const USASPENDING_KEYWORDS = ['redact', 'anonymization', 'anonymize'];
const USASPENDING_FIELDS = [
  'Award ID',
  'Recipient Name',
  'Award Amount',
  'Start Date',
  'End Date',
  'Awarding Agency',
  'Awarding Sub Agency',
  'Description',
];
const VERIFIED_COMPETITORS: ReadonlyArray<{
  competitorName: string;
  aliases: readonly string[];
}> = [
  {
    competitorName: 'Sighthound Redactor',
    aliases: ['Sighthound', 'Sighthound Redactor'],
  },
  {
    competitorName: 'Veritone Redact',
    aliases: ['Veritone', 'Veritone Redact'],
  },
  {
    competitorName: 'CaseGuard Studio',
    aliases: ['CaseGuard', 'CaseGuard Studio'],
  },
  {
    competitorName: 'FastRedaction',
    aliases: ['FastRedaction', 'Fast Redaction'],
  },
  {
    competitorName: 'MotionDSP Spotlight',
    aliases: ['MotionDSP', 'Motion DSP', 'MotionDSP Spotlight'],
  },
  {
    competitorName: 'CLIPr',
    aliases: ['CLIPr', 'CLIPR'],
  },
  {
    competitorName: 'AssemblyAI',
    aliases: ['AssemblyAI', 'Assembly AI'],
  },
  {
    competitorName: 'Lantero Redact',
    aliases: ['Lantero', 'Lantero Redact'],
  },
  {
    competitorName: 'Pimloc / SecureRedact',
    aliases: ['Pimloc', 'SecureRedact', 'Secure Redact'],
  },
  {
    competitorName: 'VIDIZMO / Redactor.ai',
    aliases: ['VIDIZMO', 'Redactor.ai', 'Redactor AI', 'RedactorAI'],
  },
  {
    competitorName: 'Facit Data Systems',
    aliases: ['Facit Data Systems', 'Facit', 'Identity Cloak'],
  },
  {
    competitorName: 'Suspect Technologies',
    aliases: ['Suspect Technologies', 'ExactRedact', 'Exact Redact'],
  },
  {
    competitorName: 'Redactable',
    aliases: ['Redactable'],
  },
  {
    competitorName: 'Extract Systems',
    aliases: ['Extract Systems', 'ID Shield'],
  },
  {
    competitorName: 'iDox.ai',
    aliases: ['iDox.ai', 'iDox AI', 'iDoxAI', 'iDox'],
  },
  {
    competitorName: 'Everlaw',
    aliases: ['Everlaw'],
  },
  {
    competitorName: 'TransPerfect',
    aliases: ['TransPerfect'],
  },
];

const cache = new Map<SourceKey, CachedPayload>();

function isSourceKey(value: string): value is SourceKey {
  return Object.prototype.hasOwnProperty.call(SOURCE_CONFIG, value);
}

function compactWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function getString(value: unknown): string {
  return typeof value === 'string' ? compactWhitespace(value) : '';
}
function normalizeCompetitorTerm(value: string): string {
  return compactWhitespace(value)
    .replace(/&/g, ' AND ')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

function normalizedTermContains(normalizedValue: string, normalizedTerm: string): boolean {
  return (
    normalizedValue === normalizedTerm ||
    normalizedValue.startsWith(`${normalizedTerm} `) ||
    normalizedValue.endsWith(` ${normalizedTerm}`) ||
    normalizedValue.includes(` ${normalizedTerm} `)
  );
}

function isVerifiedCompetitorVendor(vendor: string): boolean {
  const normalizedVendor = normalizeCompetitorTerm(vendor);
  if (!normalizedVendor) {
    return false;
  }

  return VERIFIED_COMPETITORS.some((competitor) =>
    competitor.aliases.some((alias) => {
      const normalizedAlias = normalizeCompetitorTerm(alias);
      return normalizedAlias ? normalizedTermContains(normalizedVendor, normalizedAlias) : false;
    })
  );
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatDate(value: string): string {
  if (!value) {
    return '';
  }
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(date);
}

function getContractStatus(startDate: string, endDate: string): 'Past' | 'Active' | 'Upcoming' {
  const now = Date.now();
  const start = new Date(`${startDate}T00:00:00Z`).getTime();
  const end = new Date(`${endDate}T23:59:59Z`).getTime();
  if (Number.isFinite(start) && start > now) {
    return 'Upcoming';
  }
  if (Number.isFinite(end) && end >= now) {
    return 'Active';
  }
  return 'Past';
}

function classifyIndustry(text: string): string {
  const haystack = text.toLowerCase();
  if (/\b(drone|uav|unmanned|aerial|aircraft|aviation|border|surveillance|geospatial)\b/.test(haystack)) {
    return '🚁 Drone & Aerial Surveillance';
  }
  if (/\b(health|healthcare|medical|hospital|hipaa|patient|phi|veterans affairs|department of veterans affairs|hhs|human services)\b/.test(haystack)) {
    return '🏥 Healthcare';
  }
  if (/\b(legal|court|courts|litigation|ediscovery|e-discovery|deposition|attorney|law firm|case management)\b/.test(haystack)) {
    return '⚖️ Legal & Compliance Teams';
  }
  if (/\b(police|sheriff|bodycam|body camera|evidence|chain of custody|public safety|law enforcement|fbi|dea|atf|justice|homeland security|customs|immigration|corrections|prison|intelligence|defense|army|navy|air force|security)\b/.test(haystack)) {
    return '🚓 Law Enforcement & Public Safety';
  }
  return '🏢 Government Agencies';
}

function normalizeContractTitle(vendor: string, contractTitle: string): string {
  const normalizedVendor = compactWhitespace(vendor).toUpperCase().replace(/[.,]/g, '');
  const normalizedTitles: Record<string, string> = {
    'PURDUE UNIVERSITY':
      'DHS S&T technical support for video redaction and privacy-preserving intelligence extraction.',
    'CIPHERTRACE INC':
      'R&D tools and algorithms for cryptocurrency forensic analysis and transaction attribution.',
    'THE UNIVERSITY OF SOUTHERN MISSISSIPPI':
      'Autonomous micro-modular mobile data center cloud computing study for modeling, simulation, cybersecurity, and anomaly detection.',
  };

  return normalizedTitles[normalizedVendor] || contractTitle;
}

function isStrictlyRelevant(result: UsaSpendingAwardResult): boolean {
  const text = compactWhitespace(
    [
      result.Description,
      result['Awarding Agency'],
      result['Awarding Sub Agency'],
      result['Recipient Name'],
    ]
      .filter(Boolean)
      .join(' ')
  ).toLowerCase();

  if (!text) {
    return false;
  }

  const isSystemDisclosureNoise =
    text.includes('information has temporarily been redacted') ||
    text.includes('temporarily been redacted') ||
    text.includes('domestic awardees (undisclosed)') ||
    text.includes('redacted due to pii') ||
    text.includes('personally identifiable information (pii) and redacted records') ||
    text.includes('redacted records sitewide') ||
    text.includes('executive compensation');
  if (isSystemDisclosureNoise) {
    return false;
  }

  return (
    /\b(?:video|audio|document|media|data|foia|efoia|privacy|evidence|bodycam|body camera|case|foreign assistance data)\s+redact(?:ion|ions|ed|ing|s)?\b/.test(text) ||
    /\bredact(?:ion|ions|ed|ing|s)?\s+(?:software|system|systems|service|services|solution|solutions|tool|tools|workflow|workflows|platform|support)\b/.test(text) ||
    /\bperform(?:ing)?\s+redact(?:ion|ions|ing)?\b/.test(text) ||
    /\banonymi[sz](?:e|es|ed|ing|ation|ations)?\b/.test(text) ||
    /\befoia\b/.test(text)
  );
}

function getAwardKey(result: UsaSpendingAwardResult): string {
  return getString(result.generated_internal_id) || String(result.internal_id || '') || getString(result['Award ID']);
}

function getUsaSpendingAwardLink(result: UsaSpendingAwardResult): string {
  const key = getString(result.generated_internal_id);
  return key ? `https://www.usaspending.gov/award/${encodeURIComponent(key)}` : 'https://www.usaspending.gov';
}

function getFpdsAwardLink(result: UsaSpendingAwardResult): string {
  const piid = getString(result['Award ID']);
  if (!piid) {
    return 'https://www.fpds.gov';
  }
  const query = encodeURIComponent(`PIID:"${piid}"`);
  return `https://www.fpds.gov/ezsearch/fpdsportal?q=${query}&s=FPDS.GOV&templateName=1.5.3&indexName=awardfull`;
}

function getSourceUrl(result: UsaSpendingAwardResult, source: SourceKey): string {
  return source === 'fpds' ? getFpdsAwardLink(result) : getUsaSpendingAwardLink(result);
}

function buildContractType(detail: AwardDetail | null): string {
  const typeDescription = getString(detail?.type_description);
  const pricingDescription = getString(
    detail?.latest_transaction_contract_data?.type_of_contract_pricing_description
  );
  const parts = [typeDescription, pricingDescription].filter(Boolean);
  return parts.length ? parts.join(' — ') : 'Contract Award';
}

function toContractRecord(
  result: UsaSpendingAwardResult,
  detail: AwardDetail | null,
  source: SourceKey
): ContractRecord | null {
  const amount = Number(result['Award Amount']);
  const startDate = getString(result['Start Date'] || detail?.period_of_performance?.start_date);
  const endDate = getString(
    result['End Date'] ||
      detail?.period_of_performance?.end_date ||
      detail?.period_of_performance?.potential_end_date
  );
  const vendor = getString(result['Recipient Name']);
  const agency = getString(result['Awarding Agency'] || result['Awarding Sub Agency']);
  const description = getString(detail?.description || result.Description);
  const awardId = getString(result['Award ID']);
  const sourceUrl = getSourceUrl(result, source);

  if (
    !vendor ||
    !isVerifiedCompetitorVendor(vendor) ||
    !description ||
    !agency ||
    !awardId ||
    !Number.isFinite(amount) ||
    !startDate ||
    !endDate ||
    sourceUrl === 'https://www.usaspending.gov' ||
    sourceUrl === 'https://www.fpds.gov'
  ) {
    return null;
  }

  const config = SOURCE_CONFIG[source];
  const classificationText = [description, agency, result['Awarding Sub Agency'], vendor].join(' ');

  return {
    vendorOrganizationName: vendor,
    contractTitle: normalizeContractTitle(vendor, description),
    industrySegment: classifyIndustry(classificationText),
    contractType: buildContractType(detail),
    awardAmount: amount,
    awardAmountDisplay: formatCurrency(amount),
    agencyDepartment: agency,
    contractStatus: getContractStatus(startDate, endDate),
    contractPeriod: `${formatDate(startDate)} → ${formatDate(endDate)}`,
    source: config.label,
    sourceUrl,
    verificationStatus: config.verificationStatus,
    awardId,
    description,
  };
}

async function fetchUsaSpendingSearch(
  keyword: string,
  awardTypeCodes: string[],
  page: number
): Promise<UsaSpendingSearchResponse | null> {
  try {
    const response = await fetch(USASPENDING_SEARCH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      body: JSON.stringify({
        filters: {
          keywords: [keyword],
          award_type_codes: awardTypeCodes,
        },
        fields: USASPENDING_FIELDS,
        page,
        limit: 100,
        sort: 'Award Amount',
        order: 'desc',
      }),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as UsaSpendingSearchResponse;
  } catch {
    return null;
  }
}

async function fetchAwardDetail(generatedInternalId: string): Promise<AwardDetail | null> {
  if (!generatedInternalId) {
    return null;
  }
  try {
    const response = await fetch(`${USASPENDING_AWARD_URL}${encodeURIComponent(generatedInternalId)}/`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as AwardDetail;
  } catch {
    return null;
  }
}

async function mapWithConcurrency<T, U>(
  items: T[],
  limit: number,
  mapper: (item: T) => Promise<U>
): Promise<U[]> {
  const results = new Array<U>(items.length);
  let nextIndex = 0;
  async function worker(): Promise<void> {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex]);
    }
  }

  const workerCount = Math.min(limit, items.length);
  await Promise.all(Array.from({ length: workerCount }, () => worker()));
  return results;
}

async function getFederalAwardResults(): Promise<FederalAwardResults> {
  const deduped = new Map<string, UsaSpendingAwardResult>();
  const awardGroups = [CONTRACT_AWARD_TYPE_CODES, IDV_AWARD_TYPE_CODES];
  let successfulSearches = 0;
  let failedSearches = 0;

  for (const keyword of USASPENDING_KEYWORDS) {
    for (const awardTypeCodes of awardGroups) {
      let page = 1;
      let hasNext = true;

      while (hasNext && page <= MAX_PAGES_PER_QUERY) {
        const data = await fetchUsaSpendingSearch(keyword, awardTypeCodes, page);
        if (!data) {
          failedSearches += 1;
          break;
        }
        successfulSearches += 1;
        (data.results || []).forEach((result) => {
          if (!isStrictlyRelevant(result) || !isVerifiedCompetitorVendor(getString(result['Recipient Name']))) {
            return;
          }
          const key = getAwardKey(result);
          if (key && !deduped.has(key)) {
            deduped.set(key, result);
          }
        });
        hasNext = !!data.page_metadata?.hasNext;
        page += 1;
      }
    }
  }

  return {
    awards: Array.from(deduped.values()),
    successfulSearches,
    failedSearches,
  };
}

async function getLiveFederalRecords(source: SourceKey): Promise<ContractRecord[]> {
  const results = await getFederalAwardResults();
  if (!results.successfulSearches) {
    throw new Error('USAspending public API was unreachable during this request.');
  }

  const records = await mapWithConcurrency(results.awards, MAX_DETAIL_CONCURRENCY, async (result) => {
    const detail = await fetchAwardDetail(getString(result.generated_internal_id));
    return toContractRecord(result, detail, source);
  });

  return records
    .filter((record): record is ContractRecord => Boolean(record))
    .sort((a, b) => b.awardAmount - a.awardAmount);
}

async function buildPayload(source: SourceKey): Promise<CachedPayload['payload']> {
  const config = SOURCE_CONFIG[source];
  const records = config.supportsLiveFederalAwards ? await getLiveFederalRecords(source) : [];

  return {
    source,
    sourceLabel: config.label,
    generatedAt: new Date().toISOString(),
    retrievalNote: config.retrievalNote,
    emptyMessage: EMPTY_MESSAGE,
    records,
  };
}

export async function GET(request: NextRequest) {
  const requestedSource = request.nextUrl.searchParams.get('source') || 'usaspending';
  const source: SourceKey = isSourceKey(requestedSource) ? requestedSource : 'usaspending';
  const cached = cache.get(source);

  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json(cached.payload);
  }

  try {
    const payload = await buildPayload(source);
    cache.set(source, {
      expiresAt: Date.now() + CACHE_TTL_MS,
      payload,
    });
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      {
        source,
        sourceLabel: SOURCE_CONFIG[source].label,
        generatedAt: new Date().toISOString(),
        retrievalNote: SOURCE_CONFIG[source].retrievalNote,
        emptyMessage: EMPTY_MESSAGE,
        records: [],
        error:
          error instanceof Error
            ? error.message
            : 'Unable to retrieve verified public contract data.',
      },
      { status: 200 }
    );
  }
}
