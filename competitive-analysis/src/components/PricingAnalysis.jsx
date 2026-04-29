import React, { useMemo, useState } from 'react';
import pricingData from '../data/pricingData.json';
import RebuttalCard from './RebuttalCard';
import FAQItem from './FAQItem';
import '../styles/PricingAnalysis.css';

const recommendationModes = [
  { value: 'bestPrice', label: 'Price-sensitive', description: 'Recommend the lowest-cost viable option.' },
  { value: 'bestValue', label: 'Value-sensitive', description: 'Weigh feature value, scalability, and normalized cost.' }
];

const userOptions = [1, 3, 5];
const minuteOptions = [10, 100, 500, 3000];
const jobOptions = [1, 10, 50, 200];
const deploymentOptions = [
  { value: 'any', label: 'Any deployment' },
  { value: 'onPremise', label: 'On-premise acceptable/required' },
  { value: 'offline', label: 'Offline or air-gapped required' }
];

const currency = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
}).format(amount);

const annualRange = (item) => {
  if (!item || item.minAnnual == null) return 'Not comparable';
  return item.maxAnnual && item.maxAnnual !== item.minAnnual
    ? `${currency(item.minAnnual)}-${currency(item.maxAnnual)}/year`
    : `${currency(item.minAnnual)}/year`;
};

const hasDeploymentFit = (competitor, deploymentNeed) => (
  deploymentNeed === 'any' || competitor.deploymentCapabilities?.includes(deploymentNeed)
);
const clampScore = (score) => Math.min(5, Math.max(0, score));

const scoreLabel = (score) => (
  Number.isFinite(score) ? `${score.toFixed(2)}/5` : 'Not scored'
);

export const scalabilityScoreFor = (competitor, scenario) => {
  if (competitor.pricingModel === 'annualPlans') {
    return 5;
  }

  if (competitor.pricingModel === 'annualRange') {
    const plan = competitor.plans?.[0];
    if (plan?.amount && plan?.amountMax && plan.amountMax / plan.amount >= 10) {
      return 2.5;
    }
    return 3.25;
  }

  if (competitor.pricingModel === 'monthlyPerSeatRange') {
    return scenario.users <= 1 ? 3.25 : 2.25;
  }

  if (competitor.pricingModel === 'usagePerMinute') {
    if (scenario.monthlyMinutes <= 10 && scenario.monthlyJobs <= 1) {
      return 3.5;
    }
    if (scenario.monthlyMinutes <= 100) {
      return 2.25;
    }
    return 1.5;
  }

  return 0;
};

export const normalizePricing = (competitor, scenario) => {
  if (!competitor.hasExplicitPricing) {
    return { ...competitor, isComparable: false, isViable: false, exclusionReason: 'No explicit price listed.' };
  }

  const plan = competitor.plans?.[0];
  let normalized = null;

  if (competitor.pricingModel === 'annualPlans') {
    const selectedPlan = competitor.plans
      .filter((candidate) => candidate.includedUsers >= scenario.users)
      .sort((a, b) => a.amount - b.amount)[0];

    if (!selectedPlan) {
      return { ...competitor, isComparable: false, isViable: false, exclusionReason: `No explicit plan covers ${scenario.users} users.` };
    }

    normalized = {
      minAnnual: selectedPlan.amount,
      maxAnnual: selectedPlan.amount,
      note: `${selectedPlan.name}: ${currency(selectedPlan.amount)}/year for up to ${selectedPlan.includedUsers} user${selectedPlan.includedUsers === 1 ? '' : 's'}; ${selectedPlan.includedUsage}.`
    };
  }

  if (competitor.pricingModel === 'annualRange' && plan) {
    normalized = {
      minAnnual: plan.amount,
      maxAnnual: plan.amountMax,
      note: `Uses explicit listed annual entry price floor of ${currency(plan.amount)}/year; upper listed range is ${currency(plan.amountMax)}+/year.`
    };
  }

  if (competitor.pricingModel === 'monthlyPerSeatRange' && plan) {
    normalized = {
      minAnnual: plan.amount * scenario.users * 12,
      maxAnnual: plan.amountMax * scenario.users * 12,
      note: `${currency(plan.amount)}-${currency(plan.amountMax)}/month/license x ${scenario.users} user${scenario.users === 1 ? '' : 's'} x 12 months.`
    };
  }

  if (competitor.pricingModel === 'usagePerMinute' && plan) {
    const monthlyCost = (plan.amount * scenario.monthlyMinutes) + (plan.baseFee * scenario.monthlyJobs);
    normalized = {
      minAnnual: monthlyCost * 12,
      maxAnnual: monthlyCost * 12,
      note: `${currency(plan.amount)}/minute x ${scenario.monthlyMinutes} minutes/month + ${currency(plan.baseFee)}/${plan.baseFeeUnit} x ${scenario.monthlyJobs} jobs/month, annualized.`
    };
  }

  if (!normalized) {
    return { ...competitor, isComparable: false, isViable: false, exclusionReason: 'Unsupported explicit pricing model.' };
  }

  const deploymentFit = hasDeploymentFit(competitor, scenario.deploymentNeed);
  return {
    ...competitor,
    ...normalized,
    isComparable: true,
    isViable: deploymentFit,
    exclusionReason: deploymentFit ? '' : 'Does not match the selected deployment requirement.'
  };
};

