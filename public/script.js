var comparisonMode = 'all';
var versionData = {
    'v7.0.6': {
        title: 'Version 7.0.6 Release',
        date: 'March 2026',
        icon: 'rocket',
        heading: 'Key Highlights',
        highlights: [
            { label: 'GPU Optimization', content: 'Better stability for teams with varying GPU configurations. Users can now safely disable CUDA at the driver level, making enterprise deployments more flexible.' },
            { label: 'Early License Validation', content: 'Invalid license errors now surface immediately—no wasted processing time. This reduces frustration and speeds up deployments.' },
            { label: 'Improved Error Messages', content: 'Error messages are now human-readable, making troubleshooting faster for teams without technical expertise.' },
            { label: 'Non-Standard Resolution Video Fix', content: 'Fixed critical bug affecting non-standard video resolutions (including screen recordings). This broadens use cases for corporate/evidence redaction.' }
        ]
    },
    'v7.0.5': {
        title: 'Version 7.0.5 Release',
        date: 'February 2026',
        icon: 'layers',
        heading: 'Key Highlights',
        highlights: [
            { label: 'Batch Queue Management', content: 'New batch queue controls let operators pause, reorder, and prioritize large redaction jobs, improving throughput for high-volume teams.' },
            { label: 'Multi-User Session Stability', content: 'Improved concurrency handling in server mode reduces session drops and conflicts when multiple users work simultaneously.' },
            { label: 'Docker Enhancements', content: 'Updated container images with smaller footprint, faster startup times, and smoother integration into existing orchestration pipelines.' }
        ]
    },
    'v7.0.3': {
        title: 'Version 7.0.3 Release',
        date: 'January 2026',
        icon: 'sparkles',
        heading: 'Key Highlights',
        highlights: [
            { label: 'Screen/Text Detection Added', content: 'New AI detection models identify on-screen text and monitor content within video frames, broadening redaction coverage for sensitive media.' },
            { label: 'Undo/Redo Introduced', content: 'Full undo and redo support across the redaction workflow gives reviewers confidence to experiment and correct mistakes without losing progress.' },
            { label: 'Audit Log Export Improved', content: 'Expanded audit log export options with richer metadata, better filtering, and compliance-friendly formats for evidence handling.' }
        ]
    },
    'v7.0.0': {
        title: 'Version 7.0.0 Major Release',
        date: 'December 2025',
        icon: 'star',
        heading: 'Key Highlights',
        highlights: [
            { label: 'New UI', content: 'Redesigned interface with a modern layout, clearer workflows, and improved accessibility for first-time and daily users alike.' },
            { label: 'Server-Mode Processing', content: 'Introduced dedicated server-mode processing for centralized deployments, enabling enterprise-grade throughput and multi-user workflows.' },
            { label: 'REST API v2', content: 'Launched a completely revamped REST API with expanded endpoints, improved authentication, and better integration support for evidence systems.' },
            { label: 'Docker Support Launched', content: 'Official Docker images released for the first time, simplifying deployment across Linux, air-gapped, and containerized environments.' }
        ]
    }
};
function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text == null ? '' : text;
    return div.innerHTML;
}
function updateVersionDetails() {
    var selector = document.getElementById('versionSelector');
    var container = document.getElementById('versionDetails');
    if (!selector || !container) { return; }
    var data = versionData[selector.value];
    if (!data) { container.innerHTML = ''; return; }
    var html = '<span class="version-meta">' + escapeHtml(selector.value) + ' · ' + escapeHtml(data.date) + '</span>';
    html += '<h4><i data-lucide="' + escapeHtml(data.icon) + '"></i> ' + escapeHtml(data.title) + '</h4>';
    if (data.heading) {
        html += '<p style="margin: 4px 0 12px 0; font-weight: 600; color: #1e3a5f;">' + escapeHtml(data.heading) + '</p>';
    }
    data.highlights.forEach(function(item) {
        html += '<p><strong>' + escapeHtml(item.label) + ':</strong> ' + escapeHtml(item.content) + '</p>';
    });
    container.innerHTML = html;
    if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}
