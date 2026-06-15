var comparisonMode = 'all';
var ALPR_PROMPTS = [
  {
    tab: "Executive Summary",
    objective: "Generate a data-backed executive summary for the Sighthound ALPR+ competitive landscape covering market positioning, key segments, and top competitive scenarios for sales and marketing leadership.",
    context: [
      "Product: Sighthound ALPR+ — sighthound.com/products/alpr and sighthound.com/products/alpr-plus/",
      "Gen 6 AI engine; self-reported 99% accuracy; up to 160 FPS on GPU; 1B+ images/year",
      "Key differentiator: MMCG analytics (make, model, color, generation) — no public competitor documents equivalent depth for US/CA/EU vehicles since 1991",
      "Deployment: on-premise, cloud, edge, Docker, Windows + Linux",
      "Free test drive available at sighthound.com/products/alpr/demo — no sign-up required",
      "19 competitors analyzed across ALPR platforms, hardware vendors, tolling/ITS, and video analytics"
    ],
    instructions: [
      "Summarize the ALPR market in 2-3 sentences including key growth drivers and regulatory trends",
      "Identify Sighthound ALPR+'s 6 primary market segments with one-sentence descriptions",
      "List the top 5 competitors by deal frequency and explain why each appears in competitive evaluations",
      "State the top 3 differentiated capabilities vs. the competitive set, each tied to a specific product feature",
      "Identify the single most important win theme for each of the top 3 competitive scenarios",
      "Close with a 2-sentence strategic recommendation for the sales team's focus for the next 6 months"
    ],
    constraints: [
      "Do not fabricate market size figures — only cite publicly verifiable sources or explicitly flag as estimate",
      "Do not claim Sighthound has certifications or partnerships not published on the official website",
      "Do not reference Sighthound Redactor or any other Sighthound product — this is ALPR+ only",
      "Do not use vague superlatives without supporting data from the official product page",
      "Flag any competitor claim that cannot be verified from the competitor's official website",
      "Keep to one printed page — this is for executive consumption"
    ]
  },
  {
    tab: "Product Updates",
    objective: "Generate a current capability brief for Sighthound ALPR+ for use by sales reps and channel partners when explaining the platform's technical differentiation.",
    context: [
      "All capabilities must be sourced from sighthound.com/products/alpr, sighthound.com/products/alpr-plus/, and dev.sighthound.com",
      "Gen 6 AI; LPR reads alphanumeric plates globally; MMCG vehicle-recognition models are primarily trained for US, Canada, and EU vehicle markets",
      "Deployment: on-premise, cloud, edge, Docker, Windows + Linux",
      "API and integration paths: REST image API, hosted preview, self-hosted Docker gateway, SIO pipelines, RTSP input, RabbitMQ/Aqueduct control, and Python pipeline extensions",
      "Hardware: Sighthound Compute Camera (IP67) + Compute Node",
      "Current ALPR+ pricing is not publicly listed in verified official public pages; direct pricing questions to Sighthound sales"
    ],
    instructions: [
      "Write a 3-sentence product overview suitable for a technical buyer, with facts and recommendations clearly labeled",
      "List all published ALPR capabilities with one-line explanations (LPR, MMCG, object detection, tracking, vehicle orientation)",
      "List all deployment modes with a one-line description of when each is the right fit",
      "Describe the API and integration ecosystem using technical terminology",
      "Describe the hardware options and when they add value vs. camera-agnostic software deployment",
      "Close with the developer portal URL and free test drive URL as recommended first steps"
    ],
    constraints: [
      "Do not add capabilities not documented on official Sighthound product pages or dev.sighthound.com",
      "Do not include performance or accuracy benchmarks unless the exact current official source and caveat are included",
      "Do not claim the product is certified under CJIS, FedRAMP, or any compliance framework — reference architecture only",
      "Do not include pricing — current ALPR+ pricing is not publicly listed",
      "Do not mention Sighthound Redactor or other Sighthound products under any circumstances",
      "Note explicitly: ALPR+ pricing is not publicly listed — direct all pricing questions to the sales team"
    ]
  },
  {
    tab: "ICP & Personas",
    objective: "Generate detailed ideal customer profiles and buyer personas for Sighthound ALPR+ across all 6 primary verticals for use by sales reps and marketing teams.",
    context: [
      "Verticals: law enforcement, parking & EV, smart city/ITS, retail/QSR, transportation/logistics, developer/integrator",
      "Deployment flexibility is the key differentiator for data-sovereign and air-gapped buyers",
      "MMCG analytics is the key differentiator for investigative and vehicle identification use cases",
      "API-first architecture is the key differentiator for developer and systems integrator buyers",
      "Free test drive with no sign-up required reduces qualification friction"
    ],
    instructions: [
      "For each of 6 primary buyer personas, write: job title + org type, primary pain point, key capability needs, buying influence level, success metrics, common objections, and best talk track phrase",
      "Identify whether each persona is a technical gatekeeper, budget owner, or operational recommender",
      "Identify the trigger event that most commonly initiates an ALPR purchase evaluation for each persona",
      "For each persona, identify which competitor they are most likely evaluating at the time they find Sighthound",
      "Close with a prioritization matrix: which persona closes fastest / highest ACV / highest volume"
    ],
    constraints: [
      "Do not assume specific pricing for any buyer — note that ALPR+ current pricing is not publicly listed",
      "Do not create personas for Sighthound Redactor customers — ALPR+ buyers only",
      "Do not make compliance certification claims — reference architecture capabilities only",
      "Represent each persona's concerns honestly, including scenarios where a competitor might be a better fit",
      "Do not present organizational size or budget ranges as hard facts — flag as representative estimates"
    ]
  },
  {
    tab: "Competitor Profiles",
    objective: "Generate a structured one-page competitor profile for a single named ALPR market competitor covering positioning, deployment, pricing, strengths, weaknesses, and Sighthound ALPR+ win strategy.",
    context: [
      "Always fetch current information from the competitor's official website before writing",
      "19 competitors in scope: Rekor, Vaidio (formerly IronYun), Eagle Eye Networks, PlateSmart, Flock Safety, Lumana, BriefCam, Senstar, Q-Free (Intrada), Tattile, Axis, Adaptive Recognition, Parking Logix, Perceptics, Kapsch TrafficCom, Neology, Leonardo (ELSAG), Jenoptik, NDI Recognition Systems",
      "Sighthound differentiates on: MMCG, deployment flexibility, API-first, camera-agnostic, ALPR Engine OEM tier",
      "IronYun rebranded to Vaidio in March 2025 — always use the current name Vaidio"
    ],
    instructions: [
      "Fetch the competitor's official website and note the URL and access date",
      "Write 2-3 sentences summarizing the competitor's market position and core product approach",
      "List their deployment modes (cloud, on-prem, edge, hardware-only) with confidence level for each",
      "State their pricing model — if not publicly listed, write that explicitly; never estimate",
      "List 3 genuine strengths with brief supporting rationale from official sources",
      "List 3 honest weaknesses (deployment gaps, analytics limitations, ecosystem constraints)",
      "Write 3 specific win themes for Sighthound, each tied to a concrete ALPR+ capability",
      "Write 2 discovery questions that naturally surface the competitor's limitations",
      "Note 1-2 scenarios where this competitor legitimately wins the deal"
    ],
    constraints: [
      "Only use data from the competitor's official website — never infer or fabricate capabilities",
      "If pricing is not publicly listed, state 'not publicly listed — contact vendor' — never estimate",
      "Do not disparage competitors — present factual capability gaps only",
      "Do not confuse IronYun with Vaidio — Vaidio is the current brand name as of March 2025",
      "Flag any data point older than 18 months with its source date clearly noted",
      "Do not claim Sighthound is superior on any dimension where the evidence is unclear or absent",
      "Note Flock Safety's ~$8.4B valuation (April 2026) when relevant — always cite the source"
    ]
  },
  {
    tab: "Feature Comparison",
    objective: "Generate an accurate side-by-side feature comparison matrix for Sighthound ALPR+ vs. 2-4 named competitors across ALPR depth, analytics, deployment, and integration dimensions.",
    context: [
      "Sighthound ALPR+ documented features: global alphanumeric plate recognition with US/Canada/EU region recognition, MMCG, object detection, real-time processing, on-prem/cloud/edge/Docker, REST API, RTSP, RabbitMQ, and SIO pipeline documentation",
      "MMCG is a primary comparison area; compare each competitor from official documentation for plate data, make/model/color/generation, vehicle type, and other documented attributes",
      "Deployment flexibility (on-prem + cloud + edge + Docker/self-hosted options) is the secondary differentiator",
      "Three feature states to use: Yes (documented on official site), Partial (limited or module-only), No (not offered), ? (not publicly documented)"
    ],
    instructions: [
      "Define comparison categories: LPR coverage, MMCG analytics, object detection, real-time processing, on-premise, cloud, edge/IoT, deployment isolation, REST API, Docker, and global alphanumeric plate support",
      "Populate each competitor's column from official product documentation only",
      "Use Yes / Partial / No / ? states consistently — never guess",
      "Include source URLs for each competitor's feature claims in a footnotes section",
      "Add a 'Sighthound advantage' column row noting the specific win condition for each feature row",
      "Call out MMCG as the single most significant differentiator row with a visual marker"
    ],
    constraints: [
      "Only use features documented on official vendor websites — never infer capabilities",
      "Clearly distinguish between a full platform feature and a partner add-on or module",
      "Do not present ? (unknown) as No — unknown is unknown, not absence",
      "If Sighthound lacks a feature vs. a specific competitor, note it honestly in the matrix",
      "Do not compare accuracy benchmarks unless both vendors publish results from the same methodology",
      "Flag any feature data older than 18 months with a date note"
    ]
  },
  {
    tab: "Pricing Analysis",
    objective: "Generate a pricing model comparison for Sighthound ALPR+ vs. key competitors to help sales reps frame TCO conversations and handle pricing objections with accurate context.",
    context: [
      "Sighthound ALPR+ current pricing: NOT publicly listed on the official website as of May 2026",
      "2023 press release reference (potentially outdated): ALPR Pro from $29/camera/month; ALPR Free tier available",
      "Competitor models: official per-lookup/per-camera pricing where published (Plate Recognizer, Rekor Scout Basic/Pro), hardware bundles or managed networks (Flock, Leonardo, Jenoptik), government contracts (Kapsch, Perceptics, NDI), and quote-led pricing where no official public pricing exists",
      "All pricing figures must come from official pricing pages or current vendor quotes; do not use third-party pricing snippets as evidence"
    ],
    instructions: [
      "For each competitor, state their pricing model type with source and date",
      "Show a hypothetical TCO comparison at 3 scale points: 5 cameras, 25 cameras, 100 cameras — flagging all figures as estimates",
      "Show the volume crossover point where per-lookup pricing becomes more expensive than a subscription model",
      "Write 3 pricing objection responses for the most common scenarios (per-lookup, hardware bundle, existing vendor)",
      "Provide guidance on when to lead with pricing vs. when to lead with TCO and ROI",
      "Close with a call-to-action directing buyers to sighthound.com/contact-us for a custom quote"
    ],
    constraints: [
      "Always flag that ALPR+ current pricing is not publicly listed — direct buyers to the sales team",
      "Never fabricate Sighthound ALPR+ pricing figures — use the 2023 ALPR Pro reference only with explicit date caveat",
      "Do not present competitor pricing estimates as verified facts unless sourced from the official vendor website",
      "Do not make ROI guarantees — use 'potential' and 'estimated' language throughout",
      "Note that government buyers may have access to different pricing via procurement vehicles",
      "Do not compare pricing until both vendors' current quotes are available"
    ]
  },
  {
    tab: "Positioning Strategy",
    objective: "Generate a complete positioning strategy for Sighthound ALPR+ including elevator pitches, win themes, competitive trap questions, and talk tracks for the top 5 competitive scenarios.",
    context: [
      "Core differentiators from sighthound.com: MMCG analytics, deployment flexibility, camera-agnostic, REST API/Docker ecosystem, Gen 6 AI at 1B+ images/year",
      "Top 5 competitors by deal frequency: Flock Safety, Rekor, Plate Recognizer, Genetec AutoVu, hardware vendors (ELSAG, NDI, Jenoptik)",
      "MMCG is the single strongest win theme vs. most competitors who offer plate reads only",
      "Deployment flexibility wins against Flock Safety and Eagle Eye Networks (both cloud-only/mandatory)"
    ],
    instructions: [
      "Write a 2-sentence elevator pitch for each of 5 primary verticals: law enforcement, parking, smart city, retail, developer",
      "List 5 core win themes — each tied to a specific ALPR+ capability and the competitor gap it exposes",
      "Write 5 trap questions that expose competitor weaknesses naturally during discovery",
      "Write 3 kill phrases to avoid and their better replacements (what not to say vs. what to say instead)",
      "Write 3 full talk tracks (150 words each) for: vs. Flock Safety, vs. Rekor, vs. a hardware-only vendor",
      "Close with a 'when to walk away' section — 3 scenarios where a competitor is genuinely the better fit"
    ],
    constraints: [
      "Do not use vague superlatives — every positioning claim must be tied to a documented ALPR+ capability",
      "Do not disparage competitors — expose limitations through facts and questions, not opinion",
      "Do not make compliance claims beyond what is documented on the official product page",
      "Do not create talk tracks that misrepresent competitor capabilities or pricing",
      "Flag any pricing figure used in talk tracks as requiring sales team verification",
      "Maintain a professional, enterprise B2B tone throughout — no casual language"
    ]
  },
  {
    tab: "Discovery Questions",
    objective: "Generate a structured discovery question guide for Sighthound ALPR+ sales calls, organized by vertical, to qualify pain, expose competitor gaps, and surface the right capabilities.",
    context: [
      "5 primary verticals: law enforcement, parking & EV, smart city/ITS, retail/QSR, developer/integrator",
      "Key qualifiers: deployment constraint (air-gapped?), integration requirement (existing VMS/CAD?), camera scale, MMCG need, lookup volume",
      "Top objections by vertical: LE ('We have Flock'), Parking ('We tried ALPR before'), Developer ('Plate Recognizer is cheaper')"
    ],
    instructions: [
      "For each of 5 verticals, write 6-8 discovery questions organized into: pain/problem, technical constraint, competitive displacement, and budget/timeline",
      "Mark each question as: Open (use to start), Probing (follow-up), or Qualifying (go/no-go decision)",
      "Include one trap question per vertical that surfaces a key competitor limitation without naming the competitor",
      "Include one MMCG question per vertical that opens the conversation about vehicle analytics beyond plates",
      "Close with a 5-question qualification scorecard that classifies the opportunity as hot, warm, or cold"
    ],
    constraints: [
      "All questions must be open-ended — no leading questions that presuppose the answer",
      "Do not ask questions that could put the prospect in a legally sensitive position",
      "Do not imply that a competitor's product is inferior — let the prospect surface the gap",
      "Do not mix law enforcement questions into the retail or developer sections",
      "Note that ALPR data-retention laws are evolving — do not ask questions that presuppose specific compliance requirements are met",
      "Do not design questions to deceive the prospect — the goal is genuine qualification"
    ]
  },
  {
    tab: "Pricing Calculator",
    objective: "Generate a pricing estimation framework for Sighthound ALPR+ that sales reps use in pre-sales conversations to frame value and compare against competitors before a formal quote.",
    context: [
      "Sighthound ALPR+ current pricing: NOT publicly listed as of May 2026",
      "2023 press reference (verify with sales): ALPR Pro from $29/camera/month; ALPR Free tier; ALPR Engine OEM tier",
      "Competitor models for comparison: per-lookup (Plate Recognizer), per-camera sub (Rekor), hardware bundle (Flock, LE vendors)",
      "Key TCO inputs: camera count, deployment type, use case vertical, required feature tier"
    ],
    instructions: [
      "Define 4 input variables: camera count, deployment type, use case vertical, feature tier",
      "Map inputs to 3 Sighthound tiers: Free (limited), Pro (per-camera), Engine (OEM/developer)",
      "For each tier, provide a TCO comparison at 3 scale points with competitor estimates — flag all figures as estimates",
      "Calculate and show the volume crossover point where per-lookup pricing becomes more expensive than a subscription",
      "Include an ROI example for law enforcement: manual lookup hours saved × hourly rate × 12 months vs. ALPR+ annual cost",
      "Close with the contact sales CTA: sighthound.com/contact-us"
    ],
    constraints: [
      "Label all pricing figures clearly as estimates or 2023 press reference — never present as current confirmed pricing",
      "Do not fabricate current Sighthound ALPR+ pricing under any circumstances",
      "Do not use competitor pricing that is not publicly verifiable — note source and date for any figure cited",
      "Do not present ROI calculations as guaranteed outcomes — use 'potential' and 'estimated' language",
      "Always include a 'verify with sales team' note on any output containing pricing",
      "Do not design the calculator to mislead buyers — present honest comparative TCO math"
    ]
  },
  {
    tab: "Key Marketing Resources",
    objective: "Generate a curated list of all key marketing resources, technical documentation, and sales collateral for Sighthound ALPR+ for use by sales reps, channel partners, and marketing teams.",
    context: [
      "Official product page: sighthound.com/products/alpr",
      "Developer portal: dev.sighthound.com",
      "ALPR+ Factsheet (July 2024): publicly linked from the product page — may not reflect current Gen 6 capabilities",
      "Free test drive: sighthound.com/products/alpr/demo (no sign-up required)",
      "Solution pages: law enforcement, parking & EV, retail & QSR, education & campus, transportation & logistics",
      "Pricing: current ALPR+ pricing is not publicly listed; cite only verified live official pricing references and flag historical references as potentially outdated"
    ],
    instructions: [
      "List all official Sighthound ALPR+ web pages with verified URLs and one-line descriptions",
      "List all technical and developer documentation with verified URLs",
      "List any publicly available datasheets or PDFs linked from the official website",
      "List all official solution pages by vertical with URLs",
      "Identify 3-4 content gaps (resources that should exist but do not appear to be publicly available)",
      "Recommend the free test drive URL as the primary CTA for top-of-funnel outreach"
    ],
    constraints: [
      "Only list resources that are publicly accessible from sighthound.com or dev.sighthound.com",
      "Do not fabricate URLs — only list URLs that have been verified as live and accessible",
      "Do not list Sighthound Redactor or other Sighthound product pages as ALPR+ resources",
      "Do not list third-party review sites (G2, Capterra, Slashdot) as official Sighthound resources",
      "Note if the July 2024 factsheet may not reflect current capabilities — recommend marketing review",
      "Do not fabricate a 2023 pricing press release; if no live official 2023 URL is verified, say so and recommend marketing update current pricing guidance"
    ]
  }
];
var activeProduct = 'redactor';
var activeRedactorTab = 'pricing-calculator';
var activeAlprTab = 0;
var RELEASE_NOTES_SOURCE_PATH = '/data/docs-redactor-com-release-notes.md';
var releaseNotesState = {
    releases: [],
    isLoaded: false,
    error: null,
    loadingPromise: null
};

