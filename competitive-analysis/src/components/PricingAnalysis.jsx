import React, { useState } from 'react';
import pricingData from '../data/pricingData.json';
import RebuttalCard from './RebuttalCard';
import FAQItem from './FAQItem';
import '../styles/PricingAnalysis.css';

const PricingAnalysis = () => {
  const [activeTab, setActiveTab] = useState('rebuttals');
  const { productContext, rebuttals, faqs } = pricingData;

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
