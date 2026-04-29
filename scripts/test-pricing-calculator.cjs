const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const repoRoot = path.resolve(__dirname, '..');
const scriptPath = path.join(repoRoot, 'public', 'script.js');
const code = fs.readFileSync(scriptPath, 'utf8');
const context = vm.createContext({
    console,
    URL,
    setTimeout,
    clearTimeout
});

vm.runInContext(code, context, { filename: scriptPath });

function comp(name, capabilityText, extra = {}) {
    return {
        name,
        capabilityText: capabilityText.toLowerCase(),
        searchText: [capabilityText, extra.searchText || ''].join(' ').toLowerCase(),
        profileText: extra.profileText || ''
    };
}

const desktopOnly = comp(
    'MotionDSP Spotlight',
    'MotionDSP Spotlight $1,870/year per license. Windows desktop only. No server/cloud deployment. No API.'
);

assert.equal(context.competitorMatchesDeployment(desktopOnly, 'desktop'), true);
assert.equal(context.competitorMatchesDeployment(desktopOnly, 'cloud'), false);
assert.equal(context.getDeploymentScore(desktopOnly, 'cloud'), 0);

const noServerOrCloud = comp(
    'Desktop Redactor',
    'Desktop redaction suite. Windows desktop. No server or cloud deployment. Without API support.'
);

assert.equal(context.competitorMatchesDeployment(noServerOrCloud, 'cloud'), false);
assert.equal(context.competitorMatchesDeployment(noServerOrCloud, 'server'), false);
assert.equal(context.competitorMatchesApi(noServerOrCloud, 'yes-automation'), false);

const caseGuard = comp(
    'CaseGuard Studio',
    'CaseGuard Studio $299/month per seat. Windows desktop/on-premise workflow. No API.'
);

assert.equal(context.competitorMatchesDeployment(caseGuard, 'cloud'), false);
assert.equal(context.competitorMatchesDeployment(caseGuard, 'server'), true);

const cloudOnly = comp(
    'FastRedaction',
    'FastRedaction pay as you go. Cloud-only SaaS redaction workflow on AWS.'
);

assert.equal(context.competitorMatchesDeployment(cloudOnly, 'cloud'), true);
assert.equal(context.competitorMatchesDeployment(cloudOnly, 'airgapped'), false);

const hybrid = comp(
    'Pimloc SecureRedact',
    'Pimloc SecureRedact video/image redaction platform. Cloud SaaS and on-premise deployment options.'
);

assert.equal(context.competitorMatchesDeployment(hybrid, 'cloud'), true);
assert.equal(context.competitorMatchesDeployment(hybrid, 'server'), true);

const profileLeak = comp(
    'AssemblyAI',
    'AssemblyAI Universal-2 Cloud API audio-only PII redaction.',
    {
        searchText: 'Sighthound Wins On: offline or on-premise deployment, visual redaction, air-gapped workflows.',
        profileText: 'Sighthound Wins On: offline or on-premise deployment, visual redaction, air-gapped workflows.'
    }
);

assert.equal(context.competitorMatchesDeployment(profileLeak, 'airgapped'), false);
assert.equal(context.competitorMatchesDeployment(profileLeak, 'cloud'), true);

const cloudScenarioCompetitors = [desktopOnly, caseGuard, cloudOnly, hybrid];
const cloudMatches = cloudScenarioCompetitors
    .filter((item) => context.competitorMatchesDeployment(item, 'cloud'))
    .map((item) => item.name);

assert.deepEqual(cloudMatches, ['FastRedaction', 'Pimloc SecureRedact']);

const noWinnerDecision = context.choosePricingRecommendation(
    [
        {
            name: 'AssemblyAI',
            annualCost: 12,
            isRecommendationEligible: false,
            valueForMoneyScore: 55
        }
    ],
    {
        users: '11+',
        deployment: 'airgapped',
        api: 'yes-oem',
        monthlyMinutes: '1000',
        monthlyJobs: '25'
    },
    'custom',
    []
);

assert.equal(noWinnerDecision.winner, null);
assert.match(context.getPricingReason(noWinnerDecision), /No explicit-priced full-fit option/);

const fallbackValueSignals = context.getNoExplicitPricedValueSignals({
    excludedNotes: [
        'Sighthound Custom pricing is not publicly numeric for API, OEM, large-team, or air-gapped deployments.'
    ]
});

assert.equal(fallbackValueSignals.length, 3);
assert.match(fallbackValueSignals.join(' '), /excluded from numeric scoring/i);
assert.match(fallbackValueSignals.join(' '), /vendor quotes/i);

console.log('pricing calculator regression tests passed');