function createReleaseId(version) {
    return 'v' + String(version || '').replace(/^v/i, '').trim();
}
function cleanReleaseNotesHeadingText(text) {
    return String(text || '')
        .replace(/\s*\[\u00b6\]\([^)]+\)\s*/g, '')
        .replace(/\\([#[\]_*])/g, '$1')
        .trim();
}

function parseReleaseNotesMarkdown(markdown) {
    var releases = [];
    var current = null;
    String(markdown || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').forEach(function(line) {
        var releaseMatch = line.match(/^##\s+([0-9]+(?:\.[0-9]+)+)\s*(.*)$/);
        if (releaseMatch) {
            var date = cleanReleaseNotesHeadingText(releaseMatch[2]).replace(/^[\s\-\u2013\u2014]+/, '').trim();
            current = {
                version: releaseMatch[1].trim().replace(/^v/i, ''),
                date: date || 'Date not listed',
                bodyLines: []
            };
            current.id = createReleaseId(current.version);
            releases.push(current);
            return;
        }
        if (current) {
            current.bodyLines.push(line);
        }
    });

    return releases.map(function(release) {
        while (release.bodyLines.length && !release.bodyLines[0].trim()) {
            release.bodyLines.shift();
        }
        while (release.bodyLines.length && !release.bodyLines[release.bodyLines.length - 1].trim()) {
            release.bodyLines.pop();
        }
        release.body = release.bodyLines.join('\n');
        return release;
    }).filter(function(release) {
        return release.version && release.body;
    });
}

function convertReleaseInlineMarkdown(text) {
    var html = escapeHtml(text)
        .replace(/\\\[/g, '[')
        .replace(/\\\]/g, ']')
        .replace(/\\_/g, '_')
        .replace(/\\-/g, '-');

    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)(?:\s+&quot;[^&]+&quot;)?\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return html;
}

function renderReleaseMarkdown(markdown) {
    var output = [];
    var paragraphLines = [];
    var listType = null;
    var inCodeBlock = false;
    var codeLines = [];

    function flushParagraph() {
        if (!paragraphLines.length) { return; }
        output.push('<p>' + convertReleaseInlineMarkdown(paragraphLines.join(' ')) + '</p>');
        paragraphLines = [];
    }

    function closeList() {
        if (!listType) { return; }
        output.push('</' + listType + '>');
        listType = null;
    }

    function openList(type) {
        if (listType === type) { return; }
        closeList();
        output.push('<' + type + '>');
        listType = type;
    }
    function flushCodeBlock() {
        if (!inCodeBlock) { return; }
        output.push('<pre class="release-note-code"><code>' + escapeHtml(codeLines.join('\n')) + '</code></pre>');
        codeLines = [];
        inCodeBlock = false;
    }

    String(markdown || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').forEach(function(line) {
        var trimmed = line.trim();
        var headingMatch;
        var imageMatch;
        var unorderedMatch;
        var orderedMatch;
        if (/^```/.test(trimmed)) {
            flushParagraph();
            closeList();
            if (inCodeBlock) {
                flushCodeBlock();
            } else {
                inCodeBlock = true;
                codeLines = [];
            }
            return;
        }

        if (inCodeBlock) {
            codeLines.push(line);
            return;
        }

        if (!trimmed) {
            flushParagraph();
            closeList();
            return;
        }

        imageMatch = trimmed.match(/^!\[([^\]]*)\]\((https?:\/\/[^)]+)\)$/);
        if (imageMatch) {
            flushParagraph();
            closeList();
            output.push('<figure class="release-note-figure"><img class="release-note-image" src="' + escapeHtml(imageMatch[2]) + '" alt="' + escapeHtml(imageMatch[1] || '') + '" loading="lazy"></figure>');
            return;
        }

        headingMatch = trimmed.match(/^#{3,6}\s+(.+)$/);
        if (headingMatch) {
            flushParagraph();
            closeList();
            output.push('<h5>' + convertReleaseInlineMarkdown(cleanReleaseNotesHeadingText(headingMatch[1])) + '</h5>');
            return;
        }

        headingMatch = trimmed.match(/^\*\*([^*]+)\*\*:?\s*$/);
        if (headingMatch) {
            flushParagraph();
            closeList();
            output.push('<h5>' + convertReleaseInlineMarkdown(headingMatch[1]) + '</h5>');
            return;
        }

        unorderedMatch = line.match(/^\s*-\s+(.+)$/);
        if (unorderedMatch) {
            flushParagraph();
            openList('ul');
            output.push('<li>' + convertReleaseInlineMarkdown(unorderedMatch[1]) + '</li>');
            return;
        }

        orderedMatch = line.match(/^\s*\d+\.\s+(.+)$/);
        if (orderedMatch) {
            flushParagraph();
            openList('ol');
            output.push('<li>' + convertReleaseInlineMarkdown(orderedMatch[1]) + '</li>');
            return;
        }

        paragraphLines.push(trimmed);
    });

    flushParagraph();
    closeList();
    flushCodeBlock();
    return output.join('');
}

function getReleaseById(id) {
    for (var i = 0; i < releaseNotesState.releases.length; i += 1) {
        if (releaseNotesState.releases[i].id === id) {
            return releaseNotesState.releases[i];
        }
    }
    return null;
}

function populateVersionSelector() {
    var selector = document.getElementById('versionSelector');
    if (!selector) { return; }
    var selectedValue = selector.value;
    selector.innerHTML = '';
    releaseNotesState.releases.forEach(function(release, index) {
        var option = document.createElement('option');
        option.value = release.id;
        option.textContent = release.id + ' — ' + release.date;
        if ((selectedValue && release.id === selectedValue) || (!selectedValue && index === 0)) {
            option.selected = true;
        }
        selector.appendChild(option);
    });
}

function loadReleaseNotes() {
    if (releaseNotesState.isLoaded) {
        return Promise.resolve(releaseNotesState.releases);
    }
    if (releaseNotesState.loadingPromise) {
        return releaseNotesState.loadingPromise;
    }
    if (typeof fetch !== 'function') {
        releaseNotesState.error = 'Release notes could not be loaded because fetch is unavailable.';
        return Promise.reject(new Error(releaseNotesState.error));
    }

    releaseNotesState.loadingPromise = fetch(RELEASE_NOTES_SOURCE_PATH, { cache: 'no-store' })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Release notes request failed with status ' + response.status + '.');
            }
            return response.text();
        })
        .then(function(markdown) {
            releaseNotesState.releases = parseReleaseNotesMarkdown(markdown);
            releaseNotesState.isLoaded = true;
            releaseNotesState.error = null;
            populateVersionSelector();
            return releaseNotesState.releases;
        })
        .catch(function(error) {
            releaseNotesState.error = error && error.message ? error.message : 'Release notes could not be loaded.';
            throw error;
        });

    return releaseNotesState.loadingPromise;
}
function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text == null ? '' : text;
    return div.innerHTML;
}
function updateVersionDetails() {
    var selector = document.getElementById('versionSelector');
    var container = document.getElementById('versionDetails');
    if (!selector || !container) { return; }
    if (releaseNotesState.error && !releaseNotesState.isLoaded) {
        container.innerHTML = '<p class="release-source-note">Release notes could not be loaded from ' + escapeHtml(RELEASE_NOTES_SOURCE_PATH) + ': ' + escapeHtml(releaseNotesState.error) + '</p>';
        return;
    }
    if (!releaseNotesState.isLoaded) {
        container.innerHTML = '<p class="release-source-note">Loading release notes from ' + escapeHtml(RELEASE_NOTES_SOURCE_PATH) + '…</p>';
        loadReleaseNotes()
            .then(function() { updateVersionDetails(); })
            .catch(function() { updateVersionDetails(); });
        return;
    }

    if (releaseNotesState.error) {
        container.innerHTML = '<p class="release-source-note">Release notes could not be loaded from ' + escapeHtml(RELEASE_NOTES_SOURCE_PATH) + ': ' + escapeHtml(releaseNotesState.error) + '</p>';
        return;
    }

    var release = getReleaseById(selector.value) || releaseNotesState.releases[0];
    if (!release) {
        container.innerHTML = '<p class="release-source-note">No release notes are available in the saved source file.</p>';
        return;
    }

    var html = '<span class="version-meta">' + escapeHtml(release.id) + ' · ' + escapeHtml(release.date) + '</span>';
    html += '<h4><i data-lucide="file-text"></i> Redactor ' + escapeHtml(release.version) + ' Release Notes</h4>';
    html += '<p class="release-source-note">Source: attached dev.sighthound.com release-notes markdown saved at <code>' + escapeHtml(RELEASE_NOTES_SOURCE_PATH) + '</code>.</p>';
    html += '<div class="release-note-body">' + renderReleaseMarkdown(release.body) + '</div>';
    container.innerHTML = html;
    if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}
function getRedactorTabButton(tabName) {
    return document.querySelector('#redactorNav .nav-tab[data-redactor-tab="' + tabName + '"]');
}
function getAlprTabButton(index) {
    return document.querySelector('#alprNav .nav-tab[data-alpr-index="' + index + '"]');
}
function refreshLucideIcons() {
    if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}
function updateProductTitle() {
    document.title = activeProduct === 'alpr-plus'
        ? 'Sighthound ALPR+ — Competitive Intelligence Hub'
        : 'Sighthound Redactor — Competitive Analysis Hub';
}
function switchTab(tabName, element, skipScroll) {
    activeRedactorTab = tabName || activeRedactorTab || 'pricing-calculator';
    document.querySelectorAll('#redactorHub > .section').forEach(function(section) { section.classList.remove('active'); });
    document.querySelectorAll('#redactorNav .nav-tab').forEach(function(tab) { tab.classList.remove('active'); });
    var section = document.getElementById(activeRedactorTab);
    if (section) { section.classList.add('active'); }
    var button = element || getRedactorTabButton(activeRedactorTab);
    if (button) { button.classList.add('active'); }
    if (!skipScroll) { scrollToTop(); }
}
function switchAlprTab(index, element, skipScroll) {
    activeAlprTab = Number(index) || 0;
    document.querySelectorAll('#alprPlusHub .alpr-section').forEach(function(section) { section.classList.remove('active'); });
    document.querySelectorAll('#alprNav .nav-tab').forEach(function(tab) { tab.classList.remove('active'); });
    var section = document.querySelector('#alprPlusHub .alpr-section[data-alpr-index="' + activeAlprTab + '"]');
    if (section) { section.classList.add('active'); }
    var button = element || getAlprTabButton(activeAlprTab);
    if (button) { button.classList.add('active'); }
    if (!skipScroll) { scrollToTop(); }
}
function switchProduct(product, options) {
    options = options || {};
    activeProduct = product === 'alpr-plus' ? 'alpr-plus' : 'redactor';
    var isAlpr = activeProduct === 'alpr-plus';
    var header = document.getElementById('productHeader');
    var select = document.getElementById('productSelect');
    var badge = document.getElementById('productBadge');
    var redactorHeader = document.getElementById('redactorHeaderContent');
    var alprHeader = document.getElementById('alprHeaderContent');
    var redactorNav = document.getElementById('redactorNav');
    var alprNav = document.getElementById('alprNav');
    var redactorHub = document.getElementById('redactorHub');
    var alprHub = document.getElementById('alprPlusHub');
    if (select) { select.value = activeProduct; }
    if (header) {
        header.classList.toggle('product-redactor', !isAlpr);
        header.classList.toggle('product-alpr', isAlpr);
    }
    if (badge) {
        badge.textContent = isAlpr ? 'ALPR+' : 'Redactor';
        badge.className = 'product-pill ' + (isAlpr ? 'product-pill-alpr' : 'product-pill-redactor');
    }
    if (redactorHeader) { redactorHeader.hidden = isAlpr; }
    if (alprHeader) { alprHeader.hidden = !isAlpr; }
    if (redactorNav) { redactorNav.hidden = isAlpr; }
    if (alprNav) { alprNav.hidden = !isAlpr; }
    if (redactorHub) { redactorHub.hidden = isAlpr; }
    if (alprHub) { alprHub.hidden = !isAlpr; }
    if (isAlpr) {
        activeAlprTab = 0;
        switchAlprTab(0, getAlprTabButton(0), true);
    } else {
        switchTab(activeRedactorTab || 'pricing-calculator', getRedactorTabButton(activeRedactorTab || 'pricing-calculator'), true);
    }
    updateProductTitle();
    refreshLucideIcons();
    if (!options.skipScroll) { scrollToTop(); }
}
function formatAlprPromptList(items) {
    if (!items || !items.length) { return '- None specified.'; }
    return items.map(function(item) { return '- ' + item; }).join('\n');
}
function getAlprPromptText(index) {
    var prompt = ALPR_PROMPTS[index];
    if (!prompt) { return ''; }
    return [
        'OBJECTIVE',
        prompt.objective,
        '',
        'CONTEXT',
        formatAlprPromptList(prompt.context),
        '',
        'INSTRUCTIONS',
        formatAlprPromptList(prompt.instructions),
        '',
        'CONSTRAINTS',
        formatAlprPromptList(prompt.constraints),
        '',
        'EXPECTED OUTPUT',
        '- Complete draft content for the "' + prompt.tab + '" section of the Sighthound ALPR+ Competitive Intelligence Hub.',
        '- Use sourced, verifiable claims only and omit unverified competitor data.',
        '- Keep the output ready to paste into the corresponding ALPR+ tab without referencing Sighthound Redactor.'
    ].join('\n');
}
function renderAlprPromptPanel(index) {
    var prompt = ALPR_PROMPTS[index];
    if (!prompt) { return '<p>Prompt data is unavailable for this section.</p>'; }
    var promptText = getAlprPromptText(index);
    var html = '<div class="alpr-prompt-toolbar">';
    html += '<div><strong>WARP / Claude Code Prompt</strong><span>' + escapeHtml(prompt.tab) + '</span></div>';
    html += '<button type="button" class="alpr-copy-btn" onclick="copyAlprPrompt(' + index + ', this)"><i data-lucide="copy"></i> Copy prompt</button>';
    html += '</div>';
    html += '<pre class="alpr-prompt-code"><code>' + escapeHtml(promptText) + '</code></pre>';
    return html;
}
function toggleAlprPrompt(index, button) {
    var panel = document.getElementById('alprPromptPanel' + index);
    if (!panel) { return; }
    var isOpening = panel.hasAttribute('hidden');
    if (isOpening) {
        panel.innerHTML = renderAlprPromptPanel(index);
        panel.removeAttribute('hidden');
        if (button) {
            button.textContent = 'Hide AI Prompt for this section';
            button.classList.add('active');
        }
        refreshLucideIcons();
    } else {
        panel.setAttribute('hidden', '');
        if (button) {
            button.textContent = 'View AI Prompt for this section (WARP / Claude Code)';
            button.classList.remove('active');
        }
    }
}
function copyAlprPrompt(index, button) {
    var text = getAlprPromptText(index);
    function markCopied() {
        if (!button) { return; }
        var original = button.innerHTML;
        button.innerHTML = 'Copied';
        setTimeout(function() {
            button.innerHTML = original;
            refreshLucideIcons();
        }, 1400);
    }
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(markCopied).catch(function() {
            fallbackCopyMarketingText(text);
            markCopied();
        });
    } else {
        fallbackCopyMarketingText(text);
        markCopied();
    }
}
function initializeProductSwitcher() {
    switchProduct(activeProduct || 'redactor', { skipScroll: true });
}
function toggleAccordion(header) {
    var item = header.parentElement;
    item.classList.toggle('active');
}
function filterIcp() {
    var industrySelect = document.getElementById('industryFilter');
    var buyerSelect = document.getElementById('buyerTypeFilter');
    var industry = industrySelect ? industrySelect.value : 'all';
    var buyerType = buyerSelect ? buyerSelect.value : 'all';
    document.querySelectorAll('#icp .icp-accordion[data-industry]').forEach(function(item) {
        var match = industry === 'all' || item.getAttribute('data-industry') === industry;
        item.style.display = match ? '' : 'none';
    });
    document.querySelectorAll('#icp .persona-accordion[data-buyer-type]').forEach(function(item) {
        var match = buyerType === 'all' || item.getAttribute('data-buyer-type') === buyerType;
        item.style.display = match ? '' : 'none';
    });
}
function filterCompetitorProfiles() {
    var selector = document.getElementById('competitorSelector');
    if (!selector) { return; }
    var selected = selector.value;
    document.querySelectorAll('#competitors .competitor-profile').forEach(function(profile) {
        var match = selected === 'all' || profile.getAttribute('data-competitor') === selected;
        profile.style.display = match ? '' : 'none';
    });
}
function toggleScrollButton() {
    var button = document.getElementById('scrollToTopBtn');
    if (!button) { return; }
    if (window.pageYOffset > 200) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function filterFeatureCompany(company, element) {
    var featuresSection = document.getElementById('features');
    featuresSection.querySelectorAll('.filter-group')[0].querySelectorAll('.filter-btn').forEach(function(btn) { btn.classList.remove('active'); });
    if (element) { element.classList.add('active'); }
    var table = document.getElementById('featureTable');
    var selectedIndexes = [0];
    table.querySelectorAll('thead th').forEach(function(cell, index) {
        if (index === 0) { return; }
        var label = cell.textContent.trim();
        var show = company === 'all' || label.indexOf(company) !== -1;
        cell.style.display = show ? '' : 'none';
        if (show) { selectedIndexes.push(index); }
    });
    table.querySelectorAll('tbody tr').forEach(function(row) {
        row.querySelectorAll('td').forEach(function(cell, index) {
            cell.style.display = selectedIndexes.indexOf(index) !== -1 ? '' : 'none';
        });
    });
}
function filterComparisonType(type, element) {
    comparisonMode = type;
    document.getElementById('features').querySelectorAll('.filter-group')[1].querySelectorAll('.filter-btn').forEach(function(btn) { btn.classList.remove('active'); });
    if (element) { element.classList.add('active'); }
    document.querySelectorAll('#features [data-feature-type]').forEach(function(row) {
        var rowTypes = (row.getAttribute('data-feature-type') || '').split(/\s+/);
        row.style.display = type === 'all' || rowTypes.indexOf(type) !== -1 ? '' : 'none';
    });
    updateComparison();
}
function toggleObjectCategories(labelEl) {
    var row = labelEl.closest('tr');
    if (!row) { return; }
    var details = row.querySelector('.object-categories-details');
    var arrow = labelEl.querySelector('.object-categories-arrow');
    var hint = labelEl.querySelector('.object-categories-hint');
    var expanded = row.classList.toggle('expanded');
    labelEl.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    if (details) {
        if (expanded) {
            details.removeAttribute('hidden');
        } else {
            details.setAttribute('hidden', '');
        }
    }
    if (arrow) { arrow.textContent = expanded ? '▼' : '▶'; }
    if (hint) { hint.textContent = expanded ? '(click to collapse)' : '(click to expand)'; }
}
function handleObjectCategoriesKey(event, labelEl) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleObjectCategories(labelEl);
    }
}
function updateComparison() {
    var solutionA = document.getElementById('compareA').value;
    var solutionB = document.getElementById('compareB').value;
    var unverifiedTooltip = 'Source unverified — not confirmed via Capterra or G2.';
    var unverifiedInfo = ' <span class="unverified-source-tooltip" tabindex="0" title="' + unverifiedTooltip + '" aria-label="' + unverifiedTooltip + '">ⓘ</span>';
    var unverifiedPrefix = '<span class="icon-partial">⚠️</span> ';
    var comparisonData = {
        sighthound: { name: 'Sighthound Redactor', features: { face: 'Head Detection expands detection to entire heads, including the back of the head, hair, and ears', audio: 'Redactor supports standalone audio redaction, allowing users to mute, bleep, or remove speech and sensitive information in audio files', video: 'H.265 video files can be imported into Redactor; rendering will still happen in the H.264 format', document: 'Documents in general, IDs, and screens are detectable and selectable via the API', deployment: 'Desktop, server, API, environment variable, and data-drop worker workflows are referenced in the release notes', dataProcessing: '<span class="icon-check">&#9989;</span> On-Premise / Cloud / Hybrid / Air-Gapped' } },
        veritone: { name: 'Veritone Redact', features: { face: 'Strong AI face redaction', audio: 'Full audio redaction and transcription', video: 'Cloud-first evidence workflow', document: 'Some ID support, weaker document emphasis', deployment: 'Cloud-only deployment', dataProcessing: '☁️ Cloud Only (AWS GovCloud)' } },
        caseguard: { name: 'CaseGuard Studio', features: { face: 'Strong face redaction', audio: 'Full audio redaction', video: 'Broad desktop workflow support', document: 'Strong document redaction', deployment: 'Desktop and on-premise', dataProcessing: '🖥️ On-Premise Only' } },
        fastredaction: { name: 'FastRedaction', features: { face: 'Automatic face blurring', audio: 'Limited audio support', video: 'Simple cloud video workflow', document: 'No major document redaction emphasis', deployment: 'Cloud-only', dataProcessing: '☁️ Cloud Only (AWS)' } },
        motiondsp: { name: 'MotionDSP Spotlight', features: { face: 'Advanced tracked face redaction', audio: 'Full multi-channel audio support', video: 'Forensics-focused video processing', document: 'Minimal document support', deployment: 'Windows desktop', dataProcessing: '🖥️ On-Premise (Windows Desktop)' } },
        clipr: { name: 'CLIPr', features: { face: 'AI-driven visual analysis', audio: 'Partial audio workflow support', video: 'Modern video operations workflow', document: 'Limited document emphasis', deployment: 'Hybrid cloud and on-premise story', dataProcessing: '☁️ / 🖥️ Cloud / Partial Hybrid' } },
        assemblyai: { name: 'AssemblyAI', features: { face: 'No visual face support', audio: 'Strong audio intelligence and transcription', video: 'Video handled primarily through audio extraction workflows', document: 'No document redaction focus', deployment: 'Cloud API', dataProcessing: '☁️ Cloud API Only' } },
        lantero: { name: 'Lantero Redact', features: { face: 'AI face redaction', audio: 'Partial support', video: 'Privacy-focused video redaction', document: 'Limited public detail on document workflows', deployment: 'Cloud SaaS', dataProcessing: '☁️ Cloud SaaS' } },
        pimloc: { name: 'Pimloc Secure Redact', features: { face: 'AI face redaction', audio: 'Partial audio support', video: 'Privacy-focused redaction', document: 'Basic document support', deployment: 'Cloud and on-premise', dataProcessing: '☁️ / 🖥️ Cloud / On-Premise (Limited)' } },
        vidizmo: { name: 'VIDIZMO Redactor.ai', features: { face: 'AI face detection', audio: 'Media management focused', video: 'Media asset redaction', document: 'Limited document focus', deployment: 'Cloud SaaS', dataProcessing: '☁️ Cloud Only' } },
        pixelforensics: { name: 'Pixel Forensics', features: { face: 'Limited visual analytics', audio: 'Not publicly available', video: 'Media triage and video profiling', document: 'Not publicly available', deployment: 'Cloud / On-Premise (Custom)', dataProcessing: 'Cloud / On-Premise (Custom)' } },
        facit: { name: 'Facit Data Systems', features: { face: 'AI redaction support', audio: 'Data redaction focus', video: 'Hybrid redaction workflow', document: 'Strong data element redaction', deployment: 'Cloud and on-premise', dataProcessing: unverifiedPrefix + 'Cloud / On-Premise' + unverifiedInfo } },
        suspect: { name: 'Suspect Technologies', features: { face: 'Redaction capabilities', audio: 'Technical focus', video: 'Specialized tools', document: 'Limited public detail', deployment: 'On-premise/Cloud', dataProcessing: unverifiedPrefix + 'On-Premise / Cloud' + unverifiedInfo } },
        redactable: { name: 'Redactable', features: { face: 'Basic redaction', audio: 'Limited support', video: 'Document and media redaction', document: 'Document-centric', deployment: 'Cloud SaaS', dataProcessing: '☁️ Cloud SaaS' } },
        extract: { name: 'Extract Systems', features: { face: 'Limited visual focus', audio: 'Data extraction emphasis', video: 'Limited video capabilities', document: 'Data extraction and redaction', deployment: 'On-premise', dataProcessing: '🖥️ On-Premise' } },
        idox: { name: 'iDox.ai', features: { face: 'Limited visual focus', audio: 'Document intelligence focus', video: 'Limited video support', document: 'Strong document AI capabilities', deployment: 'Cloud', dataProcessing: '☁️ Cloud' } },
        everlaw: { name: 'Everlaw', features: { face: 'Secondary feature', audio: 'eDiscovery-focused', video: 'Legal tech ecosystem', document: 'Legal document management', deployment: 'Cloud SaaS', dataProcessing: '☁️ Cloud SaaS' } },
        transperfect: { name: 'TransPerfect', features: { face: 'Global services focus', audio: 'Enterprise compliance', video: 'Language and legal services', document: 'Multi-format support', deployment: 'Enterprise SaaS', dataProcessing: '☁️ Enterprise SaaS' } }
    };
    var featureMap = { face: 'face', audio: 'audio', video: 'video', document: 'document', deployment: 'deployment', 'data-processing': 'dataProcessing' };
    var featureOrder = comparisonMode === 'all' ? ['face', 'audio', 'video', 'document', 'deployment', 'dataProcessing'] : [featureMap[comparisonMode] || comparisonMode];
    var labels = { face: 'Face', audio: 'Audio', video: 'Video', document: 'Document', deployment: 'Deployment', dataProcessing: 'Data Processing' };
    var html = '<div class="comparison-grid">';
    [comparisonData[solutionA], comparisonData[solutionB]].forEach(function(item) {
        html += '<div class="comparison-card"><h4>' + item.name + '</h4>';
        featureOrder.forEach(function(key) { html += '<div class="comparison-feature"><strong>' + labels[key] + ':</strong><span>' + item.features[key] + '</span></div>'; });
        html += '</div>';
    });
    html += '</div>';
    document.getElementById('comparisonResult').innerHTML = html;
}
var discoveryCorePhases = [
    {
        title: 'Phase 1: Current State & Pain Point Identification',
        goal: 'Goal: Identify the "Bleeding Neck"',
        questions: [
            'What types of redaction requests are creating the most operational pressure for your team right now?',
            'How does your current process break down when volume, complexity, or deadline pressure increases?',
            'Where do errors, rework, or escalation risks most often appear before content is approved for release?',
            'What impact does the current redaction backlog have on response times, staff capacity, or stakeholder confidence?'
        ]
    },
    {
        title: 'Phase 2: Technical Environment & Deployment',
        goal: 'Goal: Identify the "Gatekeeper Setup"',
        questions: [
            'What technical constraints govern where sensitive media can be uploaded, processed, stored, or retained?',
            'Which systems does redaction need to touch today, such as evidence management, case management, records portals, DMS, EHR, LMS, or secure storage?',
            'How do IT, security, and compliance stakeholders evaluate vendors before approving redaction software for production use?'
        ]
    },
    {
        title: 'Phase 3: Financial & Commercial Impact',
        goal: 'Goal: Build the "CFO Justification"',
        questions: [
            'How are redaction costs budgeted today, and where do budget surprises appear during high-volume periods?',
            'What internal labor, outside vendor, overtime, or opportunity costs are tied to the current redaction process?',
            'How does leadership evaluate the business case for faster turnaround, lower risk, and more predictable redaction capacity?'
        ]
    }
];
var discoverySectorLabels = {
    'public-sector': 'Public Sector',
    'private-sector': 'Private Sector',
    'non-profit-ngo': 'Non-Profit / NGO'
};
var discoveryIndustryQuestionSets = {
    'law-enforcement-public-safety': {
        label: 'Law Enforcement & Public Safety',
        compliance: 'CJIS',
        questions: [
            'How does CJIS policy govern where bodycam, dashcam, CCTV, interview-room, or drone media can be processed and stored?',
            'What happens when public-records requests arrive faster than evidence technicians can review every face, plate, minor, victim, or officer identifier?',
            'How do supervisors verify chain of custody, reviewer accountability, and redaction decisions before evidence is released?',
            'Where does your current process create risk if sensitive identities remain visible or audible in released media?',
            'How do prosecutors, records teams, command staff, and IT stakeholders participate in redaction review and approval?',
            'How do major incidents affect overtime, backlog, or public-response timelines when media volume spikes suddenly?'
        ]
    },
    'government-municipal': {
        label: 'Government & Municipal Agencies',
        compliance: 'FOIA',
        questions: [
            'How are FOIA deadlines, exemption rules, and public-records obligations shaping redaction triage across departments?',
            'Which offices or departments create the highest volume of FOIA-related media, document, or audio redaction work today?',
            'What happens when a request spans police, code enforcement, transportation, council meetings, and administrative records simultaneously?',
            'How are FOIA exemption rationales, approvals, reviewer decisions, and release histories documented for audit or litigation review?',
            'What constraints do procurement, IT, and legal teams place on cloud processing, data residency, or vendor security reviews?',
            'Where do bottlenecks appear when elected officials, legal counsel, records teams, and department owners all need sign-off before disclosure?'
        ]
    },
    'healthcare-medical': {
        label: 'Healthcare & Medical Institutions',
        compliance: 'HIPAA',
        questions: [
            'Which forms of PHI appear most often in clinical footage, research recordings, security video, audio, images, or documents?',
            'How are HIPAA privacy reviews handled when patient media must be shared with researchers, counsel, insurers, regulators, or outside partners?',
            'What safeguards are required before patient media can be uploaded, processed, stored, retained, or transmitted outside your environment?',
            'How do compliance teams verify that patient identifiers, voices, faces, screens, wristbands, labels, and documents are fully protected?',
            'What impact does manual redaction have on research timelines, legal reviews, patient complaints, or incident investigations?',
            'How do you preserve HIPAA-ready audit trails showing who reviewed, approved, and released redacted PHI?'
        ]
    },
    'legal-law-firms': {
        label: 'Legal & Law Firms',
        compliance: 'Attorney-Client Privilege',
        questions: [
            'How do discovery deadlines change when productions include video, audio, images, and documents requiring redaction?',
            'What review steps protect attorney-client privilege before confidential, privileged, or personally identifiable information is produced?',
            'How do attorneys, litigation support teams, and outside vendors coordinate redaction decisions across matters with large media volumes?',
            'What risks arise when privilege review and redaction work move across paralegals, associates, partners, vendors, and eDiscovery platforms?',
            'How do you document defensibility if an attorney-client privilege or confidentiality redaction is challenged during motion practice or trial?',
            'Where do cost overruns occur when urgent productions require manual review after hours or across multiple reviewers?'
        ]
    },
    'financial-services-banking': {
        label: 'Financial Services & Banking',
        compliance: 'SOX / GDPR / PCI-DSS',
        questions: [
            'What regulated customer, employee, cardholder, or account data appears in surveillance footage, call recordings, loan documents, KYC files, or investigations?',
            'How do SOX, GDPR, PCI-DSS, and internal retention requirements shape redaction review before records are shared or produced?',
            'What controls are required before sensitive financial, account, card, employee, or customer information can be exported or shared with third parties?',
            'How does your current process handle spikes from subpoenas, regulator inquiries, fraud investigations, disputes, or data subject access requests?',
            'Where do audit, access-control, segregation-of-duties, and chain-of-custody requirements slow down redaction approvals?',
            'How do you forecast redaction costs when usage changes with investigations, branch incidents, compliance reviews, or regulator activity?'
        ]
    },
    'education-universities': {
        label: 'Education & Universities',
        compliance: 'FERPA',
        questions: [
            'What student identifiers appear most often in campus safety video, disciplinary records, athletics footage, classroom recordings, or documents?',
            'How does FERPA compliance shape the way your team reviews and releases student-related media?',
            'What happens when records requests involve minors, witnesses, staff members, visitors, and multiple campus departments?',
            'How do legal, registrar, campus safety, and communications teams coordinate approvals before redacted records are disclosed?',
            'What safeguards are required before student video, audio, or documents can leave school-controlled systems?',
            'Where do delays occur when public records, parent requests, investigations, or Title IX matters require rapid redaction?'
        ]
    }
};
var discoveryPricingLabels = {
    'flat-annual-subscription': 'Flat Annual Subscription',
    'usage-based': 'Pay-Per-Minute / Pay-Per-File (Usage-Based)',
    'per-seat-license': 'Per-Seat / Per-User License',
    'enterprise-custom-quote': 'Enterprise Custom Quote',
    'freemium-free-trial': 'Freemium / Free Trial Model'
};
var discoveryPricingModelQuestions = {
    'flat-annual-subscription': [
        'How does your team evaluate whether a flat annual subscription matches seasonal or unpredictable redaction volume?',
        'What usage threshold would make a fixed annual model more predictable than per-minute or per-file pricing?',
        'How do budget owners compare annual license costs against internal labor, overtime, and outside vendor spend?',
        'What procurement concerns appear when value is tied to high-volume or unlimited processing rather than unit consumption?',
        'What reporting would finance need to understand annual TCO, avoided variable fees, and scalability across teams?'
    ],
    'usage-based': [
        'How accurately can you forecast monthly minutes, files, pages, or jobs before the work actually arrives?',
        'What happens to budget approvals when an urgent incident, audit, lawsuit, or records request pushes usage above plan?',
        'How do teams decide which files to process when every minute, file, or page has an incremental cost?',
        'Where do overage fees, minimum commitments, top-ups, or bill reconciliation create TCO uncertainty?',
        'How does finance validate usage-based invoices against actual processing volume, requester activity, and department budgets?'
    ],
    'per-seat-license': [
        'How many reviewers, approvers, supervisors, attorneys, or compliance stakeholders need access during normal periods versus surge events?',
        'Where does per-seat licensing slow collaboration when occasional approvers need access only for review or sign-off?',
        'How do shared accounts, queue handoffs, and audit requirements affect governance under a per-user model?',
        'What happens to TCO as new departments, offices, matters, or review teams need redaction access?',
        'How do you justify seats for IT, legal, compliance, or executive reviewers who may not redact files every day?'
    ],
    'enterprise-custom-quote': [
        'Which scope variables must be clear before a custom quote is credible, such as users, volume, deployment, integrations, support, and security requirements?',
        'How do budget owners compare a custom enterprise quote against internal labor, outside vendors, risk exposure, and delayed response costs?',
        'What procurement, legal, security, and technical reviews typically extend your enterprise buying cycle?',
        'Where does scope creep appear after implementation, and how does that affect long-term TCO expectations?',
        'What success metrics does the executive sponsor need before approving a custom enterprise purchase?'
    ],
    'freemium-free-trial': [
        'What evaluation criteria determine whether a free trial proves production viability rather than only basic feature fit?',
        'Which production risks are hidden by trial limits on users, minutes, files, support, storage, or compliance controls?',
        'How do stakeholders model TCO once trial limits, paid tiers, support needs, deployment requirements, and usage growth are included?',
        'What internal resources are needed to convert a proof of concept into an approved deployment?',
        'How do you prevent trial results from underrepresenting compliance, audit, integration, and scale requirements?'
    ]
};
function getDiscoveryCoreQuestionCount() {
    var count = 0;
    discoveryCorePhases.forEach(function(phase) {
        count += phase.questions.length;
    });
    return count;
}
function getDiscoveryTotalQuestionCount(industry, pricingModel) {
    var industryConfig = discoveryIndustryQuestionSets[industry];
    var pricingQuestions = discoveryPricingModelQuestions[pricingModel] || [];
    return getDiscoveryCoreQuestionCount() + (industryConfig ? industryConfig.questions.length : 0) + pricingQuestions.length;
}
function renderDiscoveryQuestionList(questions) {
    var html = '<ul style="margin: 12px 0 0 22px; color: #1f2937; line-height: 1.65;">';
    questions.forEach(function(question) {
        html += '<li style="margin-bottom: 10px; padding-left: 4px;">' + escapeHtml(question) + '</li>';
    });
    html += '</ul>';
    return html;
}
function renderDiscoveryPhaseCard(phase) {
    var html = '<div style="background: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #1e3a5f; padding: 18px 22px; margin-bottom: 16px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);">';
    html += '<h3 style="color: #1e3a5f; font-size: 1.05em; margin: 0 0 6px 0;"><strong>' + escapeHtml(phase.title) + '</strong></h3>';
    html += '<p style="color: #4b5563; font-size: 0.95em; margin: 0;"><em>' + escapeHtml(phase.goal) + '</em></p>';
    html += renderDiscoveryQuestionList(phase.questions);
    html += '</div>';
    return html;
}
function renderDiscoverySelectionList(items) {
    var html = '<ul style="margin: 12px 0 0 22px; color: #1f2937; line-height: 1.7;">';
    items.forEach(function(item) {
        html += '<li style="margin-bottom: 6px;"><strong>' + escapeHtml(item.label) + ':</strong> ' + escapeHtml(item.value) + '</li>';
    });
    html += '</ul>';
    return html;
}
function renderDiscoverySectionCard(title, subtitle, questions) {
    var html = '<div style="background: #f9fafb; border: 1px solid #dbe4ef; border-left: 4px solid #2c5282; padding: 18px 22px; margin-bottom: 16px; border-radius: 10px;">';
    html += '<h3 style="color: #1e3a5f; font-size: 1.05em; margin: 0 0 6px 0;"><strong>' + escapeHtml(title) + '</strong></h3>';
    if (subtitle) {
        html += '<p style="color: #4b5563; font-size: 0.95em; margin: 0;">' + escapeHtml(subtitle) + '</p>';
    }
    html += renderDiscoveryQuestionList(questions);
    html += '</div>';
    return html;
}
function updateDiscoveryQuestions() {
    var sectorSelect = document.getElementById('discoverySectorFilter');
    var industrySelect = document.getElementById('discoveryIndustryFilter');
    var pricingSelect = document.getElementById('discoveryPricingFilter');
    var container = document.getElementById('discoveryQuestionsContainer');
    var contextLabel = document.getElementById('discoveryContextLabel');
    if (!sectorSelect || !industrySelect || !pricingSelect || !container) { return; }
    var sector = sectorSelect.value;
    var industry = industrySelect.value;
    var pricingModel = pricingSelect.value;
    var hasAllSelections = !!(
        discoverySectorLabels[sector] &&
        discoveryIndustryQuestionSets[industry] &&
        discoveryPricingLabels[pricingModel]
    );
    if (!hasAllSelections) {
        if (contextLabel) {
            contextLabel.innerHTML = '<strong>Selection required:</strong> Choose Sector Type, Industry, and Pricing Model to generate Discovery Questions.';
        }
        container.innerHTML = '';
        return;
    }
    var industryConfig = discoveryIndustryQuestionSets[industry];
    var sectorLabel = discoverySectorLabels[sector];
    var pricingLabel = discoveryPricingLabels[pricingModel];
    var pricingQuestions = discoveryPricingModelQuestions[pricingModel] || [];
    var totalQuestions = getDiscoveryTotalQuestionCount(industry, pricingModel);
    if (contextLabel) {
        contextLabel.innerHTML = '<strong>Generated:</strong> ' + totalQuestions + ' questions for ' + escapeHtml(industryConfig.label) + ' using ' + escapeHtml(industryConfig.compliance) + ' context and ' + escapeHtml(pricingLabel) + ' pricing analysis.';
    }
    var html = '<div style="background: #ffffff; border: 1px solid #dbe4ef; border-left: 4px solid #1e3a5f; padding: 18px 22px; margin-bottom: 18px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);">';
    html += '<h3 style="color: #1a3a52; font-size: 1.1em; margin: 0 0 6px 0;"><strong>STEP 1 — Confirm Selections</strong></h3>';
    html += renderDiscoverySelectionList([
        { label: 'Sector', value: sectorLabel },
        { label: 'Industry', value: industryConfig.label },
        { label: 'Compliance Framework', value: industryConfig.compliance },
        { label: 'Pricing Model', value: pricingLabel },
        { label: 'Total Questions to Generate', value: String(totalQuestions) }
    ]);
    html += '</div>';
    html += '<div style="margin-bottom: 18px;">';
    html += '<h3 style="color: #1a3a52; font-size: 1.1em; margin: 0 0 12px 0;"><strong>STEP 2 — Core Discovery Questions</strong></h3>';
    discoveryCorePhases.forEach(function(phase) {
        html += renderDiscoveryPhaseCard(phase);
    });
    html += '</div>';
    html += renderDiscoverySectionCard('STEP 3 — Industry-Specific Questions: ' + industryConfig.label, 'Compliance Framework: ' + industryConfig.compliance + '. Generated only for the selected industry.', industryConfig.questions);
    html += renderDiscoverySectionCard('STEP 4 — Pricing Model Questions: ' + pricingLabel, 'Focused on budget forecasting, TCO, and scalability pain points. Generated only for the selected pricing model.', pricingQuestions);
    html += '<div style="background: #edf2f7; border: 1px solid #cbd5e0; border-left: 4px solid #2c5282; padding: 18px 22px; margin-bottom: 16px; border-radius: 10px;">';
    html += '<h3 style="color: #1e3a5f; font-size: 1.05em; margin: 0 0 6px 0;"><strong>Completion Confirmation</strong></h3>';
    html += renderDiscoverySelectionList([
        { label: 'Industry Selected', value: industryConfig.label },
        { label: 'Pricing Model Selected', value: pricingLabel },
        { label: 'Total Questions Generated', value: String(totalQuestions) },
        { label: 'Compliance Framework Applied', value: industryConfig.compliance }
    ]);
    html += '</div>';
    container.innerHTML = html;
}

// ═══════════════════════════════════════════════════════
// PRICING CALCULATOR LOGIC
// Update TIERS or the Pricing Analysis summary templates to adjust recommendations.
// ═══════════════════════════════════════════════════════
var TIERS = {
    free: {
        name:       'Free Trial',
        badge:      'free',
        price:      '$0 — no credit card required',
        priceClass: 'free-price',
        tagline:    'Best for evaluation only',
        features:   ['24-hour access', 'Up to 2-min video', 'Sighthound Hosted', 'Documentation access']
    },
    pro: {
        name:       'Pro',
        badge:      'pro',
        price:      '$2,500 / year',
        priceClass: 'pro-price',
        tagline:    'Best for solo professionals',
        features:   ['1 user', 'Desktop install', 'Unlimited video length', 'Smart AI redaction', 'Email support', 'Product training', 'Annual subscription']
    },
    enterprise: {
        name:       'Enterprise',
        badge:      'enterprise',
        price:      'From $3,500 / year',
        priceClass: 'enterprise-price',
        tagline:    'Best for multi-user organizations',
        features:   ['2–5+ users', 'Server / On-Premise', 'Unlimited video length', 'Private Slack channel', 'Priority support', 'Concurrent user licensing', 'Annual subscription']
    },
    custom: {
        name:       'Custom',
        badge:      'custom',
        price:      'Custom pricing',
        priceClass: 'custom-price',
        tagline:    'Best for large teams, API & integrations',
        features:   ['Unlimited users', 'REST API access', 'Air-gapped support', 'OEM integration', 'Server + API install', 'Private Slack + priority support', 'Annual subscription']
    }
};

function getRecommendedTier(users, deployment, api) {
    if (api === 'yes-automation' || api === 'yes-oem' || deployment === 'airgapped' || users === '11+') {
        return 'custom';
    }
    if (users === '2-5' || users === '6-10' || deployment === 'server' || deployment === 'cloud') {
        return 'enterprise';
    }
    if (users === '1' && deployment === 'desktop' && api === 'no') {
        return 'pro';
    }
    return 'free';
}

function getPricingExplanation(users, deployment, api, industry, tier) {
    var userLabels = {
        '1':    '1 user on a single desktop',
        '2-5':  '2–5 concurrent users',
        '6-10': '6–10 concurrent users',
        '11+':  '11 or more concurrent users'
    };
    var deployLabels = {
        desktop:   'desktop deployment',
        server:    'server / on-premise deployment',
        cloud:     'private cloud deployment',
        airgapped: 'air-gapped network deployment'
    };
    var apiLabels = {
        'no':              'without API requirements',
        'yes-automation':  'with workflow automation via REST API',
        'yes-oem':         'with OEM / third-party API integration'
    };
    var industryLabels = {
        lawenforcement: 'Law Enforcement',
        government:     'Government',
        healthcare:     'Healthcare',
        legal:          'Legal & Corporate',
        other:          'your industry'
    };
    var uLabel = userLabels[users]       || '';
    var dLabel = deployLabels[deployment] || '';
    var aLabel = apiLabels[api]          || '';
    var iLabel = industryLabels[industry] || '';

    var explanations = {
        free:
            'Based on your inputs, a free 24-hour trial is a great way to evaluate Sighthound Redactor for ' + iLabel + ' before committing. ' +
            'The trial gives you full access to core redaction features on Sighthound-hosted infrastructure. ' +
            "Once you're ready to move forward, the Pro or Enterprise plan will fit your workflow.",
        pro:
            'With ' + uLabel + ' and a ' + dLabel + ' ' + aLabel + ', the Pro plan is your best fit. ' +
            'At $2,500/year, it gives a single professional in ' + iLabel + ' unlimited video length, smart AI redaction, and a desktop install — ' +
            'no server infrastructure required.',
        enterprise:
            'Your configuration — ' + uLabel + ', ' + dLabel + ' ' + aLabel + ' — maps directly to the Enterprise tier. ' +
            'Starting at $3,500/year, Enterprise supports multi-user concurrent access via a central server, ' +
            'which is the right architecture for ' + iLabel + ' teams that need shared access without per-video costs.',
        custom:
            'Given your requirement for ' + uLabel + ', ' + dLabel + ', and ' + aLabel + ', the Custom tier is the right path. ' +
            'Custom deployments unlock full REST API access, air-gapped installations, and OEM integrations — ' +
            'critical for ' + iLabel + ' environments where data sovereignty and automation are non-negotiable.'
    };
    return explanations[tier] || '';
}

function getPricingSelections() {
    var usersEl      = document.getElementById('userCount');
    var deploymentEl = document.getElementById('deploymentType');
    var apiEl        = document.getElementById('apiNeeded');
    var industryEl   = document.getElementById('pcIndustry');
    var minutesEl    = document.getElementById('monthlyMinutes');
    var jobsEl       = document.getElementById('monthlyJobs');

    return {
        users:          usersEl ? usersEl.value : '',
        deployment:     deploymentEl ? deploymentEl.value : '',
        api:            apiEl ? apiEl.value : '',
        industry:       industryEl ? industryEl.value : '',
        monthlyMinutes: minutesEl ? minutesEl.value : '',
        monthlyJobs:    jobsEl ? jobsEl.value : ''
    };
}

function isPricingSelectionComplete(selections) {
    return !!(
        selections.users &&
        selections.deployment &&
        selections.api &&
        selections.industry &&
        selections.monthlyMinutes &&
        selections.monthlyJobs
    );
}

function isKnownComparisonPrice(price) {
    var text = cleanPricingValue(price);
    if (!text) { return false; }

    var unavailablePatterns = [
        /\bnot\s+(publicly\s+)?listed\b/i,
        /\bnot\s+available\b/i,
        /\bunavailable\b/i,
        /\bunknown\b/i,
        /\bestimat(?:e|ed)\b/i,
        /\btbd\b/i,
        /\bn\/a\b/i,
        /\bno\s+pricing\s+available\b/i,
        /\bcontact\s+(for\s+pricing|us|sales|vendor)\b/i,
        /\btalk\s+to\s+sales\b/i,
        /\bcustom\s+(quote|pricing|price)\b/i,
        /^custom$/i
    ];

    return !unavailablePatterns.some(function(pattern) {
        return pattern.test(text);
    });
}

function normalizeComparisonName(name) {
    return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function getPricingPanelField(panel, label) {
    if (!panel) { return ''; }
    var target = cleanPricingLabel(label);
    var paragraphs = panel.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i += 1) {
        var strong = paragraphs[i].querySelector('strong');
        if (!strong || cleanPricingLabel(strong.textContent) !== target) { continue; }
        return cleanPricingValue(paragraphs[i].textContent.replace(strong.textContent, ''));
    }
    return '';
}

function getPricingTemplateDataByName() {
    var byName = {};
    Array.prototype.forEach.call(document.querySelectorAll('template[data-pricing-template]'), function(template) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = template.innerHTML;
        var panel = wrapper.querySelector('.pricing-competitor-panel');
        if (!panel) { return; }

        var name = getPricingPanelName(panel);
        byName[normalizeComparisonName(name)] = {
            planTier: getPricingPanelField(panel, 'Plan Name / Tier'),
            price: getPricingPanelField(panel, 'Price'),
            billingModel: getPricingPanelField(panel, 'Billing Model'),
            freeTrial: getPricingPanelField(panel, 'Free Trial / Free Plan'),
            notes: getPricingPanelField(panel, 'Notes'),
            sourceText: panel.textContent || ''
        };
    });
    return byName;
}

function getCompetitorProfileDataByName() {
    var byName = {};
    Array.prototype.forEach.call(document.querySelectorAll('#competitors .competitor-profile'), function(profile) {
        var nameNode = profile.querySelector('h3');
        if (!nameNode) { return; }
        byName[normalizeComparisonName(nameNode.textContent)] = {
            sourceText: profile.textContent || ''
        };
    });
    return byName;
}

function getComparisonPricingCategory(tierKey) {
    if (tierKey === 'custom') { return 'custom'; }
    if (tierKey === 'enterprise') { return 'enterprise'; }
    return 'single';
}

function matchesAnyPricingPattern(text, patterns) {
    return patterns.some(function(pattern) {
        return pattern.test(text);
    });
}

function getDeploymentText(comp) {
    return (comp.capabilityText || comp.searchText || comp.profileText || '').toLowerCase();
}

function getAffirmedCapabilityText(text) {
    return String(text || '')
        .replace(/\bno\s+server\s*(?:\/|or|and)\s*cloud(?:\s+deployment)?\b/gi, ' ')
        .replace(/\bno\s+(?:server\s*\/\s*)?cloud(?:\s+deployment)?\b/gi, ' ')
        .replace(/\b(?:no|without|lacks?|lack(?:ing)?)\s+(?:an?\s+)?(?:server|cloud|api|oem|integration|automation|desktop|windows|on[-\s]?prem(?:ise)?|offline|air[-\s]?gapped)(?:\s+(?:deployment|support|access|capability|capabilities|workflow|option|pricing))?\b/gi, ' ')
        .replace(/\b(?:not|isn'?t|aren'?t)\s+(?:a\s+|an\s+)?(?:complete\s+)?(?:server|cloud|api|desktop|windows|on[-\s]?prem(?:ise)?|offline|air[-\s]?gapped)(?:\s+(?:deployment|tool|suite|workflow|option))?\b/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function matchesAffirmedPricingPattern(text, patterns) {
    return matchesAnyPricingPattern(getAffirmedCapabilityText(text), patterns);
}

function competitorMatchesDeployment(comp, deployment) {
    var text = getDeploymentText(comp);
    if (!deployment || !text) { return true; }

    if (deployment === 'desktop') {
        return matchesAffirmedPricingPattern(text, [
            /\bdesktop\b/i,
            /\bwindows\b/i,
            /\bper\s+seat\b/i,
            /\bper\s+license\b/i
        ]);
    }

    if (deployment === 'server') {
        return matchesAffirmedPricingPattern(text, [
            /\bserver\b/i,
            /\bon[-\s]?prem(?:ise)?\b/i,
            /\bhybrid\b/i,
            /\bwindows\s+desktop\/on[-\s]?premise\b/i
        ]);
    }

    if (deployment === 'cloud') {
        return matchesAffirmedPricingPattern(text, [
            /\bcloud\b/i,
            /\bsaas\b/i,
            /\bapi\b/i,
            /\baws\b/i,
            /\bazure\b/i,
            /\bgovcloud\b/i,
            /\bhybrid\b/i
        ]);
    }

    if (deployment === 'airgapped') {
        return matchesAffirmedPricingPattern(text, [
            /\bair[-\s]?gapped\b/i,
            /\boffline\b/i,
            /\bon[-\s]?prem(?:ise)?\b/i,
            /\bhybrid\b/i,
            /\bdesktop\b/i,
            /\bwindows\b/i
        ]);
    }

    return true;
}

function competitorMatchesApi(comp, apiNeed) {
    if (!apiNeed || apiNeed === 'no') { return true; }
    var text = getAffirmedCapabilityText(getDeploymentText(comp));
    return /\bapi\b|\boem\b|\bdeveloper\b|\bintegration\b|\bautomation\b|\bworkflow\s+automation\b/i.test(text);
}

function getPricingTierScore(comp, tierKey) {
    var category = getComparisonPricingCategory(tierKey);
    var text = getAffirmedCapabilityText(getDeploymentText(comp));
    var score = 0;

    if (category === 'custom') {
        if (/\bcustom\b/i.test(text)) { score += 35; }
        if (/\bapi\b|\boem\b|\benterprise\b|\bteam\b|\bdeveloper\b/i.test(text)) { score += 24; }
        return score;
    }

    if (category === 'enterprise') {
        if (/\benterprise\b/i.test(text)) { score += 35; }
        if (/\bteam\b|\bdept\b|\bdepartment\b|\badvanced\b|\bultimate\b/i.test(text)) { score += 24; }
        if (/\bper\s+seat\b|\bper\s+license\b/i.test(text)) { score += 10; }
        return score;
    }

    if (/\b1\s*user\b|\bsingle\b|\bstarter\b|\bvalue\s+pack\b|\bspotlight\b/i.test(text)) { score += 30; }
    if (/\bpro\b|\bpay\s+as\s+you\s+go\b|\bmonthly\b|\bper\s+usage\b/i.test(text)) { score += 22; }
    if (/\bper\s+seat\b|\bper\s+license\b/i.test(text)) { score += 10; }
    return score;
}

function getDeploymentScore(comp, deployment) {
    var text = getAffirmedCapabilityText(getDeploymentText(comp));
    if (!deployment || !text) { return 0; }

    if (deployment === 'desktop') {
        return (/\bdesktop\b|\bwindows\b/i.test(text) ? 30 : 0) + (/\bper\s+seat\b|\bper\s+license\b/i.test(text) ? 8 : 0);
    }

    if (deployment === 'server') {
        return (/\bserver\b|\bon[-\s]?prem(?:ise)?\b|\bhybrid\b/i.test(text) ? 30 : 0) + (/\bdesktop\/on[-\s]?premise\b/i.test(text) ? 8 : 0);
    }

    if (deployment === 'cloud') {
        return (/\bcloud\b|\bsaas\b|\bapi\b|\baws\b|\bazure\b|\bgovcloud\b/i.test(text) ? 30 : 0) + (/\bhybrid\b/i.test(text) ? 8 : 0);
    }

    if (deployment === 'airgapped') {
        return (/\bair[-\s]?gapped\b|\boffline\b|\bon[-\s]?prem(?:ise)?\b|\bhybrid\b/i.test(text) ? 30 : 0) + (/\bdesktop\b|\bwindows\b/i.test(text) ? 8 : 0);
    }

    return 0;
}

function getProductRelevanceScore(comp) {
    var text = getDeploymentText(comp);
    var score = 0;
    if (/\bvideo\b/i.test(text)) { score += 14; }
    if (/\bmedia\b|\bmulti[-\s]?format\b|\bredaction\s+suite\b/i.test(text)) { score += 8; }
    if (/\blaw\s+enforcement\b|\bpublic\s+safety\b|\bforensic\b|\bevidence\b/i.test(text)) { score += 8; }
    if (/\baudio-only\b|\baudio\s+only\b|\bdocument-centric\b|\bdocument\s+intelligence\b/i.test(text)) { score -= 12; }
    return score;
}

function getRelevantPricingCompetitorsFromAnalysis(selections, tierKey) {
    if (typeof getPricingSummaryItems !== 'function') { return []; }

    var templateData = getPricingTemplateDataByName();
    var profileData = getCompetitorProfileDataByName();

    return getPricingSummaryItems()
        .map(function(item, index) {
            var startingPrice = ((item.fields['Starting Price'] || {}).text || '').trim();
            var billingModel = ((item.fields['Billing Model'] || {}).text || '').trim();
            var freeTrial = ((item.fields['Free Trial'] || {}).text || '').trim();
            var key = normalizeComparisonName(item.name);
            var template = templateData[key] || {};
            var profile = profileData[key] || {};
            var capabilityText = [
                item.name,
                startingPrice,
                billingModel,
                freeTrial,
                template.planTier,
                template.price,
                template.billingModel,
                template.freeTrial,
                template.notes,
                template.sourceText
            ].join(' ').toLowerCase();
            var searchText = [
                capabilityText,
                profile.sourceText
            ].join(' ').toLowerCase();

            return {
                name: item.name,
                startingPrice: startingPrice,
                billingModel: billingModel,
                freeTrial: freeTrial,
                templatePrice: template.price || startingPrice,
                templateNotes: template.notes || '',
                capabilityText: capabilityText,
                searchText: searchText,
                profileText: profile.sourceText || '',
                score: 0,
                originalIndex: index
            };
        })
        .filter(function(comp) {
            return isKnownComparisonPrice(comp.startingPrice) &&
                competitorMatchesDeployment(comp, selections.deployment) &&
                competitorMatchesApi(comp, selections.api);
        })
        .map(function(comp) {
            comp.score = getPricingTierScore(comp, tierKey) +
                getDeploymentScore(comp, selections.deployment) +
                getProductRelevanceScore(comp);
            return comp;
        })
        .sort(function(a, b) {
            if (b.score !== a.score) { return b.score - a.score; }
            return a.originalIndex - b.originalIndex;
        });
}

function getMinimumSelectedUsers(users) {
    var userMap = { '1': 1, '2-5': 2, '6-10': 6, '11+': 11 };
    return userMap[users] || 1;
}

function getSelectedVolume(selections) {
    var monthlyMinutes = parseInt(selections.monthlyMinutes, 10);
    var monthlyJobs = parseInt(selections.monthlyJobs, 10);
    return {
        monthlyMinutes: isFinite(monthlyMinutes) ? monthlyMinutes : 0,
        monthlyJobs: isFinite(monthlyJobs) ? monthlyJobs : 0,
        annualMinutes: isFinite(monthlyMinutes) ? monthlyMinutes * 12 : 0,
        annualJobs: isFinite(monthlyJobs) ? monthlyJobs * 12 : 0
    };
}

function formatCurrency(amount) {
    if (!isFinite(amount)) { return 'Not listed'; }
    return '$' + Math.round(amount).toLocaleString('en-US');
}

function formatAnnualCost(amount, isStartingPrice) {
    if (!isFinite(amount)) { return 'Not listed'; }
    return (isStartingPrice ? 'From ' : '') + formatCurrency(amount) + ' / year';
}

function buildPricingCandidate(options) {
    return {
        name: options.name,
        annualCost: options.annualCost,
        annualCostLabel: options.annualCostLabel || formatAnnualCost(options.annualCost, options.isStartingPrice),
        pricingBasis: options.pricingBasis,
        sourcePrice: options.sourcePrice || '',
        billingModel: options.billingModel || '',
        valueSignals: options.valueSignals || [],
        tradeoffs: options.tradeoffs || [],
        fitLevel: options.fitLevel || 'Comparable',
        isRecommendationEligible: options.isRecommendationEligible !== false,
        featureScore: options.featureScore || 50,
        scalabilityScore: options.scalabilityScore || 50,
        priceModel: options.priceModel || 'listed',
        isStartingPrice: !!options.isStartingPrice
    };
}

function getSighthoundPricingCandidate(selections, tierKey) {
    if (tierKey === 'pro') {
        return buildPricingCandidate({
            name: 'Sighthound Redactor',
            annualCost: 2500,
            pricingBasis: 'Pro plan listed at $2,500/year; normalized as one annual desktop license with no per-video or per-minute fees.',
            sourcePrice: '$2,500/year',
            billingModel: 'Annual subscription',
            valueSignals: [
                'Full visual redaction workflow with video, audio, IDs, documents, screens, vehicles, and license plates.',
                'Fixed annual cost is predictable once usage grows beyond low-volume pay-as-you-go alternatives.',
                'Desktop deployment keeps single-user workflows local.'
            ],
            tradeoffs: [
                'Higher upfront cost than usage-priced tools at very low volume.',
                'Pro is single-user desktop; API, server, and air-gapped deployments require higher tiers.'
            ],
            fitLevel: 'Full fit',
            featureScore: 90,
            scalabilityScore: 86,
            priceModel: 'fixed'
        });
    }

    if (tierKey === 'enterprise') {
        return buildPricingCandidate({
            name: 'Sighthound Redactor',
            annualCost: 3500,
            isStartingPrice: true,
            pricingBasis: 'Enterprise is listed as starting at $3,500/year; normalized to the public starting annual price with no per-video or per-minute fees.',
            sourcePrice: 'Enterprise starting at $3,500/year',
            billingModel: 'Annual subscription',
            valueSignals: [
                'Multi-user server-oriented workflow with fixed annual pricing.',
                'Broad redaction coverage across video, audio, IDs, documents, screens, vehicles, and license plates.',
                'Useful for teams that value deployment control and predictable processing economics.'
            ],
            tradeoffs: [
                'The $3,500 figure is a public starting price, not a guaranteed quote for every deployment size.',
                'API, OEM, large-team, and air-gapped requirements can move Sighthound into custom pricing.'
            ],
            fitLevel: 'Full fit',
            featureScore: 93,
            scalabilityScore: 92,
            priceModel: 'fixed'
        });
    }

    return null;
}

function normalizeCompetitorPricing(comp, selections) {
    var key = normalizeComparisonName(comp.name);
    var minUsers = getMinimumSelectedUsers(selections.users);
    var volume = getSelectedVolume(selections);
    var annualHours = volume.annualMinutes / 60;

    if (key.indexOf('caseguard') !== -1) {
        var caseGuardMonthly = (selections.industry === 'legal' || selections.industry === 'healthcare') ? 379 : 299;
        var caseGuardPlan = caseGuardMonthly === 379 ? 'Ultimate Redaction Suite' : 'Media Redaction Suite';
        return buildPricingCandidate({
            name: comp.name,
            annualCost: caseGuardMonthly * 12 * minUsers,
            pricingBasis: caseGuardPlan + ' at $' + caseGuardMonthly + '/month paid annually, multiplied by the minimum selected user count (' + minUsers + ').',
            sourcePrice: comp.templatePrice,
            billingModel: comp.billingModel,
            valueSignals: [
                'Multi-format redaction suite with public per-seat annual pricing.',
                'Desktop/on-premise fit for teams that can operate Windows-based workflows.',
                'Free trial is publicly listed.'
            ],
            tradeoffs: [
                'Per-seat pricing scales directly with user count.',
                'Profile notes Windows-only deployment and no API.'
            ],
            fitLevel: 'Full fit',
            featureScore: selections.api === 'no' ? 82 : 58,
            scalabilityScore: minUsers <= 2 ? 64 : 46,
            priceModel: 'per-seat'
        });
    }

    if (key.indexOf('fastredaction') !== -1) {
        var fastCost = ((19 * volume.monthlyJobs) + (1 * volume.monthlyMinutes)) * 12;
        return buildPricingCandidate({
            name: comp.name,
            annualCost: fastCost,
            pricingBasis: 'Pay As You Go listed as $19 + $1 per minute of uploaded video; normalized as ($19 x monthly jobs + $1 x monthly minutes) x 12.',
            sourcePrice: comp.templatePrice,
            billingModel: comp.billingModel,
            valueSignals: [
                'Lowest-friction usage-based model for low-volume cloud redaction.',
                'Public pricing directly scales with uploaded minutes and jobs.',
                'No annual subscription is required for pay-as-you-go use.'
            ],
            tradeoffs: [
                'Usage charges rise as monthly jobs or minutes increase.',
                'Cloud-only workflow and no document redaction in the listed profile.'
            ],
            fitLevel: 'Limited fit',
            featureScore: 68,
            scalabilityScore: volume.monthlyMinutes <= 100 && volume.monthlyJobs <= 10 ? 78 : (volume.monthlyMinutes <= 500 ? 54 : 28),
            priceModel: 'usage'
        });
    }

    if (key.indexOf('motiondsp') !== -1) {
        return buildPricingCandidate({
            name: comp.name,
            annualCost: 1870 * minUsers,
            pricingBasis: 'Spotlight is listed at $1,870/year per license; normalized by the minimum selected user count (' + minUsers + ').',
            sourcePrice: comp.templatePrice,
            billingModel: comp.billingModel,
            valueSignals: [
                'Specialist forensic video workflow with public annual license pricing.',
                'Strong fit for desktop video-focused teams.',
                'Lower single-license annual cost than Sighthound Pro.'
            ],
            tradeoffs: [
                'Windows desktop only in the listed profile.',
                'No server/cloud deployment, API, or document redaction in the listed profile.'
            ],
            fitLevel: 'Full fit',
            featureScore: selections.api === 'no' ? 76 : 48,
            scalabilityScore: minUsers <= 2 ? 62 : 42,
            priceModel: 'per-license'
        });
    }

    if (key.indexOf('clipr') !== -1) {
        var cliprCost = 997.5;
        var cliprBasis = 'Annual plan listed at $997.50/year.';
        if (minUsers === 1 && volume.annualMinutes <= 300) {
            cliprCost = 0;
            cliprBasis = 'Free tier listed at $0 and noted as limited to 1 user and 5 annual hours; selected annual minutes are within that limit.';
        } else if (minUsers > 1 && minUsers <= 10) {
            cliprCost = 9500;
            cliprBasis = 'Team / Dept plan listed at $9,500/year for team use.';
        } else if (minUsers > 10) {
            cliprCost = 34000;
            cliprBasis = 'Enterprise plan listed at $34,000/year for larger deployments.';
        }
        return buildPricingCandidate({
            name: comp.name,
            annualCost: cliprCost,
            pricingBasis: cliprBasis,
            sourcePrice: comp.templatePrice,
            billingModel: comp.billingModel,
            valueSignals: [
                'Explicit annual and team prices are listed.',
                'Can be cost-effective for very low-volume single-user video workflows.',
                'Hybrid cloud/on-premise positioning may fit some deployment filters.'
            ],
            tradeoffs: [
                'Pricing notes describe CLIPr as video intelligence/indexing rather than a dedicated redaction tool.',
                'Free tier is limited to 1 user and 5 annual hours.'
            ],
            fitLevel: 'Limited fit',
            featureScore: 54,
            scalabilityScore: cliprCost === 0 ? 36 : (minUsers > 1 ? 58 : 64),
            priceModel: cliprCost === 0 ? 'limited-free' : 'annual'
        });
    }

    if (key.indexOf('assemblyai') !== -1) {
        var assemblyCost = (0.15 + 0.05) * annualHours;
        return buildPricingCandidate({
            name: comp.name,
            annualCost: assemblyCost,
            pricingBasis: 'Universal-2 is listed at $0.15/hour plus PII Audio Redaction add-on at $0.05/hour; normalized against selected processing hours.',
            sourcePrice: comp.templatePrice,
            billingModel: comp.billingModel,
            valueSignals: [
                'Very low explicit usage price for audio-only redaction workflows.',
                'Developer-first cloud API is listed.',
                'Useful when the requirement is only speech-to-text plus PII audio redaction.'
            ],
            tradeoffs: [
                'Audio-only; not a complete video, image, or document redaction suite.',
                'Not viable if visual redaction is required.'
            ],
            fitLevel: 'Not full-fit',
            isRecommendationEligible: false,
            featureScore: 30,
            scalabilityScore: 72,
            priceModel: 'usage'
        });
    }

    if (key.indexOf('pimloc') !== -1 || key.indexOf('secureredact') !== -1) {
        var pimlocCost;
        var pimlocBasis;
        if (volume.monthlyMinutes <= 10) {
            pimlocCost = 0;
            pimlocBasis = 'Basic plan listed at GBP 0 and notes include up to 10 minutes/month; selected volume fits that public limit.';
        } else {
            var proCost = (189 * 12) + (Math.max(0, volume.monthlyMinutes - 30) * 6.5 * 12);
            var advancedCost = (299 * 12) + (Math.max(0, volume.monthlyMinutes - 60) * 6 * 12);
            if (advancedCost < proCost) {
                pimlocCost = advancedCost;
                pimlocBasis = 'Advanced plan listed at $299/month billed annually with 60 minutes/month and $6/minute top-ups; normalized against selected minutes.';
            } else {
                pimlocCost = proCost;
                pimlocBasis = 'Pro plan listed at $189/month billed annually with 30 minutes/month and $6.50/minute top-ups; normalized against selected minutes.';
            }
        }
        return buildPricingCandidate({
            name: comp.name,
            annualCost: pimlocCost,
            pricingBasis: pimlocBasis,
            sourcePrice: comp.templatePrice,
            billingModel: comp.billingModel,
            valueSignals: [
                'Video/image redaction platform with explicit monthly annual-billing prices.',
                'Low-cost entry point for low-volume workflows.',
                'Usage allowances and top-up rates make volume economics explainable.'
            ],
            tradeoffs: [
                'Minute allowances and top-ups can increase total cost at higher volumes.',
                'Enterprise plan is custom quote and excluded from numeric scoring.'
            ],
            fitLevel: 'Full fit',
            featureScore: 74,
            scalabilityScore: volume.monthlyMinutes <= 100 ? 70 : (volume.monthlyMinutes <= 500 ? 52 : 30),
            priceModel: pimlocCost === 0 ? 'limited-free' : 'usage-with-base'
        });
    }

    if (key.indexOf('redactable') !== -1) {
        var redactableCost = selections.industry === 'legal' ? 948 : 228;
        return buildPricingCandidate({
            name: comp.name,
            annualCost: redactableCost,
            pricingBasis: selections.industry === 'legal' ? 'Pro Plus annual option listed at $79/month annually; normalized to $948/year.' : 'Starter listed at $19/month; normalized to $228/year.',
            sourcePrice: comp.templatePrice,
            billingModel: comp.billingModel,
            valueSignals: [
                'Very low explicit document-redaction subscription pricing.',
                'Cloud SaaS model may suit document-centric legal workflows.',
                'Freemium entry is publicly listed.'
            ],
            tradeoffs: [
                'Document-centric; not a complete video/audio/image redaction alternative.',
                'Enterprise pricing is contact-only and excluded from numeric scoring.'
            ],
            fitLevel: 'Not full-fit',
            isRecommendationEligible: false,
            featureScore: 32,
            scalabilityScore: 48,
            priceModel: 'document-only'
        });
    }

    if (key.indexOf('idox') !== -1) {
        var idoxCost = selections.industry === 'legal' ? 390 : 120;
        return buildPricingCandidate({
            name: comp.name,
            annualCost: idoxCost,
            pricingBasis: selections.industry === 'legal' ? 'Starter listed at $390/year; normalized to annual cost.' : 'Value Pack listed at $10/month; normalized to $120/year.',
            sourcePrice: comp.templatePrice,
            billingModel: comp.billingModel,
            valueSignals: [
                'Low explicit document AI/redaction pricing.',
                'Annual and monthly prices are both listed.',
                'Can be cost-effective for document-only needs.'
            ],
            tradeoffs: [
                'Document-centric; not a complete video/audio/image redaction alternative.',
                'Enterprise minimums and custom terms are outside public numeric scoring.'
            ],
            fitLevel: 'Not full-fit',
            isRecommendationEligible: false,
            featureScore: 30,
            scalabilityScore: 46,
            priceModel: 'document-only'
        });
    }

    return null;
}

function clampScore(value) {
    if (!isFinite(value)) { return 0; }
    return Math.max(0, Math.min(100, Math.round(value)));
}

function scoreLabel(score) {
    if (score >= 85) { return 'Strong'; }
    if (score >= 70) { return 'Good'; }
    if (score >= 55) { return 'Limited'; }
    return 'Weak';
}

function scorePricingCandidates(candidates) {
    var pricedCandidates = candidates.filter(function(candidate) {
        return isFinite(candidate.annualCost);
    });
    if (!pricedCandidates.length) { return []; }

    var minCost = pricedCandidates.reduce(function(min, candidate) {
        return Math.min(min, candidate.annualCost);
    }, pricedCandidates[0].annualCost);
    var maxCost = pricedCandidates.reduce(function(max, candidate) {
        return Math.max(max, candidate.annualCost);
    }, pricedCandidates[0].annualCost);

    return pricedCandidates.map(function(candidate) {
        var priceScore = maxCost === minCost ? 100 : 100 - (((candidate.annualCost - minCost) / (maxCost - minCost)) * 70);
        candidate.priceEfficiencyScore = clampScore(priceScore);
        candidate.valueForMoneyScore = clampScore(
            (candidate.featureScore * 0.42) +
            (candidate.priceEfficiencyScore * 0.33) +
            (candidate.scalabilityScore * 0.25)
        );
        if (!candidate.isRecommendationEligible) {
            candidate.valueForMoneyScore = Math.min(candidate.valueForMoneyScore, 55);
        }
        return candidate;
    });
}

function inferPricingIntent(selections, tierKey) {
    var minUsers = getMinimumSelectedUsers(selections.users);
    var volume = getSelectedVolume(selections);
    if (tierKey === 'pro' && minUsers === 1 && selections.api === 'no' && volume.monthlyMinutes <= 100 && volume.monthlyJobs <= 10) {
        return 'price-sensitive';
    }
    if (volume.monthlyMinutes <= 100 && volume.monthlyJobs <= 10 && selections.api === 'no') {
        return 'price-sensitive';
    }
    return 'value-sensitive';
}

function choosePricingRecommendation(scoredCandidates, selections, tierKey, excludedNotes) {
    var eligible = scoredCandidates.filter(function(candidate) {
        return candidate.isRecommendationEligible;
    });
    var decision = {
        winner: null,
        cheapest: null,
        bestValue: null,
        intent: inferPricingIntent(selections, tierKey),
        excludedNotes: excludedNotes || []
    };

    if (!eligible.length) { return decision; }

    decision.cheapest = eligible.reduce(function(best, candidate) {
        if (!best || candidate.annualCost < best.annualCost) { return candidate; }
        if (candidate.annualCost === best.annualCost && candidate.valueForMoneyScore > best.valueForMoneyScore) { return candidate; }
        return best;
    }, null);

    decision.bestValue = eligible.reduce(function(best, candidate) {
        if (!best || candidate.valueForMoneyScore > best.valueForMoneyScore) { return candidate; }
        if (candidate.valueForMoneyScore === best.valueForMoneyScore && candidate.annualCost < best.annualCost) { return candidate; }
        return best;
    }, null);

    if (decision.intent === 'price-sensitive') {
        decision.winner = decision.cheapest;
        return decision;
    }

    decision.winner = decision.bestValue;
    if (decision.cheapest && decision.bestValue && decision.cheapest.name !== decision.bestValue.name) {
        var cheapestCost = Math.max(decision.cheapest.annualCost, 1);
        var costMultiple = decision.bestValue.annualCost / cheapestCost;
        var valueLead = decision.bestValue.valueForMoneyScore - decision.cheapest.valueForMoneyScore;
        if (costMultiple > 1.5 && valueLead < 10) {
            decision.winner = decision.cheapest;
        }
    }

    return decision;
}

function getPricingReason(decision) {
    if (!decision.winner) {
        return 'No explicit-priced full-fit option matched the selected filters. Custom-quote and non-public pricing entries were excluded from numeric recommendation.';
    }

    if (decision.cheapest && decision.winner.name === decision.cheapest.name) {
        return decision.winner.name + ' has the lowest normalized annual cost among viable explicit-priced options at ' + decision.winner.annualCostLabel + '.';
    }

    return decision.winner.name + ' is not the cheapest option, but it has the strongest value-for-money score (' + decision.winner.valueForMoneyScore + '/100) after weighting fit, scalability, and normalized cost. Lowest viable cost is ' + decision.cheapest.name + ' at ' + decision.cheapest.annualCostLabel + '.';
}

function getTradeoffText(candidate) {
    if (!candidate) { return 'Custom-quote and non-public pricing entries were excluded from scoring.'; }
    return candidate.tradeoffs.join(' ');
}
function getNoExplicitPricedValueSignals(decision) {
    var signals = [
        'No matched option with public numeric pricing is comparable enough to score for this deployment, API, and volume profile.',
        'Custom-quote and not-listed entries were excluded instead of estimated, preserving pricing data integrity.',
        'Use vendor quotes to compare API, OEM, air-gapped, security, and support capabilities before making a final selection.'
    ];

    if (decision && decision.excludedNotes && decision.excludedNotes.length) {
        signals[1] = 'Known custom-priced requirements were excluded from numeric scoring: ' + decision.excludedNotes.join(' ');
    }

    return signals;
}

function renderPricingRecommendationCard(decision, scoredCandidates) {
    var card = document.getElementById('pricingRecommendationCard');
    if (!card) { return; }

    if (!scoredCandidates.length) {
        var emptyBulletHtml = getNoExplicitPricedValueSignals(decision).map(function(signal) {
            return '<li>' + escapeHtml(signal) + '</li>';
        }).join('');
        var emptyExcludedHtml = decision.excludedNotes.length ?
            '<p class="recommendation-note">Excluded from numeric scoring: ' + escapeHtml(decision.excludedNotes.join(' ')) + '</p>' : '';
        card.innerHTML =
            '<div class="recommendation-kicker">' + (decision.intent === 'price-sensitive' ? 'Price-sensitive recommendation' : 'Value-sensitive recommendation') + '</div>' +
            '<h4>Recommended Solution: No explicit-priced option</h4>' +
            '<p><strong>Why (Pricing-Based):</strong> No public numeric price matched the selected filters after excluding custom quote and not-listed entries.</p>' +
            '<div><strong>Why (Value-Based):</strong><ul>' + emptyBulletHtml + '</ul></div>' +
            '<p><strong>Trade-offs:</strong> Use vendor quotes for custom/API/air-gapped requirements before making a final decision; the calculator will not rank vendors without validated pricing.</p>' +
            emptyExcludedHtml;
        return;
    }

    var winner = decision.winner;
    var valueSignals = winner ? winner.valueSignals.slice(0, 3) : getNoExplicitPricedValueSignals(decision);
    var bulletHtml = valueSignals.map(function(signal) {
        return '<li>' + escapeHtml(signal) + '</li>';
    }).join('');

    var metricsHtml = '';
    if (decision.cheapest || decision.bestValue) {
        metricsHtml = '<div class="recommendation-metrics">';
        if (decision.cheapest) {
            metricsHtml += '<div><span>Lowest cost viable option</span><strong>' + escapeHtml(decision.cheapest.name) + '</strong><small>' + escapeHtml(decision.cheapest.annualCostLabel) + '</small></div>';
        }
        if (decision.bestValue) {
            metricsHtml += '<div><span>Best value-for-money option</span><strong>' + escapeHtml(decision.bestValue.name) + '</strong><small>' + decision.bestValue.valueForMoneyScore + '/100 - ' + scoreLabel(decision.bestValue.valueForMoneyScore) + '</small></div>';
        }
        metricsHtml += '</div>';
    }

    var excludedHtml = decision.excludedNotes.length ?
        '<p class="recommendation-note">Excluded from numeric scoring: ' + escapeHtml(decision.excludedNotes.join(' ')) + '</p>' : '';

    card.innerHTML =
        '<div class="recommendation-kicker">' + (decision.intent === 'price-sensitive' ? 'Price-sensitive recommendation' : 'Value-sensitive recommendation') + '</div>' +
        '<h4>Recommended Solution: ' + escapeHtml(winner ? winner.name : 'No explicit-priced full-fit option') + '</h4>' +
        '<p><strong>Why (Pricing-Based):</strong> ' + escapeHtml(getPricingReason(decision)) + '</p>' +
        '<div><strong>Why (Value-Based):</strong><ul>' + bulletHtml + '</ul></div>' +
        '<p><strong>Trade-offs:</strong> ' + escapeHtml(getTradeoffText(winner)) + '</p>' +
        metricsHtml +
        excludedHtml;
}

function setComparisonEmptyMessage(isVisible) {
    var table = document.getElementById('compTable');
    var wrap = table ? table.closest('.comparison-wrap') : null;
    if (!wrap) { return; }

    var message = document.getElementById('compTableEmptyMessage');
    if (!message) {
        message = document.createElement('p');
        message.id = 'compTableEmptyMessage';
        message.className = 'comparison-empty-message';
        wrap.appendChild(message);
    }

    message.textContent = isVisible ? 'No explicit-priced comparable competitors match these filters. Custom quote and not-listed pricing entries were excluded.' : '';
    message.hidden = !isVisible;
}

function clearPricingResult() {
    var outputSection = document.getElementById('output-section');
    if (outputSection) {
        outputSection.classList.remove('visible');
        outputSection.style.display = 'none';
    }

    var divider = document.getElementById('outputDivider');
    if (divider) { divider.style.display = 'none'; }

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) { resetBtn.classList.remove('visible'); }

    ['tierBadge', 'tierName', 'tierPrice', 'tierExplanation', 'tierFeatures'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) {
            el.textContent = '';
            el.innerHTML = '';
        }
    });

    var tbody = document.getElementById('compTableBody');
    if (tbody) { tbody.innerHTML = ''; }
    var card = document.getElementById('pricingRecommendationCard');
    if (card) { card.innerHTML = ''; }
    setComparisonEmptyMessage(false);
}

function renderComparisonRows(scoredCandidates, winner) {
    var tbody = document.getElementById('compTableBody');
    if (!tbody) { return; }
    tbody.innerHTML = '';
    if (!scoredCandidates.length) {
        var emptyRow = document.createElement('tr');
        emptyRow.className = 'empty-comparison-row';
        emptyRow.innerHTML =
            '<td data-label="Tool"><span class="tool-name">No explicit-priced option</span><span class="fit-badge">No scored match</span></td>' +
            '<td data-label="Normalized Annual Cost"><span class="comparison-price">Not listed</span><span class="score-detail">Price efficiency: N/A</span></td>' +
            '<td data-label="Pricing Basis">No matching competitor with public numeric pricing satisfied the selected deployment, API, and volume filters.</td>' +
            '<td data-label="Value Signals">No value-for-money score can be calculated without validated public pricing and comparable fit.</td>' +
            '<td data-label="Trade-offs">Request vendor quotes for custom, OEM, API, or air-gapped requirements before making a final pricing decision.</td>';
        tbody.appendChild(emptyRow);
        return;
    }

    scoredCandidates
        .slice()
        .sort(function(a, b) {
            if (winner && a.name === winner.name) { return -1; }
            if (winner && b.name === winner.name) { return 1; }
            if (a.isRecommendationEligible !== b.isRecommendationEligible) {
                return a.isRecommendationEligible ? -1 : 1;
            }
            if (a.annualCost !== b.annualCost) { return a.annualCost - b.annualCost; }
            return b.valueForMoneyScore - a.valueForMoneyScore;
        })
        .forEach(function(candidate) {
            var tr = document.createElement('tr');
            if (winner && candidate.name === winner.name) { tr.className = 'recommended-row'; }
            if (!candidate.isRecommendationEligible) { tr.className = (tr.className ? tr.className + ' ' : '') + 'nonviable-row'; }

            var toolBadge = winner && candidate.name === winner.name ? '<span class="value-badge">Recommended</span>' : '';
            var fitBadge = '<span class="fit-badge">' + escapeHtml(candidate.fitLevel) + '</span>';
            tr.innerHTML =
                '<td data-label="Tool"><span class="tool-name">' + escapeHtml(candidate.name) + '</span>' + toolBadge + fitBadge + '</td>' +
                '<td data-label="Normalized Annual Cost"><span class="comparison-price">' + escapeHtml(candidate.annualCostLabel) + '</span><span class="score-detail">Price efficiency: ' + candidate.priceEfficiencyScore + '/100</span></td>' +
                '<td data-label="Pricing Basis">' + escapeHtml(candidate.pricingBasis) + '</td>' +
                '<td data-label="Value Signals"><span class="score-detail">Value-for-money: ' + candidate.valueForMoneyScore + '/100 - ' + scoreLabel(candidate.valueForMoneyScore) + '</span>' + escapeHtml(candidate.valueSignals.slice(0, 2).join(' ')) + '</td>' +
                '<td data-label="Trade-offs">' + escapeHtml(candidate.tradeoffs.join(' ')) + '</td>';
            tbody.appendChild(tr);
        });
}

function renderPricingResult(selections, options) {
    options = options || {};

    var users      = selections.users;
    var deployment = selections.deployment;
    var api        = selections.api;
    var industry   = selections.industry;

    if (!isPricingSelectionComplete(selections)) {
        clearPricingResult();
        return;
    }

    var tierKey     = getRecommendedTier(users, deployment, api);
    var tier        = TIERS[tierKey];
    var explain     = getPricingExplanation(users, deployment, api, industry, tierKey);
    var competitors = getRelevantPricingCompetitorsFromAnalysis(selections, tierKey);
    var rawCandidates = [];
    var excludedNotes = [];
    var sighthoundCandidate = getSighthoundPricingCandidate(selections, tierKey);

    if (sighthoundCandidate) {
        rawCandidates.push(sighthoundCandidate);
    } else if (tierKey === 'custom') {
        excludedNotes.push('Sighthound Custom pricing is not publicly numeric for API, OEM, large-team, or air-gapped deployments.');
    }

    competitors.forEach(function(comp) {
        var normalized = normalizeCompetitorPricing(comp, selections);
        if (normalized && isFinite(normalized.annualCost)) {
            rawCandidates.push(normalized);
        }
    });

    var scoredCandidates = scorePricingCandidates(rawCandidates);
    var decision = choosePricingRecommendation(scoredCandidates, selections, tierKey, excludedNotes);

    var badge = document.getElementById('tierBadge');
    badge.textContent = tier.tagline;
    badge.className = 'tier-badge ' + tier.badge;

    document.getElementById('tierName').textContent = tier.name;
    var priceEl = document.getElementById('tierPrice');
    priceEl.textContent = tier.price;
    priceEl.className = 'tier-price ' + tier.priceClass;
    document.getElementById('tierExplanation').textContent = explain;

    var featuresEl = document.getElementById('tierFeatures');
    featuresEl.innerHTML = tier.features
        .map(function(f) { return '<span class="feature-pill">' + escapeHtml(f) + '</span>'; })
        .join('');

    renderPricingRecommendationCard(decision, scoredCandidates);
    renderComparisonRows(scoredCandidates, decision.winner);
    setComparisonEmptyMessage(scoredCandidates.length === 0);

    document.getElementById('outputDivider').style.display = 'block';
    var outputSection = document.getElementById('output-section');
    outputSection.classList.add('visible');
    outputSection.style.display = 'block';

    var resetBtn = document.getElementById('resetBtn');
    resetBtn.classList.add('visible');
    if (options.scroll !== false) {
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function calculatePricing() {
    var selections = getPricingSelections();

    if (!isPricingSelectionComplete(selections)) {
        alert('Please fill in all six fields before calculating.');
        return;
    }

    renderPricingResult(selections, { scroll: true });
}

function handlePricingSelectionChange() {
    var selections = getPricingSelections();
    renderPricingResult(selections, { scroll: false });
}

function initPricingCalculator() {
    ['userCount', 'deploymentType', 'apiNeeded', 'pcIndustry', 'monthlyMinutes', 'monthlyJobs'].forEach(function(id) {
        var el = document.getElementById(id);
        if (!el || el.getAttribute('data-pricing-listener-attached') === 'true') { return; }
        el.addEventListener('change', handlePricingSelectionChange);
        el.setAttribute('data-pricing-listener-attached', 'true');
    });

    handlePricingSelectionChange();
}

function resetPricingCalc() {
    ['userCount', 'deploymentType', 'apiNeeded', 'pcIndustry', 'monthlyMinutes', 'monthlyJobs'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) { el.value = ''; }
    });
    clearPricingResult();

    var section = document.getElementById('pricing-calculator');
    if (section) { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}

function enforcePricingAnalysisLinkTargets(root) {
    var scope = root || document.getElementById('pricing');
    if (!scope) { return; }

    Array.prototype.forEach.call(scope.querySelectorAll('a'), function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

function renderPricingTemplateSelection(selectId, outputId, templateAttribute, placeholderText) {
    var select = document.getElementById(selectId);
    var output = document.getElementById(outputId);
    if (!select || !output) { return; }

    var selectedValue = select.value;
    if (!selectedValue) {
        output.innerHTML = '<p class="pricing-dropdown-placeholder">' + escapeHtml(placeholderText) + '</p>';
        return;
    }

    var template = document.querySelector('template[' + templateAttribute + '="' + selectedValue + '"]');
    if (!template) {
        output.innerHTML = '<p class="pricing-dropdown-placeholder">No pricing details are available for the selected item.</p>';
        return;
    }

    output.innerHTML = template.innerHTML;
    enforcePricingAnalysisLinkTargets(output);

    if (typeof window.lucide !== 'undefined' && window.lucide && typeof window.lucide.createIcons === 'function') {
        try { window.lucide.createIcons(); } catch (e) {}
    }
}

function setPricingCompareMessage(message, isWarning) {
    var messageEl = document.getElementById('pricingCompareMessage');
    if (!messageEl) { return; }
    messageEl.textContent = message;
    messageEl.classList.toggle('warning', !!isWarning);
}

function clearPricingComparisonResult() {
    var output = document.getElementById('pricingComparisonResult');
    if (output) { output.innerHTML = ''; }
    var details = document.getElementById('pricingCompetitorDetails');
    if (details) { details.style.display = ''; }
}

function getTemplateWrapper(templateAttribute, selectedValue) {
    var template = document.querySelector('template[' + templateAttribute + '="' + selectedValue + '"]');
    if (!template) { return null; }
    var wrapper = document.createElement('div');
    wrapper.innerHTML = template.innerHTML;
    return wrapper;
}

function cleanPricingLabel(label) {
    return (label || '')
        .replace(/^[-–—\s]+/, '')
        .replace(/:\s*$/, '')
        .trim();
}

function cleanPricingValue(value) {
    return (value || '')
        .replace(/^[:\s–—-]+/, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function getPricingPanelName(panel) {
    if (!panel) { return ''; }
    var paragraphs = panel.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i += 1) {
        var strong = paragraphs[i].querySelector('strong');
        if (strong && cleanPricingLabel(strong.textContent) === 'Competitor Name') {
            return cleanPricingValue(paragraphs[i].textContent.replace(strong.textContent, ''));
        }
    }
    var heading = panel.querySelector('h4');
    if (!heading) { return 'Selected Competitor'; }
    return heading.textContent.replace(/^\s*\d+\.\s*/, '').trim();
}

function collectPricingComparisonFields(panel) {
    var fields = {};
    if (!panel) { return fields; }
    var section = 'General';
    Array.prototype.forEach.call(panel.children, function(child) {
        var tagName = child.tagName ? child.tagName.toLowerCase() : '';
        if (tagName === 'h5') {
            section = child.textContent.trim();
            return;
        }
        if (tagName !== 'p') { return; }
        var strong = child.querySelector('strong');
        if (!strong) { return; }
        var label = cleanPricingLabel(strong.textContent);
        if (label === 'Competitor Name') { return; }
        var value = cleanPricingValue(child.textContent.replace(strong.textContent, ''));
        fields[section + ' — ' + label] = {
            value: value.toLowerCase(),
            element: child
        };
    });
    return fields;
}

function highlightPricingDifferences(leftPanel, rightPanel) {
    var leftFields = collectPricingComparisonFields(leftPanel);
    var rightFields = collectPricingComparisonFields(rightPanel);
    var keys = {};
    Object.keys(leftFields).forEach(function(key) { keys[key] = true; });
    Object.keys(rightFields).forEach(function(key) { keys[key] = true; });

    Object.keys(keys).forEach(function(key) {
        if (!leftFields[key] || !rightFields[key]) { return; }
        if (leftFields[key].value !== rightFields[key].value) {
            leftFields[key].element.classList.add('pricing-difference');
            rightFields[key].element.classList.add('pricing-difference');
        }
    });
}

function buildPricingComparisonPanel(selectedValue) {
    var wrapper = getTemplateWrapper('data-pricing-template', selectedValue);
    if (!wrapper) { return null; }
    var panel = wrapper.querySelector('.pricing-dropdown-panel');
    if (!panel) { return null; }
    var name = getPricingPanelName(panel);
    var originalHeading = panel.querySelector('h4');
    if (originalHeading) { originalHeading.remove(); }
    return {
        name: name,
        panel: panel
    };
}

function comparePricingCompetitors() {
    var firstSelect = document.getElementById('pricingCompetitorSelect');
    var secondSelect = document.getElementById('pricingCompetitorCompareSelect');
    var output = document.getElementById('pricingComparisonResult');
    if (!firstSelect || !secondSelect || !output) { return; }

    var firstValue = firstSelect.value;
    var secondValue = secondSelect.value;
    output.innerHTML = '';

    if (!firstValue && !secondValue) {
        setPricingCompareMessage('Select two competitors to compare.', true);
        return;
    }
    if (firstValue && !secondValue) {
        setPricingCompareMessage('Please select a second competitor to compare.', true);
        return;
    }
    if (!firstValue && secondValue) {
        setPricingCompareMessage('Please select a first competitor to compare.', true);
        return;
    }
    if (firstValue === secondValue) {
        setPricingCompareMessage('Please select two different competitors to compare.', true);
        return;
    }

    var firstPanel = buildPricingComparisonPanel(firstValue);
    var secondPanel = buildPricingComparisonPanel(secondValue);
    if (!firstPanel || !secondPanel) {
        setPricingCompareMessage('No pricing details are available for one of the selected competitors.', true);
        return;
    }

    highlightPricingDifferences(firstPanel.panel, secondPanel.panel);

    output.innerHTML =
        '<div class="pricing-comparison-grid">' +
            '<div class="pricing-comparison-column">' +
                '<h4 class="pricing-compare-heading">' + escapeHtml(firstPanel.name) + '</h4>' +
                firstPanel.panel.outerHTML +
            '</div>' +
            '<div class="pricing-comparison-column">' +
                '<h4 class="pricing-compare-heading">' + escapeHtml(secondPanel.name) + '</h4>' +
                secondPanel.panel.outerHTML +
            '</div>' +
        '</div>';

    var details = document.getElementById('pricingCompetitorDetails');
    if (details) { details.style.display = 'none'; }
    setPricingCompareMessage('Comparison shown. Highlighted fields indicate differences between the selected competitors.', false);
    enforcePricingAnalysisLinkTargets(output);

    if (typeof window.lucide !== 'undefined' && window.lucide && typeof window.lucide.createIcons === 'function') {
        try { window.lucide.createIcons(); } catch (e) {}
    }
}

var PRICING_SUMMARY_VIEW_STORAGE_KEY = 'redactorPricingSummaryView.v1';

function updatePricingSummaryBodyHeight(force) {
    var viewer = document.getElementById('pricingSummaryViewer');
    var body = document.getElementById('pricingSummaryViewerBody');
    if (!viewer || !body || body.hidden) { return; }
    if (!force && viewer.classList.contains('collapsed')) { return; }
    body.style.setProperty('--pricing-summary-body-height', body.scrollHeight + 'px');
}

function getPricingSummaryItems() {
    return Array.prototype.map.call(document.querySelectorAll('template[data-summary-template]'), function(template) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = template.innerHTML;
        var panel = wrapper.querySelector('.pricing-summary-panel');
        var nameNode = panel ? panel.querySelector('h4') : null;
        var fields = {};

        if (panel) {
            Array.prototype.forEach.call(panel.querySelectorAll('dl > div'), function(item) {
                var term = item.querySelector('dt');
                var detail = item.querySelector('dd');
                if (!term || !detail) { return; }
                fields[term.textContent.trim()] = {
                    text: detail.textContent.trim(),
                    html: detail.innerHTML
                };
            });
        }

        return {
            id: template.getAttribute('data-summary-template'),
            name: nameNode ? nameNode.textContent.trim() : 'Summary Item',
            fields: fields
        };
    });
}

function renderPricingSummaryViews() {
    var cardView = document.getElementById('pricingSummaryCardView');
    var tableBody = document.getElementById('pricingSummaryTableBody');
    if (!cardView || !tableBody) { return; }

    var items = getPricingSummaryItems();
    cardView.innerHTML = items.map(function(item) {
        return (
            '<article class="pricing-summary-card">' +
                '<h5>' + escapeHtml(item.name) + '</h5>' +
                '<dl>' +
                    '<div><dt>Starting Price</dt><dd>' + escapeHtml((item.fields['Starting Price'] || {}).text || 'Not listed') + '</dd></div>' +
                    '<div><dt>Billing Model</dt><dd>' + escapeHtml((item.fields['Billing Model'] || {}).text || 'Not listed') + '</dd></div>' +
                    '<div><dt>Free Trial</dt><dd>' + escapeHtml((item.fields['Free Trial'] || {}).text || 'Not listed') + '</dd></div>' +
                    '<div><dt>Best Source</dt><dd>' + ((item.fields['Best Source'] || {}).html || 'Not listed') + '</dd></div>' +
                '</dl>' +
            '</article>'
        );
    }).join('');

    tableBody.innerHTML = items.map(function(item) {
        return (
            '<tr>' +
                '<td data-label="Competitor">' + escapeHtml(item.name) + '</td>' +
                '<td data-label="Starting Price">' + escapeHtml((item.fields['Starting Price'] || {}).text || 'Not listed') + '</td>' +
                '<td data-label="Billing Model">' + escapeHtml((item.fields['Billing Model'] || {}).text || 'Not listed') + '</td>' +
                '<td data-label="Free Trial">' + escapeHtml((item.fields['Free Trial'] || {}).text || 'Not listed') + '</td>' +
                '<td data-label="Best Source">' + ((item.fields['Best Source'] || {}).html || 'Not listed') + '</td>' +
            '</tr>'
        );
    }).join('');

    enforcePricingAnalysisLinkTargets(cardView);
    enforcePricingAnalysisLinkTargets(tableBody);
    updatePricingSummaryBodyHeight();
}

function setPricingSummaryView(view) {
    var nextView = view === 'table' ? 'table' : 'card';
    var cardView = document.getElementById('pricingSummaryCardView');
    var tableView = document.getElementById('pricingSummaryTableView');
    var cardTab = document.getElementById('pricingSummaryCardTab');
    var tableTab = document.getElementById('pricingSummaryTableTab');
    if (!cardView || !tableView || !cardTab || !tableTab) { return; }

    var isCard = nextView === 'card';
    cardView.hidden = !isCard;
    tableView.hidden = isCard;
    cardView.setAttribute('aria-hidden', isCard ? 'false' : 'true');
    tableView.setAttribute('aria-hidden', isCard ? 'true' : 'false');
    cardTab.classList.toggle('active', isCard);
    tableTab.classList.toggle('active', !isCard);
    cardTab.setAttribute('aria-selected', isCard ? 'true' : 'false');
    tableTab.setAttribute('aria-selected', isCard ? 'false' : 'true');
    cardTab.setAttribute('aria-pressed', isCard ? 'true' : 'false');
    tableTab.setAttribute('aria-pressed', isCard ? 'false' : 'true');

    try {
        window.sessionStorage.setItem(PRICING_SUMMARY_VIEW_STORAGE_KEY, nextView);
    } catch (e) {}

    updatePricingSummaryBodyHeight();
}

function togglePricingSummarySection() {
    var viewer = document.getElementById('pricingSummaryViewer');
    var toggle = document.getElementById('pricingSummaryCollapseToggle');
    var label = document.getElementById('pricingSummaryCollapseLabel');
    var body = document.getElementById('pricingSummaryViewerBody');
    var icon = toggle ? toggle.querySelector('.pricing-summary-collapse-icon') : null;
    if (!viewer || !toggle || !body) { return; }
    var shouldCollapse = !viewer.classList.contains('collapsed');
    if (shouldCollapse) {
        updatePricingSummaryBodyHeight(true);
        viewer.classList.add('collapsed');
        toggle.setAttribute('aria-expanded', 'false');
        body.setAttribute('aria-hidden', 'true');
        body.setAttribute('inert', '');
        if (label) { label.textContent = 'Expand'; }
        if (icon) { icon.textContent = '⌃'; }
        window.setTimeout(function() {
            if (viewer.classList.contains('collapsed')) {
                body.hidden = true;
            }
        }, 360);
        return;
    }

    body.hidden = false;
    body.removeAttribute('inert');
    body.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    if (label) { label.textContent = 'Collapse'; }
    if (icon) { icon.textContent = '⌄'; }
    updatePricingSummaryBodyHeight(true);
    window.requestAnimationFrame(function() {
        viewer.classList.remove('collapsed');
        updatePricingSummaryBodyHeight(true);
    });
}

function handlePricingSummaryViewKey(event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') { return; }
    event.preventDefault();
    var nextView = event.key === 'ArrowRight' ? 'table' : 'card';
    setPricingSummaryView(nextView);
    var target = document.getElementById(nextView === 'card' ? 'pricingSummaryCardTab' : 'pricingSummaryTableTab');
    if (target) { target.focus(); }
}

function initPricingSummaryViewer() {
    var viewer = document.getElementById('pricingSummaryViewer');
    if (!viewer) { return; }

    renderPricingSummaryViews();
    viewer.classList.remove('collapsed');
    var toggle = document.getElementById('pricingSummaryCollapseToggle');
    var label = document.getElementById('pricingSummaryCollapseLabel');
    var body = document.getElementById('pricingSummaryViewerBody');
    var icon = toggle ? toggle.querySelector('.pricing-summary-collapse-icon') : null;
    if (toggle) { toggle.setAttribute('aria-expanded', 'true'); }
    if (label) { label.textContent = 'Collapse'; }
    if (icon) { icon.textContent = '⌄'; }
    if (body) {
        body.hidden = false;
        body.removeAttribute('inert');
        body.setAttribute('aria-hidden', 'false');
    }

    ['pricingSummaryCardTab', 'pricingSummaryTableTab'].forEach(function(id) {
        var tab = document.getElementById(id);
        if (!tab || tab.getAttribute('data-summary-keydown-attached') === 'true') { return; }
        tab.addEventListener('keydown', handlePricingSummaryViewKey);
        tab.setAttribute('data-summary-keydown-attached', 'true');
    });

    var savedView = 'card';
    try {
        savedView = window.sessionStorage.getItem(PRICING_SUMMARY_VIEW_STORAGE_KEY) || 'card';
    } catch (e) {}
    setPricingSummaryView(savedView);
    updatePricingSummaryBodyHeight(true);
}

function handlePricingCompetitorChange() {
    renderPricingTemplateSelection(
        'pricingCompetitorSelect',
        'pricingCompetitorDetails',
        'data-pricing-template',
        'Select a competitor to view pricing details.'
    );
    clearPricingComparisonResult();

    var firstSelect = document.getElementById('pricingCompetitorSelect');
    var secondSelect = document.getElementById('pricingCompetitorCompareSelect');
    var firstValue = firstSelect ? firstSelect.value : '';
    var secondValue = secondSelect ? secondSelect.value : '';

    if (firstValue && !secondValue) {
        setPricingCompareMessage('Please select a second competitor to compare.', false);
    } else if (!firstValue && secondValue) {
        setPricingCompareMessage('Please select a first competitor to compare.', false);
    } else if (firstValue && secondValue && firstValue === secondValue) {
        setPricingCompareMessage('Please select two different competitors to compare.', true);
    } else if (firstValue && secondValue) {
        setPricingCompareMessage('Select Compare to view the two competitors side by side.', false);
    } else {
        setPricingCompareMessage('Select two competitors, then choose Compare to view pricing details side by side.', false);
    }
}

function handlePricingSummaryChange() {
    renderPricingTemplateSelection(
        'pricingSummarySelect',
        'pricingSummaryDetails',
        'data-summary-template',
        'Select a summary item to view pricing summary details.'
    );
}

function initPricingAnalysisDropdowns() {
    [
        { id: 'pricingCompetitorSelect', handler: handlePricingCompetitorChange },
        { id: 'pricingCompetitorCompareSelect', handler: handlePricingCompetitorChange },
        { id: 'pricingSummarySelect', handler: handlePricingSummaryChange }
    ].forEach(function(config) {
        var el = document.getElementById(config.id);
        if (!el || el.getAttribute('data-pricing-dropdown-listener-attached') === 'true') { return; }
        el.addEventListener('change', config.handler);
        el.setAttribute('data-pricing-dropdown-listener-attached', 'true');
    });

    enforcePricingAnalysisLinkTargets();
    handlePricingCompetitorChange();
    handlePricingSummaryChange();
    initPricingSummaryViewer();
}
var FOIA_CONTRACT_EMPTY_MESSAGE = 'No verified public contract data found. Recommend manual FOIA search via USASpending.gov or relevant procurement portals.';
var foiaContractView = 'card';
var foiaContractState = {
    source: 'usaspending',
    sourceLabel: 'USASpending.gov',
    records: [],
    retrievalNote: '',
    generatedAt: '',
    error: '',
    loading: false,
    hasLoaded: false,
    requestToken: 0
};
var FOIA_CONTRACT_TITLE_SHORTENED_VENDORS = {
    'MINDPOINT GROUP LLC': true,
    'THE BOEING COMPANY': true,
    'HONEYWELL INTERNATIONAL INC': true
};

function getFoiaContractControls() {
    return {
        panel: document.getElementById('foiaContractPanel'),
        body: document.getElementById('foiaContractPanelBody'),
        toggle: document.getElementById('foiaContractCollapseToggle'),
        collapseLabel: document.getElementById('foiaContractCollapseLabel'),
        source: document.getElementById('foiaContractSourceSelect'),
        search: document.getElementById('foiaContractSearch'),
        category: document.getElementById('foiaContractCategoryFilter'),
        summary: document.getElementById('foiaContractSummary'),
        note: document.getElementById('foiaContractRetrievalNote'),
        results: document.getElementById('foiaContractResults'),
        count: document.getElementById('foiaContractCount'),
        cardToggle: document.getElementById('foiaContractCardToggle'),
        tableToggle: document.getElementById('foiaContractTableToggle')
    };
}

function getFoiaContractInputValue(element) {
    return element ? String(element.value || '').trim() : '';
}

function getFoiaSelectedSourceLabel(select) {
    if (!select || !select.options || select.selectedIndex < 0) {
        return 'Selected source';
    }
    return select.options[select.selectedIndex].textContent.trim();
}

function normalizeFoiaIndustrySegment(value) {
    return value === '⚖️ Legal & Compliance Teams' ? '⚖️ Legal & Compliance' : String(value || '');
}

function normalizeFoiaVerificationStatus(value) {
    return value === '✅ Verified' ? '✅ Verified' : '⚠️ Partial';
}

function getFoiaVerificationClass(value) {
    return normalizeFoiaVerificationStatus(value) === '✅ Verified' ? 'verified' : 'partial';
}

function normalizeFoiaVendorName(value) {
    return String(value || '').replace(/[.,]/g, '').replace(/\s+/g, ' ').trim().toUpperCase();
}

function shouldShortenFoiaContractTitle(record) {
    return !!FOIA_CONTRACT_TITLE_SHORTENED_VENDORS[normalizeFoiaVendorName(record && record.vendorOrganizationName)];
}

function getFoiaSearchText(record) {
    return [
        record.vendorOrganizationName,
        record.contractTitle,
        normalizeFoiaIndustrySegment(record.industrySegment),
        record.contractType,
        record.awardAmountDisplay,
        record.agencyDepartment,
        record.contractStatus,
        record.contractPeriod,
        record.source,
        record.sourceUrl,
        record.description,
        record.awardId,
        normalizeFoiaVerificationStatus(record.verificationStatus)
    ].join(' ').toLowerCase();
}

function getFoiaFilteredContracts() {
    var controls = getFoiaContractControls();
    var query = getFoiaContractInputValue(controls.search).toLowerCase();
    var category = getFoiaContractInputValue(controls.category) || 'all';
    return foiaContractState.records.filter(function(record) {
        var industry = normalizeFoiaIndustrySegment(record.industrySegment);
        var categoryMatch = category === 'all' || industry === category;
        var queryMatch = !query || getFoiaSearchText(record).indexOf(query) !== -1;
        return categoryMatch && queryMatch;
    });
}

function truncateContractTitle(text, maxLines) {
    if (!text) return text;
    maxLines = maxLines || 3;
    var lines = String(text).split(/\n/).slice(0, maxLines);
    var truncated = lines.join('\n');
    if (String(text).split(/\n/).length > maxLines) {
        truncated += '...';
    }
    return truncated;
}
function renderFoiaContractTitle(record, emptyValue) {
    var rawTitle = record && record.contractTitle ? record.contractTitle : '';
    var displayTitle = rawTitle ? truncateContractTitle(rawTitle, 3) : (emptyValue || '—');
    if (!shouldShortenFoiaContractTitle(record)) {
        return escapeHtml(displayTitle);
    }
    return '<span class="foia-contract-title-short" title="' + escapeHtml(rawTitle || displayTitle) + '">' + escapeHtml(displayTitle) + '</span>';
}

function renderFoiaField(label, value, isHtml) {
    var displayValue = value;
    if (!isHtml && label === 'Contract Title' && value) {
        displayValue = truncateContractTitle(value, 3);
    }
    return '<div><dt>' + escapeHtml(label) + '</dt><dd>' + (isHtml ? displayValue : escapeHtml(displayValue || 'Not publicly listed')) + '</dd></div>';
}

function renderFoiaSourceLink(record, label) {
    if (!record.sourceUrl) {
        return escapeHtml(label || record.source || 'Not publicly listed');
    }
    return '<a href="' + escapeHtml(record.sourceUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(label || record.source || 'Open source') + '</a>';
}

function renderFoiaContractCard(record) {
    var industry = normalizeFoiaIndustrySegment(record.industrySegment);
    var verification = normalizeFoiaVerificationStatus(record.verificationStatus);
    var verificationClass = getFoiaVerificationClass(record.verificationStatus);
    var html = '<article class="resource-card foia-contract-card">';
    html += '<div class="resource-card-top">';
    html += '<span class="resource-pill foia-industry-pill">' + escapeHtml(industry || 'Industry not listed') + '</span>';
    html += '<span class="foia-contract-status">' + escapeHtml(record.contractStatus || 'Status not listed') + '</span>';
    html += '</div>';
    html += '<h4>' + escapeHtml(record.vendorOrganizationName || 'Vendor / Organization not listed') + '</h4>';
    html += '<dl class="foia-contract-field-list">';
    html += renderFoiaField('Vendor / Organization Name', record.vendorOrganizationName);
    html += renderFoiaField('Contract Title', renderFoiaContractTitle(record, 'Not publicly listed'), true);
    html += renderFoiaField('Industry Tag', industry);
    html += renderFoiaField('Award Amount', record.awardAmountDisplay);
    html += renderFoiaField('Agency', record.agencyDepartment);
    html += renderFoiaField('Contract Status', record.contractStatus);
    html += renderFoiaField('Contract Period', record.contractPeriod);
    html += renderFoiaField('Source', record.source);
    html += renderFoiaField('Source Link', renderFoiaSourceLink(record, 'Open public record'), true);
    html += renderFoiaField('Verification Badge', '<span class="foia-verification ' + verificationClass + '">' + escapeHtml(verification) + '</span>', true);
    html += '</dl>';
    html += '</article>';
    return html;
}

function renderFoiaContractCards(records) {
    return '<div class="resource-cards-grid foia-contract-card-grid">' + records.map(renderFoiaContractCard).join('') + '</div>';
}

function renderFoiaContractTable(records) {
    var html = '<div class="resource-table-wrapper foia-contract-table-wrapper"><table class="resource-table foia-contract-table"><thead><tr>';
    [
        'Vendor / Organization',
        'Contract Title',
        'Industry',
        'Contract Type',
        'Award Amount',
        'Agency',
        'Status',
        'Contract Period',
        'Source',
        'Verification'
    ].forEach(function(label) {
        html += '<th scope="col">' + escapeHtml(label) + '</th>';
    });
    html += '</tr></thead><tbody>';
    records.forEach(function(record) {
        var industry = normalizeFoiaIndustrySegment(record.industrySegment);
        var verification = normalizeFoiaVerificationStatus(record.verificationStatus);
        var verificationClass = getFoiaVerificationClass(record.verificationStatus);
        html += '<tr>';
        html += '<td data-label="Vendor / Organization">' + escapeHtml(record.vendorOrganizationName || '—') + '</td>';
        html += '<td data-label="Contract Title">' + renderFoiaContractTitle(record, '—') + '</td>';
        html += '<td data-label="Industry">' + escapeHtml(industry || '—') + '</td>';
        html += '<td data-label="Contract Type">' + escapeHtml(record.contractType || '—') + '</td>';
        html += '<td data-label="Award Amount">' + escapeHtml(record.awardAmountDisplay || '—') + '</td>';
        html += '<td data-label="Agency">' + escapeHtml(record.agencyDepartment || '—') + '</td>';
        html += '<td data-label="Status">' + escapeHtml(record.contractStatus || '—') + '</td>';
        html += '<td data-label="Contract Period">' + escapeHtml(record.contractPeriod || '—') + '</td>';
        html += '<td data-label="Source">' + renderFoiaSourceLink(record, record.source || 'Open source') + '</td>';
        html += '<td data-label="Verification"><span class="foia-verification ' + verificationClass + '">' + escapeHtml(verification) + '</span></td>';
        html += '</tr>';
    });
    html += '</tbody></table></div>';
    return html;
}

function updateFoiaContractBodyHeight(force) {
    var controls = getFoiaContractControls();
    if (!controls.panel || !controls.body || controls.body.hidden) { return; }
    if (!force && controls.panel.classList.contains('collapsed')) { return; }
    controls.body.style.setProperty('--foia-contract-body-height', controls.body.scrollHeight + 'px');
}

function renderFoiaContractData() {
    var controls = getFoiaContractControls();
    if (!controls.results) { return; }

    if (!foiaContractState.hasLoaded && !foiaContractState.loading) {
        if (controls.count) { controls.count.textContent = '0'; }
        if (controls.summary) { controls.summary.textContent = 'Expand this section to load verified public contract data.'; }
        if (controls.note) { controls.note.textContent = ''; }
        controls.results.innerHTML = '<div class="foia-contract-empty">Expand this section to load verified public contract data.</div>';
        return;
    }

    var filtered = getFoiaFilteredContracts();
    var total = foiaContractState.records.length;
    var sourceLabel = foiaContractState.sourceLabel || getFoiaSelectedSourceLabel(controls.source);
    if (controls.count) { controls.count.textContent = String(filtered.length); }
    if (controls.note) { controls.note.textContent = foiaContractState.retrievalNote || ''; }

    if (foiaContractState.loading) {
        if (controls.summary) {
            controls.summary.textContent = 'Retrieving verified public contract data from ' + sourceLabel + '.';
        }
        controls.results.innerHTML = '<div class="foia-contract-loading">Loading verified public contract data...</div>';
        updateFoiaContractBodyHeight(true);
        return;
    }

    if (foiaContractState.error) {
        if (controls.summary) {
            controls.summary.textContent = 'Unable to retrieve verified public contract data from ' + sourceLabel + '.';
        }
        controls.results.innerHTML = '<div class="foia-contract-empty"><strong>' + escapeHtml(FOIA_CONTRACT_EMPTY_MESSAGE) + '</strong><p>' + escapeHtml(foiaContractState.error) + '</p></div>';
        updateFoiaContractBodyHeight(true);
        return;
    }

    if (!total || !filtered.length) {
        if (controls.summary) {
            controls.summary.textContent = total ? 'No records match the selected filters for ' + sourceLabel + '.' : 'No verified public contract data found for ' + sourceLabel + '.';
        }
        controls.results.innerHTML = '<div class="foia-contract-empty">' + escapeHtml(FOIA_CONTRACT_EMPTY_MESSAGE) + '</div>';
        updateFoiaContractBodyHeight(true);
        return;
    }

    if (controls.summary) {
        controls.summary.textContent = 'Showing ' + filtered.length + ' of ' + total + ' verified public contract records from ' + sourceLabel + '.';
    }
    controls.results.innerHTML = foiaContractView === 'table' ? renderFoiaContractTable(filtered) : renderFoiaContractCards(filtered);
    enforcePricingAnalysisLinkTargets(controls.results);
    refreshFoiaContractViewButtons();
    updateFoiaContractBodyHeight(true);
    if (typeof window.lucide !== 'undefined' && window.lucide && typeof window.lucide.createIcons === 'function') {
        try { window.lucide.createIcons(); } catch (e) {}
    }
}

function loadFoiaContractData() {
    var controls = getFoiaContractControls();
    if (!controls.source || !controls.results) { return; }
    var source = controls.source.value || 'usaspending';
    var token = foiaContractState.requestToken + 1;
    foiaContractState.requestToken = token;
    foiaContractState.source = source;
    foiaContractState.sourceLabel = getFoiaSelectedSourceLabel(controls.source);
    foiaContractState.records = [];
    foiaContractState.error = '';
    foiaContractState.loading = true;
    foiaContractState.hasLoaded = true;
    foiaContractState.retrievalNote = '';
    renderFoiaContractData();

    if (typeof fetch !== 'function') {
        foiaContractState.loading = false;
        foiaContractState.error = 'This browser cannot retrieve the public contract feed.';
        renderFoiaContractData();
        return;
    }

    fetch('/api/public-sector-contracts?source=' + encodeURIComponent(source), {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Public contract feed returned status ' + response.status + '.');
            }
            return response.json();
        })
        .then(function(payload) {
            if (token !== foiaContractState.requestToken) { return; }
            foiaContractState.loading = false;
            foiaContractState.sourceLabel = payload.sourceLabel || foiaContractState.sourceLabel;
            foiaContractState.retrievalNote = payload.retrievalNote || '';
            foiaContractState.generatedAt = payload.generatedAt || '';
            foiaContractState.records = Array.isArray(payload.records) ? payload.records : [];
            foiaContractState.error = payload.error || '';
            renderFoiaContractData();
        })
        .catch(function(error) {
            if (token !== foiaContractState.requestToken) { return; }
            foiaContractState.loading = false;
            foiaContractState.records = [];
            foiaContractState.error = error && error.message ? error.message : 'Unable to retrieve verified public contract data.';
            renderFoiaContractData();
        });
}

function handleFoiaContractSourceChange() {
    loadFoiaContractData();
}

function refreshFoiaContractViewButtons() {
    var controls = getFoiaContractControls();
    var isCard = foiaContractView !== 'table';
    if (controls.cardToggle) {
        controls.cardToggle.classList.toggle('active', isCard);
        controls.cardToggle.setAttribute('aria-pressed', isCard ? 'true' : 'false');
    }
    if (controls.tableToggle) {
        controls.tableToggle.classList.toggle('active', !isCard);
        controls.tableToggle.setAttribute('aria-pressed', isCard ? 'false' : 'true');
    }
}

function setFoiaContractView(view) {
    foiaContractView = view === 'table' ? 'table' : 'card';
    refreshFoiaContractViewButtons();
    renderFoiaContractData();
}

function resetFoiaContractFilters() {
    var controls = getFoiaContractControls();
    if (controls.search) { controls.search.value = ''; }
    if (controls.category) { controls.category.value = 'all'; }
    foiaContractView = 'card';
    refreshFoiaContractViewButtons();
    if (controls.source && controls.source.value !== 'usaspending') {
        controls.source.value = 'usaspending';
        loadFoiaContractData();
        return;
    }
    if (!foiaContractState.hasLoaded) {
        loadFoiaContractData();
        return;
    }
    renderFoiaContractData();
}

function toggleFoiaContractSection() {
    var controls = getFoiaContractControls();
    if (!controls.panel || !controls.body || !controls.toggle) { return; }
    var shouldCollapse = !controls.panel.classList.contains('collapsed');
    var icon = controls.toggle.querySelector('.pricing-summary-collapse-icon');
    if (shouldCollapse) {
        updateFoiaContractBodyHeight(true);
        controls.panel.classList.add('collapsed');
        controls.toggle.setAttribute('aria-expanded', 'false');
        controls.body.setAttribute('aria-hidden', 'true');
        controls.body.setAttribute('inert', '');
        if (controls.collapseLabel) { controls.collapseLabel.textContent = 'Expand'; }
        if (icon) { icon.textContent = '⌃'; }
        window.setTimeout(function() {
            if (controls.panel.classList.contains('collapsed')) {
                controls.body.hidden = true;
            }
        }, 360);
        return;
    }

    controls.body.hidden = false;
    controls.body.removeAttribute('inert');
    controls.body.setAttribute('aria-hidden', 'false');
    controls.toggle.setAttribute('aria-expanded', 'true');
    if (controls.collapseLabel) { controls.collapseLabel.textContent = 'Collapse'; }
    if (icon) { icon.textContent = '⌄'; }
    updateFoiaContractBodyHeight(true);
    window.requestAnimationFrame(function() {
        controls.panel.classList.remove('collapsed');
        updateFoiaContractBodyHeight(true);
        if (!foiaContractState.hasLoaded && !foiaContractState.loading) {
            loadFoiaContractData();
        }
    });
}

function initFoiaContractPricing() {
    var controls = getFoiaContractControls();
    if (!controls.panel || !controls.source) { return; }
    if (controls.source.getAttribute('data-foia-contract-ready') === 'true') {
        renderFoiaContractData();
        return;
    }
    controls.source.setAttribute('data-foia-contract-ready', 'true');
    controls.panel.classList.add('collapsed');
    if (controls.body) {
        controls.body.hidden = true;
        controls.body.setAttribute('aria-hidden', 'true');
        controls.body.setAttribute('inert', '');
    }
    if (controls.toggle) { controls.toggle.setAttribute('aria-expanded', 'false'); }
    if (controls.collapseLabel) { controls.collapseLabel.textContent = 'Expand'; }
    refreshFoiaContractViewButtons();
    renderFoiaContractData();
}
var MARKETING_RESOURCE_STORAGE_KEY = 'redactorMarketingResources.v1';
var marketingResourceView = 'card';
var marketingResources = [];
var marketingUploadedFiles = {};
var youtubeRedactionFilters = ['all'];
var blogCategoryFilters = ['all'];
var YOUTUBE_REDACTION_FILTERS = [
    { value: 'all', label: 'All' },
    { value: 'face', label: 'Face' },
    { value: 'license-plate', label: 'License Plate' },
    { value: 'people', label: 'People' },
    { value: 'vehicle', label: 'Vehicle' },
    { value: 'audio', label: 'Audio' },
    { value: 'custom', label: 'Custom' },
    { value: 'general', label: 'General' }
];
var YOUTUBE_REDACTION_TYPE_KEYWORD_MAP = [
    { value: 'face', label: 'Face / Head', keywords: ['face', 'faces', 'head', 'heads'] },
    { value: 'license-plate', label: 'License Plate', keywords: ['license plate', 'license plates', 'alpr', 'lpr', 'number plate'] },
    { value: 'people', label: 'People / Full Body', keywords: ['people', 'person', 'body', 'full body'] },
    { value: 'vehicle', label: 'Vehicle', keywords: ['vehicle', 'vehicles', 'car', 'cars', 'truck', 'trucks', 'bus', 'buses', 'motorcycle', 'motorcycles', 'motorbike', 'motorbikes'] },
    { value: 'audio', label: 'Audio / Speech', keywords: ['audio', 'speech', 'voice', 'transcribe', 'transcription', 'language', 'podcast'] },
    { value: 'custom', label: 'Custom / Manual', keywords: ['custom', 'manual', 'auto-tracking', 'tracking', 'invert selection', 'selection', 'static redaction', 'objects list', 'bounding boxes', 'style', 'mosaic', 'pixelate', 'fill'] },
    { value: 'general', label: 'General / Other', keywords: ['overview', 'install', 'webinar', 'live stream', 'security', 'surveillance', 'compliance', 'bulk', 'media', 'project', 'light mode', 'dark mode', 'auto detection'] }
];
/*
 * Blog category mapping logic:
 * - Blog posts keep the live title, URL, publish date, read time, and description parsed from https://www.redactor.com/blog.
 * - getBlogCategories() lowercases each post's title + description + notes and assigns every taxonomy category whose keyword rule matches.
 * - Keyword rules mirror the task taxonomy; keywords ending in "*" are prefix matches, and short terms such as "AI" and "ID" use word-boundary matching to avoid false positives.
 * - Blog category filters are client-side only: toggles update blogCategoryFilters in memory and re-render the pre-loaded marketingResources state without API calls.
 */
var BLOG_CATEGORY_RULES = [
    { value: 'industry-law-enforcement', label: 'Industry: Law Enforcement', keywords: ['police', 'law enforcement', 'bodycam', 'body-cam', 'body cam', 'dashcam', 'dash cam', 'foia', 'iacp', 'criminal', 'court', 'evidence'] },
    { value: 'industry-healthcare', label: 'Industry: Healthcare', keywords: ['hipaa', 'patient', 'medical', 'hospital', 'healthcare'] },
    { value: 'industry-education', label: 'Industry: Education', keywords: ['school', 'children', 'child', 'minor', 'student', 'campus'] },
    { value: 'industry-legal-ediscovery', label: 'Industry: Legal & eDiscovery', keywords: ['court', 'legal', 'ediscovery', 'e-discovery', 'chain of custody', 'admissib*', 'deposition', 'digital evidence', 'evidence handling'] },
    { value: 'industry-enterprise-corporate', label: 'Industry: Enterprise & Corporate', keywords: ['enterprise', 'enterprises', 'workplace', 'corporate', 'office', 'return to office', 'business', 'companies'] },
    { value: 'industry-transportation', label: 'Industry: Transportation', keywords: ['transit', 'transport', 'dashcam', 'dash cam', 'license plate', 'traffic', 'malta', 'gas station', 'vehicle'] },
    { value: 'industry-journalism-media', label: 'Industry: Journalism & Media', keywords: ['journalism', 'newsroom', 'tiktok', 'tik tok', 'media', 'public', 'surveillance'] },
    { value: 'redaction-face-head', label: 'Redaction Object: Face / Head', keywords: ['face', 'faces', 'head', 'heads', 'face blurring', 'cctv face'] },
    { value: 'redaction-license-plate', label: 'Redaction Object: License Plate', keywords: ['license plate', 'alpr', 'plate', 'blackout plate', 'blur plate'] },
    { value: 'redaction-people-body', label: 'Redaction Object: People / Body', keywords: ['people', 'person', 'full body', 'pedestrian'] },
    { value: 'redaction-audio-speech', label: 'Redaction Object: Audio / Speech', keywords: ['audio', 'speech', 'transcription', 'voice', 'mute', 'scramble'] },
    { value: 'redaction-documents-screens', label: 'Redaction Object: Documents & Screens', keywords: ['document', 'documents', 'id', 'ids', 'screen', 'screens', 'pii', 'image redaction', 'medical records'] },
    { value: 'new-release', label: 'New Release', keywords: ["what's new", 'what’s new', 'release', 'v4', 'v5', 'v6', 'v7', 'latest release', 'new version'] },
    { value: 'compliance-privacy-law', label: 'Compliance & Privacy Law', keywords: ['gdpr', 'ccpa', 'hipaa', 'foia', 'privacy law', 'privacy laws', 'regulation', 'regulations', 'compliance', 'data privacy'] },
    { value: 'how-to-best-practices', label: 'How-To & Best Practices', keywords: ['how to', 'guide', 'best practices', 'tutorial', 'step-by-step', 'step by step', 'checklist', 'tips', 'understanding', 'what is', 'what are'] },
    { value: 'product-comparison-buying', label: 'Product Comparison & Buying', keywords: [' vs ', 'compare', 'comparison', 'top 5', 'top 6', 'questions to ask', 'choosing', 'buyer', 'buying'] },
    { value: 'ai-technology', label: 'AI & Technology', keywords: ['ai', 'machine learning', 'computer vision', 'deep learning', 'automated', 'automatic', 'automating', 'api', 'auto', 'bulk'] },
    { value: 'case-study', label: 'Case Study', keywords: ['case study'] },
    { value: 'webinar', label: 'Webinar', keywords: ['webinar', 'on-demand webinar'] }
];
var BLOG_CATEGORY_FILTERS = [{ value: 'all', label: 'All' }].concat(BLOG_CATEGORY_RULES.map(function(rule) {
    return { value: rule.value, label: rule.label };
}));

var marketingResourceCategories = [
    { value: 'website', label: 'Website Pages', icon: 'globe-2' },
    { value: 'blog', label: 'Blog Content', icon: 'newspaper' },
    { value: 'case-studies', label: 'Case Studies', icon: 'briefcase-business' },
    { value: 'datasheets', label: 'Datasheets / PDFs', icon: 'file-text' },
    { value: 'videos', label: 'YouTube Demo Videos', icon: 'play-circle' },
    { value: 'social', label: 'Social Media Links', icon: 'share-2' },
    { value: 'webinar', label: 'Webinar', icon: 'presentation' }
];
var marketingAssetLabels = {
    webpage: 'Website / Landing Page',
    blog: 'Blog Article',
    'case-study': 'Case Study',
    pdf: 'PDF / Datasheet',
    video: 'Video / Demo',
    social: 'Social Link',
    sales: 'Sales Asset',
    webinar: 'Webinar',
    file: 'Uploaded File',
    presentation: 'Presentation',
    document: 'Document'
};
var BLOG_SEED_RESOURCES = [
    { id: "seed-blog-how-courts-determine-audio-video-evidence-authenticity", title: "How Courts Determine if Audio or Video is Authentic", url: "https://www.redactor.com/blog/how-courts-determine-audio-video-evidence-authenticity", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn how U.S. courts authenticate audio and video evidence using FRE 901/902, chain of custody, hash checks, and forensic analysis.", description: "Learn how U.S. courts authenticate audio and video evidence using FRE 901/902, chain of custody, hash checks, and forensic analysis.", publishDate: "March 4, 2026", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-choosing-the-right-redaction-software-5-questions-to-ask", title: "5 Questions to Ask Before Choosing the Right Redaction Software", url: "https://www.redactor.com/blog/choosing-the-right-redaction-software-5-questions-to-ask", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Use these 5 questions to evaluate redaction software for accuracy, compliance, automation, and cost so you can choose the right tool for your team.", description: "Use these 5 questions to evaluate redaction software for accuracy, compliance, automation, and cost so you can choose the right tool for your team.", publishDate: "February 7, 2026", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-whats-new-in-redactor-v7", title: "What’s New in Redactor V7", url: "https://www.redactor.com/blog/whats-new-in-redactor-v7", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Redactor V7 introduces new auto-detection models for IDs, screens, and documents, plus audit logs, improved speech transcription, and offline performance upgrades.", description: "Redactor V7 introduces new auto-detection models for IDs, screens, and documents, plus audit logs, improved speech transcription, and offline performance upgrades.", publishDate: "January 21, 2026", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-surveillance-footage-patient-complaint-process", title: "What Happens to Surveillance Footage After a Patient Complaint?", url: "https://www.redactor.com/blog/surveillance-footage-patient-complaint-process", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "A patient filed a complaint and is demanding video evidence. Learn the step-by-step workflow to preserve, redact, and release surveillance footage without violating HIPAA.", description: "A patient filed a complaint and is demanding video evidence. Learn the step-by-step workflow to preserve, redact, and release surveillance footage without violating HIPAA.", publishDate: "August 6, 2025", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-the-role-of-redaction-in-workplace-incident-footage", title: "The Role of Redaction in Workplace Incident Footage", url: "https://www.redactor.com/blog/the-role-of-redaction-in-workplace-incident-footage", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Eliminate video backlogs with automated redaction. Learn how Sighthound Redactor’s API and batch processing scale privacy for high-volume environments", description: "Eliminate video backlogs with automated redaction. Learn how Sighthound Redactor’s API and batch processing scale privacy for high-volume environments", publishDate: "August 6, 2025", readTime: "17 min read", source: 'seed' },
    { id: "seed-blog-indiana-blackout-license-plates-privacy", title: "Indiana’s New Blackout Plates Are Here, But What About Privacy in Your Footage?", url: "https://www.redactor.com/blog/indiana-blackout-license-plates-privacy", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Indiana’s new blackout license plates look great on the road, but they also show up in dashcam, surveillance, and public records footage. Here’s what that means for privacy, compliance, and redaction workflows.", description: "Indiana’s new blackout license plates look great on the road, but they also show up in dashcam, surveillance, and public records footage. Here’s what that means for privacy, compliance, and redaction workflows.", publishDate: "July 23, 2025", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-automating-redaction-high-volume-environments", title: "Automating Redaction in High-Volume Environments", url: "https://www.redactor.com/blog/automating-redaction-high-volume-environments", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Eliminate video backlogs with automated redaction. Learn how Sighthound Redactor’s API and batch processing scale privacy for high-volume environments.", description: "Eliminate video backlogs with automated redaction. Learn how Sighthound Redactor’s API and batch processing scale privacy for high-volume environments.", publishDate: "June 25, 2025", readTime: "13 min read", source: 'seed' },
    { id: "seed-blog-redactor-desktop-vs-on-prem-vs-cloud-vs-api", title: "Redactor Desktop vs On-Prem vs Cloud vs API: Which Is Right for You?", url: "https://www.redactor.com/blog/redactor-desktop-vs-on-prem-vs-cloud-vs-api", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Compare Redactor Desktop, On-Prem, Private Cloud, and API solutions. Find the right video redaction deployment for your security mandates & workflow scale.", description: "Compare Redactor Desktop, On-Prem, Private Cloud, and API solutions. Find the right video redaction deployment for your security mandates & workflow scale.", publishDate: "June 11, 2025", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-containers-vs-codecs", title: "Containers vs Codecs", url: "https://www.redactor.com/blog/containers-vs-codecs", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Codec compresses, container packages. Use MP4 with H.264 for compatibility, or H.265 to cut half the size, and keep redaction workflows fast and portable.", description: "Codec compresses, container packages. Use MP4 with H.264 for compatibility, or H.265 to cut half the size, and keep redaction workflows fast and portable.", publishDate: "May 28, 2025", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-metadata-integrity-digital-evidence", title: "Why Metadata Integrity Is Critical in Digital Evidence Handling", url: "https://www.redactor.com/blog/metadata-integrity-digital-evidence", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn why metadata integrity defines admissibility in digital forensics and how Redactor fits into audit logs for secure, traceable evidence workflows.", description: "Learn why metadata integrity defines admissibility in digital forensics and how Redactor fits into audit logs for secure, traceable evidence workflows.", publishDate: "April 16, 2025", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-how-to-blur-license-plates-in-videos", title: "How to Blur License Plates in Video With Redactor", url: "https://www.redactor.com/blog/how-to-blur-license-plates-in-videos", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "License plate redaction needs a repeatable review path, not a one time blur over a single frame. Sighthound Redactor gives teams a workflow for video, image, and audio redaction. This guide walks through a practical pla…", description: "License plate redaction needs a repeatable review path, not a one time blur over a single frame. Sighthound Redactor gives teams a workflow for video, image, and audio redaction. This guide walks through a practical pla…", publishDate: "April 2, 2025", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-chain-of-custody-for-video-and-audio-evidence", title: "Why Chain of Custody Matters for Video & Audio Evidence in Court", url: "https://www.redactor.com/blog/chain-of-custody-for-video-and-audio-evidence", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn why maintaining a secure chain of custody for video and audio evidence is vital for legal admissibility, data integrity, and courtroom credibility.", description: "Learn why maintaining a secure chain of custody for video and audio evidence is vital for legal admissibility, data integrity, and courtroom credibility.", publishDate: "March 19, 2025", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-ai-redaction-law-enforcement-compliance", title: "Why AI Redaction is Becoming Essential for Government & Law Enforcement Compliance", url: "https://www.redactor.com/blog/ai-redaction-law-enforcement-compliance", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover why AI-powered redaction is becoming a critical compliance tool for government and law enforcement agencies. Learn how automated video redaction ensures privacy, speeds up FOIA requests, and protects sensitive data.", description: "Discover why AI-powered redaction is becoming a critical compliance tool for government and law enforcement agencies. Learn how automated video redaction ensures privacy, speeds up FOIA requests, and protects sensitive data.", publishDate: "March 5, 2025", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-the-chain-of-custody-problem-digital-evidence-handling", title: "The Chain of Custody Problem: Why Proper Digital Evidence Handling Matters", url: "https://www.redactor.com/blog/the-chain-of-custody-problem-digital-evidence-handling", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Chain of custody ensures the integrity of digital evidence in investigations. Learn how proper handling, tracking, and redaction help maintain legal admissibility.", description: "Chain of custody ensures the integrity of digital evidence in investigations. Learn how proper handling, tracking, and redaction help maintain legal admissibility.", publishDate: "February 19, 2025", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-whats-new-in-redactor-v6", title: "What’s New in Redactor V6", url: "https://www.redactor.com/blog/whats-new-in-redactor-v6", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Redactor V6 introduces AI-powered Head Detection, Audio-Only Redaction, and faster workflows with new keyboard shortcuts and folder support. See what’s new and how it improves your redaction process. Start a free trial today.", description: "Redactor V6 introduces AI-powered Head Detection, Audio-Only Redaction, and faster workflows with new keyboard shortcuts and folder support. See what’s new and how it improves your redaction process. Start a free trial today.", publishDate: "February 5, 2025", readTime: "10 min read", source: 'seed' },
    { id: "seed-blog-ai-vs-human-judgment-redaction", title: "AI vs Human Judgment in Redaction", url: "https://www.redactor.com/blog/ai-vs-human-judgment-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Can AI replace human judgment in redaction? Explore how automated tools speed up compliance workflows, and why human oversight still matters.", description: "Can AI replace human judgment in redaction? Explore how automated tools speed up compliance workflows, and why human oversight still matters.", publishDate: "January 22, 2025", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-privacy-compliant-video-redaction-law-enforcement", title: "How Law Enforcement Can Ensure Privacy-Compliant Video Redaction", url: "https://www.redactor.com/blog/privacy-compliant-video-redaction-law-enforcement", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn how law enforcement agencies can ensure privacy-compliant video redaction using AI tools. Discover best practices, legal requirements, & features to look for in a redaction solution.", description: "Learn how law enforcement agencies can ensure privacy-compliant video redaction using AI tools. Discover best practices, legal requirements, & features to look for in a redaction solution.", publishDate: "January 8, 2025", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-ai-video-redaction-for-enterprises", title: "Why Enterprises Are Turning to AI for Video Redaction (And Why It’s Now Essential)", url: "https://www.redactor.com/blog/ai-video-redaction-for-enterprises", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Enterprises rely on AI-powered video redaction software to protect privacy, ensure compliance, and reduce costs. Learn why corporate compliance AI tools are essential.", description: "Enterprises rely on AI-powered video redaction software to protect privacy, ensure compliance, and reduce costs. Learn why corporate compliance AI tools are essential.", publishDate: "December 24, 2024", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-gdpr-ccpa-video-surveillance-compliance", title: "Understanding the Complexities of GDPR and CCPA Compliance in Video Surveillance", url: "https://www.redactor.com/blog/gdpr-ccpa-video-surveillance-compliance", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn how GDPR and CCPA impact video surveillance, key compliance challenges, and best practices for businesses. Discover how AI-powered redaction ensures privacy.", description: "Learn how GDPR and CCPA impact video surveillance, key compliance challenges, and best practices for businesses. Discover how AI-powered redaction ensures privacy.", publishDate: "December 11, 2024", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-role-of-video-redaction-body-cam-footage-privacy", title: "The Role of Video Redaction in Ensuring Privacy for Body-Cam Footage", url: "https://www.redactor.com/blog/role-of-video-redaction-body-cam-footage-privacy", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn how AI-powered video redaction ensures privacy, compliance, and efficiency for body-cam footage. Discover best practices & legal insights.", description: "Learn how AI-powered video redaction ensures privacy, compliance, and efficiency for body-cam footage. Discover best practices & legal insights.", publishDate: "November 27, 2024", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-top-redaction-software-features-to-prioritize", title: "Top 5 Redaction Software Features You Should Prioritize in 2025", url: "https://www.redactor.com/blog/top-redaction-software-features-to-prioritize", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover the top 5 redaction software features that ensure AI-powered privacy, data security, and compliance with GDPR, FOIA, HIPAA, and more.", description: "Discover the top 5 redaction software features that ensure AI-powered privacy, data security, and compliance with GDPR, FOIA, HIPAA, and more.", publishDate: "November 13, 2024", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-can-ai-solve-privacy-dilemma-public-surveillance", title: "Can AI Solve the Privacy Dilemma in Public Surveillance?", url: "https://www.redactor.com/blog/can-ai-solve-privacy-dilemma-public-surveillance", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore how AI-powered technology enhances privacy in public surveillance, balancing data security with compliance. Discover AI solutions like video redaction and anonymization to protect sensitive information without sacrificing safety.", description: "Explore how AI-powered technology enhances privacy in public surveillance, balancing data security with compliance. Discover AI solutions like video redaction and anonymization to protect sensitive information without sacrificing safety.", publishDate: "October 30, 2024", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-why-companies-should-blur-license-plates-public-footage", title: "Why Companies Should Blur License Plates in Public Footage", url: "https://www.redactor.com/blog/why-companies-should-blur-license-plates-public-footage", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn why blurring license plates in public footage is essential for privacy compliance, security, and customer trust. Discover how Sighthound’s AI-powered redaction software automates license plate and face blurring to protect PII and meet data privacy laws.", description: "Learn why blurring license plates in public footage is essential for privacy compliance, security, and customer trust. Discover how Sighthound’s AI-powered redaction software automates license plate and face blurring to protect PII and meet data privacy laws.", publishDate: "October 16, 2024", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-automate-compliance-ai-redaction-tools", title: "How to Automate Compliance with AI-Powered Redaction Tools", url: "https://www.redactor.com/blog/automate-compliance-ai-redaction-tools", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn how to automate compliance using AI-powered redaction tools. Discover strategies for meeting GDPR, HIPAA, and CCPA regulations, with actionable steps for streamlined privacy protection in video and image data.", description: "Learn how to automate compliance using AI-powered redaction tools. Discover strategies for meeting GDPR, HIPAA, and CCPA regulations, with actionable steps for streamlined privacy protection in video and image data.", publishDate: "October 2, 2024", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-ai-in-school-safety", title: "The Role of AI in School Safety", url: "https://www.redactor.com/blog/ai-in-school-safety", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how AI transforms school safety with intelligent surveillance, threat detection & privacy-first tools like edge AI and redaction.", description: "Discover how AI transforms school safety with intelligent surveillance, threat detection & privacy-first tools like edge AI and redaction.", publishDate: "September 18, 2024", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-protecting-minor-privacy-with-redaction-tools", title: "How Redaction Tools Help Protect Children’s Privacy", url: "https://www.redactor.com/blog/protecting-minor-privacy-with-redaction-tools", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Schools, media, and security teams use AI redaction tools to protect children’s identities in video footage. Learn how it works and why it matters.", description: "Schools, media, and security teams use AI redaction tools to protect children’s identities in video footage. Learn how it works and why it matters.", publishDate: "September 4, 2024", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-benefits-digital-evidence-management-ediscovery", title: "Benefits of Digital Evidence Management Systems for E-Discovery", url: "https://www.redactor.com/blog/benefits-digital-evidence-management-ediscovery", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how Digital Evidence Management Systems make the e-Discovery process easier with automation, AI-powered redaction, and enhanced security. Learn how Sighthound Redactor improves efficiency and privacy compliance in legal workflows. Start your free trial today!", description: "Discover how Digital Evidence Management Systems make the e-Discovery process easier with automation, AI-powered redaction, and enhanced security. Learn how Sighthound Redactor improves efficiency and privacy compliance in legal workflows. Start your free trial today!", publishDate: "August 21, 2024", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-iacp-guidelines-digital-evidence-management", title: "Understanding IACP Guidelines for Digital Evidence Management", url: "https://www.redactor.com/blog/iacp-guidelines-digital-evidence-management", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore the IACP guidelines for digital evidence management and discover how Sighthound Redactor helps law enforcement agencies comply with these standards, ensuring efficient and secure handling of digital evidence. Get started with a free trial today!", description: "Explore the IACP guidelines for digital evidence management and discover how Sighthound Redactor helps law enforcement agencies comply with these standards, ensuring efficient and secure handling of digital evidence. Get started with a free trial today!", publishDate: "August 7, 2024", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-how-redaction-software-improves-police-reporting", title: "How Redaction Software Can Help Improve Police Reporting", url: "https://www.redactor.com/blog/how-redaction-software-improves-police-reporting", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how redaction software makes police reporting easier by protecting sensitive information, ensuring legal compliance, and building public trust in law enforcement. Learn more about the benefits of automated redaction tools.", description: "Discover how redaction software makes police reporting easier by protecting sensitive information, ensuring legal compliance, and building public trust in law enforcement. Learn more about the benefits of automated redaction tools.", publishDate: "July 27, 2024", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-bulk-audio-redaction-compliance", title: "How Bulk Audio Redaction Software Ensures Compliance and Data Privacy", url: "https://www.redactor.com/blog/bulk-audio-redaction-compliance", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn how bulk audio redaction software helps organizations comply with privacy regulations like GDPR and HIPAA. Discover the role of AI-powered redaction tools in protecting sensitive data in media files. Explore key benefits, compliance solutions, and the efficiency of Sighthound Redactor for bulk redaction needs.", description: "Learn how bulk audio redaction software helps organizations comply with privacy regulations like GDPR and HIPAA. Discover the role of AI-powered redaction tools in protecting sensitive data in media files. Explore key benefits, compliance solutions, and the efficiency of Sighthound Redactor for bulk redaction needs.", publishDate: "July 10, 2024", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-best-practices-chain-of-custody-digital-evidence", title: "Best Practices for Chain of Custody in Digital Evidence", url: "https://www.redactor.com/blog/best-practices-chain-of-custody-digital-evidence", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Protect the integrity of your digital evidence with proper chain of custody protocols. Here's what legal teams and agencies need to know.", description: "Protect the integrity of your digital evidence with proper chain of custody protocols. Here's what legal teams and agencies need to know.", publishDate: "June 26, 2024", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-heritage-school-sighthound-redactor-case-study", title: "Case Study: The Heritage School", url: "https://www.redactor.com/blog/heritage-school-sighthound-redactor-case-study", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how Heritage School leveraged Sighthound Redactor to enhance campus security and ensure GDPR compliance. Read our case study on the transformative impact of advanced video redaction technology in educational institutions.", description: "Discover how Heritage School leveraged Sighthound Redactor to enhance campus security and ensure GDPR compliance. Read our case study on the transformative impact of advanced video redaction technology in educational institutions.", publishDate: "June 19, 2024", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-dash-cam-footage-legal-evidence-guide", title: "Is Dash Cam Footage Legal Evidence? What You Should Know", url: "https://www.redactor.com/blog/dash-cam-footage-legal-evidence-guide", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Wondering if your dash cam footage holds up in court? Learn how to make it legally admissible, protect privacy, and use redaction the right way.", description: "Wondering if your dash cam footage holds up in court? Learn how to make it legally admissible, protect privacy, and use redaction the right way.", publishDate: "June 12, 2024", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-audio-redaction-software-legal-compliance", title: "Ultimate Guide to Audio Redaction Software for Legal Compliance", url: "https://www.redactor.com/blog/audio-redaction-software-legal-compliance", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how automated audio redaction software ensures data privacy, compliance with laws like HIPAA & GDPR, and protects sensitive information at scale", description: "Discover how automated audio redaction software ensures data privacy, compliance with laws like HIPAA & GDPR, and protects sensitive information at scale", publishDate: "May 29, 2024", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-video-redaction-for-emergency-response-centers", title: "Why Video Redaction is Crucial for Modern Emergency Response Centers", url: "https://www.redactor.com/blog/video-redaction-for-emergency-response-centers", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover the importance of video redaction in emergency response centers. Learn how Sighthound Redactor's AI-powered software enhances privacy protection, compliance, and public trust. Try our free trial today!", description: "Discover the importance of video redaction in emergency response centers. Learn how Sighthound Redactor's AI-powered software enhances privacy protection, compliance, and public trust. Try our free trial today!", publishDate: "May 15, 2024", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-how-to-manage-pii-in-images-gdpr-privacy-laws-compliance", title: "How to Manage PII in Images for GDPR and Privacy Laws Compliance", url: "https://www.redactor.com/blog/how-to-manage-pii-in-images-gdpr-privacy-laws-compliance", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn how to manage Personally Identifiable Information in images and videos to comply with GDPR and privacy laws. Discover the importance of redaction software, AI-powered features, and automated tools to protect sensitive data and avoid hefty fines.", description: "Learn how to manage Personally Identifiable Information in images and videos to comply with GDPR and privacy laws. Discover the importance of redaction software, AI-powered features, and automated tools to protect sensitive data and avoid hefty fines.", publishDate: "May 1, 2024", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-on-premise-vs-cloud-base-redaction", title: "Understanding On-Premise vs. Cloud Base Redaction", url: "https://www.redactor.com/blog/on-premise-vs-cloud-base-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore the differences between on-premise and cloud-based redaction solutions. Learn about their advantages, drawbacks, and how to choose the right one for your organization's data security and compliance needs. Contact Sighthound for a personalized consultation and demo.", description: "Explore the differences between on-premise and cloud-based redaction solutions. Learn about their advantages, drawbacks, and how to choose the right one for your organization's data security and compliance needs. Contact Sighthound for a personalized consultation and demo.", publishDate: "April 17, 2024", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-privacy-compliance-image-audio-redaction", title: "[On-Demand Webinar] Privacy Compliance Beyond Words: Image and Audio Redaction", url: "https://www.redactor.com/blog/privacy-compliance-image-audio-redaction", category: 'webinar', assetType: 'webinar', funnel: 'TOFU', tag: 'Webinar', notes: "Get insights from exclusive Redactor webinar exploring cutting-edge image and audio redaction techniques to ensure privacy compliance. Discover how Sighthound’s advanced tools can transform your data protection strategy and keep you ahead of regulatory curves.", description: "Get insights from exclusive Redactor webinar exploring cutting-edge image and audio redaction techniques to ensure privacy compliance. Discover how Sighthound’s advanced tools can transform your data protection strategy and keep you ahead of regulatory curves.", publishDate: "April 16, 2024", readTime: "2 min read", source: 'seed', isWebinar: true },
    { id: "seed-blog-protecting-privacy-digital-age-tips", title: "Digital Privacy: Top Tools & Tips to Protect Yourself Online", url: "https://www.redactor.com/blog/protecting-privacy-digital-age-tips", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Worried about your digital footprint? Get practical privacy tips and explore AI-powered redaction tools to protect your personal information.", description: "Worried about your digital footprint? Get practical privacy tips and explore AI-powered redaction tools to protect your personal information.", publishDate: "March 20, 2024", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-journalism-redaction-protecting-identities-newsroom", title: "Redaction in Journalism: Protecting Identities in the Newsroom", url: "https://www.redactor.com/blog/journalism-redaction-protecting-identities-newsroom", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore the crucial role of redaction in journalism with our comprehensive guide. Learn how tools like Sighthound Redactor safeguard identities, comply with privacy laws and uphold the integrity of investigative reporting.", description: "Explore the crucial role of redaction in journalism with our comprehensive guide. Learn how tools like Sighthound Redactor safeguard identities, comply with privacy laws and uphold the integrity of investigative reporting.", publishDate: "March 6, 2024", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-gdpr-compliance-image-video-mistakes-to-avoid", title: "GDPR Fines: Top 5 Image and Video Compliance Mistakes to Avoid", url: "https://www.redactor.com/blog/gdpr-compliance-image-video-mistakes-to-avoid", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover the top 5 GDPR compliance mistakes in handling image and video data and learn how to avoid hefty fines. Our expert guide delves into crucial areas like consent, data anonymization, security, and more. Stay GDPR-compliant with Sighthound Redactor.", description: "Discover the top 5 GDPR compliance mistakes in handling image and video data and learn how to avoid hefty fines. Our expert guide delves into crucial areas like consent, data anonymization, security, and more. Stay GDPR-compliant with Sighthound Redactor.", publishDate: "February 21, 2024", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-role-of-redaction-in-law-enforcement", title: "The Role of Redaction in Law Enforcement", url: "https://www.redactor.com/blog/role-of-redaction-in-law-enforcement", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore the essential role of redaction in law enforcement with our in-depth look at Sighthound Redactor. Learn how this cutting-edge tool enhances efficiency, ensures privacy compliance, and upholds ethical standards in digital evidence management. Discover a smarter approach to policing in the digital age.", description: "Explore the essential role of redaction in law enforcement with our in-depth look at Sighthound Redactor. Learn how this cutting-edge tool enhances efficiency, ensures privacy compliance, and upholds ethical standards in digital evidence management. Discover a smarter approach to policing in the digital age.", publishDate: "January 25, 2024", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-gdpr-video-redaction-guide", title: "The Ultimate Guide to GDPR Compliance with Automated Video Redaction", url: "https://www.redactor.com/blog/gdpr-video-redaction-guide", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore our comprehensive guide on achieving GDPR compliance with automated video redaction. Discover how AI-driven technology revolutionizes data privacy in law enforcement, enhancing efficiency and trust.", description: "Explore our comprehensive guide on achieving GDPR compliance with automated video redaction. Discover how AI-driven technology revolutionizes data privacy in law enforcement, enhancing efficiency and trust.", publishDate: "January 10, 2024", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-how-audio-transcription-revolutionizes-video-analysis", title: "How Audio Transcription Revolutionizes Video Analysis", url: "https://www.redactor.com/blog/how-audio-transcription-revolutionizes-video-analysis", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "We explore how audio transcription is transforming video analysis across various industries, unlocking hidden insights, and enhancing workflows.", description: "We explore how audio transcription is transforming video analysis across various industries, unlocking hidden insights, and enhancing workflows.", publishDate: "December 21, 2023", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-us-privacy-laws-2023-guide", title: "Easy Guide to US Privacy Laws in 2023", url: "https://www.redactor.com/blog/us-privacy-laws-2023-guide", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Stay up-to-date with the latest US privacy and data protection laws, from state laws to 2023 emerging trends, and comply with ease using our quick and easy guide.", description: "Stay up-to-date with the latest US privacy and data protection laws, from state laws to 2023 emerging trends, and comply with ease using our quick and easy guide.", publishDate: "December 18, 2023", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-how-to-integrate-redaction-api-for-security-footage-privacy", title: "How To Integrate Redaction API to Ensure Privacy of Your Security Footage", url: "https://www.redactor.com/blog/how-to-integrate-redaction-api-for-security-footage-privacy", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how to enhance the privacy and security of your surveillance footage with our comprehensive guide on integrating Redactor API. Learn step-by-step installation, configuration, and deployment for effective, automated video redaction.", description: "Discover how to enhance the privacy and security of your surveillance footage with our comprehensive guide on integrating Redactor API. Learn step-by-step installation, configuration, and deployment for effective, automated video redaction.", publishDate: "December 13, 2023", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-protect-videos-lawsuits-privacy-redactor-api", title: "Protect Your Videos from Lawsuits and Privacy Violations Using Redactor API", url: "https://www.redactor.com/blog/protect-videos-lawsuits-privacy-redactor-api", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how Redactor API safeguards your video content from legal issues and privacy breaches. Streamline your workflow with our precise, automated redaction tool and ensure GDPR, CCPA, and HIPAA compliance with ease.", description: "Discover how Redactor API safeguards your video content from legal issues and privacy breaches. Streamline your workflow with our precise, automated redaction tool and ensure GDPR, CCPA, and HIPAA compliance with ease.", publishDate: "November 15, 2023", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-how-to-redact-sensitive-visual-evidence-for-court", title: "How to Redact Sensitive Visual Evidence for Court Proceedings", url: "https://www.redactor.com/blog/how-to-redact-sensitive-visual-evidence-for-court", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover the essential guide to redact sensitive visual evidence for court proceedings. Learn how AI-powered technology can streamline your legal processes, ensure compliance, and protect privacy.", description: "Discover the essential guide to redact sensitive visual evidence for court proceedings. Learn how AI-powered technology can streamline your legal processes, ensure compliance, and protect privacy.", publishDate: "November 1, 2023", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-top-6-video-redaction-softwares-for-enterprises", title: "Top 6 Video Redaction Softwares for Enterprises", url: "https://www.redactor.com/blog/top-6-video-redaction-softwares-for-enterprises", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore the top 6 video redaction software solutions that are suitable for enterprise use. See how they work, and highlight their mechanics and significance.", description: "Explore the top 6 video redaction software solutions that are suitable for enterprise use. See how they work, and highlight their mechanics and significance.", publishDate: "October 25, 2023", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-patient-privacy-medical-records-images", title: "Ensuring Patient Privacy in Medical Records and Images", url: "https://www.redactor.com/blog/patient-privacy-medical-records-images", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore the imperative of patient privacy in the digital age of medical studies. Dive into the challenges, regulatory landscape, and the transformative role of redaction tools in safeguarding medical records and images.", description: "Explore the imperative of patient privacy in the digital age of medical studies. Dive into the challenges, regulatory landscape, and the transformative role of redaction tools in safeguarding medical records and images.", publishDate: "October 5, 2023", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-whats-new-in-redactor-v5-2023", title: "What’s New In Redactor V5.0", url: "https://www.redactor.com/blog/whats-new-in-redactor-v5-2023", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover the revolutionary enhancements in Redactor V5. Dive into cutting-edge video and audio redaction features, transcription, speech panel, seamless user experience, and easy integration capabilities.", description: "Discover the revolutionary enhancements in Redactor V5. Dive into cutting-edge video and audio redaction features, transcription, speech panel, seamless user experience, and easy integration capabilities.", publishDate: "September 28, 2023", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-audio-recordings-admissibility-in-court", title: "Are Audio Recordings Admissible in Court?", url: "https://www.redactor.com/blog/audio-recordings-admissibility-in-court", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Find out when and how audio recordings can be used as legal evidence. Learn key courtroom rules and real-world examples.", description: "Find out when and how audio recordings can be used as legal evidence. Learn key courtroom rules and real-world examples.", publishDate: "September 20, 2023", readTime: "10 min read", source: 'seed' },
    { id: "seed-blog-everything-you-need-to-know-about-redaction", title: "Everything You Need to Know About Redaction", url: "https://www.redactor.com/blog/everything-you-need-to-know-about-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Redaction protects sensitive information in media before it is shared, reviewed, stored, or released.", description: "Redaction protects sensitive information in media before it is shared, reviewed, stored, or released.", publishDate: "September 7, 2023", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-how-big-data-changing-police-video-redaction", title: "How Big Data Is Changing the Way Police Redact Video Footage", url: "https://www.redactor.com/blog/how-big-data-changing-police-video-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how the convergence of big data and advanced AI solutions is reshaping the landscape of police video redaction. Explore technology shapes privacy protection and accountability in law enforcement.", description: "Discover how the convergence of big data and advanced AI solutions is reshaping the landscape of police video redaction. Explore technology shapes privacy protection and accountability in law enforcement.", publishDate: "August 23, 2023", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-first-amendment-right-to-release-video-redaction", title: "First Amendment Right, and the Essential Role of Video Redaction", url: "https://www.redactor.com/blog/first-amendment-right-to-release-video-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Understand the importance of video redaction in the context of the First Amendment and video release rights. Discover how it's more than just a legal requirement, but an ethical necessity in our digital age.", description: "Understand the importance of video redaction in the context of the First Amendment and video release rights. Discover how it's more than just a legal requirement, but an ethical necessity in our digital age.", publishDate: "August 2, 2023", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-video-redaction-reporting-undercover-investigations", title: "How Video Redaction Protects Privacy in Undercover Investigations", url: "https://www.redactor.com/blog/video-redaction-reporting-undercover-investigations", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover the critical role of video redaction in safeguarding privacy of your witnesses and leads during undercover investigations. Learn how advanced machine learning algorithms automatically blur sensitive details, empowering law enforcement agencies to operate with confidence and uphold confidentiality.", description: "Discover the critical role of video redaction in safeguarding privacy of your witnesses and leads during undercover investigations. Learn how advanced machine learning algorithms automatically blur sensitive details, empowering law enforcement agencies to operate with confidence and uphold confidentiality.", publishDate: "July 26, 2023", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-best-practices-recording-school-events-protecting-childrens-privacy", title: "Best Practices for Recording School Events & Protecting Children’s Privacy", url: "https://www.redactor.com/blog/best-practices-recording-school-events-protecting-childrens-privacy", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how schools can capture cherished memories while prioritizing the privacy of children. Explore the role of security video redaction in maintaining a delicate balance.", description: "Discover how schools can capture cherished memories while prioritizing the privacy of children. Explore the role of security video redaction in maintaining a delicate balance.", publishDate: "June 28, 2023", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-european-commission-refocus-gdpr-compliance-investigations", title: "European Commission Tightens Focus on GDPR Compliance", url: "https://www.redactor.com/blog/european-commission-refocus-gdpr-compliance-investigations", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "As the EU intensifies GDPR enforcement and cross-border oversight, here’s what organizations need to know and how AI-powered redaction helps meet compliance obligations.", description: "As the EU intensifies GDPR enforcement and cross-border oversight, here’s what organizations need to know and how AI-powered redaction helps meet compliance obligations.", publishDate: "June 7, 2023", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-gdpr-and-the-future-of-artificial-intelligence-implications-for-chatgpt-and-beyond", title: "GDPR and the Future of Artificial Intelligence: Implications for ChatGPT and Beyond", url: "https://www.redactor.com/blog/gdpr-and-the-future-of-artificial-intelligence-implications-for-chatgpt-and-beyond", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore the impact of GDPR on ChatGPT and the future of artificial intelligence. Discover the evolving landscape of privacy-enhancing technologies, data privacy and AI compliance.", description: "Explore the impact of GDPR on ChatGPT and the future of artificial intelligence. Discover the evolving landscape of privacy-enhancing technologies, data privacy and AI compliance.", publishDate: "May 31, 2023", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-is-blurring-license-plates-a-violation-of-foia", title: "Is Blurring License Plates a FOIA Violation?", url: "https://www.redactor.com/blog/is-blurring-license-plates-a-violation-of-foia", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Public agencies often face a difficult choice when releasing video records: obscure visible vehicle details or risk exposing private citizen data. Blurring a license plate is not automatically a violation of public reco…", description: "Public agencies often face a difficult choice when releasing video records: obscure visible vehicle details or risk exposing private citizen data. Blurring a license plate is not automatically a violation of public reco…", publishDate: "May 23, 2023", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-selling-online-protect-your-privacy-with-video-redaction", title: "Selling Online? Protect Your Privacy with Video Redaction", url: "https://www.redactor.com/blog/selling-online-protect-your-privacy-with-video-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover how video redaction can safeguard your online business and customers by mitigating risks such as online fraud and cyberstalking. Protect your privacy effectively while selling online.", description: "Discover how video redaction can safeguard your online business and customers by mitigating risks such as online fraud and cyberstalking. Protect your privacy effectively while selling online.", publishDate: "May 10, 2023", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-digital-forensics-and-privacy-what-you-need-to-know", title: "How Digital Forensics and AI Protect Privacy in Investigations", url: "https://www.redactor.com/blog/digital-forensics-and-privacy-what-you-need-to-know", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore the role of digital forensics and AI in privacy-focused investigations. Learn how redaction tools support law enforcement and legal teams.", description: "Explore the role of digital forensics and AI in privacy-focused investigations. Learn how redaction tools support law enforcement and legal teams.", publishDate: "April 24, 2023", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-8-questions-you-should-ask-before-buying-video-redaction-software", title: "8 Questions Before Buying Video Redaction Software", url: "https://www.redactor.com/blog/8-questions-you-should-ask-before-buying-video-redaction-software", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "A practical buyer’s guide for teams comparing video redaction software before a privacy, legal, or public records release.", description: "A practical buyer’s guide for teams comparing video redaction software before a privacy, legal, or public records release.", publishDate: "April 17, 2023", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-why-video-redaction-software-is-a-necessity-for-any-modern-vms-ems", title: "Why Video Redaction Software Is a Necessity for Any Modern VMS/EMS | Redactor", url: "https://www.redactor.com/blog/why-video-redaction-software-is-a-necessity-for-any-modern-vms-ems", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Video management and evidence management systems hold sensitive footage that needs review before it is shared, archived, or released.", description: "Video management and evidence management systems hold sensitive footage that needs review before it is shared, archived, or released.", publishDate: "March 28, 2023", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-redactors-latest-release-4-5-includes-image-redaction-and-much-more", title: "Redactor’s Latest Release 4.5 includes Image Redaction and Much More", url: "https://www.redactor.com/blog/redactors-latest-release-4-5-includes-image-redaction-and-much-more", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "The Sighthound Redactor team is thrilled to share the latest major release of Redactor. This release delivers on one of the most requested features by now allowing users the ability to redact image files and much MORE!", description: "The Sighthound Redactor team is thrilled to share the latest major release of Redactor. This release delivers on one of the most requested features by now allowing users the ability to redact image files and much MORE!", publishDate: "March 27, 2023", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-return-to-office-trend-continues-are-you-creating-a-safe-workplace", title: "Return to Office Trend Continues - Are You Creating a Safe Workplace?", url: "https://www.redactor.com/blog/return-to-office-trend-continues-are-you-creating-a-safe-workplace", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "9 out of 10 companies want employees back in the office in 2023. Incentives are used to lure them back, but what can be done to create a safe workplace?", description: "9 out of 10 companies want employees back in the office in 2023. Incentives are used to lure them back, but what can be done to create a safe workplace?", publishDate: "March 8, 2023", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-redaction-tools-why-blur-out-license-plates-in-video", title: "Why Blur Out License Plates in Video?", url: "https://www.redactor.com/blog/redaction-tools-why-blur-out-license-plates-in-video", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn why blurring license plates is crucial for privacy, compliance, and public safety—especially under FOIA and GDPR laws.", description: "Learn why blurring license plates is crucial for privacy, compliance, and public safety—especially under FOIA and GDPR laws.", publishDate: "February 20, 2023", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-sighthound-reactors-latest-release-includes-bulk-deletion", title: "Sighthound Reactor’s Latest Release Includes Bulk Deletion", url: "https://www.redactor.com/blog/sighthound-reactors-latest-release-includes-bulk-deletion", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Sighthound Redactor has a new release available with version 4.4.5. This new release includes updates the Video Player, Object List, and more control for Redactor API users.", description: "Sighthound Redactor has a new release available with version 4.4.5. This new release includes updates the Video Player, Object List, and more control for Redactor API users.", publishDate: "February 13, 2023", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-what-is-cloud-based-video-redaction", title: "What is Cloud-based Video Redaction?", url: "https://www.redactor.com/blog/what-is-cloud-based-video-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Are you still using your own hardware for redaction purposes? Check out cloud-based video redaction for the newest solution.", description: "Are you still using your own hardware for redaction purposes? Check out cloud-based video redaction for the newest solution.", publishDate: "January 25, 2023", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-are-security-cameras-worth-it-cctv-business-cost-vs-benefit", title: "Are Security Cameras Worth It? CCTV Business Cost vs Benefit", url: "https://www.redactor.com/blog/are-security-cameras-worth-it-cctv-business-cost-vs-benefit", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Weighing up the cost vs benefit of CCTV for your business can be tough, but we’ve got the perfect guide for you.", description: "Weighing up the cost vs benefit of CCTV for your business can be tough, but we’ve got the perfect guide for you.", publishDate: "January 16, 2023", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-what-are-californias-privacy-laws-and-how-to-comply-with-ccpa", title: "What are California's Privacy Laws? And How to Comply With CCPA", url: "https://www.redactor.com/blog/what-are-californias-privacy-laws-and-how-to-comply-with-ccpa", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Are you complying with California’s privacy laws? Find out the latest rules and regulations before it’s too late.", description: "Are you complying with California’s privacy laws? Find out the latest rules and regulations before it’s too late.", publishDate: "January 9, 2023", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-video-surveillance-best-practices", title: "Video Surveillance Best Practices - CCTV Management Guide", url: "https://www.redactor.com/blog/video-surveillance-best-practices", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Set up smarter surveillance systems. Discover key tips to protect privacy, store footage securely, and meet compliance standards.", description: "Set up smarter surveillance systems. Discover key tips to protect privacy, store footage securely, and meet compliance standards.", publishDate: "December 16, 2022", readTime: "13 min read", source: 'seed' },
    { id: "seed-blog-is-your-school-safeguarding-your-childs-privacy", title: "Is Your School Safeguarding Your Child's Privacy?", url: "https://www.redactor.com/blog/is-your-school-safeguarding-your-childs-privacy", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Is your child’s privacy being protected at school? Discover how Sighthound Redactor can help schools comply with the law regarding surveillance footage.", description: "Is your child’s privacy being protected at school? Discover how Sighthound Redactor can help schools comply with the law regarding surveillance footage.", publishDate: "December 7, 2022", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-a-bodycam-footage-redaction-solution-customizable-for-a-range-of-uses", title: "A Bodycam Footage Redaction Solution Customizable for a Range of Uses", url: "https://www.redactor.com/blog/a-bodycam-footage-redaction-solution-customizable-for-a-range-of-uses", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Discover why video redaction software goes hand in hand with body cam solutions. It’s a must-have tool for privacy law compliance.", description: "Discover why video redaction software goes hand in hand with body cam solutions. It’s a must-have tool for privacy law compliance.", publishDate: "December 2, 2022", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-recording-tiktok-in-public-privacy-measures-you-should-know", title: "Recording TikTok In Public? Privacy Measures You Should Know", url: "https://www.redactor.com/blog/recording-tiktok-in-public-privacy-measures-you-should-know", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Posting public TikToks? Learn what laws apply when filming strangers, children, or private property — and how to stay compliant.", description: "Posting public TikToks? Learn what laws apply when filming strangers, children, or private property — and how to stay compliant.", publishDate: "November 23, 2022", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-redacting-videos-for-court", title: "Redacting Videos for Court", url: "https://www.redactor.com/blog/redacting-videos-for-court", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Redaction is a crucial part of the legal system. In order to keep evidence compliant with data privacy laws, continue reading about redacting videos for the court.", description: "Redaction is a crucial part of the legal system. In order to keep evidence compliant with data privacy laws, continue reading about redacting videos for the court.", publishDate: "November 17, 2022", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-cctv-video-storage-best-practices", title: "CCTV Video Storage Best Practices", url: "https://www.redactor.com/blog/cctv-video-storage-best-practices", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "One of the most important parts of a CCTV system is making sure you have a strategy for safely storing and sharing videos. To get the most out of your security system, check out these CCTV video storage best practices.", description: "One of the most important parts of a CCTV system is making sure you have a strategy for safely storing and sharing videos. To get the most out of your security system, check out these CCTV video storage best practices.", publishDate: "November 10, 2022", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-law-enforcement-leveraging-computer-vision-for-safety-and-privacy", title: "How Law Enforcement Uses AI for Public Safety & Privacy", url: "https://www.redactor.com/blog/law-enforcement-leveraging-computer-vision-for-safety-and-privacy", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Explore how law enforcement agencies are adopting AI and computer vision to enhance safety, speed up investigations, and protect personal privacy.", description: "Explore how law enforcement agencies are adopting AI and computer vision to enhance safety, speed up investigations, and protect personal privacy.", publishDate: "November 2, 2022", readTime: "9 min read", source: 'seed' },
    { id: "seed-blog-an-easy-guide-to-us-privacy-laws", title: "Easy Guide to US Privacy Laws [2026]", url: "https://www.redactor.com/blog/an-easy-guide-to-us-privacy-laws", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Privacy work gets hard when policy, media review, and release deadlines meet in one queue. A clear 2026 process helps teams find personally identifiable information (PII), apply redaction, and share files with less avoi…", description: "Privacy work gets hard when policy, media review, and release deadlines meet in one queue. A clear 2026 process helps teams find personally identifiable information (PII), apply redaction, and share files with less avoi…", publishDate: "October 17, 2022", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-why-gas-stations-need-security-cameras-redaction", title: "Why Gas Stations Need Security Cameras & Redaction", url: "https://www.redactor.com/blog/why-gas-stations-need-security-cameras-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Gas station security cameras reduce crime and protect staff—but redaction is key when sharing footage. Here's how to stay safe and privacy-compliant.", description: "Gas station security cameras reduce crime and protect staff—but redaction is key when sharing footage. Here's how to stay safe and privacy-compliant.", publishDate: "October 7, 2022", readTime: "8 min read", source: 'seed' },
    { id: "seed-blog-sighthound-redactor-release-4-4-2", title: "Sighthound Redactor Release - 4.4.2", url: "https://www.redactor.com/blog/sighthound-redactor-release-4-4-2", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "This release includes Dark Mode, enhancements to audio reaction tools, and a new way for users to submit feedback directly from the Sighthound application.", description: "This release includes Dark Mode, enhancements to audio reaction tools, and a new way for users to submit feedback directly from the Sighthound application.", publishDate: "October 2, 2022", readTime: "3 min read", source: 'seed' },
    { id: "seed-blog-case-study-surveillance-discovery", title: "Case Study: Surveillance Discovery", url: "https://www.redactor.com/blog/case-study-surveillance-discovery", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "This case study details the use of Sighthound Redactor by Surveillance Discovery to automate the review, security, and privacy of confidential information. The company uses Sighthound Redactor to anonymize images and videos and ensure that all collected data meets strict data privacy regulations.", description: "This case study details the use of Sighthound Redactor by Surveillance Discovery to automate the review, security, and privacy of confidential information. The company uses Sighthound Redactor to anonymize images and videos and ensure that all collected data meets strict data privacy regulations.", publishDate: "September 28, 2022", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-manual-vs-automated-redaction-solutions-which-is-better", title: "Manual vs Automated Redaction Solutions: Which is better?", url: "https://www.redactor.com/blog/manual-vs-automated-redaction-solutions-which-is-better", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "This article discusses the advantages and disadvantages of manual and automated redaction solutions.", description: "This article discusses the advantages and disadvantages of manual and automated redaction solutions.", publishDate: "September 22, 2022", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-case-study-transport-malta", title: "Case Study: Transport Malta", url: "https://www.redactor.com/blog/case-study-transport-malta", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "CCTV video redaction and GDPR compliance software case study in the public transportation sector. Read our latest case study here.", description: "CCTV video redaction and GDPR compliance software case study in the public transportation sector. Read our latest case study here.", publishDate: "August 24, 2022", readTime: "4 min read", source: 'seed' },
    { id: "seed-blog-redactor-cloud-is-here-what-you-need-to-know", title: "Redactor Cloud Is Here - What You Need to Know", url: "https://www.redactor.com/blog/redactor-cloud-is-here-what-you-need-to-know", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "The new cloud-based version of Redactor is here. The fastest, most accurate video redaction application available today is now in the cloud.", description: "The new cloud-based version of Redactor is here. The fastest, most accurate video redaction application available today is now in the cloud.", publishDate: "August 15, 2022", readTime: "2 min read", source: 'seed' },
    { id: "seed-blog-top-5-video-redaction-tools", title: "Top 5 Video Redaction Tools", url: "https://www.redactor.com/blog/top-5-video-redaction-tools", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "This article discusses five different video redaction technologies that are available today. We believe that each of these technologies has a unique set of qualities that make it a great fit for your needs.", description: "This article discusses five different video redaction technologies that are available today. We believe that each of these technologies has a unique set of qualities that make it a great fit for your needs.", publishDate: "August 5, 2022", readTime: "5 min read", source: 'seed' },
    { id: "seed-blog-best-practices-for-video-redaction", title: "Best Practices for Video Redaction", url: "https://www.redactor.com/blog/best-practices-for-video-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Read our detailed Video Redaction Best Practice Guidelines, which briefly covers everything you need to know on the topic, challenges and tools available to ease the process.", description: "Read our detailed Video Redaction Best Practice Guidelines, which briefly covers everything you need to know on the topic, challenges and tools available to ease the process.", publishDate: "July 26, 2022", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-why-do-organizations-need-face-blurring-software-for-cctv", title: "Why Organizations Use Face Blurring Software for CCTV", url: "https://www.redactor.com/blog/why-do-organizations-need-face-blurring-software-for-cctv", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Learn how face blurring software helps businesses meet privacy laws and protect identities captured on CCTV footage. Essential for public-facing environments.", description: "Learn how face blurring software helps businesses meet privacy laws and protect identities captured on CCTV footage. Essential for public-facing environments.", publishDate: "July 20, 2022", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-what-is-redaction", title: "What is Redaction", url: "https://www.redactor.com/blog/what-is-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "What is redaction, why is it important for sensitive records, and what are the processes and tools that can help you execute a successful project.", description: "What is redaction, why is it important for sensitive records, and what are the processes and tools that can help you execute a successful project.", publishDate: "July 12, 2022", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-five-ways-your-organization-can-avoid-a-gdpr-fine", title: "How to Avoid GDPR Fines From CCTV Footage", url: "https://www.redactor.com/blog/five-ways-your-organization-can-avoid-a-gdpr-fine", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Closed Circuit Television (CCTV) footage can create General Data Protection Regulation (GDPR) risk when collection, access, retention, or release steps are not controlled. A practical workflow helps teams reduce unsafe…", description: "Closed Circuit Television (CCTV) footage can create General Data Protection Regulation (GDPR) risk when collection, access, retention, or release steps are not controlled. A practical workflow helps teams reduce unsafe…", publishDate: "July 5, 2022", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-video-redaction-done-easy-with-sighthound-redactor", title: "Video Redaction Done Easy With Sighthound Redactor", url: "https://www.redactor.com/blog/video-redaction-done-easy-with-sighthound-redactor", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Video redaction is a technique used to redact sensitive information from video or audio. Learn how Sighthound Redactor makes redaction simple!", description: "Video redaction is a technique used to redact sensitive information from video or audio. Learn how Sighthound Redactor makes redaction simple!", publishDate: "June 1, 2022", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-irreversible-video-redaction-techniques-anonymisation", title: "Irreversible Video Redaction Techniques | Redactor", url: "https://www.redactor.com/blog/irreversible-video-redaction-techniques-anonymisation", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Irreversible video redaction is a release standard, not just a visual effect. The problem is simple: weak masking can leave enough visual context for later identification. A better workflow compares techniques, reviews…", description: "Irreversible video redaction is a release standard, not just a visual effect. The problem is simple: weak masking can leave enough visual context for later identification. A better workflow compares techniques, reviews…", publishDate: "May 10, 2022", readTime: "7 min read", source: 'seed' },
    { id: "seed-blog-the-importance-of-live-video-redaction", title: "The Importance of Live Video Redaction", url: "https://www.redactor.com/blog/the-importance-of-live-video-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Live video redaction has been driven by the need of clients to show or share footage in real time. This process is often done 'on the fly', meaning that it is done quickly and without much planning.", description: "Live video redaction has been driven by the need of clients to show or share footage in real time. This process is often done 'on the fly', meaning that it is done quickly and without much planning.", publishDate: "February 1, 2022", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-video-redaction-using-ai", title: "Video Redaction Using AI", url: "https://www.redactor.com/blog/video-redaction-using-ai", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "The AI system that drives Sighthound Redactor contains a state-of-the-art object detector that enables the software to discover individuals, faces, vehicles and license plates in a range of environments and circumstances.", description: "The AI system that drives Sighthound Redactor contains a state-of-the-art object detector that enables the software to discover individuals, faces, vehicles and license plates in a range of environments and circumstances.", publishDate: "January 31, 2022", readTime: "6 min read", source: 'seed' },
    { id: "seed-blog-what-is-video-redaction", title: "What is Video Redaction", url: "https://www.redactor.com/blog/what-is-video-redaction", category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'Blog', notes: "Video redaction allows you to edit out sensitive data from images and video in order to comply with Global Data Protection and Privacy Laws. Learn more about video redaction.", description: "Video redaction allows you to edit out sensitive data from images and video in order to comply with Global Data Protection and Privacy Laws. Learn more about video redaction.", publishDate: "January 11, 2022", readTime: "6 min read", source: 'seed' }
];

var MARKETING_SEED_RESOURCES = [
    { id: 'seed-redactor-home', title: 'Redactor Homepage', url: 'https://www.redactor.com/', category: 'website', assetType: 'webpage', funnel: 'TOFU', tag: 'Awareness', notes: 'Primary product homepage and messaging.', source: 'seed' },
    { id: 'seed-redactor-features', title: 'Redactor Product Overview', url: 'https://www.redactor.com/features', category: 'website', assetType: 'webpage', funnel: 'MOFU', tag: 'Product', notes: 'Feature and product overview for Redactor capabilities.', source: 'seed' },
    { id: 'seed-redactor-pricing', title: 'Redactor Pricing Page', url: 'https://www.redactor.com/pricing', category: 'website', assetType: 'webpage', funnel: 'BOFU', tag: 'Conversion', notes: 'Pricing and plan comparison page.', source: 'seed' },
    { id: 'seed-redactor-docs', title: 'Redactor Documentation', url: 'https://docs.redactor.com/', category: 'website', assetType: 'webpage', funnel: 'MOFU', tag: 'Docs', notes: 'Product documentation and system requirements.', source: 'seed' },
    { id: 'seed-redactor-faq', title: 'Redactor FAQ', url: 'https://www.redactor.com/faq', category: 'website', assetType: 'webpage', funnel: 'MOFU', tag: 'FAQ', notes: 'Frequently asked sales and support questions.', source: 'seed' },
    { id: 'seed-redactor-brochure', title: 'Redactor Brochure (Powered by Sighthound)', url: 'https://cdn.prod.website-files.com/61815a2f8dc169fcb7758fa8/6819111318fd95714ab6d51e_Faltech.ai%20Redactor%20Brochure%20%5BPowered%20by%20Sighthound%5D%20(1).pdf', category: 'datasheets', assetType: 'pdf', funnel: 'BOFU', tag: 'Datasheet', notes: 'Public Redactor brochure PDF linked from the homepage.', source: 'seed' },
    { id: 'seed-webinar-whats-new-in-redactor-v7', title: 'What’s New in Redactor V7', url: 'https://www.redactor.com/blog/whats-new-in-redactor-v7', category: 'webinar', assetType: 'webinar', funnel: 'TOFU', tag: 'Webinar', notes: 'Product update resource for the Redactor V7 release, surfaced in the webinar category for sales and marketing access.', publishDate: 'January 21, 2026', readTime: '8 min read', source: 'seed', isWebinar: true },
].concat(BLOG_SEED_RESOURCES, [
    { id: 'seed-case-surveillance-discovery', title: 'Case Study: Surveillance Discovery', url: 'https://www.redactor.com/post/case-study-surveillance-discovery', category: 'case-studies', assetType: 'case-study', funnel: 'BOFU', tag: 'Social proof', notes: 'Customer proof point for high-accuracy redaction.', source: 'seed' },
    { id: 'seed-case-bodycam', title: 'Bodycam Footage Redaction Case Study', url: 'https://www.redactor.com/blog/a-bodycam-footage-redaction-solution-customizable-for-a-range-of-uses', category: 'case-studies', assetType: 'case-study', funnel: 'BOFU', tag: 'Law enforcement', notes: 'Bodycam and evidence redaction customer story.', source: 'seed' },
    { id: 'seed-youtube-7lQzauchZiQ', title: "How to Keep One Person Visible While Redacting Others | Redactor Tutorial", url: "https://www.youtube.com/watch?v=7lQzauchZiQ", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "7lQzauchZiQ", thumbnail: "https://i.ytimg.com/vi/7lQzauchZiQ/hqdefault.jpg", publishDate: "Apr 22, 2026", viewCount: "11 views", duration: "1:47" },
    { id: 'seed-youtube-Wn307am44xs', title: "How to Install Sighthound Redactor Desktop", url: "https://www.youtube.com/watch?v=Wn307am44xs", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "Wn307am44xs", thumbnail: "https://i.ytimg.com/vi/Wn307am44xs/hqdefault.jpg", publishDate: "Dec 17, 2025", viewCount: "44 views", duration: "0:40" },
    { id: 'seed-youtube-fWkQNyP12m0', title: "Choosing the Right Redaction Style: Mosaic, Pixelate, Blur, Fill | Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=fWkQNyP12m0", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "fWkQNyP12m0", thumbnail: "https://i.ytimg.com/vi/fWkQNyP12m0/hqdefault.jpg", publishDate: "Sep 12, 2025", viewCount: "22 views", duration: "2:02" },
    { id: 'seed-youtube-_U5L-TC4i1A', title: "How to use Invert Selection in Sighthound Redactor | Beginner’s Guide", url: "https://www.youtube.com/watch?v=_U5L-TC4i1A", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "_U5L-TC4i1A", thumbnail: "https://i.ytimg.com/vi/_U5L-TC4i1A/hqdefault.jpg", publishDate: "Sep 12, 2025", viewCount: "9 views", duration: "1:26" },
    { id: 'seed-youtube-0aCvouJqVe4', title: "How to Redact Audio using Sighthound Redactor | Beginner’s Guide", url: "https://www.youtube.com/watch?v=0aCvouJqVe4", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "0aCvouJqVe4", thumbnail: "https://i.ytimg.com/vi/0aCvouJqVe4/hqdefault.jpg", publishDate: "Aug 26, 2025", viewCount: "18 views", duration: "2:23" },
    { id: 'seed-youtube-cR6KOL5WG-E', title: "How to Redact Audio in a Video using Sighthound Redactor | Beginner’s Guide", url: "https://www.youtube.com/watch?v=cR6KOL5WG-E", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "cR6KOL5WG-E", thumbnail: "https://i.ytimg.com/vi/cR6KOL5WG-E/hqdefault.jpg", publishDate: "Aug 26, 2025", viewCount: "18 views", duration: "1:33" },
    { id: 'seed-youtube-g0Axono3Bf0', title: "How to Auto-Transcribe Audio in a Video | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=g0Axono3Bf0", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "g0Axono3Bf0", thumbnail: "https://i.ytimg.com/vi/g0Axono3Bf0/hqdefault.jpg", publishDate: "Aug 6, 2025", viewCount: "14 views", duration: "1:15" },
    { id: 'seed-youtube-J1ImsF6bnEo', title: "How to Blur License Plates in an Image Automatically | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=J1ImsF6bnEo", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "J1ImsF6bnEo", thumbnail: "https://i.ytimg.com/vi/J1ImsF6bnEo/hqdefault.jpg", publishDate: "Aug 6, 2025", viewCount: "14 views", duration: "0:45" },
    { id: 'seed-youtube-5P2Atc3joss', title: "How to Redact People in an Image Automatically | Sighthound Redactor | Beginner’s Guide", url: "https://www.youtube.com/watch?v=5P2Atc3joss", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "5P2Atc3joss", thumbnail: "https://i.ytimg.com/vi/5P2Atc3joss/hqdefault.jpg", publishDate: "Jul 28, 2025", viewCount: "8 views", duration: "1:00" },
    { id: 'seed-youtube-ABZGM0LltLw', title: "How to Redact Faces in an Image Automatically | Sighthound Redactor | Beginner’s Guide", url: "https://www.youtube.com/watch?v=ABZGM0LltLw", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "ABZGM0LltLw", thumbnail: "https://i.ytimg.com/vi/ABZGM0LltLw/hqdefault.jpg", publishDate: "Jul 28, 2025", viewCount: "19 views", duration: "1:01" },
    { id: 'seed-youtube-iB_OeRWbpPE', title: "How to Redact Vehicles in a Video Automatically | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=iB_OeRWbpPE", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "iB_OeRWbpPE", thumbnail: "https://i.ytimg.com/vi/iB_OeRWbpPE/hqdefault.jpg", publishDate: "Jul 15, 2025", viewCount: "10 views", duration: "0:46" },
    { id: 'seed-youtube-PTM2oKQx5H0', title: "How to Blur People in Video Automatically | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=PTM2oKQx5H0", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "PTM2oKQx5H0", thumbnail: "https://i.ytimg.com/vi/PTM2oKQx5H0/hqdefault.jpg", publishDate: "Jul 15, 2025", viewCount: "24 views", duration: "0:46" },
    { id: 'seed-youtube-L3lO6ruf4Z4', title: "How to Blur Faces in Video Automatically | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=L3lO6ruf4Z4", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "L3lO6ruf4Z4", thumbnail: "https://i.ytimg.com/vi/L3lO6ruf4Z4/hqdefault.jpg", publishDate: "Jul 15, 2025", viewCount: "50 views", duration: "0:59" },
    { id: 'seed-youtube-HOYxEhqMZmw', title: "How to Blur License Plates in Video Automatically | Sighthound Redactor Tutorial  | Beginner's Guide", url: "https://www.youtube.com/watch?v=HOYxEhqMZmw", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "HOYxEhqMZmw", thumbnail: "https://i.ytimg.com/vi/HOYxEhqMZmw/hqdefault.jpg", publishDate: "Jul 15, 2025", viewCount: "18 views", duration: "0:37" },
    { id: 'seed-youtube-_Ddd9w4-VTA', title: "Sighthound Redactor Overview | AI Video Redaction for Privacy & Compliance", url: "https://www.youtube.com/watch?v=_Ddd9w4-VTA", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "_Ddd9w4-VTA", thumbnail: "https://i.ytimg.com/vi/_Ddd9w4-VTA/hqdefault.jpg", publishDate: "May 20, 2025", viewCount: "171 views", duration: "1:51" },
    { id: 'seed-youtube-xLB1biBgnqw', title: "Sighthound Redactor Overview | AI Video Redaction for Privacy & Compliance", url: "https://www.youtube.com/watch?v=xLB1biBgnqw", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "xLB1biBgnqw", thumbnail: "https://i.ytimg.com/vi/xLB1biBgnqw/hqdefault.jpg", publishDate: "May 1, 2025", viewCount: "167 views", duration: "4:16" },
    { id: 'seed-youtube-BMRCaOpmAsg', title: "How AI at Sighthound is Redefining Security and Surveillance | Sighthound Audio Podcast Series", url: "https://www.youtube.com/watch?v=BMRCaOpmAsg", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "BMRCaOpmAsg", thumbnail: "https://i.ytimg.com/vi/BMRCaOpmAsg/hqdefault.jpg", publishDate: "Nov 11, 2024", viewCount: "87 views", duration: "15:00" },
    { id: 'seed-youtube-JJ5nBYjml6s', title: "Privacy Compliance Beyond Words: Image & Audio Redaction | Webinar | Sighthound Redactor [3-28-2024]", url: "https://www.youtube.com/watch?v=JJ5nBYjml6s", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "JJ5nBYjml6s", thumbnail: "https://i.ytimg.com/vi/JJ5nBYjml6s/hqdefault.jpg", publishDate: "Apr 9, 2024", viewCount: "47 views", duration: "51:37" },
    { id: 'seed-youtube-TIhmZjzppMw', title: "How to Switch Language with Multi-Language Feature | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=TIhmZjzppMw", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "TIhmZjzppMw", thumbnail: "https://i.ytimg.com/vi/TIhmZjzppMw/hqdefault.jpg", publishDate: "Feb 5, 2024", viewCount: "34 views", duration: "0:41" },
    { id: 'seed-youtube-2fgzx3PDfA4', title: "How to Execute Bulk Auto Detection | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=2fgzx3PDfA4", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "2fgzx3PDfA4", thumbnail: "https://i.ytimg.com/vi/2fgzx3PDfA4/hqdefault.jpg", publishDate: "Feb 5, 2024", viewCount: "38 views", duration: "1:05" },
    { id: 'seed-youtube-d3BVTe0WlBQ', title: "How to Add Multiple Videos and Images in Bulk | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=d3BVTe0WlBQ", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "d3BVTe0WlBQ", thumbnail: "https://i.ytimg.com/vi/d3BVTe0WlBQ/hqdefault.jpg", publishDate: "Feb 2, 2024", viewCount: "31 views", duration: "0:42" },
    { id: 'seed-youtube-tPLhxc8ViMI', title: "How to Process Bulk Auto Detection | Sighthound Redactor | Beginner's Guide to Easy Redaction", url: "https://www.youtube.com/watch?v=tPLhxc8ViMI", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "tPLhxc8ViMI", thumbnail: "https://i.ytimg.com/vi/tPLhxc8ViMI/hqdefault.jpg", publishDate: "Feb 2, 2024", viewCount: "61 views", duration: "1:05" },
    { id: 'seed-youtube-wDG-y8k_l6g', title: "How to Redact Audio From Your Project | Sighthound Redactor | Beginner's Guide to Easy Redaction", url: "https://www.youtube.com/watch?v=wDG-y8k_l6g", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "wDG-y8k_l6g", thumbnail: "https://i.ytimg.com/vi/wDG-y8k_l6g/hqdefault.jpg", publishDate: "Feb 2, 2024", viewCount: "61 views", duration: "0:40" },
    { id: 'seed-youtube-0LFmhyQDnUg', title: "How to Toggle Between Light and Dark Mode | Sighthound Redactor | Beginner's Guide to Easy Redaction", url: "https://www.youtube.com/watch?v=0LFmhyQDnUg", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "0LFmhyQDnUg", thumbnail: "https://i.ytimg.com/vi/0LFmhyQDnUg/hqdefault.jpg", publishDate: "Jan 15, 2024", viewCount: "35 views", duration: "0:32" },
    { id: 'seed-youtube-inj0gOkINYM', title: "How to Remove Bounding Boxes Using Objects List | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=inj0gOkINYM", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "inj0gOkINYM", thumbnail: "https://i.ytimg.com/vi/inj0gOkINYM/hqdefault.jpg", publishDate: "Jan 15, 2024", viewCount: "98 views", duration: "1:43" },
    { id: 'seed-youtube-MF155Yh6wf8', title: "How to Redact Faces From Video | Sighthound Redactor | Beginner's Guide to Easy Redaction", url: "https://www.youtube.com/watch?v=MF155Yh6wf8", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "MF155Yh6wf8", thumbnail: "https://i.ytimg.com/vi/MF155Yh6wf8/hqdefault.jpg", publishDate: "Jan 15, 2024", viewCount: "236 views", duration: "1:31" },
    { id: 'seed-youtube-Oeq4R7DRhLE', title: "How to do Custom Redaction with Auto-Tracking | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=Oeq4R7DRhLE", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "Oeq4R7DRhLE", thumbnail: "https://i.ytimg.com/vi/Oeq4R7DRhLE/hqdefault.jpg", publishDate: "Jan 11, 2024", viewCount: "102 views", duration: "1:18" },
    { id: 'seed-youtube-ahp3E7QSQlM', title: "How to Redact License Plates | Sighthound Redactor | Beginner's Guide to Easy Redaction", url: "https://www.youtube.com/watch?v=ahp3E7QSQlM", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "ahp3E7QSQlM", thumbnail: "https://i.ytimg.com/vi/ahp3E7QSQlM/hqdefault.jpg", publishDate: "Jan 10, 2024", viewCount: "84 views", duration: "1:38" },
    { id: 'seed-youtube-dGct8X1wqAg', title: "How to Apply Static Redaction | Sighthound Redactor | Beginner's Guide to Easy Redaction", url: "https://www.youtube.com/watch?v=dGct8X1wqAg", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "dGct8X1wqAg", thumbnail: "https://i.ytimg.com/vi/dGct8X1wqAg/hqdefault.jpg", publishDate: "Jan 9, 2024", viewCount: "81 views", duration: "1:13" },
    { id: 'seed-youtube-qtGGfXahoJU', title: "How to Add Media to Your Redactor Project | Sighthound Redactor | Beginner's Guide", url: "https://www.youtube.com/watch?v=qtGGfXahoJU", category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'YouTube', notes: 'Fetched from the Sighthound YouTube channel videos page.', source: 'seed', youtubeId: "qtGGfXahoJU", thumbnail: "https://i.ytimg.com/vi/qtGGfXahoJU/hqdefault.jpg", publishDate: "Jan 9, 2024", viewCount: "157 views", duration: "1:05" },
    { id: 'seed-youtube-channel', title: 'Sighthound YouTube Channel', url: 'https://www.youtube.com/@SighthoundInc', category: 'social', assetType: 'social', funnel: 'TOFU', tag: 'Social', notes: 'Official Sighthound YouTube channel.', source: 'seed', platform: 'youtube' },
    { id: 'seed-twitter-x', title: 'Sighthound Twitter / X', url: 'https://twitter.com/sighthoundinc', category: 'social', assetType: 'social', funnel: 'TOFU', tag: 'Social', notes: 'Sighthound Twitter / X presence.', source: 'seed', platform: 'x' },
    { id: 'seed-linkedin-showcase', title: 'Sighthound Redactor LinkedIn Showcase', url: 'https://www.linkedin.com/showcase/sighthound-redactor/', category: 'social', assetType: 'social', funnel: 'TOFU', tag: 'Social', notes: 'Redactor-specific LinkedIn showcase page.', source: 'seed' },
    { id: 'seed-linkedin-company', title: 'Sighthound LinkedIn Company Page', url: 'https://www.linkedin.com/company/sighthound-inc-/', category: 'social', assetType: 'social', funnel: 'TOFU', tag: 'Social', notes: 'Sighthound company LinkedIn page.', source: 'seed' },
    { id: 'seed-facebook', title: 'Sighthound Facebook', url: 'https://www.facebook.com/sighthoundinc/', category: 'social', assetType: 'social', funnel: 'TOFU', tag: 'Social', notes: 'Sighthound Facebook presence.', source: 'seed' },
    { id: 'seed-instagram', title: 'Sighthound Instagram', url: 'https://www.instagram.com/sighthoundcv/', category: 'social', assetType: 'social', funnel: 'TOFU', tag: 'Social', notes: 'Sighthound Instagram presence.', source: 'seed' }
]);

function getMarketingCategory(value) {
    for (var i = 0; i < marketingResourceCategories.length; i += 1) {
        if (marketingResourceCategories[i].value === value) { return marketingResourceCategories[i]; }
    }
    return marketingResourceCategories[0];
}

function getMarketingCategoryLabel(value) {
    return getMarketingCategory(value).label;
}

function getMarketingAssetLabel(type) {
    return marketingAssetLabels[type] || 'Website / Landing Page';
}

function getYouTubeVideoId(url) {
    var value = String(url || '');
    var match = value.match(/[?&]v=([^&]+)/) || value.match(/youtu\.be\/([^?&]+)/);
    return match ? match[1] : '';
}

function getYouTubeRedactionTypes(title) {
    var normalized = String(title || '').toLowerCase();
    var matches = [];
    YOUTUBE_REDACTION_TYPE_KEYWORD_MAP.forEach(function(rule) {
        var matched = rule.keywords.some(function(keyword) {
            return normalized.indexOf(keyword) !== -1;
        });
        if (matched && matches.indexOf(rule.value) === -1) { matches.push(rule.value); }
    });
    return matches.length ? matches : ['general'];
}

function getYouTubeRedactionLabel(value) {
    for (var i = 0; i < YOUTUBE_REDACTION_TYPE_KEYWORD_MAP.length; i += 1) {
        if (YOUTUBE_REDACTION_TYPE_KEYWORD_MAP[i].value === value) {
            return YOUTUBE_REDACTION_TYPE_KEYWORD_MAP[i].label;
        }
    }
    return 'General / Other';
}

function isYouTubeFilterActive(value) {
    return youtubeRedactionFilters.indexOf(value) !== -1;
}

function getYouTubeFilteredResources(items) {
    if (isYouTubeFilterActive('all')) { return items; }
    return items.filter(function(item) {
        var types = item.redactionTypes && item.redactionTypes.length ? item.redactionTypes : getYouTubeRedactionTypes(item.title);
        return youtubeRedactionFilters.some(function(filter) { return types.indexOf(filter) !== -1; });
    });
}

function toggleYouTubeRedactionFilter(value) {
    if (value === 'all') {
        youtubeRedactionFilters = ['all'];
    } else {
        youtubeRedactionFilters = youtubeRedactionFilters.filter(function(item) { return item !== 'all'; });
        if (youtubeRedactionFilters.indexOf(value) === -1) {
            youtubeRedactionFilters.push(value);
        } else {
            youtubeRedactionFilters = youtubeRedactionFilters.filter(function(item) { return item !== value; });
        }
        if (!youtubeRedactionFilters.length) { youtubeRedactionFilters = ['all']; }
    }
    renderMarketingResources();
}

function renderYouTubeRedactionFilterBar(items) {
    var counts = { all: items.length };
    items.forEach(function(item) {
        var types = item.redactionTypes && item.redactionTypes.length ? item.redactionTypes : getYouTubeRedactionTypes(item.title);
        types.forEach(function(type) { counts[type] = (counts[type] || 0) + 1; });
    });
    var html = '<div class="youtube-filter-panel" aria-label="Filter YouTube demo videos by redaction type">';
    html += '<div class="youtube-filter-heading"><strong>Filter by redaction type</strong><span>Multi-select supported</span></div>';
    html += '<div class="youtube-filter-buttons">';
    YOUTUBE_REDACTION_FILTERS.forEach(function(filter) {
        var active = isYouTubeFilterActive(filter.value);
        html += "<button type=\"button\" class=\"youtube-filter-btn" + (active ? " active" : "") + "\" aria-pressed=\"" + (active ? "true" : "false") + "\" onclick=\"toggleYouTubeRedactionFilter('" + escapeHtml(filter.value) + "')\">" + escapeHtml(filter.label) + "<span>" + escapeHtml(counts[filter.value] || 0) + "</span></button>";
    });
    html += '</div>';
    html += '<p class="youtube-filter-note">Rule-based title mapping: Face=head/face; License Plate=license plate/ALPR/LPR; People=people/person/body; Vehicle=vehicle/car/truck/bus/motorcycle; Audio=audio/speech/voice/transcribe/language; Custom=custom/manual/tracking/selection/static/style/mosaic/pixelate/fill; General=overview/install/webinar/podcast/compliance/bulk/media.</p>';
    html += '</div>';
    return html;
}

function renderYouTubeVideoGrid(items) {
    if (!items.length) {
        return '<div class="resource-empty">No YouTube demo videos match the selected redaction type filters.</div>';
    }
    return '<div class="youtube-video-grid">' + items.map(renderYouTubeVideoCard).join('') + '</div>';
}

function renderYouTubeVideoCard(resource) {
    var url = escapeHtml(resource.url);
    var title = escapeHtml(resource.title);
    var thumbnail = escapeHtml(resource.thumbnail || '');
    var duration = resource.duration ? '<span class="youtube-duration">' + escapeHtml(resource.duration) + '</span>' : '';
    var meta = [];
    if (resource.publishDate) { meta.push('<span>' + escapeHtml(resource.publishDate) + '</span>'); }
    if (resource.viewCount) { meta.push('<span>' + escapeHtml(resource.viewCount) + '</span>'); }
    var types = resource.redactionTypes && resource.redactionTypes.length ? resource.redactionTypes : getYouTubeRedactionTypes(resource.title);
    var typeHtml = types.map(function(type) {
        return '<span class="resource-pill youtube-type-pill">' + escapeHtml(getYouTubeRedactionLabel(type)) + '</span>';
    }).join('');
    var html = '<article class="resource-card youtube-video-card">';
    html += '<a class="youtube-thumbnail-link" href="' + url + '" target="_blank" rel="noopener" aria-label="Watch ' + title + ' on YouTube">';
    if (thumbnail) { html += '<img src="' + thumbnail + '" alt="Thumbnail for ' + title + '" loading="lazy" />'; }
    html += '<span class="youtube-play-icon" aria-hidden="true">&#9654;</span>' + duration + '</a>';
    html += '<div class="resource-card-top"><span class="resource-pill">YouTube Demo</span>' + typeHtml + '</div>';
    html += '<h4>' + renderMarketingResourceTitleLink(resource, url, title) + '</h4>';
    if (meta.length) { html += '<div class="youtube-video-meta">' + meta.join('') + '</div>'; }
    html += '<p class="resource-url" title="' + url + '">' + url + '</p>';
    html += "<div class=\"resource-card-actions\"><a class=\"resource-link-btn primary\" href=\"" + url + "\" target=\"_blank\" rel=\"noopener\"><i data-lucide=\"play-circle\"></i> Watch on YouTube</a><button type=\"button\" class=\"resource-copy-btn\" onclick=\"copyMarketingResourceUrl('" + escapeHtml(resource.id) + "', this)\"><i data-lucide=\"copy\"></i> Copy URL</button></div>";
    html += '</article>';
    return html;
}


function getBlogCategoryLabel(value) {
    for (var i = 0; i < BLOG_CATEGORY_RULES.length; i += 1) {
        if (BLOG_CATEGORY_RULES[i].value === value) {
            return BLOG_CATEGORY_RULES[i].label;
        }
    }
    return 'How-To & Best Practices';
}

function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function matchesBlogKeyword(text, keyword) {
    var normalized = String(keyword || '').toLowerCase();
    if (!normalized) { return false; }
    if (normalized.charAt(normalized.length - 1) === '*') {
        return text.indexOf(normalized.slice(0, -1)) !== -1;
    }
    if (/^[a-z0-9]+$/.test(normalized)) {
        return new RegExp('(^|[^a-z0-9])' + escapeRegExp(normalized) + '([^a-z0-9]|$)').test(text);
    }
    return text.indexOf(normalized) !== -1;
}

function getBlogCategories(resource) {
    if (resource.blogCategories && resource.blogCategories.length) { return resource.blogCategories; }
    var haystack = [
        resource.title,
        resource.description,
        resource.notes,
        resource.tag
    ].join(' ').toLowerCase();
    var matches = [];
    BLOG_CATEGORY_RULES.forEach(function(rule) {
        var matched = rule.keywords.some(function(keyword) {
            return matchesBlogKeyword(haystack, keyword);
        });
        if (matched && matches.indexOf(rule.value) === -1) { matches.push(rule.value); }
    });
    if (!matches.length) { matches.push('how-to-best-practices'); }
    return matches;
}

function isBlogCategoryFilterActive(value) {
    return blogCategoryFilters.indexOf(value) !== -1;
}

function getBlogFilteredResources(items) {
    if (isBlogCategoryFilterActive('all')) { return items; }
    return items.filter(function(item) {
        var categories = getBlogCategories(item);
        return blogCategoryFilters.some(function(filter) { return categories.indexOf(filter) !== -1; });
    });
}

function toggleBlogCategoryFilter(value) {
    if (value === 'all') {
        blogCategoryFilters = ['all'];
    } else {
        blogCategoryFilters = blogCategoryFilters.filter(function(item) { return item !== 'all'; });
        if (blogCategoryFilters.indexOf(value) === -1) {
            blogCategoryFilters.push(value);
        } else {
            blogCategoryFilters = blogCategoryFilters.filter(function(item) { return item !== value; });
        }
        if (!blogCategoryFilters.length) { blogCategoryFilters = ['all']; }
    }
    renderMarketingResources();
}

function renderBlogCategoryFilterBar(items) {
    var counts = { all: items.length };
    items.forEach(function(item) {
        getBlogCategories(item).forEach(function(category) {
            counts[category] = (counts[category] || 0) + 1;
        });
    });
    var html = '<div class="blog-filter-panel" aria-label="Filter blog content by taxonomy category">';
    html += '<div class="blog-filter-heading"><strong>Filter by blog taxonomy</strong><span>Multi-select supported</span></div>';
    html += '<div class="blog-filter-buttons">';
    BLOG_CATEGORY_FILTERS.forEach(function(filter) {
        var active = isBlogCategoryFilterActive(filter.value);
        html += "<button type=\"button\" class=\"blog-filter-btn" + (active ? " active" : "") + "\" aria-pressed=\"" + (active ? "true" : "false") + "\" onclick=\"toggleBlogCategoryFilter('" + escapeHtml(filter.value) + "')\">" + escapeHtml(filter.label) + "<span>" + escapeHtml(counts[filter.value] || 0) + "</span></button>";
    });
    html += '</div>';
    html += '<p class="blog-filter-note">Categories are assigned from title and description keyword matches; selecting multiple categories shows posts matching any selected category.</p>';
    html += '</div>';
    return html;
}

function renderBlogResourceGrid(items) {
    if (!items.length) {
        return '<div class="resource-empty">No blog posts match the selected taxonomy filters.</div>';
    }
    return '<div class="resource-cards-grid">' + items.map(renderBlogResourceCard).join('') + '</div>';
}

function renderBlogResourceCard(resource) {
    var url = escapeHtml(resource.url);
    var title = escapeHtml(resource.title);
    var categories = getBlogCategories(resource);
    var categoryHtml = categories.map(function(category) {
        return '<span class="resource-pill blog-category-pill">' + escapeHtml(getBlogCategoryLabel(category)) + '</span>';
    }).join('');
    var webinarBadge = resource.isWebinar || categories.indexOf('webinar') !== -1 ? '<span class="blog-webinar-badge">WEBINAR</span>' : '';
    var html = '<article class="resource-card blog-resource-card">';
    html += '<div class="resource-card-top"><span class="resource-pill">Blog Article</span>' + webinarBadge + '</div>';
    html += '<h4>' + renderMarketingResourceTitleLink(resource, url, title) + '</h4>';
    html += '<div class="blog-meta"><span>' + escapeHtml(resource.publishDate || 'Date not listed') + '</span><span>' + escapeHtml(resource.readTime || 'Read time not listed') + '</span></div>';
    html += '<p class="resource-url" title="' + url + '">' + url + '</p>';
    html += '<div class="resource-card-meta">' + categoryHtml + '</div>';
    if (resource.description) {
        html += '<p class="resource-notes">' + escapeHtml(resource.description) + '</p>';
    }
    html += '<div class="resource-card-actions"><a class="resource-link-btn primary" href="' + url + '" target="_blank" rel="noopener"><i data-lucide="external-link"></i> Open Article</a><button type="button" class="resource-copy-btn" onclick="copyMarketingResourceUrl(\'' + escapeHtml(resource.id) + '\', this)"><i data-lucide="copy"></i> Copy URL</button></div>';
    html += '</article>';
    return html;
}

function renderBlogResourceTable(items) {
    if (!items.length) {
        return '<div class="resource-empty">No blog posts match the selected taxonomy filters.</div>';
    }
    var html = '<div class="resource-table-wrapper"><table class="resource-table blog-resource-table"><thead><tr><th>Title</th><th>URL</th><th>Publish Date</th><th>Read Time</th><th>Categories</th><th>Actions</th></tr></thead><tbody>';
    items.forEach(function(resource) {
        var url = escapeHtml(resource.url);
        var categoryText = getBlogCategories(resource).map(getBlogCategoryLabel).join(', ');
        html += '<tr>';
        html += '<td>' + renderMarketingResourceTitleLink(resource, url, escapeHtml(resource.title)) + '</td>';
        html += '<td><p class="resource-url" title="' + url + '">' + url + '</p></td>';
        html += '<td>' + escapeHtml(resource.publishDate || '—') + '</td>';
        html += '<td>' + escapeHtml(resource.readTime || '—') + '</td>';
        html += '<td>' + escapeHtml(categoryText || '—') + '</td>';
        html += '<td><div class="resource-table-actions"><a class="resource-link-btn primary" href="' + url + '" target="_blank" rel="noopener">Open</a><button type="button" class="resource-copy-btn" onclick="copyMarketingResourceUrl(\'' + escapeHtml(resource.id) + '\', this)">Copy</button></div></td>';
        html += '</tr>';
    });
    html += '</tbody></table></div>';
    return html;
}

function getSocialPlatform(resource) {
    var haystack = [resource.platform, resource.title, resource.url].join(' ').toLowerCase();
    if (haystack.indexOf('youtube') !== -1 || haystack.indexOf('youtu.be') !== -1) { return { value: 'youtube', label: 'YouTube' }; }
    if (haystack.indexOf('linkedin') !== -1) { return { value: 'linkedin', label: 'LinkedIn' }; }
    if (haystack.indexOf('twitter') !== -1 || haystack.indexOf('x.com') !== -1 || haystack.indexOf('/x') !== -1) { return { value: 'x', label: 'Twitter / X' }; }
    if (haystack.indexOf('facebook') !== -1) { return { value: 'facebook', label: 'Facebook' }; }
    if (haystack.indexOf('instagram') !== -1) { return { value: 'instagram', label: 'Instagram' }; }
    return { value: 'generic', label: 'Social media' };
}

function renderSocialIcon(resource) {
    var platform = getSocialPlatform(resource);
    var base = '<svg class="resource-social-icon resource-social-icon-' + escapeHtml(platform.value) + '" viewBox="0 0 24 24" role="img" aria-label="' + escapeHtml(platform.label) + '" focusable="false">';
    var close = '</svg>';
    if (platform.value === 'youtube') {
        return base + '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" fill="currentColor" />' + close;
    }
    if (platform.value === 'linkedin') {
        return base + '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.2 0H13v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" fill="currentColor" />' + close;
    }
    if (platform.value === 'x') {
        return base + '<path d="M13.8 10.2 21 2h-1.7l-6.2 7.1L8.1 2H2.3l7.6 10.8L2.3 22H4l6.7-7.7L16.1 22h5.8l-8.1-11.8Zm-2.4 2.7-.8-1.1L4.5 3.3h2.8l4.8 6.8.8 1.1 6.6 9.4h-2.8l-5.3-7.7Z" fill="currentColor" />' + close;
    }
    if (platform.value === 'facebook') {
        return base + '<path d="M14 8.3V6.6c0-.8.5-1 1.1-1H18V2h-3.9C10.7 2 9 4.1 9 6.2v2.1H6v4h3V22h4v-9.7h3.3l.5-4H14Z" fill="currentColor" />' + close;
    }
    if (platform.value === 'instagram') {
        return base + '<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4.3a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4Zm0 2a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm4.9-3.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" fill="currentColor" />' + close;
    }
    return base + '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.9 6h-2.7a15.4 15.4 0 0 0-1-3.1A8.1 8.1 0 0 1 16.9 8ZM12 4.1c.4.6.9 1.9 1.2 3.9h-2.4c.3-2 .8-3.3 1.2-3.9ZM4.3 14a8.7 8.7 0 0 1 0-4h3.1a17.2 17.2 0 0 0 0 4H4.3Zm2.8 2h2.7c.3 1.4.7 2.5 1 3.1A8.1 8.1 0 0 1 7.1 16Zm2.7-8H7.1a8.1 8.1 0 0 1 3.7-3.1 15.4 15.4 0 0 0-1 3.1Zm2.2 11.9c-.4-.6-.9-1.9-1.2-3.9h2.4c-.3 2-.8 3.3-1.2 3.9Zm1.6-5.9h-3.2a15.1 15.1 0 0 1 0-4h3.2a15.1 15.1 0 0 1 0 4Zm-.4 5.1c.3-.6.7-1.7 1-3.1h2.7a8.1 8.1 0 0 1-3.7 3.1ZM16.6 14a17.2 17.2 0 0 0 0-4h3.1a8.7 8.7 0 0 1 0 4h-3.1Z" fill="currentColor" />' + close;
}

function renderMarketingResourceTitleLink(resource, url, title) {
    var socialIcon = resource.category === 'social' ? renderSocialIcon(resource) : '';
    var ariaLabel = resource.category === 'social' ? ' aria-label="Open ' + escapeHtml(getSocialPlatform(resource).label + ': ' + resource.title) + '"' : '';
    return '<a href="' + url + '" target="_blank" rel="noopener"' + ariaLabel + '>' + socialIcon + '<span>' + title + '</span></a>';
}

function getMarketingInputValue(id) {
    var el = document.getElementById(id);
    return el ? String(el.value || '').trim() : '';
}

function normalizeMarketingResourceUrl(url) {
    try {
        var parsed = new URL(url);
        parsed.hash = '';
        var normalized = parsed.toString();
        if (normalized.length > 1 && normalized.slice(-1) === '/') {
            normalized = normalized.slice(0, -1);
        }
        return normalized.toLowerCase();
    } catch (e) {
        return String(url || '').trim().toLowerCase();
    }
}

function validateMarketingUrl(url) {
    try {
        var parsed = new URL(url);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch (e) {
        return false;
    }
}

function getMarketingFileExtension(name) {
    var parts = String(name || '').split('.');
    return parts.length > 1 ? parts.pop().toLowerCase() : '';
}

function inferMarketingAssetType(resource) {
    var url = String(resource.url || '');
    var category = resource.category;
    var extension = getMarketingFileExtension(resource.fileName || url.split('?')[0]);
    if (resource.uploaded) { return extension === 'pdf' ? 'pdf' : 'file'; }
    if (extension === 'pdf') { return 'pdf'; }
    if (extension === 'ppt' || extension === 'pptx') { return 'presentation'; }
    if (extension === 'doc' || extension === 'docx') { return 'document'; }
    if (category === 'blog') { return 'blog'; }
    if (category === 'case-studies') { return 'case-study'; }
    if (category === 'datasheets') { return 'pdf'; }
    if (category === 'videos' || /youtube\.com|youtu\.be|vimeo\.com|demo-video|watch-demo/i.test(url)) { return 'video'; }
    if (category === 'social' || /linkedin\.com|facebook\.com|instagram\.com|twitter\.com|x\.com/i.test(url)) { return 'social'; }
    if (category === 'webinar') { return 'webinar'; }
    if (category === 'sales-assets') { return 'sales'; }
    return 'webpage';
}

function sanitizeMarketingResource(resource) {
    if (!resource) { return null; }
    if (resource.category === 'sales-assets') { return null; }
    var rawTitle = String(resource.title || '').trim();
    var titleLimit = resource.category === 'blog' || resource.category === 'webinar' ? 180 : (resource.category === 'videos' || resource.youtubeId ? 160 : 80);
    var title = rawTitle.slice(0, titleLimit);
    var url = String(resource.url || '').trim();
    if (!title || !url) { return null; }
    var category = getMarketingCategory(resource.category || 'website').value;
    var funnel = ['TOFU', 'MOFU', 'BOFU'].indexOf(resource.funnel) !== -1 ? resource.funnel : 'BOFU';
    var sanitized = {
        id: resource.id || generateMarketingResourceId(),
        title: title,
        url: url,
        category: category,
        assetType: resource.assetType || '',
        funnel: funnel,
        tag: String(resource.tag || '').trim().slice(0, 32),
        notes: String(resource.notes || '').trim(),
        description: String(resource.description || resource.notes || '').trim(),
        readTime: String(resource.readTime || '').trim(),
        blogCategories: Array.isArray(resource.blogCategories) ? resource.blogCategories.slice() : [],
        isWebinar: !!resource.isWebinar,
        highlights: Array.isArray(resource.highlights) ? resource.highlights.slice() : [],
        icon: String(resource.icon || '').trim(),
        source: resource.source || 'custom',
        uploaded: !!resource.uploaded,
        fileName: resource.fileName || '',
        fileSize: resource.fileSize || 0,
        fileType: resource.fileType || '',
        createdAt: resource.createdAt || new Date().toISOString(),
        platform: String(resource.platform || '').trim(),
        youtubeId: String(resource.youtubeId || '').trim(),
        thumbnail: String(resource.thumbnail || '').trim(),
        publishDate: String(resource.publishDate || '').trim(),
        viewCount: String(resource.viewCount || '').trim(),
        duration: String(resource.duration || '').trim(),
        redactionTypes: Array.isArray(resource.redactionTypes) ? resource.redactionTypes.slice() : []
    };
    sanitized.assetType = sanitized.assetType || inferMarketingAssetType(sanitized);
    if (sanitized.category === 'videos') {
        sanitized.redactionTypes = getYouTubeRedactionTypes(sanitized.title);
        if (!sanitized.youtubeId) { sanitized.youtubeId = getYouTubeVideoId(sanitized.url); }
        if (!sanitized.thumbnail && sanitized.youtubeId) {
            sanitized.thumbnail = 'https://i.ytimg.com/vi/' + sanitized.youtubeId + '/hqdefault.jpg';
        }
    }
    if (sanitized.category === 'blog') {
        sanitized.description = sanitized.description || sanitized.notes;
        sanitized.blogCategories = getBlogCategories(sanitized);
        sanitized.isWebinar = sanitized.isWebinar || sanitized.blogCategories.indexOf('webinar') !== -1;
    }
    if (sanitized.category === 'social' && !sanitized.platform) {
        sanitized.platform = getSocialPlatform(sanitized).value;
    }
    return sanitized;
}

function generateMarketingResourceId() {
    return 'resource-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

function loadMarketingResources() {
    var stored = [];
    try {
        var raw = window.localStorage ? window.localStorage.getItem(MARKETING_RESOURCE_STORAGE_KEY) : null;
        stored = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(stored)) { stored = []; }
    } catch (e) {
        stored = [];
    }
    var merged = [];
    var seen = {};
    MARKETING_SEED_RESOURCES.concat(stored).forEach(function(item) {
        var resource = sanitizeMarketingResource(item);
        if (!resource) { return; }
        var key = resource.category + '|' + normalizeMarketingResourceUrl(resource.url);
        if (seen[key]) { return; }
        seen[key] = true;
        merged.push(resource);
    });
    marketingResources = merged;
}

function saveMarketingResources() {
    try {
        if (!window.localStorage) { return; }
        var customResources = marketingResources.filter(function(resource) {
            return resource.source !== 'seed' && !resource.uploaded;
        });
        window.localStorage.setItem(MARKETING_RESOURCE_STORAGE_KEY, JSON.stringify(customResources));
    } catch (e) {}
}

function getFilteredMarketingResources() {
    var query = getMarketingInputValue('resourceSearch').toLowerCase();
    var categoryFilter = getMarketingInputValue('resourceCategoryFilter') || 'all';
    return marketingResources.filter(function(resource) {
        var categoryMatch = categoryFilter === 'all' || resource.category === categoryFilter;
        var searchable = [
            resource.title,
            resource.url,
            getMarketingCategoryLabel(resource.category),
            getMarketingAssetLabel(resource.assetType),
            resource.tag,
            resource.notes,
            resource.description,
            resource.publishDate,
            resource.readTime,
            resource.blogCategories ? resource.blogCategories.map(getBlogCategoryLabel).join(' ') : '',
            resource.highlights ? resource.highlights.join(' ') : '',
            resource.fileName
        ].join(' ').toLowerCase();
        var queryMatch = !query || searchable.indexOf(query) !== -1;
        return categoryMatch && queryMatch;
    });
}

function renderMarketingResources() {
    var container = document.getElementById('resourceSections');
    if (!container) { return; }
    var filtered = getFilteredMarketingResources();
    var categoryFilter = getMarketingInputValue('resourceCategoryFilter') || 'all';
    var visibleCategories = marketingResourceCategories.filter(function(category) {
        return categoryFilter === 'all' || category.value === categoryFilter;
    });
    var totalCount = document.getElementById('resourceTotalCount');
    var summary = document.getElementById('resourceSummary');
    var renderedCount = 0;
    var renderedHtml = visibleCategories.map(function(category) {
        var items = filtered.filter(function(resource) { return resource.category === category.value; });
        if (category.value === 'blog') { items = getBlogFilteredResources(items); }
        if (category.value === 'videos') { items = getYouTubeFilteredResources(items); }
        renderedCount += items.length;
        return renderMarketingResourceSection(category, items);
    }).join('');
    if (totalCount) { totalCount.textContent = marketingResources.length; }
    if (summary) {
        summary.textContent = 'Showing ' + renderedCount + ' of ' + marketingResources.length + ' resources';
    }
    container.innerHTML = renderedHtml;
    refreshMarketingViewButtons();
    if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}

function renderMarketingResourceSection(category, items) {
    var html = '<div id="resource-section-' + escapeHtml(category.value) + '" class="accordion-item resource-category-accordion active">';
    html += '<div class="accordion-header resource-category-header" onclick="toggleAccordion(this)">';
    html += '<div class="resource-category-title"><i data-lucide="' + escapeHtml(category.icon) + '"></i><h4>' + escapeHtml(category.label) + '<span class="resource-count-pill">' + items.length + '</span></h4></div>';
    html += '<span class=\"accordion-toggle\">&#9660;</span></div>';
    html += '<div class="accordion-content"><div class="accordion-content-inner">';
    if (category.value === 'blog') {
        var allBlogItems = getFilteredMarketingResources().filter(function(resource) { return resource.category === 'blog'; });
        html += renderBlogCategoryFilterBar(allBlogItems);
        html += marketingResourceView === 'table' ? renderBlogResourceTable(items) : renderBlogResourceGrid(items);
    } else if (category.value === 'videos') {
        var allVideoItems = getFilteredMarketingResources().filter(function(resource) { return resource.category === 'videos'; });
        html += renderYouTubeRedactionFilterBar(allVideoItems);
        html += marketingResourceView === 'table' ? renderMarketingResourceTable(items) : renderYouTubeVideoGrid(items);
    } else if (!items.length) {
        html += '<div class="resource-empty">No resources match this section yet. Adjust filters or reset the resource view.</div>';
    } else if (marketingResourceView === 'table') {
        html += renderMarketingResourceTable(items);
    } else {
        html += '<div class="resource-cards-grid">' + items.map(renderMarketingResourceCard).join('') + '</div>';
    }
    html += '</div></div></div>';
    return html;
}

function renderMarketingResourceCard(resource) {
    var url = escapeHtml(resource.url);
    var title = escapeHtml(resource.title);
    var tagHtml = resource.tag ? '<span class="resource-pill">' + escapeHtml(resource.tag) + '</span>' : '';
    var fileMeta = resource.uploaded && resource.fileName ? '<span class="resource-pill">' + escapeHtml(resource.fileName) + '</span>' : '';
    var sizeMeta = resource.uploaded && resource.fileSize ? '<span class="resource-pill">' + escapeHtml(formatMarketingFileSize(resource.fileSize)) + '</span>' : '';
    var download = resource.uploaded ? '<a class="resource-link-btn secondary" href="' + url + '" download="' + escapeHtml(resource.fileName || resource.title) + '"><i data-lucide="download"></i> Download</a>' : '';
    var iconHtml = resource.icon ? '<i data-lucide="' + escapeHtml(resource.icon) + '"></i>' : '';
    var html = '<article class="resource-card">';
    html += '<div class="resource-card-top">' + iconHtml + '<span class="resource-pill">' + escapeHtml(getMarketingAssetLabel(resource.assetType)) + '</span></div>';
    html += '<h4>' + renderMarketingResourceTitleLink(resource, url, title) + '</h4>';
    html += '<p class="resource-url" title="' + url + '">' + url + '</p>';
    html += '<div class="resource-card-meta"><span class="resource-pill">' + escapeHtml(getMarketingCategoryLabel(resource.category)) + '</span>' + tagHtml + fileMeta + sizeMeta + '</div>';
    if (resource.notes) {
        html += '<p class="resource-notes">' + escapeHtml(resource.notes) + '</p>';
    }
    if (resource.highlights && resource.highlights.length) {
        html += '<ul class="resource-highlight-list">' + resource.highlights.map(function(item) { return '<li>' + escapeHtml(item) + '</li>'; }).join('') + '</ul>';
    }
    html += '<div class="resource-card-actions"><a class="resource-link-btn primary" href="' + url + '" target="_blank" rel="noopener"><i data-lucide="external-link"></i> Open</a>' + download + '<button type="button" class="resource-copy-btn" onclick="copyMarketingResourceUrl(\'' + escapeHtml(resource.id) + '\', this)"><i data-lucide="copy"></i> Copy URL</button></div>';
    html += '</article>';
    return html;
}

function renderMarketingResourceTable(items) {
    var html = '<div class="resource-table-wrapper"><table class="resource-table"><thead><tr><th>Title</th><th>URL</th><th>Category</th><th>Asset Type</th><th>Tag</th><th>Actions</th></tr></thead><tbody>';
    items.forEach(function(resource) {
        var url = escapeHtml(resource.url);
        var download = resource.uploaded ? '<a class="resource-link-btn secondary" href="' + url + '" download="' + escapeHtml(resource.fileName || resource.title) + '">Download</a>' : '';
        html += '<tr>';
        html += '<td>' + renderMarketingResourceTitleLink(resource, url, escapeHtml(resource.title)) + '</td>';
        html += '<td><p class="resource-url" title="' + url + '">' + url + '</p></td>';
        html += '<td>' + escapeHtml(getMarketingCategoryLabel(resource.category)) + '</td>';
        html += '<td>' + escapeHtml(getMarketingAssetLabel(resource.assetType)) + '</td>';
        html += '<td>' + escapeHtml(resource.tag || '—') + '</td>';
        html += '<td><div class="resource-table-actions"><a class="resource-link-btn primary" href="' + url + '" target="_blank" rel="noopener">Open</a>' + download + '<button type="button" class="resource-copy-btn" onclick="copyMarketingResourceUrl(\'' + escapeHtml(resource.id) + '\', this)">Copy</button></div></td>';
        html += '</tr>';
    });
    html += '</tbody></table></div>';
    return html;
}

function setMarketingResourceView(view, element) {
    marketingResourceView = view === 'table' ? 'table' : 'card';
    if (element) {
        document.querySelectorAll('#resources .resource-toggle').forEach(function(button) {
            button.classList.remove('active');
        });
        element.classList.add('active');
    }
    renderMarketingResources();
}

function refreshMarketingViewButtons() {
    document.querySelectorAll('#resources .resource-toggle').forEach(function(button) {
        var onclick = button.getAttribute('onclick') || '';
        if (onclick.indexOf("'" + marketingResourceView + "'") !== -1) {
            button.classList.add('active');
        } else if (onclick.indexOf('setMarketingResourceView') !== -1) {
            button.classList.remove('active');
        }
    });
}

function resetMarketingResourceFilters() {
    ['resourceSearch', 'resourceCategoryFilter'].forEach(function(id) {
        var el = document.getElementById(id);
        if (!el) { return; }
        el.value = id === 'resourceSearch' ? '' : 'all';
    });
    youtubeRedactionFilters = ['all'];
    blogCategoryFilters = ['all'];
    renderMarketingResources();
}

function handleMarketingResourceModeChange() {
    var mode = getMarketingInputValue('resourceInputType') || 'external';
    var urlField = document.querySelector('#resources .resource-url-field');
    var fileField = document.querySelector('#resources .resource-file-field');
    var urlInput = document.getElementById('resourceUrl');
    var fileInput = document.getElementById('resourceFile');
    if (urlField) { urlField.hidden = mode !== 'external'; }
    if (fileField) { fileField.hidden = mode !== 'file'; }
    if (urlInput) { urlInput.required = mode === 'external'; }
    if (fileInput) { fileInput.required = mode === 'file'; }
}

function handleMarketingFileSelect(event) {
    var file = event && event.target && event.target.files ? event.target.files[0] : null;
    if (!file) { return; }
    var allowed = ['pdf', 'ppt', 'pptx', 'doc', 'docx'];
    var extension = getMarketingFileExtension(file.name);
    if (allowed.indexOf(extension) === -1) {
        showMarketingFormMessage('Use a PDF, PPT, PPTX, DOC, or DOCX file.', 'error');
        event.target.value = '';
        return;
    }
    var titleEl = document.getElementById('resourceTitle');
    if (titleEl && !titleEl.value.trim()) {
        titleEl.value = file.name.replace(/\.[^/.]+$/, '').slice(0, 80);
    }
    var categoryEl = document.getElementById('resourceCategory');
    if (categoryEl && categoryEl.value === 'website') {
        categoryEl.value = 'datasheets';
    }
    showMarketingFormMessage('File selected. It will be previewable/downloadable after saving.', 'success');
}

function addMarketingResource(event) {
    if (event && typeof event.preventDefault === 'function') { event.preventDefault(); }
    var title = getMarketingInputValue('resourceTitle');
    var mode = getMarketingInputValue('resourceInputType') || 'external';
    var category = getMarketingInputValue('resourceCategory') || 'website';
    var funnel = getMarketingInputValue('resourceFunnelStage') || 'BOFU';
    var tag = getMarketingInputValue('resourceTag');
    var notes = getMarketingInputValue('resourceNotes');
    if (!title) {
        showMarketingFormMessage('Add a title before saving.', 'error');
        return;
    }
    if (title.length > 80) {
        showMarketingFormMessage('Title must be 80 characters or fewer.', 'error');
        return;
    }
    var resource = {
        id: generateMarketingResourceId(),
        title: title,
        category: category,
        funnel: funnel,
        tag: tag,
        notes: notes,
        source: 'custom',
        createdAt: new Date().toISOString()
    };
    if (mode === 'file') {
        var fileInput = document.getElementById('resourceFile');
        var file = fileInput && fileInput.files ? fileInput.files[0] : null;
        if (!file) {
            showMarketingFormMessage('Choose a file before saving.', 'error');
            return;
        }
        var extension = getMarketingFileExtension(file.name);
        if (['pdf', 'ppt', 'pptx', 'doc', 'docx'].indexOf(extension) === -1) {
            showMarketingFormMessage('Use a PDF, PPT, PPTX, DOC, or DOCX file.', 'error');
            return;
        }
        resource.url = URL.createObjectURL(file);
        resource.uploaded = true;
        resource.fileName = file.name;
        resource.fileSize = file.size;
        resource.fileType = file.type || '';
        resource.assetType = inferMarketingAssetType(resource);
        marketingUploadedFiles[resource.id] = file;
    } else {
        var url = getMarketingInputValue('resourceUrl');
        if (!validateMarketingUrl(url)) {
            showMarketingFormMessage('Enter a valid http or https URL.', 'error');
            return;
        }
        var normalized = normalizeMarketingResourceUrl(url);
        var duplicate = marketingResources.some(function(existing) {
            return normalizeMarketingResourceUrl(existing.url) === normalized;
        });
        if (duplicate) {
            showMarketingFormMessage('This URL already exists in the resource library.', 'error');
            return;
        }
        resource.url = new URL(url).toString();
        resource.uploaded = false;
        resource.assetType = inferMarketingAssetType(resource);
    }
    var sanitized = sanitizeMarketingResource(resource);
    if (!sanitized) {
        showMarketingFormMessage('Resource could not be saved. Check the required fields.', 'error');
        return;
    }
    marketingResources.unshift(sanitized);
    saveMarketingResources();
    clearMarketingResourceForm();
    showMarketingFormMessage(sanitized.uploaded ? 'File resource saved for this browser session.' : 'Resource saved.', 'success');
    renderMarketingResources();
}

function clearMarketingResourceForm() {
    var form = document.getElementById('resourceForm');
    if (form) { form.reset(); }
    handleMarketingResourceModeChange();
    showMarketingFormMessage('', '');
}

function showMarketingFormMessage(message, type) {
    var messageEl = document.getElementById('resourceFormMessage');
    if (!messageEl) { return; }
    messageEl.textContent = message || '';
    messageEl.className = 'resource-form-message' + (type ? ' ' + type : '');
}

function copyMarketingResourceUrl(resourceId, button) {
    var resource = marketingResources.find(function(item) { return item.id === resourceId; });
    if (!resource) { return; }
    var text = resource.url;
    function markCopied() {
        if (!button) { return; }
        var original = button.innerHTML;
        button.innerHTML = 'Copied';
        setTimeout(function() { button.innerHTML = original; }, 1400);
    }
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(markCopied).catch(function() {
            fallbackCopyMarketingText(text);
            markCopied();
        });
    } else {
        fallbackCopyMarketingText(text);
        markCopied();
    }
}

function fallbackCopyMarketingText(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(textarea);
}

function formatMarketingFileSize(bytes) {
    if (!bytes) { return ''; }
    var units = ['B', 'KB', 'MB', 'GB'];
    var size = bytes;
    var unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
        size = size / 1024;
        unitIndex += 1;
    }
    return (unitIndex === 0 ? size : size.toFixed(1)) + ' ' + units[unitIndex];
}

function initMarketingResources() {
    loadMarketingResources();
    handleMarketingResourceModeChange();
    renderMarketingResources();
}

var GLOBAL_SEARCH_MIN_LENGTH = 2;
var globalSearchState = {
    index: [],
    results: [],
    activeResultIndex: -1,
    observer: null,
    rebuildTimer: null,
    elementIdCounter: 0,
    highlightedElement: null,
    highlightTimer: null,
    query: ''
};

function normalizeGlobalSearchText(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
}

function getGlobalSearchRoot() {
    return document.getElementById('redactor-root') || document.querySelector('.container') || document.body;
}

function getGlobalSearchUi() {
    return {
        root: document.querySelector('.global-search'),
        input: document.getElementById('globalToolSearchInput'),
        clear: document.getElementById('globalSearchClear'),
        count: document.getElementById('globalSearchCount'),
        panel: document.getElementById('globalSearchResults')
    };
}

function setGlobalSearchPanelVisible(isVisible) {
    var ui = getGlobalSearchUi();
    if (ui.panel) { ui.panel.hidden = !isVisible; }
    if (ui.input) { ui.input.setAttribute('aria-expanded', isVisible ? 'true' : 'false'); }
}

function shouldIgnoreGlobalSearchElement(element) {
    if (!element) { return true; }
    if (element.closest('.global-search')) { return true; }
    if (element.closest('script, style, noscript, svg')) { return true; }
    return false;
}

function getGlobalSearchTextContainer(textNode) {
    var parent = textNode && textNode.parentElement;
    if (!parent || shouldIgnoreGlobalSearchElement(parent)) { return null; }
    var selector = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'li', 'td', 'th', 'dt', 'dd',
        'button', 'label', 'option', 'a', 'summary',
        '.meta-info span',
        '.comparison-feature',
        '.strength-box',
        '.weakness-box',
        '.version-meta',
        '.object-categories-label',
        '.object-categories-details',
        '.resource-pill',
        '.feature-pill',
        '.tier-badge',
        '.tier-name',
        '.tier-price',
        '.pricing-recommendation-card',
        '.resource-empty'
    ].join(',');
    var container = parent.closest(selector) || parent;
    if (shouldIgnoreGlobalSearchElement(container)) { return null; }
    return container;
}

function getGlobalSearchElementId(element) {
    if (!element.__globalSearchElementId) {
        globalSearchState.elementIdCounter += 1;
        element.__globalSearchElementId = 'global-search-element-' + globalSearchState.elementIdCounter;
    }
    return element.__globalSearchElementId;
}

function getGlobalSearchSectionMeta(element) {
    var section = element ? element.closest('.section') : null;
    if (section) {
        var sectionHeading = section.querySelector('h2');
        var sections = document.querySelectorAll('.section');
        return {
            id: section.id || getGlobalSearchElementId(section),
            label: normalizeGlobalSearchText(sectionHeading ? sectionHeading.textContent : section.id || 'Section'),
            order: Array.prototype.indexOf.call(sections, section) + 1
        };
    }
    if (element && element.closest('header')) {
        return {
            id: 'tool-header-navigation',
            label: 'Tool Header & Navigation',
            order: 0
        };
    }
    return {
        id: 'all-other-ui-text',
        label: 'All Other UI Text',
        order: 999
    };
}

function isGlobalSearchNameLike(element) {
    if (!element || !element.matches) { return false; }
    return element.matches([
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'th', 'dt', 'option', 'button', 'label',
        '.nav-tab',
        '.tier-name',
        '.tier-price',
        '.pricing-summary-card h5',
        '.resource-card h4'
    ].join(','));
}

function buildGlobalSearchIndex() {
    var root = getGlobalSearchRoot();
    var entries = [];
    var seen = {};
    var domOrder = 0;
    if (!root || typeof document.createTreeWalker !== 'function') {
        globalSearchState.index = entries;
        return entries;
    }

    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: function(node) {
            var text = normalizeGlobalSearchText(node.nodeValue);
            if (!text) { return NodeFilter.FILTER_REJECT; }
            return shouldIgnoreGlobalSearchElement(node.parentElement) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
    });
    var node = walker.nextNode();
    while (node) {
        var element = getGlobalSearchTextContainer(node);
        if (element) {
            var text = normalizeGlobalSearchText(element.textContent);
            if (text) {
                var elementId = getGlobalSearchElementId(element);
                var key = elementId + '|' + text;
                if (!seen[key]) {
                    var sectionMeta = getGlobalSearchSectionMeta(element);
                    entries.push({
                        element: element,
                        text: text,
                        lowerText: text.toLowerCase(),
                        sectionId: sectionMeta.id,
                        sectionLabel: sectionMeta.label,
                        sectionOrder: sectionMeta.order,
                        domOrder: domOrder,
                        isNameLike: isGlobalSearchNameLike(element)
                    });
                    domOrder += 1;
                    seen[key] = true;
                }
            }
        }
        node = walker.nextNode();
    }
    globalSearchState.index = entries;
    return entries;
}

function getGlobalSearchRank(entry, query, matchIndex) {
    if (entry.lowerText === query) { return 0; }
    if (entry.isNameLike && entry.lowerText.indexOf(query) !== -1) { return 1; }
    if (matchIndex === 0) { return 2; }
    var previousChar = entry.lowerText.charAt(matchIndex - 1);
    if (!previousChar || /[^a-z0-9]/.test(previousChar)) { return 2; }
    return 3;
}

function searchGlobalIndex(query) {
    var normalizedQuery = normalizeGlobalSearchText(query).toLowerCase();
    var results = [];
    globalSearchState.index.forEach(function(entry) {
        var matchIndex = entry.lowerText.indexOf(normalizedQuery);
        if (matchIndex === -1) { return; }
        results.push({
            entry: entry,
            matchIndex: matchIndex,
            rank: getGlobalSearchRank(entry, normalizedQuery, matchIndex)
        });
    });
    results.sort(function(a, b) {
        if (a.rank !== b.rank) { return a.rank - b.rank; }
        if (a.entry.sectionOrder !== b.entry.sectionOrder) { return a.entry.sectionOrder - b.entry.sectionOrder; }
        return a.entry.domOrder - b.entry.domOrder;
    });
    return results;
}

function getGlobalSearchSectionCount(results) {
    var sections = {};
    results.forEach(function(result) {
        sections[result.entry.sectionId] = true;
    });
    return Object.keys(sections).length;
}

function getGlobalSearchResultTitle(entry) {
    var element = entry.element;
    var headingSelector = 'h1,h2,h3,h4,h5,h6';
    if (element.matches && element.matches(headingSelector)) {
        return normalizeGlobalSearchText(element.textContent);
    }
    var parent = element.closest('.competitor-profile, .pricing-summary-card, .pricing-dropdown-panel, .accordion-item, .card, .resource-card, tr, .tier-result');
    var label = parent ? parent.querySelector('h3,h4,h5,td:first-child,dt,.tier-name') : null;
    var title = label ? normalizeGlobalSearchText(label.textContent) : '';
    if (!title || title.length > 90) { title = entry.sectionLabel; }
    return title;
}

function getGlobalSearchSnippet(text, matchIndex, query) {
    var radius = 40;
    var start = Math.max(0, matchIndex - radius);
    var end = Math.min(text.length, matchIndex + query.length + radius);
    var snippet = text.slice(start, end);
    var localMatchIndex = matchIndex - start;
    var before = snippet.slice(0, localMatchIndex);
    var match = snippet.slice(localMatchIndex, localMatchIndex + query.length);
    var after = snippet.slice(localMatchIndex + query.length);
    return (start > 0 ? '…' : '') +
        escapeHtml(before) +
        '<mark class="global-search-match">' + escapeHtml(match) + '</mark>' +
        escapeHtml(after) +
        (end < text.length ? '…' : '');
}

function renderGlobalSearchResults(query) {
    var ui = getGlobalSearchUi();
    if (!ui.panel || !ui.count) { return; }
    var results = globalSearchState.results;
    var sectionCount = getGlobalSearchSectionCount(results);
    ui.count.textContent = results.length + ' results across ' + sectionCount + ' sections';

    if (!results.length) {
        ui.panel.innerHTML = '<div class="global-search-empty" role="status">No results found for "' + escapeHtml(query) + '". Try a different keyword or check Competitor Profiles.</div>';
        setGlobalSearchPanelVisible(true);
        globalSearchState.activeResultIndex = -1;
        return;
    }

    var groups = [];
    var groupMap = {};
    results.forEach(function(result, resultIndex) {
        var key = result.entry.sectionId;
        if (!groupMap[key]) {
            groupMap[key] = {
                label: result.entry.sectionLabel,
                order: result.entry.sectionOrder,
                rows: []
            };
            groups.push(groupMap[key]);
        }
        groupMap[key].rows.push({
            result: result,
            resultIndex: resultIndex
        });
    });
    groups.sort(function(a, b) { return a.order - b.order; });

    ui.panel.innerHTML = groups.map(function(group) {
        var rows = group.rows.map(function(row) {
            var entry = row.result.entry;
            return (
                '<article class="global-search-result-row" data-result-index="' + row.resultIndex + '" role="listitem" aria-selected="false">' +
                    '<div class="global-search-result-copy">' +
                        '<div class="global-search-result-title">' + escapeHtml(getGlobalSearchResultTitle(entry)) + '</div>' +
                        '<p class="global-search-result-snippet">' + getGlobalSearchSnippet(entry.text, row.result.matchIndex, query) + '</p>' +
                    '</div>' +
                    '<button type="button" class="global-search-jump" data-result-index="' + row.resultIndex + '">→ Jump to section</button>' +
                '</article>'
            );
        }).join('');
        return (
            '<details class="global-search-group" open>' +
                '<summary><span>' + escapeHtml(group.label) + '</span><span>' + group.rows.length + ' results</span></summary>' +
                '<div class="global-search-group-results" role="list">' + rows + '</div>' +
            '</details>'
        );
    }).join('');
    setGlobalSearchPanelVisible(true);
    setGlobalSearchActiveResult(0, false);
}

function resetGlobalSearchResults() {
    var ui = getGlobalSearchUi();
    globalSearchState.results = [];
    globalSearchState.activeResultIndex = -1;
    globalSearchState.query = '';
    if (ui.panel) {
        ui.panel.innerHTML = '';
        ui.panel.hidden = true;
    }
    if (ui.count) { ui.count.textContent = ''; }
    if (ui.input) { ui.input.setAttribute('aria-expanded', 'false'); }
}

function handleGlobalSearchInput() {
    var ui = getGlobalSearchUi();
    if (!ui.input) { return; }
    var query = normalizeGlobalSearchText(ui.input.value);
    globalSearchState.query = query;
    if (ui.clear) { ui.clear.hidden = !ui.input.value; }
    if (query.length < GLOBAL_SEARCH_MIN_LENGTH) {
        resetGlobalSearchResults();
        if (ui.clear) { ui.clear.hidden = !ui.input.value; }
        return;
    }
    if (!globalSearchState.index.length) { buildGlobalSearchIndex(); }
    globalSearchState.results = searchGlobalIndex(query);
    renderGlobalSearchResults(query);
}

function clearGlobalSearch() {
    var ui = getGlobalSearchUi();
    if (ui.input) { ui.input.value = ''; }
    if (ui.clear) { ui.clear.hidden = true; }
    resetGlobalSearchResults();
    clearGlobalSearchTargetHighlight();
    if (ui.input) { ui.input.focus(); }
}

function setGlobalSearchActiveResult(index, shouldScroll) {
    var ui = getGlobalSearchUi();
    if (!ui.panel || !globalSearchState.results.length) { return; }
    var maxIndex = globalSearchState.results.length - 1;
    var nextIndex = index;
    if (nextIndex < 0) { nextIndex = maxIndex; }
    if (nextIndex > maxIndex) { nextIndex = 0; }
    Array.prototype.forEach.call(ui.panel.querySelectorAll('.global-search-result-row'), function(row) {
        row.classList.remove('active');
        row.setAttribute('aria-selected', 'false');
    });
    var activeRow = ui.panel.querySelector('.global-search-result-row[data-result-index="' + nextIndex + '"]');
    if (activeRow) {
        var parentGroup = activeRow.closest('details');
        if (parentGroup) { parentGroup.open = true; }
        activeRow.classList.add('active');
        activeRow.setAttribute('aria-selected', 'true');
        if (shouldScroll) { activeRow.scrollIntoView({ block: 'nearest' }); }
    }
    globalSearchState.activeResultIndex = nextIndex;
}

function getGlobalSearchJumpElement(element) {
    if (!element) { return null; }
    if (element.tagName === 'OPTION') { return element.closest('select') || element; }
    return element;
}

function activateGlobalSearchSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (!section || !section.classList.contains('section')) { return; }
    var alprHub = section.closest('#alprPlusHub');
    if (alprHub) {
        var index = section.getAttribute('data-alpr-index') || '0';
        switchProduct('alpr-plus', { skipScroll: true });
        switchAlprTab(index, getAlprTabButton(index), true);
        return;
    }
    switchProduct('redactor', { skipScroll: true });
    switchTab(sectionId, getRedactorTabButton(sectionId), true);
}
function resetFeatureFiltersForGlobalSearch() {
    var features = document.getElementById('features');
    if (!features) { return; }
    var groups = features.querySelectorAll('.filter-group');
    if (groups[0]) {
        var companyAll = groups[0].querySelector('.filter-btn');
        try { filterFeatureCompany('all', companyAll); } catch (e) {}
    }
    if (groups[1]) {
        var typeAll = groups[1].querySelector('.filter-btn');
        try { filterComparisonType('all', typeAll); } catch (e) {}
    }
}

function revealGlobalSearchTarget(element) {
    var target = getGlobalSearchJumpElement(element);
    if (!target) { return null; }
    var section = target.closest('.section');
    if (section && section.id) {
        activateGlobalSearchSection(section.id);
    }

    if (section && section.id === 'competitors') {
        var competitorSelector = document.getElementById('competitorSelector');
        if (competitorSelector) { competitorSelector.value = 'all'; }
        try { filterCompetitorProfiles(); } catch (e) {}
    }
    if (section && section.id === 'features') {
        resetFeatureFiltersForGlobalSearch();
    }
    if (section && section.id === 'icp') {
        var industryFilter = document.getElementById('industryFilter');
        var buyerFilter = document.getElementById('buyerTypeFilter');
        if (industryFilter) { industryFilter.value = 'all'; }
        if (buyerFilter) { buyerFilter.value = 'all'; }
        try { filterIcp(); } catch (e) {}
    }

    if (target.closest('#pricingSummaryTableView')) {
        try { setPricingSummaryView('table'); } catch (e) {}
    }
    if (target.closest('#pricingSummaryCardView')) {
        try { setPricingSummaryView('card'); } catch (e) {}
    }
    var summaryViewer = target.closest('#pricingSummaryViewer.collapsed');
    if (summaryViewer) {
        try { togglePricingSummarySection(); } catch (e) {}
    }

    var hiddenAncestor = target.closest('[hidden]');
    while (hiddenAncestor && !hiddenAncestor.classList.contains('pricing-template-store')) {
        hiddenAncestor.hidden = false;
        hiddenAncestor.removeAttribute('hidden');
        hiddenAncestor = hiddenAncestor.parentElement ? hiddenAncestor.parentElement.closest('[hidden]') : null;
    }

    var accordion = target.closest('.accordion-item');
    if (accordion) {
        accordion.classList.add('active');
        var accordionHeader = accordion.querySelector('.accordion-header');
        var accordionToggle = accordion.querySelector('.accordion-toggle');
        if (accordionHeader) { accordionHeader.setAttribute('aria-expanded', 'true'); }
        if (accordionToggle) { accordionToggle.textContent = '▼'; }
    }

    var objectDetails = target.closest('.object-categories-details');
    if (objectDetails && objectDetails.hidden) {
        objectDetails.hidden = false;
        objectDetails.removeAttribute('hidden');
        var objectRow = objectDetails.closest('.object-categories-row');
        var objectLabel = objectRow ? objectRow.querySelector('.object-categories-label') : null;
        var objectArrow = objectLabel ? objectLabel.querySelector('.object-categories-arrow') : null;
        var objectHint = objectLabel ? objectLabel.querySelector('.object-categories-hint') : null;
        if (objectRow) { objectRow.classList.add('expanded'); }
        if (objectLabel) { objectLabel.setAttribute('aria-expanded', 'true'); }
        if (objectArrow) { objectArrow.textContent = '▼'; }
        if (objectHint) { objectHint.textContent = '(click to collapse)'; }
    }

    return target;
}

function clearGlobalSearchTargetHighlight() {
    if (globalSearchState.highlightTimer) {
        clearTimeout(globalSearchState.highlightTimer);
        globalSearchState.highlightTimer = null;
    }
    if (globalSearchState.highlightedElement) {
        globalSearchState.highlightedElement.classList.remove('global-search-highlight-target');
        globalSearchState.highlightedElement = null;
    }
}

function highlightGlobalSearchTarget(element) {
    clearGlobalSearchTargetHighlight();
    if (!element) { return; }
    element.classList.add('global-search-highlight-target');
    globalSearchState.highlightedElement = element;
    globalSearchState.highlightTimer = setTimeout(function() {
        clearGlobalSearchTargetHighlight();
    }, 2200);
}

function jumpToGlobalSearchResult(index) {
    var result = globalSearchState.results[index];
    if (!result) { return; }
    var target = revealGlobalSearchTarget(result.entry.element);
    if (!target) { return; }
    window.requestAnimationFrame(function() {
        window.requestAnimationFrame(function() {
            try {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } catch (e) {
                target.scrollIntoView();
            }
            highlightGlobalSearchTarget(target);
            if (target.matches && target.matches('button,a,input,select,textarea,[tabindex]') && typeof target.focus === 'function') {
                try { target.focus({ preventScroll: true }); } catch (e) { target.focus(); }
            }
        });
    });
}

function handleGlobalSearchKeydown(event) {
    if (event.key === 'Escape') {
        event.preventDefault();
        clearGlobalSearch();
        return;
    }
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Enter') { return; }
    if (!globalSearchState.results.length) { return; }
    event.preventDefault();
    if (event.key === 'ArrowDown') {
        setGlobalSearchActiveResult(globalSearchState.activeResultIndex + 1, true);
        return;
    }
    if (event.key === 'ArrowUp') {
        setGlobalSearchActiveResult(globalSearchState.activeResultIndex - 1, true);
        return;
    }
    jumpToGlobalSearchResult(globalSearchState.activeResultIndex >= 0 ? globalSearchState.activeResultIndex : 0);
}

function handleGlobalSearchPanelClick(event) {
    var button = event.target.closest('.global-search-jump[data-result-index]');
    if (!button) { return; }
    var index = parseInt(button.getAttribute('data-result-index'), 10);
    if (!isFinite(index)) { return; }
    setGlobalSearchActiveResult(index, false);
    jumpToGlobalSearchResult(index);
}

function shouldIgnoreGlobalSearchMutations(mutations) {
    for (var i = 0; i < mutations.length; i += 1) {
        var target = mutations[i].target;
        var element = target.nodeType === 1 ? target : target.parentElement;
        if (!element || !element.closest('.global-search')) { return false; }
    }
    return true;
}

function scheduleGlobalSearchRebuild(mutations) {
    if (mutations && shouldIgnoreGlobalSearchMutations(mutations)) { return; }
    if (globalSearchState.rebuildTimer) { clearTimeout(globalSearchState.rebuildTimer); }
    globalSearchState.rebuildTimer = setTimeout(function() {
        buildGlobalSearchIndex();
        if (globalSearchState.query.length >= GLOBAL_SEARCH_MIN_LENGTH) {
            globalSearchState.results = searchGlobalIndex(globalSearchState.query);
            renderGlobalSearchResults(globalSearchState.query);
        }
    }, 80);
}

function observeGlobalSearchDom() {
    var root = getGlobalSearchRoot();
    if (!root || typeof MutationObserver === 'undefined') { return; }
    if (globalSearchState.observer) { globalSearchState.observer.disconnect(); }
    globalSearchState.observer = new MutationObserver(scheduleGlobalSearchRebuild);
    globalSearchState.observer.observe(root, {
        childList: true,
        characterData: true,
        subtree: true
    });
}

function initGlobalSearch() {
    var ui = getGlobalSearchUi();
    if (!ui.root || !ui.input || !ui.panel || ui.root.getAttribute('data-global-search-ready') === 'true') {
        if (ui.root) {
            buildGlobalSearchIndex();
            observeGlobalSearchDom();
        }
        return;
    }
    ui.input.addEventListener('input', handleGlobalSearchInput);
    ui.input.addEventListener('keydown', handleGlobalSearchKeydown);
    ui.panel.addEventListener('click', handleGlobalSearchPanelClick);
    ui.panel.addEventListener('keydown', handleGlobalSearchKeydown);
    if (ui.clear) { ui.clear.addEventListener('click', clearGlobalSearch); }
    ui.root.setAttribute('data-global-search-ready', 'true');
    buildGlobalSearchIndex();
    observeGlobalSearchDom();
}

// ═══════════════════════════════════════════════════════
// ALPR+ FUNCTIONALITY ALIGNMENT
// Scoped helpers for the ALPR+ hub. These read existing DOM content
// instead of re-authoring ALPR+ copy.
// ═══════════════════════════════════════════════════════
var alprPricingView = 'table';
var alprResourceView = 'card';

function normalizeAlprKey(text) {
    return String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function setAlprDisplay(element, shouldShow) {
    if (!element) { return; }
    element.style.display = shouldShow ? '' : 'none';
}

function getAlprHeading(section, text) {
    if (!section) { return null; }
    var needle = String(text || '').toLowerCase();
    return Array.prototype.slice.call(section.querySelectorAll('h3')).find(function(heading) {
        return heading.textContent.toLowerCase().indexOf(needle) !== -1;
    }) || null;
}

function getAlprProductGroups() {
    var section = document.getElementById('alpr-product-updates');
    var configs = [
        { value: 'published', label: 'Published Capabilities', heading: 'Published ALPR+ Capabilities' },
        { value: 'deployment', label: 'Deployment Modes & Fit', heading: 'Deployment Modes & Fit' },
        { value: 'api', label: 'API & Integration Ecosystem', heading: 'API & Integration Ecosystem' },
        { value: 'hardware', label: 'Hardware Options & Fit', heading: 'Hardware Options & Fit' },
        { value: 'first-steps', label: 'Recommended First Steps', heading: 'Recommended First Steps for Technical Evaluators' }
    ];
    return configs.map(function(config) {
        var heading = getAlprHeading(section, config.heading);
        var elements = [];
        if (heading) {
            elements.push(heading);
            var cursor = heading.nextElementSibling;
            while (cursor && !(cursor.tagName && cursor.tagName.toLowerCase() === 'h3')) {
                if (cursor.tagName && cursor.tagName.toLowerCase() === 'p' && cursor.querySelector('small')) { break; }
                elements.push(cursor);
                cursor = cursor.nextElementSibling;
            }
        }
        return {
            value: config.value,
            label: config.label,
            elements: elements
        };
    });
}

function updateAlprProductCategory() {
    var selector = document.getElementById('alprProductCategorySelector');
    var status = document.getElementById('alprProductCategoryStatus');
    if (!selector) { return; }
    var selected = selector.value || 'published';
    var groups = getAlprProductGroups();
    groups.forEach(function(group) {
        var show = selected === 'all' || selected === group.value;
        group.elements.forEach(function(element) { setAlprDisplay(element, show); });
    });
    if (status) {
        var selectedGroup = groups.find(function(group) { return group.value === selected; });
        status.textContent = selected === 'all' ? 'Showing all capability groups.' : 'Showing ' + (selectedGroup ? selectedGroup.label : 'selected capability group') + '.';
    }
    refreshLucideIcons();
}

var alprPersonaRoleLabels = {
    'budget-owner': 'Budget owner',
    'operational-recommender': 'Operational recommender',
    'technical-gatekeeper': 'Technical gatekeeper'
};
var alprPersonaVerticalLabels = {
    'law-enforcement': 'Law enforcement & public safety',
    'parking-ev': 'Parking, EV & access control',
    'smart-city': 'Smart city, ITS & tolling',
    'retail-qsr': 'Retail, QSR & automotive services',
    'transportation-logistics': 'Transportation & logistics',
    'developer-integrator': 'Developer, OEM & systems integrator'
};

function initializeAlprPersonaAccordions() {
    Array.prototype.forEach.call(document.querySelectorAll('#alprPersonaGrid .alpr-persona-card'), function(card) {
        if (card.getAttribute('data-alpr-accordion-ready') === 'true') { return; }
        var heading = card.querySelector('h4');
        if (!heading) { return; }
        var content = document.createElement('div');
        content.className = 'alpr-accordion-content';
        content.hidden = true;
        while (heading.nextSibling) {
            content.appendChild(heading.nextSibling);
        }
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'alpr-accordion-header';
        button.setAttribute('aria-expanded', 'false');
        button.onclick = function() { toggleAlprPersonaCard(button); };
        var vertical = alprPersonaVerticalLabels[card.getAttribute('data-vertical')] || '';
        var role = alprPersonaRoleLabels[card.getAttribute('data-buyer-role')] || '';
        button.innerHTML = '<span class="alpr-accordion-title">' + heading.innerHTML + '<small>' + escapeHtml(vertical) + ' · ' + escapeHtml(role) + '</small></span><span class="accordion-toggle">▼</span>';
        card.removeChild(heading);
        card.insertBefore(button, card.firstChild);
        card.appendChild(content);
        card.setAttribute('data-alpr-accordion-ready', 'true');
    });
}

function toggleAlprPersonaCard(button) {
    var card = button ? button.closest('.alpr-persona-card') : null;
    var content = card ? card.querySelector('.alpr-accordion-content') : null;
    if (!card || !content) { return; }
    var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    content.hidden = expanded;
    card.classList.toggle('active', !expanded);
}

function filterAlprPersonas() {
    initializeAlprPersonaAccordions();
    var vertical = (document.getElementById('alprPersonaVerticalFilter') || {}).value || 'all';
    var role = (document.getElementById('alprPersonaRoleFilter') || {}).value || 'all';
    var count = 0;
    Array.prototype.forEach.call(document.querySelectorAll('#alprPersonaGrid .alpr-persona-card'), function(card) {
        var match = (vertical === 'all' || card.getAttribute('data-vertical') === vertical) &&
            (role === 'all' || card.getAttribute('data-buyer-role') === role);
        setAlprDisplay(card, match);
        if (match) { count += 1; }
    });
    var status = document.getElementById('alprPersonaFilterStatus');
    if (status) { status.textContent = count + ' persona' + (count === 1 ? '' : 's') + ' shown.'; }
    refreshLucideIcons();
}

function getAlprCompetitorName(profile) {
    var heading = profile ? profile.querySelector('h4') : null;
    return heading ? heading.textContent.trim() : 'Competitor';
}

function populateAlprCompetitorSelector() {
    var selector = document.getElementById('alprCompetitorSelector');
    if (!selector || selector.getAttribute('data-alpr-populated') === 'true') { return; }
    Array.prototype.forEach.call(document.querySelectorAll('#alpr-competitor-profiles .competitor-profile[data-competitor]'), function(profile) {
        var option = document.createElement('option');
        option.value = profile.getAttribute('data-competitor');
        option.textContent = getAlprCompetitorName(profile);
        selector.appendChild(option);
    });
    selector.setAttribute('data-alpr-populated', 'true');
}

function filterAlprCompetitorProfiles() {
    populateAlprCompetitorSelector();
    var selector = document.getElementById('alprCompetitorSelector');
    if (!selector) { return; }
    var selected = selector.value || 'all';
    var count = 0;
    var selectedName = '';
    Array.prototype.forEach.call(document.querySelectorAll('#alpr-competitor-profiles .competitor-profile[data-competitor]'), function(profile) {
        var match = selected === 'all' || profile.getAttribute('data-competitor') === selected;
        setAlprDisplay(profile, match);
        if (match) {
            count += 1;
            selectedName = getAlprCompetitorName(profile);
        }
    });
    var status = document.getElementById('alprCompetitorStatus');
    if (status) { status.textContent = selected === 'all' ? 'Showing all ' + count + ' competitors.' : 'Showing ' + selectedName + '.'; }
    refreshLucideIcons();
}

function getAlprHeaderLabel(header) {
    var clone = header.cloneNode(true);
    Array.prototype.forEach.call(clone.querySelectorAll('sup'), function(sup) { sup.remove(); });
    return clone.textContent.replace(/\s+/g, ' ').trim();
}

function getAlprFeatureSolutions() {
    var table = document.getElementById('alprFeatureMatrix');
    if (!table) { return []; }
    var headers = Array.prototype.slice.call(table.querySelectorAll('thead th'));
    return headers.slice(1, -1).map(function(header, index) {
        var label = getAlprHeaderLabel(header);
        return { id: normalizeAlprKey(label), label: label, columnIndex: index + 1 };
    });
}

function populateAlprFeatureSelectors() {
    var solutions = getAlprFeatureSolutions();
    ['alprCompareA', 'alprCompareB', 'alprFeatureSolutionFilter'].forEach(function(id) {
        var selector = document.getElementById(id);
        if (!selector || selector.getAttribute('data-alpr-populated') === 'true') { return; }
        if (id !== 'alprFeatureSolutionFilter') { selector.innerHTML = ''; }
        solutions.forEach(function(solution, index) {
            var option = document.createElement('option');
            option.value = solution.id;
            option.textContent = solution.label;
            if (id === 'alprCompareA' && index === 0) { option.selected = true; }
            if (id === 'alprCompareB' && index === 1) { option.selected = true; }
            selector.appendChild(option);
        });
        selector.setAttribute('data-alpr-populated', 'true');
    });
}

function getAlprFeatureRows() {
    var table = document.getElementById('alprFeatureMatrix');
    var solutions = getAlprFeatureSolutions();
    if (!table) { return []; }
    return Array.prototype.map.call(table.querySelectorAll('tbody tr'), function(row) {
        var cells = Array.prototype.slice.call(row.children);
        var values = {};
        solutions.forEach(function(solution) {
            values[solution.id] = cells[solution.columnIndex] ? cells[solution.columnIndex].innerHTML : '';
        });
        return {
            feature: cells[0] ? cells[0].innerHTML : '',
            values: values,
            advantage: cells[cells.length - 1] ? cells[cells.length - 1].innerHTML : ''
        };
    });
}

function updateAlprFeatureComparison() {
    populateAlprFeatureSelectors();
    var selectorA = document.getElementById('alprCompareA');
    var selectorB = document.getElementById('alprCompareB');
    var output = document.getElementById('alprFeatureComparisonResult');
    if (!selectorA || !selectorB || !output) { return; }
    var solutions = getAlprFeatureSolutions();
    var solutionA = solutions.find(function(solution) { return solution.id === selectorA.value; }) || solutions[0];
    var solutionB = solutions.find(function(solution) { return solution.id === selectorB.value; }) || solutions[1] || solutions[0];
    if (!solutionA || !solutionB) { return; }
    output.innerHTML = '<div class="table-wrapper"><table class="comparison-table alpr-generated-table"><thead><tr><th>Feature</th><th>' + escapeHtml(solutionA.label) + '</th><th>' + escapeHtml(solutionB.label) + '</th><th>Sighthound Advantage</th></tr></thead><tbody>' + getAlprFeatureRows().map(function(row) {
        return '<tr><td>' + row.feature + '</td><td>' + (row.values[solutionA.id] || '') + '</td><td>' + (row.values[solutionB.id] || '') + '</td><td>' + row.advantage + '</td></tr>';
    }).join('') + '</tbody></table></div>';
    refreshLucideIcons();
}

function filterAlprFeatureSolution() {
    populateAlprFeatureSelectors();
    var selector = document.getElementById('alprFeatureSolutionFilter');
    var table = document.getElementById('alprFeatureMatrix');
    if (!selector || !table) { return; }
    var selected = selector.value || 'all';
    var solutions = getAlprFeatureSolutions();
    var selectedSolution = solutions.find(function(solution) { return solution.id === selected; });
    var headers = Array.prototype.slice.call(table.querySelectorAll('thead th'));
    headers.forEach(function(header, index) {
        setAlprDisplay(header, selected === 'all' || index === 0 || index === headers.length - 1 || (selectedSolution && index === selectedSolution.columnIndex));
    });
    Array.prototype.forEach.call(table.querySelectorAll('tbody tr'), function(row) {
        Array.prototype.forEach.call(row.children, function(cell, index) {
            setAlprDisplay(cell, selected === 'all' || index === 0 || index === row.children.length - 1 || (selectedSolution && index === selectedSolution.columnIndex));
        });
    });
    var status = document.getElementById('alprFeatureFilterStatus');
    if (status) { status.textContent = selected === 'all' ? 'Showing all solution columns.' : 'Showing ' + (selectedSolution ? selectedSolution.label : 'selected solution') + ' with feature and advantage columns.'; }
}

function getAlprPricingRows() {
    var table = document.getElementById('alprPricingModelTable');
    if (!table) { return []; }
    return Array.prototype.map.call(table.querySelectorAll('tbody tr'), function(row) {
        var cells = Array.prototype.slice.call(row.children);
        var name = cells[0] ? cells[0].textContent.replace(/\s+/g, ' ').trim() : 'Vendor';
        return {
            id: normalizeAlprKey(name),
            name: name,
            cells: cells.map(function(cell) { return cell.innerHTML; })
        };
    });
}

function populateAlprPricingSelectors() {
    var rows = getAlprPricingRows();
    ['alprPricingCompareA', 'alprPricingCompareB', 'alprPricingSummarySelect'].forEach(function(id) {
        var selector = document.getElementById(id);
        if (!selector || selector.getAttribute('data-alpr-populated') === 'true') { return; }
        selector.innerHTML = id === 'alprPricingSummarySelect' ? '<option value="">Select a vendor summary</option>' : '<option value="">Select a competitor</option>';
        rows.forEach(function(row, index) {
            var option = document.createElement('option');
            option.value = row.id;
            option.textContent = row.name;
            if (id === 'alprPricingCompareA' && index === 0) { option.selected = true; }
            if (id === 'alprPricingCompareB' && index === 1) { option.selected = true; }
            selector.appendChild(option);
        });
        selector.setAttribute('data-alpr-populated', 'true');
    });
}

function renderAlprPricingPanel(row) {
    if (!row) { return '<p class="pricing-dropdown-placeholder">No pricing details are available for the selected vendor.</p>'; }
    return '<article class="pricing-summary-card alpr-pricing-card"><h5>' + escapeHtml(row.name) + '</h5><dl>' +
        '<div><dt>Pricing model type</dt><dd>' + (row.cells[1] || '') + '</dd></div>' +
        '<div><dt>Public pricing status / figures</dt><dd>' + (row.cells[2] || '') + '</dd></div>' +
        '<div><dt>Source URL and access date</dt><dd>' + (row.cells[3] || '') + '</dd></div>' +
        '<div><dt>Sales-use note</dt><dd>' + (row.cells[4] || '') + '</dd></div>' +
        '</dl></article>';
}

function handleAlprPricingSelectionChange() {
    populateAlprPricingSelectors();
    var output = document.getElementById('alprPricingComparisonResult');
    if (output) { output.innerHTML = ''; }
    var message = document.getElementById('alprPricingCompareMessage');
    if (message) { message.textContent = 'Select two competitors, then choose Compare to view pricing details side by side.'; }
}

function compareAlprPricingCompetitors() {
    populateAlprPricingSelectors();
    var rows = getAlprPricingRows();
    var firstValue = (document.getElementById('alprPricingCompareA') || {}).value || '';
    var secondValue = (document.getElementById('alprPricingCompareB') || {}).value || '';
    var output = document.getElementById('alprPricingComparisonResult');
    var message = document.getElementById('alprPricingCompareMessage');
    if (!output) { return; }
    if (!firstValue || !secondValue || firstValue === secondValue) {
        if (message) { message.textContent = firstValue === secondValue ? 'Please select two different competitors to compare.' : 'Please select two competitors to compare.'; }
        output.innerHTML = '';
        return;
    }
    var first = rows.find(function(row) { return row.id === firstValue; });
    var second = rows.find(function(row) { return row.id === secondValue; });
    output.innerHTML = '<div class="pricing-comparison-grid"><div class="pricing-comparison-column">' + renderAlprPricingPanel(first) + '</div><div class="pricing-comparison-column">' + renderAlprPricingPanel(second) + '</div></div>';
    if (message) { message.textContent = 'Comparison shown. Preserve all caveats and verify current quotes before use.'; }
    refreshLucideIcons();
}

function updateAlprPricingSummary() {
    populateAlprPricingSelectors();
    var selector = document.getElementById('alprPricingSummarySelect');
    var output = document.getElementById('alprPricingSummaryDetails');
    if (!selector || !output) { return; }
    var row = getAlprPricingRows().find(function(item) { return item.id === selector.value; });
    output.innerHTML = selector.value ? renderAlprPricingPanel(row) : '<p class="pricing-dropdown-placeholder">Select a summary item to view pricing-model details.</p>';
    refreshLucideIcons();
}

function setAlprPricingView(view) {
    alprPricingView = view === 'card' ? 'card' : 'table';
    var cardView = document.getElementById('alprPricingCardView');
    var tableWrapper = document.getElementById('alprPricingModelTableWrapper');
    var summary = document.getElementById('alprPricingViewSummary');
    if (!cardView || !tableWrapper) { return; }
    cardView.innerHTML = getAlprPricingRows().map(renderAlprPricingPanel).join('');
    cardView.hidden = alprPricingView !== 'card';
    tableWrapper.hidden = alprPricingView !== 'table';
    document.querySelectorAll('#alpr-pricing-analysis .resource-toggle').forEach(function(button) {
        if (button.id === 'alprPricingCardViewBtn' || button.id === 'alprPricingTableViewBtn') {
            button.classList.toggle('active', (button.id === 'alprPricingCardViewBtn') === (alprPricingView === 'card'));
        }
    });
    if (summary) { summary.textContent = 'Showing ' + (alprPricingView === 'card' ? 'card' : 'table') + ' view.'; }
    refreshLucideIcons();
}

function filterAlprPositioningScenario() {
    var selector = document.getElementById('alprPositioningScenarioSelector');
    if (!selector) { return; }
    var selected = selector.value || 'all';
    var count = 0;
    Array.prototype.forEach.call(document.querySelectorAll('#alpr-positioning-strategy [data-alpr-scenario]'), function(block) {
        var match = selected === 'all' || block.getAttribute('data-alpr-scenario') === selected;
        setAlprDisplay(block, match);
        if (match) { count += 1; }
    });
    var status = document.getElementById('alprPositioningScenarioStatus');
    if (status) { status.textContent = selected === 'all' ? 'Showing all scenario-specific win themes and talk tracks.' : 'Showing ' + count + ' scenario-specific block' + (count === 1 ? '' : 's') + '.'; }
    refreshLucideIcons();
}

var alprDiscoveryLabels = {
    'law-enforcement': 'Law Enforcement',
    'parking-ev': 'Parking & EV',
    'smart-city': 'Smart City / ITS',
    'retail-qsr': 'Retail / QSR',
    'developer-integrator': 'Developer / Integrator',
    'budget-owner': 'Budget owner',
    'operational-recommender': 'Operational recommender',
    'technical-gatekeeper': 'Technical gatekeeper',
    'deployment-control': 'Deployment control',
    'mmcg-validation': 'MMCG validation',
    'pricing-tco': 'Pricing / TCO'
};

function updateAlprDiscoveryGenerator() {
    var vertical = (document.getElementById('alprDiscoveryVertical') || {}).value || '';
    var role = (document.getElementById('alprDiscoveryRole') || {}).value || '';
    var scenario = (document.getElementById('alprDiscoveryScenario') || {}).value || '';
    var ready = !!(vertical && role && scenario);
    Array.prototype.forEach.call(document.querySelectorAll('#alpr-discovery-questions .alpr-discovery-card'), function(card) {
        card.hidden = !ready || card.getAttribute('data-alpr-vertical') !== vertical;
    });
    var message = document.getElementById('alprDiscoveryGateMessage');
    if (message) {
        message.textContent = ready
            ? 'Generated questions for ' + alprDiscoveryLabels[vertical] + ' · ' + alprDiscoveryLabels[role] + ' · ' + alprDiscoveryLabels[scenario] + '. Buyer Role and Scenario act as gates because the existing question text is organized by vertical.'
            : 'Select Vertical, Buyer Role, and Scenario / Pricing Context before generating questions.';
        message.classList.toggle('active', ready);
    }
    refreshLucideIcons();
}

function getAlprCalcSelections() {
    return {
        cameraCount: parseInt((document.getElementById('alprCalcCameraCount') || {}).value, 10) || 25,
        deployment: (document.getElementById('alprCalcDeployment') || {}).value || 'edge',
        vertical: (document.getElementById('alprCalcVertical') || {}).value || 'parking',
        tier: (document.getElementById('alprCalcTier') || {}).value || 'pro'
    };
}

function getAlprCalcTierLabel(tier) {
    if (tier === 'engine') { return 'Engine (OEM/developer)'; }
    if (tier === 'free') { return 'Free (limited)'; }
    return 'Pro (per-camera subscription)';
}

function calculateAlprPricing() {
    var selections = getAlprCalcSelections();
    var output = document.getElementById('alprCalcOutput');
    if (!output) { return; }
    var cameras = selections.cameraCount;
    var isEnterprise = selections.tier === 'engine' || cameras >= 500 || selections.deployment === 'air-gapped' || selections.vertical === 'developer';
    var alprAnnual = selections.tier === 'pro' && !isEnterprise ? cameras * 29 * 12 : NaN;
    var plateRecognizerAnnual = cameras * 45 * 12;
    var rekorAnnual = cameras * 12 * 12;
    var alprCostLabel = isFinite(alprAnnual)
        ? '$' + alprAnnual.toLocaleString('en-US') + '/year [ESTIMATE; 2023 press release — may be outdated; verify with sales team]'
        : 'Custom quote required; no current public ALPR+ figure [ESTIMATE]';
    var rows = [
        ['Sighthound ALPR+', getAlprCalcTierLabel(selections.tier), alprCostLabel, 'Current pricing is not publicly listed; verify with sales team before use.'],
        ['Plate Recognizer Stream + MMC', 'Per-camera benchmark', '$' + plateRecognizerAnnual.toLocaleString('en-US') + '/year [ESTIMATE]', 'Modeled as ' + cameras + ' × $45/camera/month × 12 from the existing pricing source snapshot.'],
        ['Rekor Scout Basic', 'Official Basic per-camera plan', '$' + rekorAnnual.toLocaleString('en-US') + '/year [ESTIMATE from official Rekor Scout Basic plan]', 'Official Rekor docs list Basic at $12/camera/month; verify current scope, retention, hosting, and Enterprise terms with Rekor.']
    ];
    output.hidden = false;
    output.innerHTML = '<div class="comparison-wrap"><div class="comparison-title">How Sighthound ALPR+ Compares</div><div class="pricing-recommendation-card"><div class="recommendation-kicker">Illustrative estimate only</div><h4>' + cameras + '-camera ' + escapeHtml(selections.deployment) + ' deployment · ' + escapeHtml(getAlprCalcTierLabel(selections.tier)) + '</h4><p>All outputs preserve the existing caveat: ALPR+ current pricing is not publicly listed, and every figure must be verified with the sales team before use.</p></div><table class="comparison-table alpr-generated-table"><thead><tr><th>Tool</th><th>Pricing Basis</th><th>Estimated Annual Cost</th><th>Caveat</th></tr></thead><tbody>' + rows.map(function(row) {
        return '<tr><td data-label="Tool" class="tool-name">' + escapeHtml(row[0]) + '</td><td data-label="Pricing Basis">' + escapeHtml(row[1]) + '</td><td data-label="Estimated Annual Cost">' + escapeHtml(row[2]) + '</td><td data-label="Caveat">' + escapeHtml(row[3]) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
    refreshLucideIcons();
}

function resetAlprPricingCalculator() {
    var defaults = {
        alprCalcCameraCount: '25',
        alprCalcDeployment: 'edge',
        alprCalcVertical: 'parking',
        alprCalcTier: 'pro'
    };
    Object.keys(defaults).forEach(function(id) {
        var el = document.getElementById(id);
        if (el) { el.value = defaults[id]; }
    });
    var output = document.getElementById('alprCalcOutput');
    if (output) {
        output.innerHTML = '';
        output.hidden = true;
    }
}

function getAlprNearestHeadingText(element, root) {
    var current = element;
    while (current && current !== root) {
        var previous = current.previousElementSibling;
        while (previous) {
            if (previous.matches && previous.matches('h3')) { return previous.textContent.trim(); }
            var nestedHeading = previous.querySelector && previous.querySelector('h3');
            if (nestedHeading) { return nestedHeading.textContent.trim(); }
            previous = previous.previousElementSibling;
        }
        current = current.parentElement;
    }
    return '';
}

function getAlprResourceCategory(element, root) {
    if (element.closest('.alpr-resource-group') || element.closest('.alpr-design-system-hero')) { return 'design-system'; }
    var heading = getAlprNearestHeadingText(element, root).toLowerCase();
    if (heading.indexOf('primary top-of-funnel') !== -1) { return 'primary-cta'; }
    if (heading.indexOf('official alpr') !== -1) { return 'official-pages'; }
    if (heading.indexOf('solution pages') !== -1) { return 'solution-pages'; }
    if (heading.indexOf('technical') !== -1 || heading.indexOf('developer') !== -1) { return 'developer-docs'; }
    if (heading.indexOf('datasheet') !== -1 || heading.indexOf('pdf') !== -1) { return 'datasheets-pdfs'; }
    if (heading.indexOf('content gaps') !== -1 || heading.indexOf('pricing reference') !== -1) { return 'content-gaps'; }
    return 'official-pages';
}

function getAlprResourceCategoryLabel(category) {
    var labels = {
        'design-system': 'Design-system File Catalog',
        'official-pages': 'Official Product Pages',
        'developer-docs': 'Developer Documentation',
        'datasheets-pdfs': 'Datasheets & PDFs',
        'solution-pages': 'Solution Pages by Vertical',
        'primary-cta': 'Primary CTA',
        'content-gaps': 'Content Gaps'
    };
    return labels[category] || 'Resource';
}

function collectAlprResourceItems() {
    var root = document.getElementById('alprResourceSourceContent');
    if (!root) { return []; }
    var seen = {};
    var items = [];
    function addItem(element, title, url, description) {
        var cleanTitle = String(title || '').replace(/\s+/g, ' ').trim();
        var cleanUrl = String(url || '').trim();
        var key = cleanTitle + '|' + cleanUrl;
        if (!element || !cleanTitle || seen[key]) { return; }
        seen[key] = true;
        items.push({
            element: element,
            title: cleanTitle,
            url: cleanUrl,
            description: String(description || element.textContent || '').replace(/\s+/g, ' ').trim(),
            category: getAlprResourceCategory(element, root)
        });
    }
    Array.prototype.forEach.call(root.querySelectorAll('.alpr-file-grid a'), function(link) {
        addItem(link, link.textContent, link.getAttribute('href'), link.textContent);
    });
    Array.prototype.forEach.call(root.querySelectorAll('.positioning-grid .card'), function(card) {
        var heading = card.querySelector('h4');
        var link = card.querySelector('a[href]');
        addItem(card, heading ? heading.textContent : card.textContent, link ? link.getAttribute('href') : '', card.textContent);
    });
    Array.prototype.forEach.call(root.querySelectorAll('.table-wrapper tbody tr'), function(row) {
        var firstCell = row.querySelector('td');
        var link = row.querySelector('a[href]');
        addItem(row, firstCell ? firstCell.textContent : row.textContent, link ? link.getAttribute('href') : '', row.textContent);
    });
    Array.prototype.forEach.call(root.querySelectorAll('.strength-box, .weakness-box'), function(box) {
        var heading = box.querySelector('h3, h4, strong');
        var link = box.querySelector('a[href]');
        addItem(box, heading ? heading.textContent : box.textContent, link ? link.getAttribute('href') : '', box.textContent);
    });
    return items;
}

function getFilteredAlprResources() {
    var query = ((document.getElementById('alprResourceSearch') || {}).value || '').toLowerCase().trim();
    var category = (document.getElementById('alprResourceCategoryFilter') || {}).value || 'all';
    return collectAlprResourceItems().filter(function(item) {
        var categoryMatch = category === 'all' || item.category === category;
        var queryMatch = !query || [item.title, item.url, item.description, getAlprResourceCategoryLabel(item.category)].join(' ').toLowerCase().indexOf(query) !== -1;
        return categoryMatch && queryMatch;
    });
}

function renderAlprResourceTable(items) {
    var tableView = document.getElementById('alprResourceTableView');
    if (!tableView) { return; }
    if (!items.length) {
        tableView.innerHTML = '<div class="resource-empty">No ALPR+ resources match the current filters.</div>';
        return;
    }
    tableView.innerHTML = '<div class="resource-table-wrapper"><table class="resource-table"><thead><tr><th>Title</th><th>URL</th><th>Category</th><th>Description</th></tr></thead><tbody>' + items.map(function(item) {
        var url = item.url ? '<a href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener">' + escapeHtml(item.url) + '</a>' : '—';
        return '<tr><td>' + escapeHtml(item.title) + '</td><td><p class="resource-url">' + url + '</p></td><td>' + escapeHtml(getAlprResourceCategoryLabel(item.category)) + '</td><td>' + escapeHtml(item.description.slice(0, 220)) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
}

function renderAlprResources() {
    var source = document.getElementById('alprResourceSourceContent');
    var tableView = document.getElementById('alprResourceTableView');
    if (!source || !tableView) { return; }
    var allItems = collectAlprResourceItems();
    var filtered = getFilteredAlprResources();
    var filteredElements = filtered.map(function(item) { return item.element; });
    allItems.forEach(function(item) {
        setAlprDisplay(item.element, alprResourceView === 'card' && filteredElements.indexOf(item.element) !== -1);
    });
    source.hidden = alprResourceView !== 'card';
    tableView.hidden = alprResourceView !== 'table';
    if (alprResourceView === 'table') { renderAlprResourceTable(filtered); }
    var total = document.getElementById('alprResourceTotalCount');
    var summary = document.getElementById('alprResourceSummary');
    if (total) { total.textContent = String(filtered.length); }
    if (summary) { summary.textContent = 'Showing ' + filtered.length + ' of ' + allItems.length + ' resources'; }
    document.querySelectorAll('#alpr-key-marketing-resources .resource-toggle').forEach(function(button) {
        if (button.id === 'alprResourceCardViewBtn' || button.id === 'alprResourceTableViewBtn') {
            button.classList.toggle('active', (button.id === 'alprResourceCardViewBtn') === (alprResourceView === 'card'));
        }
    });
    refreshLucideIcons();
}

function setAlprResourceView(view) {
    alprResourceView = view === 'table' ? 'table' : 'card';
    renderAlprResources();
}

function resetAlprResourceFilters() {
    var search = document.getElementById('alprResourceSearch');
    var category = document.getElementById('alprResourceCategoryFilter');
    if (search) { search.value = ''; }
    if (category) { category.value = 'all'; }
    alprResourceView = 'card';
    renderAlprResources();
}

function initAlprFunctionality() {
    updateAlprProductCategory();
    filterAlprPersonas();
    filterAlprCompetitorProfiles();
    populateAlprFeatureSelectors();
    updateAlprFeatureComparison();
    filterAlprFeatureSolution();
    populateAlprPricingSelectors();
    handleAlprPricingSelectionChange();
    updateAlprPricingSummary();
    setAlprPricingView(alprPricingView);
    filterAlprPositioningScenario();
    updateAlprDiscoveryGenerator();
    resetAlprPricingCalculator();
    renderAlprResources();
}
// Expose functions to global scope so inline onclick handlers can find them
// (This is redundant when loaded as a regular script, but ensures reliability.)
if (typeof window !== 'undefined') {
    window.switchTab = switchTab;
    window.switchProduct = switchProduct;
    window.switchAlprTab = switchAlprTab;
    window.toggleAlprPrompt = toggleAlprPrompt;
    window.copyAlprPrompt = copyAlprPrompt;
    window.updateAlprProductCategory = updateAlprProductCategory;
    window.filterAlprPersonas = filterAlprPersonas;
    window.toggleAlprPersonaCard = toggleAlprPersonaCard;
    window.filterAlprCompetitorProfiles = filterAlprCompetitorProfiles;
    window.updateAlprFeatureComparison = updateAlprFeatureComparison;
    window.filterAlprFeatureSolution = filterAlprFeatureSolution;
    window.handleAlprPricingSelectionChange = handleAlprPricingSelectionChange;
    window.compareAlprPricingCompetitors = compareAlprPricingCompetitors;
    window.updateAlprPricingSummary = updateAlprPricingSummary;
    window.setAlprPricingView = setAlprPricingView;
    window.filterAlprPositioningScenario = filterAlprPositioningScenario;
    window.updateAlprDiscoveryGenerator = updateAlprDiscoveryGenerator;
    window.calculateAlprPricing = calculateAlprPricing;
    window.resetAlprPricingCalculator = resetAlprPricingCalculator;
    window.renderAlprResources = renderAlprResources;
    window.setAlprResourceView = setAlprResourceView;
    window.resetAlprResourceFilters = resetAlprResourceFilters;
    window.toggleAccordion = toggleAccordion;
    window.filterIcp = filterIcp;
    window.filterCompetitorProfiles = filterCompetitorProfiles;
    window.scrollToTop = scrollToTop;
    window.filterFeatureCompany = filterFeatureCompany;
    window.filterComparisonType = filterComparisonType;
    window.toggleObjectCategories = toggleObjectCategories;
    window.handleObjectCategoriesKey = handleObjectCategoriesKey;
    window.updateComparison = updateComparison;
    window.updateDiscoveryQuestions = updateDiscoveryQuestions;
    window.updateVersionDetails = updateVersionDetails;
    window.calculatePricing = calculatePricing;
    window.handlePricingSelectionChange = handlePricingSelectionChange;
    window.resetPricingCalc = resetPricingCalc;
    window.handlePricingCompetitorChange = handlePricingCompetitorChange;
    window.handlePricingSummaryChange = handlePricingSummaryChange;
    window.comparePricingCompetitors = comparePricingCompetitors;
    window.setPricingSummaryView = setPricingSummaryView;
    window.togglePricingSummarySection = togglePricingSummarySection;
    window.handleFoiaContractSourceChange = handleFoiaContractSourceChange;
    window.renderFoiaContractData = renderFoiaContractData;
    window.setFoiaContractView = setFoiaContractView;
    window.resetFoiaContractFilters = resetFoiaContractFilters;
    window.toggleFoiaContractSection = toggleFoiaContractSection;
    window.toggleScrollButton = toggleScrollButton;
    window.renderMarketingResources = renderMarketingResources;
    window.setMarketingResourceView = setMarketingResourceView;
    window.resetMarketingResourceFilters = resetMarketingResourceFilters;
    window.handleMarketingResourceModeChange = handleMarketingResourceModeChange;
    window.handleMarketingFileSelect = handleMarketingFileSelect;
    window.addMarketingResource = addMarketingResource;
    window.clearMarketingResourceForm = clearMarketingResourceForm;
    window.copyMarketingResourceUrl = copyMarketingResourceUrl;
    window.toggleYouTubeRedactionFilter = toggleYouTubeRedactionFilter;
    window.toggleBlogCategoryFilter = toggleBlogCategoryFilter;

    // Initialization: run after the DOM / page hydrates
    function __redactorInit() {
        try { initializeProductSwitcher(); } catch (e) {}
        try { updateComparison(); } catch (e) {}
        try { updateVersionDetails(); } catch (e) {}
        try { toggleScrollButton(); } catch (e) {}
        try { updateDiscoveryQuestions(); } catch (e) {}
        try { initPricingAnalysisDropdowns(); } catch (e) {}
        try { initFoiaContractPricing(); } catch (e) {}
        try { initPricingCalculator(); } catch (e) {}
        try { initMarketingResources(); } catch (e) {}
        try { initAlprFunctionality(); } catch (e) {}
        try { initGlobalSearch(); } catch (e) {}
        if (typeof window.lucide !== 'undefined' && window.lucide && typeof window.lucide.createIcons === 'function') {
            try { window.lucide.createIcons(); } catch (e) {}
        }
    }
    window.__redactorInit = __redactorInit;

    window.addEventListener('scroll', toggleScrollButton);
    window.addEventListener('resize', function() {
        try { updatePricingSummaryBodyHeight(); } catch (e) {}
        try { updateFoiaContractBodyHeight(); } catch (e) {}
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', __redactorInit);
    } else {
        // DOM already ready - defer slightly so React has mounted content
        setTimeout(__redactorInit, 0);
    }
}
