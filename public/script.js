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

    // Initialization: run after the DOM / page hydrates
    function __redactorInit() {
        try { updateComparison(); } catch (e) {}
        try { updateVersionDetails(); } catch (e) {}
        try { toggleScrollButton(); } catch (e) {}
        try { updateDiscoveryQuestions(); } catch (e) {}
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