function switchTab(tabName, element) {
    document.querySelectorAll('.section').forEach(function(section) { section.classList.remove('active'); });
    document.querySelectorAll('.nav-tab').forEach(function(tab) { tab.classList.remove('active'); });
    document.getElementById(tabName).classList.add('active');
    if (element) { element.classList.add('active'); }
    scrollToTop();
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
    var comparisonData = {
        sighthound: { name: 'Sighthound Redactor', features: { face: 'AI-powered face, head, and vehicle tracking', audio: 'Full audio redaction support', video: 'Strong video evidence workflow and batch processing', document: 'ID, document, and screen detection', deployment: 'Desktop, server, cloud, and offline' } },
        veritone: { name: 'Veritone Redact', features: { face: 'Strong AI face redaction', audio: 'Full audio redaction and transcription', video: 'Cloud-first evidence workflow', document: 'Some ID support, weaker document emphasis', deployment: 'Cloud-only deployment' } },
        caseguard: { name: 'CaseGuard Studio', features: { face: 'Strong face redaction', audio: 'Full audio redaction', video: 'Broad desktop workflow support', document: 'Strong document redaction', deployment: 'Desktop and on-premise' } },
        fastredaction: { name: 'FastRedaction', features: { face: 'Automatic face blurring', audio: 'Limited audio support', video: 'Simple cloud video workflow', document: 'No major document redaction emphasis', deployment: 'Cloud-only' } },
        motiondsp: { name: 'MotionDSP Spotlight', features: { face: 'Advanced tracked face redaction', audio: 'Full multi-channel audio support', video: 'Forensics-focused video processing', document: 'Minimal document support', deployment: 'Windows desktop' } },
        clipr: { name: 'CLIPr', features: { face: 'AI-driven visual analysis', audio: 'Partial audio workflow support', video: 'Modern video operations workflow', document: 'Limited document emphasis', deployment: 'Hybrid cloud and on-premise story' } },
        assemblyai: { name: 'AssemblyAI', features: { face: 'No visual face support', audio: 'Strong audio intelligence and transcription', video: 'Video handled primarily through audio extraction workflows', document: 'No document redaction focus', deployment: 'Cloud API' } },
        lantero: { name: 'Lantero Redact', features: { face: 'AI face redaction', audio: 'Partial support', video: 'Privacy-focused video redaction', document: 'Limited public detail on document workflows', deployment: 'Cloud SaaS' } },
        pimloc: { name: 'Pimloc Secure Redact', features: { face: 'AI face redaction', audio: 'Partial audio support', video: 'Privacy-focused redaction', document: 'Basic document support', deployment: 'Cloud and on-premise' } },
        vidizmo: { name: 'VIDIZMO Redactor.ai', features: { face: 'AI face detection', audio: 'Media management focused', video: 'Media asset redaction', document: 'Limited document focus', deployment: 'Cloud SaaS' } },
        facit: { name: 'Facit Data Systems', features: { face: 'AI redaction support', audio: 'Data redaction focus', video: 'Hybrid redaction workflow', document: 'Strong data element redaction', deployment: 'Cloud and on-premise' } },
        suspect: { name: 'Suspect Technologies', features: { face: 'Redaction capabilities', audio: 'Technical focus', video: 'Specialized tools', document: 'Limited public detail', deployment: 'On-premise/Cloud' } },
        redactable: { name: 'Redactable', features: { face: 'Basic redaction', audio: 'Limited support', video: 'Document and media redaction', document: 'Document-centric', deployment: 'Cloud SaaS' } },
        extract: { name: 'Extract Systems', features: { face: 'Limited visual focus', audio: 'Data extraction emphasis', video: 'Limited video capabilities', document: 'Data extraction and redaction', deployment: 'On-premise' } },
        idox: { name: 'iDox.ai', features: { face: 'Limited visual focus', audio: 'Document intelligence focus', video: 'Limited video support', document: 'Strong document AI capabilities', deployment: 'Cloud' } },
        everlaw: { name: 'Everlaw', features: { face: 'Secondary feature', audio: 'eDiscovery-focused', video: 'Legal tech ecosystem', document: 'Legal document management', deployment: 'Cloud SaaS' } },
        transperfect: { name: 'TransPerfect', features: { face: 'Global services focus', audio: 'Enterprise compliance', video: 'Language and legal services', document: 'Multi-format support', deployment: 'Enterprise SaaS' } }
    };
    var featureOrder = comparisonMode === 'all' ? ['face', 'audio', 'video', 'document', 'deployment'] : [comparisonMode];
    var labels = { face: 'Face', audio: 'Audio', video: 'Video', document: 'Document', deployment: 'Deployment' };
    var html = '<div class="comparison-grid">';
    [comparisonData[solutionA], comparisonData[solutionB]].forEach(function(item) {
        html += '<div class="comparison-card"><h4>' + item.name + '</h4>';
        featureOrder.forEach(function(key) { html += '<div class="comparison-feature"><strong>' + labels[key] + ':</strong><span>' + item.features[key] + '</span></div>'; });
        html += '</div>';
    });
    html += '</div>';
    document.getElementById('comparisonResult').innerHTML = html;
}
var discoveryQuestionSets = {
    'law-enforcement_single': [
        'How many videos does your team process monthly for FOIA or public records?',
        'Are you currently handling redaction manually \u2014 how many hours per week does it take?',
        'Does your network require offline or air-gapped deployment?'
    ],
    'law-enforcement_enterprise': [
        'How many officers or evidence technicians need redaction access?',
        'Are you managing a centralized evidence server or distributed workstations?',
        'What evidence management system are you currently using?'
    ],
    'government_enterprise': [
        'Do you process FOIA requests across multiple departments?',
        'What compliance frameworks govern your data \u2014 CJIS, FedRAMP, or state-specific?',
        'How are redaction decisions documented today for audit purposes?'
    ],
    'healthcare_any': [
        'What PHI formats require redaction \u2014 video, images, or documents?',
        'Do your workflows require on-premise processing for data governance?',
        'How do you document redaction decisions for HIPAA audits?'
    ],
    'legal-corporate_api': [
        'Are you looking to embed redaction into an existing platform or case management system?',
        "What's your monthly case volume and how much redaction is currently manual?",
        'Do you need chain-of-custody logging built into the redaction workflow?'
    ]
};
var discoveryFallbackQuestions = [
    'What types of media \u2014 video, audio, images, or documents \u2014 require redaction in your current workflow?',
    'How much time does your team currently spend on manual redaction each week?',
    'Which compliance or privacy requirements drive your redaction process \u2014 FOIA, HIPAA, GDPR, CJIS, or others?'
];
var discoveryIndustryLabels = {
    'all': 'All Industries',
    'law-enforcement': 'Law Enforcement',
    'government': 'Government',
    'healthcare': 'Healthcare',
    'legal-corporate': 'Legal & Corporate'
};
var discoveryPricingLabels = {
    'all': 'All Models',
    'single': 'Single License',
    'enterprise': 'Enterprise',
    'multi-user': 'Multi-User',
    'api': 'API & Embedded'
};
function getDiscoveryQuestionsResult(industry, pricingModel) {
    if (industry === 'healthcare') {
        return { questions: discoveryQuestionSets['healthcare_any'], matched: true };
    }
    var key = industry + '_' + pricingModel;
    if (discoveryQuestionSets[key]) {
        return { questions: discoveryQuestionSets[key], matched: true };
    }
    return { questions: discoveryFallbackQuestions, matched: false };
}
function updateDiscoveryQuestions() {
    var industrySelect = document.getElementById('discoveryIndustryFilter');
    var pricingSelect = document.getElementById('discoveryPricingFilter');
    var container = document.getElementById('discoveryQuestionsContainer');
    var contextLabel = document.getElementById('discoveryContextLabel');
    if (!industrySelect || !pricingSelect || !container) { return; }
    var industry = industrySelect.value;
    var pricingModel = pricingSelect.value;
    var result = getDiscoveryQuestionsResult(industry, pricingModel);
    var questions = result.questions;
    if (contextLabel) {
        var industryLabel = discoveryIndustryLabels[industry] || industry;
        var pricingLabel = discoveryPricingLabels[pricingModel] || pricingModel;
        var prefix = result.matched ? 'Showing targeted questions for: ' : 'Showing generic fallback questions for: ';
        contextLabel.textContent = prefix + industryLabel + ' \u00B7 ' + pricingLabel;
    }
    var html = '';
    questions.forEach(function(question, idx) {
        html += '<div style="background: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #1e3a5f; padding: 18px 22px; margin-bottom: 14px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);">';
        html += '<div style="display: flex; align-items: flex-start; gap: 14px;">';
        html += '<span style="background: #1e3a5f; color: #ffffff; font-size: 0.75em; font-weight: 700; padding: 6px 10px; border-radius: 999px; flex-shrink: 0; letter-spacing: 0.02em;">Q' + (idx + 1) + '</span>';
        html += '<p style="color: #1f2937; font-size: 1em; line-height: 1.6; margin: 0; flex: 1;">' + escapeHtml(question) + '</p>';
        html += '</div>';
        html += '</div>';
    });
    container.innerHTML = html;
}