export const scoreComparisonResults = (results, scenario) => {
  const viable = results.filter((result) => result.isComparable && result.isViable);
  if (!viable.length) return results;

  const lowestAnnual = Math.min(...viable.map((result) => result.minAnnual));

  return results.map((result) => {
    if (!result.isComparable || !result.isViable) {
      return {
        ...result,
        priceEfficiencyScore: null,
        scalabilityScore: null,
        valueForMoneyScore: null
      };
    }

    const priceEfficiencyScore = result.minAnnual > 0
      ? clampScore((lowestAnnual / result.minAnnual) * 5)
      : 0;
    const scalabilityScore = scalabilityScoreFor(result, scenario);
    const valueForMoneyScore = clampScore(
      (result.valueScore * 0.45) +
      (priceEfficiencyScore * 0.35) +
      (scalabilityScore * 0.2)
    );

    return {
      ...result,
      priceEfficiencyScore,
      scalabilityScore,
      valueForMoneyScore
    };
  });
};

export const chooseRecommendation = (results, mode) => {
  const viable = results.filter((result) => result.isComparable && result.isViable);
  if (!viable.length) return null;

  const byPrice = [...viable].sort((a, b) => (
    a.minAnnual - b.minAnnual || b.valueScore - a.valueScore || a.company.localeCompare(b.company)
  ));
  const byValue = [...viable].sort((a, b) => (
    (b.valueForMoneyScore ?? b.valueScore) - (a.valueForMoneyScore ?? a.valueScore) ||
    a.minAnnual - b.minAnnual ||
    a.company.localeCompare(b.company)
  ));
  const winner = mode === 'bestPrice' ? byPrice[0] : byValue[0];

  return {
    winner,
    cheapest: byPrice[0],
    bestValue: byValue[0],
    nextLowest: byPrice.find((result) => result.id !== winner.id)
  };
};

const pricingReason = (recommendation, mode) => {
  const { winner, cheapest, nextLowest } = recommendation;

  if (mode === 'bestPrice') {
    const next = nextLowest ? ` The next-lowest viable option is ${nextLowest.company} at ${annualRange(nextLowest)}.` : '';
    return `${winner.company} has the lowest normalized explicit annual cost at ${annualRange(winner)}.${next}`;
  }

  if (winner.id === cheapest.id) {
    return `${winner.company} is also the lowest normalized explicit annual cost at ${annualRange(winner)} and has the strongest value-for-money score (${scoreLabel(winner.valueForMoneyScore)}) among selected viable options.`;
  }

  return `${winner.company} is not the lowest-price option; ${cheapest.company} is lower at ${annualRange(cheapest)}. In Value-sensitive mode, ${winner.company} has the highest value-for-money score (${scoreLabel(winner.valueForMoneyScore)}) after weighing feature value, normalized cost, and cost scalability.`;
};

const tradeOffsFor = (recommendation) => {
  const { winner, cheapest, nextLowest } = recommendation;
  const tradeOffs = [...(winner.tradeOffs || [])];

  if (winner.id !== cheapest.id) {
    tradeOffs.unshift(`${winner.company} costs ${currency(winner.minAnnual - cheapest.minAnnual)} more than ${cheapest.company}'s lowest normalized explicit price under these filters.`);
  } else if (nextLowest) {
    tradeOffs.unshift(`${winner.company} is the lowest-price option under these filters; the next-lowest viable option is ${nextLowest.company} at ${annualRange(nextLowest)}.`);
  }

  return tradeOffs.slice(0, 3);
};

