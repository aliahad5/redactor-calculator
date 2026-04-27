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
var marketingResourceCategories = [
    { value: 'website', label: 'Website Pages', icon: 'globe-2' },
    { value: 'blog', label: 'Blog Content', icon: 'newspaper' },
    { value: 'case-studies', label: 'Case Studies', icon: 'briefcase-business' },
    { value: 'datasheets', label: 'Datasheets / PDFs', icon: 'file-text' },
    { value: 'videos', label: 'Videos (YouTube / demos)', icon: 'play-circle' },
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
    { id: 'seed-demo-video-page', title: 'Watch Redactor Demo', url: 'https://www.redactor.com/demo-video', category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'Demo', notes: 'Short Redactor demo page.', source: 'seed' },
    { id: 'seed-watch-demo-page', title: 'Watch Demo Landing Page', url: 'https://www.redactor.com/watch-demo', category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'Demo', notes: 'Demo-focused landing page.', source: 'seed' },
    { id: 'seed-youtube-license-plate', title: 'License Plate Redaction Tutorial', url: 'https://www.youtube.com/watch?v=ahp3E7QSQlM', category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'How-to', notes: 'YouTube tutorial for license plate redaction.', source: 'seed' },
    { id: 'seed-youtube-playlist', title: 'Beginner Guide YouTube Playlist', url: 'https://www.youtube.com/playlist?list=PLBBpx2rua99gmb6QX6DJUmRlj8SITFOGq', category: 'videos', assetType: 'video', funnel: 'MOFU', tag: 'How-to', notes: 'Beginner Redactor tutorial playlist.', source: 'seed' },
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
    var title = String(resource.title || '').trim().slice(0, 80);
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
        createdAt: resource.createdAt || new Date().toISOString()
    };
    sanitized.assetType = sanitized.assetType || inferMarketingAssetType(sanitized);
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
    var assetFilter = getMarketingInputValue('resourceAssetTypeFilter') || 'all';
    var funnelFilter = getMarketingInputValue('resourceFunnelFilter') || 'all';
    return marketingResources.filter(function(resource) {
        var categoryMatch = categoryFilter === 'all' || resource.category === categoryFilter;
        var assetMatch = assetFilter === 'all' || resource.assetType === assetFilter || (assetFilter === 'file' && resource.uploaded);
        var funnelMatch = funnelFilter === 'all' || resource.funnel === funnelFilter;
        var searchable = [
            resource.title,
            resource.url,
            getMarketingCategoryLabel(resource.category),
            getMarketingAssetLabel(resource.assetType),
            resource.funnel,
            resource.tag,
            resource.notes,
            resource.fileName
        ].join(' ').toLowerCase();
        var queryMatch = !query || searchable.indexOf(query) !== -1;
        return categoryMatch && assetMatch && funnelMatch && queryMatch;
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
    if (totalCount) { totalCount.textContent = marketingResources.length; }
    if (summary) {
        summary.textContent = 'Showing ' + filtered.length + ' of ' + marketingResources.length + ' resources';
    }
    container.innerHTML = visibleCategories.map(function(category) {
        var items = filtered.filter(function(resource) { return resource.category === category.value; });
        return renderMarketingResourceSection(category, items);
    }).join('');
    refreshMarketingViewButtons();
    if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}

function renderMarketingResourceSection(category, items) {
    var html = '<div id="resource-section-' + escapeHtml(category.value) + '" class="accordion-item resource-category-accordion active">';
    html += '<div class="accordion-header resource-category-header" onclick="toggleAccordion(this)">';
    html += '<div class="resource-category-title"><i data-lucide="' + escapeHtml(category.icon) + '"></i><h4>' + escapeHtml(category.label) + '<span class="resource-count-pill">' + items.length + '</span></h4></div>';
    html += '<span class="accordion-toggle">▼</span></div>';
    html += '<div class="accordion-content"><div class="accordion-content-inner">';
    if (!items.length) {
        html += '<div class="resource-empty">No resources match this section yet. Add one above or reset filters.</div>';
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
    html += '<div class="resource-card-top"><span class="resource-pill">' + escapeHtml(getMarketingAssetLabel(resource.assetType)) + '</span><span class="resource-funnel-pill">' + escapeHtml(resource.funnel) + '</span></div>';
    html += '<h4><a href="' + url + '" target="_blank" rel="noopener">' + title + '</a></h4>';
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
    var html = '<div class="resource-table-wrapper"><table class="resource-table"><thead><tr><th>Title</th><th>URL</th><th>Category</th><th>Asset Type</th><th>Funnel</th><th>Tag</th><th>Actions</th></tr></thead><tbody>';
    items.forEach(function(resource) {
        var url = escapeHtml(resource.url);
        var download = resource.uploaded ? '<a class="resource-link-btn secondary" href="' + url + '" download="' + escapeHtml(resource.fileName || resource.title) + '">Download</a>' : '';
        html += '<tr>';
        html += '<td><a href="' + url + '" target="_blank" rel="noopener">' + escapeHtml(resource.title) + '</a></td>';
        html += '<td><p class="resource-url" title="' + url + '">' + url + '</p></td>';
        html += '<td>' + escapeHtml(getMarketingCategoryLabel(resource.category)) + '</td>';
        html += '<td>' + escapeHtml(getMarketingAssetLabel(resource.assetType)) + '</td>';
        html += '<td><span class="resource-funnel-pill">' + escapeHtml(resource.funnel) + '</span></td>';
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
    ['resourceSearch', 'resourceCategoryFilter', 'resourceAssetTypeFilter', 'resourceFunnelFilter'].forEach(function(id) {
        var el = document.getElementById(id);
        if (!el) { return; }
        el.value = id === 'resourceSearch' ? '' : 'all';
    });
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

function jumpToMarketingResourceSection(categoryValue) {
    if (!categoryValue) { return; }
    var filter = document.getElementById('resourceCategoryFilter');
    if (filter && filter.value !== 'all' && filter.value !== categoryValue) {
        filter.value = categoryValue;
        renderMarketingResources();
    }
    setTimeout(function() {
        var section = document.getElementById('resource-section-' + categoryValue);
        if (section) {
            if (!section.classList.contains('active')) { section.classList.add('active'); }
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        var jump = document.getElementById('resourceSectionJump');
        if (jump) { jump.value = ''; }
    }, 0);
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
    window.jumpToMarketingResourceSection = jumpToMarketingResourceSection;

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