// ═══════════════════════════════════════════════════════
// PRICING CALCULATOR LOGIC
// Update TIERS or PRICING_COMPETITORS to adjust recommendations.
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

var PRICING_COMPETITORS = {
    lawenforcement: [
        { name: 'CaseGuard',                pricingModel: 'Per-user subscription',        scalesWith: 'Number of users',                bestFor: 'FOIA redaction, public agencies',       advantage: 'Flat annual pricing, no per-user scaling cost' },
        { name: 'Motorola CommandCentral',  pricingModel: 'Platform bundle pricing',       scalesWith: 'Platform seats',                 bestFor: 'Agencies already on Motorola ecosystem', advantage: 'Standalone deployment — no platform lock-in' }
    ],
    government: [
        { name: 'Veritone Redact',          pricingModel: 'Usage-based (per minute)',     scalesWith: 'Video volume processed',         bestFor: 'Agencies processing high video volumes', advantage: 'Zero per-minute charges — flat annual cost' },
        { name: 'Axon Evidence Redaction',  pricingModel: 'Bundled within Axon platform', scalesWith: 'Axon platform seats',            bestFor: 'Agencies using Axon body cameras',      advantage: 'Works with any footage source, no platform dependency' }
    ],
    healthcare: [
        { name: 'Redactable',               pricingModel: 'Per-document / SaaS subscription', scalesWith: 'Document volume',             bestFor: 'Document redaction (PDFs, text)',       advantage: 'Full video + image + audio redaction in one tool' },
        { name: 'VIDIZMO',                  pricingModel: 'Per-user SaaS subscription',   scalesWith: 'Users + video storage',          bestFor: 'Video management with basic redaction', advantage: 'AI-first redaction — not a bolt-on feature' }
    ],
    legal: [
        { name: 'Opus2',                    pricingModel: 'Per-user / matter-based',      scalesWith: 'Legal matters + users',          bestFor: 'eDiscovery and trial management',       advantage: 'Purpose-built AI video redaction vs. general legal platform' },
        { name: 'Adobe Premiere (manual)',  pricingModel: 'Creative Cloud subscription',  scalesWith: 'Manual labor hours',             bestFor: 'Teams with existing Adobe workflows',   advantage: 'Automated AI detection — hours vs. days for redaction' }
    ],
    other: [
        { name: 'CaseGuard',                pricingModel: 'Per-user subscription',        scalesWith: 'Number of users',                bestFor: 'General FOIA and records redaction',    advantage: 'Flat annual pricing, no per-user scaling cost' },
        { name: 'Veritone Redact',          pricingModel: 'Usage-based (per minute)',     scalesWith: 'Video volume processed',         bestFor: 'High-volume cloud-based workflows',     advantage: 'Zero per-minute charges — flat annual cost' }
    ]
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

function calculatePricing() {
    var users      = document.getElementById('userCount').value;
    var deployment = document.getElementById('deploymentType').value;
    var api        = document.getElementById('apiNeeded').value;
    var industry   = document.getElementById('pcIndustry').value;

    if (!users || !deployment || !api || !industry) {
        alert('Please fill in all four fields before calculating.');
        return;
    }

    var tierKey     = getRecommendedTier(users, deployment, api);
    var tier        = TIERS[tierKey];
    var explain     = getPricingExplanation(users, deployment, api, industry, tierKey);
    var competitors = PRICING_COMPETITORS[industry] || PRICING_COMPETITORS.other;

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

    var tbody = document.getElementById('compTableBody');
    tbody.innerHTML = '';

    var shRow = document.createElement('tr');
    shRow.className = 'sighthound-row';
    shRow.innerHTML =
        '<td data-label="Tool"><span class="tool-name">Sighthound Redactor</span></td>' +
        '<td data-label="Pricing Model">Flat annual subscription</td>' +
        '<td data-label="Scales With">Users + deployment type</td>' +
        '<td data-label="Best For">' + escapeHtml(tier.tagline) + '</td>' +
        '<td data-label="Sighthound Advantage"><span class="adv-pill">✓ Recommended</span></td>';
    tbody.appendChild(shRow);

    competitors.forEach(function(comp) {
        var tr = document.createElement('tr');
        tr.innerHTML =
            '<td data-label="Tool"><span class="tool-name">' + escapeHtml(comp.name) + '</span></td>' +
            '<td data-label="Pricing Model">' + escapeHtml(comp.pricingModel) + '</td>' +
            '<td data-label="Scales With">' + escapeHtml(comp.scalesWith) + '</td>' +
            '<td data-label="Best For">' + escapeHtml(comp.bestFor) + '</td>' +
            '<td data-label="Sighthound Advantage">' + escapeHtml(comp.advantage) + '</td>';
        tbody.appendChild(tr);
    });

    document.getElementById('outputDivider').style.display = 'block';
    var outputSection = document.getElementById('output-section');
    outputSection.classList.add('visible');
    outputSection.style.display = 'block';

    var resetBtn = document.getElementById('resetBtn');
    resetBtn.classList.add('visible');

    outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetPricingCalc() {
    ['userCount', 'deploymentType', 'apiNeeded', 'pcIndustry'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) { el.value = ''; }
    });

    var outputSection = document.getElementById('output-section');
    if (outputSection) {
        outputSection.classList.remove('visible');
        outputSection.style.display = 'none';
    }

    var divider = document.getElementById('outputDivider');
    if (divider) { divider.style.display = 'none'; }

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) { resetBtn.classList.remove('visible'); }

    var tbody = document.getElementById('compTableBody');
    if (tbody) { tbody.innerHTML = ''; }

    var section = document.getElementById('pricing-calculator');
    if (section) { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}