const PricingAnalysis = () => {
  const { productContext, pricingCompetitors = [], rebuttals, faqs } = pricingData;
  const explicitlyPricedCompetitors = useMemo(
    () => pricingCompetitors.filter((competitor) => competitor.hasExplicitPricing),
    [pricingCompetitors]
  );
  const [activeTab, setActiveTab] = useState('recommendation');
  const [recommendationMode, setRecommendationMode] = useState('bestPrice');
  const [users, setUsers] = useState(3);
  const [monthlyMinutes, setMonthlyMinutes] = useState(100);
  const [monthlyJobs, setMonthlyJobs] = useState(10);
  const [deploymentNeed, setDeploymentNeed] = useState('any');
  const [selectedCompetitorIds, setSelectedCompetitorIds] = useState(
    explicitlyPricedCompetitors.map((competitor) => competitor.id)
  );

  const scenario = useMemo(() => ({
    users,
    monthlyMinutes,
    monthlyJobs,
    deploymentNeed
  }), [users, monthlyMinutes, monthlyJobs, deploymentNeed]);

  const normalizedResults = useMemo(() => (
    explicitlyPricedCompetitors
      .filter((competitor) => selectedCompetitorIds.includes(competitor.id))
      .map((competitor) => normalizePricing(competitor, scenario))
  ), [explicitlyPricedCompetitors, scenario, selectedCompetitorIds]);
  const comparisonResults = useMemo(() => (
    scoreComparisonResults(normalizedResults, scenario)
  ), [normalizedResults, scenario]);

  const recommendation = useMemo(() => (
    chooseRecommendation(comparisonResults, recommendationMode)
  ), [comparisonResults, recommendationMode]);

  const toggleCompetitor = (competitorId) => {
    setSelectedCompetitorIds((currentIds) => {
      if (currentIds.includes(competitorId)) {
        return currentIds.length === 1
          ? currentIds
          : currentIds.filter((id) => id !== competitorId);
      }

      return [...currentIds, competitorId];
    });
  };

  return (
    <div className="pricing-analysis-container">
      {/* Header */}
      <div className="pricing-header">
        <h1>Competitive Pricing Analysis</h1>
        <p className="subtitle">Sales Enablement for {productContext.name}</p>
        <div className="product-snapshot">
          <div className="snapshot-item">
            <span className="label">Price</span>
            <span className="value">{productContext.price}</span>
          </div>
          <div className="snapshot-item">
            <span className="label">Users</span>
            <span className="value">{productContext.users}</span>
          </div>
          <div className="snapshot-item">
            <span className="label">Processing</span>
            <span className="value">{productContext.processing}</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'recommendation' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommendation')}
        >
          Pricing Recommendation
        </button>
        <button
          className={`tab-button ${activeTab === 'rebuttals' ? 'active' : ''}`}
          onClick={() => setActiveTab('rebuttals')}
        >
          Sales Rebuttals
        </button>
        <button
          className={`tab-button ${activeTab === 'faqs' ? 'active' : ''}`}
          onClick={() => setActiveTab('faqs')}
        >
          Price Objections FAQ
        </button>
      </div>

      {activeTab === 'recommendation' && (
        <div className="section">
          <h2>How Sighthound Redactor Compares</h2>
          <p className="section-intro">
            This recommendation only uses selected competitors with explicit pricing in the pricing analysis dataset. Quote-only and custom-only vendors are excluded until exact pricing is listed.
          </p>

          <div className="pricing-controls-panel">
            <div className="control-block">
              <h3>Decision Mode</h3>
              <div className="segmented-control">
                {recommendationModes.map((mode) => (
                  <button
                    key={mode.value}
                    type="button"
                    className={`mode-button ${recommendationMode === mode.value ? 'active' : ''}`}
                    onClick={() => setRecommendationMode(mode.value)}
                    aria-pressed={recommendationMode === mode.value}
                  >
                    <span>{mode.label}</span>
                    <small>{mode.description}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="control-block">
              <h3>Scenario Filters</h3>
              <div className="scenario-grid">
                <label>
                  Users
                  <select value={users} onChange={(event) => setUsers(Number(event.target.value))}>
                    {userOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Monthly processing minutes
                  <select value={monthlyMinutes} onChange={(event) => setMonthlyMinutes(Number(event.target.value))}>
                    {minuteOptions.map((option) => (
                      <option key={option} value={option}>{option.toLocaleString()}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Monthly redaction jobs
                  <select value={monthlyJobs} onChange={(event) => setMonthlyJobs(Number(event.target.value))}>
                    {jobOptions.map((option) => (
                      <option key={option} value={option}>{option.toLocaleString()}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Deployment requirement
                  <select value={deploymentNeed} onChange={(event) => setDeploymentNeed(event.target.value)}>
                    {deploymentOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="control-block">
              <h3>Selected Competitors</h3>
              <div className="competitor-toggle-grid">
                {explicitlyPricedCompetitors.map((competitor) => (
                  <button
                    key={competitor.id}
                    type="button"
                    className={`competitor-toggle ${selectedCompetitorIds.includes(competitor.id) ? 'active' : ''}`}
                    onClick={() => toggleCompetitor(competitor.id)}
                    aria-pressed={selectedCompetitorIds.includes(competitor.id)}
                  >
                    <span>{competitor.company}</span>
                    <small>{competitor.explicitPricing}</small>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="recommendation-card">
            {recommendation ? (
              <>
                <h3>Recommended Solution: {recommendation.winner.company}</h3>
                <div className="recommendation-metrics">
                  <span>Lowest cost viable option: <strong>{recommendation.cheapest.company}</strong></span>
                  <span>Best value-for-money option: <strong>{recommendation.bestValue.company}</strong></span>
                </div>
                <p><strong>Why (Pricing-Based):</strong> {pricingReason(recommendation, recommendationMode)}</p>
                <div>
                  <strong>Why (Value-Based):</strong>
                  <ul>
                    {(recommendation.winner.valueDrivers || []).slice(0, 3).map((driver) => (
                      <li key={driver}>{driver}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Trade-offs:</strong>
                  <ul>
                    {tradeOffsFor(recommendation).map((tradeOff) => (
                      <li key={tradeOff}>{tradeOff}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <p>No viable recommendation is available for the selected filters. Add an explicitly priced competitor or loosen the deployment requirement.</p>
            )}
          </div>

          <h3>Normalized Pricing Inputs</h3>
          <div className="normalized-grid">
            {comparisonResults.map((result) => (
              <div
                key={result.id}
                className={`normalized-card ${recommendation?.winner.id === result.id ? 'winner' : ''} ${!result.isViable ? 'excluded' : ''}`}
              >
                <div className="normalized-card-header">
                  <h4>{result.company}</h4>
                  <span>{result.isViable ? annualRange(result) : 'Excluded'}</span>
                </div>
                <p><strong>Listed pricing:</strong> {result.explicitPricing}</p>
                <p><strong>Normalization:</strong> {result.note || result.exclusionReason}</p>
                <p><strong>Scalability:</strong> {result.scalability}</p>
                <p><strong>Feature-value score:</strong> {result.valueScore}/5</p>
                {result.isViable && (
                  <p><strong>Value-for-money score:</strong> {scoreLabel(result.valueForMoneyScore)} <span className="score-detail">(price {scoreLabel(result.priceEfficiencyScore)}, scalability {scoreLabel(result.scalabilityScore)})</span></p>
                )}
                {!result.isViable && (
                  <p className="exclusion-note"><strong>Reason:</strong> {result.exclusionReason}</p>
                )}
                {(result.capterraLink || result.g2Link) && (
                  <div className="listing-links">
                    {result.capterraLink && (
                      <p><strong>Capterra Direct Link:</strong> <a href={result.capterraLink} target="_blank" rel="noopener noreferrer">{result.capterraLink}</a></p>
                    )}
                    {result.g2Link && (
                      <p><strong>G2 Direct Link:</strong> <a href={result.g2Link} target="_blank" rel="noopener noreferrer">{result.g2Link}</a></p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rebuttals Section */}
      {activeTab === 'rebuttals' && (
        <div className="section">
          <h2>Section 1: Sales Talking Points & Rebuttals</h2>
          <p className="section-intro">
            Use these structured rebuttal cards to counter competitor objections and advance the deal. Each includes a prospect objection, your answer, TCO comparison, compliance angle, and a power phrase for your sales call.
          </p>
          <div className="rebuttals-grid">
            {rebuttals.map((rebuttal) => (
              <RebuttalCard key={rebuttal.id} rebuttal={rebuttal} />
            ))}
          </div>
        </div>
      )}

      {/* FAQs Section */}
      {activeTab === 'faqs' && (
        <div className="section">
          <h2>Section 2: FAQ — Common Price Objections</h2>
          <p className="section-intro">
            Quick answers to the 10 most common budget and price objections your sales team will encounter. Each includes a validated reframe with quantified data and a memorable power phrase.
          </p>
          <div className="faqs-container">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="pricing-footer">
        <p className="footer-note">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="footer-note">
          This competitive analysis is designed for sales teams. Use these frameworks and data points in customer conversations, proposals, and deal negotiations.
        </p>
      </div>
    </div>
  );
};

export default PricingAnalysis;