var MARKETING_RESOURCE_STORAGE_KEY = 'redactorMarketingResources.v1';
var marketingResourceView = 'card';
var marketingResources = [];
var marketingUploadedFiles = {};
var youtubeRedactionFilters = ['all'];
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
var marketingResourceCategories = [
    { value: 'website', label: 'Website Pages', icon: 'globe-2' },
    { value: 'blog', label: 'Blog Content', icon: 'newspaper' },
    { value: 'case-studies', label: 'Case Studies', icon: 'briefcase-business' },
    { value: 'datasheets', label: 'Datasheets / PDFs', icon: 'file-text' },
    { value: 'videos', label: 'YouTube Demo Videos', icon: 'play-circle' },
    { value: 'social', label: 'Social Media Links', icon: 'share-2' },
    { value: 'sales-assets', label: 'Sales Assets (if added later)', icon: 'badge-dollar-sign' }
];
var marketingAssetLabels = {
    webpage: 'Website / Landing Page',
    blog: 'Blog Article',
    'case-study': 'Case Study',
    pdf: 'PDF / Datasheet',
    video: 'Video / Demo',
    social: 'Social Link',
    sales: 'Sales Asset',
    file: 'Uploaded File',
    presentation: 'Presentation',
    document: 'Document'
};
var MARKETING_SEED_RESOURCES = [
    { id: 'seed-redactor-home', title: 'Redactor Homepage', url: 'https://www.redactor.com/', category: 'website', assetType: 'webpage', funnel: 'TOFU', tag: 'Awareness', notes: 'Primary product homepage and messaging.', source: 'seed' },
    { id: 'seed-redactor-features', title: 'Redactor Product Overview', url: 'https://www.redactor.com/features', category: 'website', assetType: 'webpage', funnel: 'MOFU', tag: 'Product', notes: 'Feature and product overview for Redactor capabilities.', source: 'seed' },
    { id: 'seed-redactor-pricing', title: 'Redactor Pricing Page', url: 'https://www.redactor.com/pricing', category: 'website', assetType: 'webpage', funnel: 'BOFU', tag: 'Conversion', notes: 'Pricing and plan comparison page.', source: 'seed' },
    { id: 'seed-redactor-docs', title: 'Redactor Documentation', url: 'https://docs.redactor.com/', category: 'website', assetType: 'webpage', funnel: 'MOFU', tag: 'Docs', notes: 'Product documentation and system requirements.', source: 'seed' },
    { id: 'seed-redactor-faq', title: 'Redactor FAQ', url: 'https://www.redactor.com/faq', category: 'website', assetType: 'webpage', funnel: 'MOFU', tag: 'FAQ', notes: 'Frequently asked sales and support questions.', source: 'seed' },
    { id: 'seed-redactor-brochure', title: 'Redactor Brochure (Powered by Sighthound)', url: 'https://cdn.prod.website-files.com/61815a2f8dc169fcb7758fa8/6819111318fd95714ab6d51e_Faltech.ai%20Redactor%20Brochure%20%5BPowered%20by%20Sighthound%5D%20(1).pdf', category: 'datasheets', assetType: 'pdf', funnel: 'BOFU', tag: 'Datasheet', notes: 'Public Redactor brochure PDF linked from the homepage.', source: 'seed' },
    { id: 'seed-blog-hub', title: 'Redactor Blog Hub', url: 'https://www.redactor.com/blog', category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'SEO', notes: 'Main blog index for AI redaction insights.', source: 'seed' },
    { id: 'seed-blog-v7', title: "What's New in Redactor V7", url: 'https://www.redactor.com/blog/whats-new-in-redactor-v7', category: 'blog', assetType: 'blog', funnel: 'MOFU', tag: 'Product update', notes: 'Product update article for V7 messaging.', source: 'seed' },
    { id: 'seed-blog-top-tools', title: 'Top 5 Video Redaction Tools', url: 'https://www.redactor.com/blog/top-5-video-redaction-tools', category: 'blog', assetType: 'blog', funnel: 'TOFU', tag: 'SEO', notes: 'Competitive SEO article for evaluation traffic.', source: 'seed' },
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
    { id: 'seed-instagram', title: 'Sighthound Instagram', url: 'https://www.instagram.com/sighthoundcv/', category: 'social', assetType: 'social', funnel: 'TOFU', tag: 'Social', notes: 'Sighthound Instagram presence.', source: 'seed' },
    { id: 'seed-schedule-demo', title: 'Schedule a Live Demo', url: 'https://www.redactor.com/schedule-demo', category: 'sales-assets', assetType: 'sales', funnel: 'BOFU', tag: 'Conversion', notes: 'Primary demo conversion page.', source: 'seed' },
    { id: 'seed-contact-sales', title: 'Contact Sales', url: 'https://www.redactor.com/contact-us', category: 'sales-assets', assetType: 'sales', funnel: 'BOFU', tag: 'Conversion', notes: 'Sales contact page.', source: 'seed' }
];

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
    if (category === 'sales-assets') { return 'sales'; }
    return 'webpage';
}

function sanitizeMarketingResource(resource) {
    if (!resource) { return null; }
    var rawTitle = String(resource.title || '').trim();
    var title = rawTitle.slice(0, resource.category === 'videos' || resource.youtubeId ? 160 : 80);
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
        var key = normalizeMarketingResourceUrl(resource.url);
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
    if (category.value === 'videos') {
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
    var html = '<article class="resource-card">';
    html += '<div class="resource-card-top"><span class="resource-pill">' + escapeHtml(getMarketingAssetLabel(resource.assetType)) + '</span></div>';
    html += '<h4>' + renderMarketingResourceTitleLink(resource, url, title) + '</h4>';
    html += '<p class="resource-url" title="' + url + '">' + url + '</p>';
    html += '<div class="resource-card-meta"><span class="resource-pill">' + escapeHtml(getMarketingCategoryLabel(resource.category)) + '</span>' + tagHtml + fileMeta + sizeMeta + '</div>';
    if (resource.notes) {
        html += '<p class="resource-notes">' + escapeHtml(resource.notes) + '</p>';
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
// Expose functions to global scope so inline onclick handlers can find them
// (This is redundant when loaded as a regular script, but ensures reliability.)
if (typeof window !== 'undefined') {
    window.switchTab = switchTab;
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
    window.resetPricingCalc = resetPricingCalc;
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

    // Initialization: run after the DOM / page hydrates
    function __redactorInit() {
        try { updateComparison(); } catch (e) {}
        try { updateVersionDetails(); } catch (e) {}
        try { toggleScrollButton(); } catch (e) {}
        try { updateDiscoveryQuestions(); } catch (e) {}
        try { initMarketingResources(); } catch (e) {}
        if (typeof window.lucide !== 'undefined' && window.lucide && typeof window.lucide.createIcons === 'function') {
            try { window.lucide.createIcons(); } catch (e) {}
        }
    }
    window.__redactorInit = __redactorInit;

    window.addEventListener('scroll', toggleScrollButton);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', __redactorInit);
    } else {
        // DOM already ready - defer slightly so React has mounted content
        setTimeout(__redactorInit, 0);
    }
}
