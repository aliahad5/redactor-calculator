import React from 'react';

const RebuttalCard = ({ rebuttal }) => {
  return (
    <div className="rebuttal-card">
      <div className="rebuttal-header">
        <h3 className="competitor-name">{rebuttal.competitor}</h3>
        <span className="headline-label">{rebuttal.headline}</span>
      </div>

      <div className="rebuttal-section">
        <h4>Prospect Objection</h4>
        <blockquote className="objection-quote">"{rebuttal.objection}"</blockquote>
      </div>

      <div className="rebuttal-section">
        <h4>Your Answer</h4>
        <p className="answer-text">{rebuttal.answer}</p>
      </div>

      <div className="rebuttal-grid">
        <div className="rebuttal-detail">
          <h5>TCO Comparison</h5>
          <p>{rebuttal.tcoNote}</p>
        </div>
        <div className="rebuttal-detail">
          <h5>Compliance Angle</h5>
          <p>{rebuttal.complianceNote}</p>
        </div>
      </div>

      <div className="rebuttal-section">
        <h4>Trial/Urgency Close</h4>
        <p className="close-line">{rebuttal.closeLine}</p>
      </div>

      <div className="rebuttal-footer">
        <p className="power-phrase">
          <strong>Power Phrase:</strong> "{rebuttal.powerPhrase}"
        </p>
      </div>
    </div>
  );
};

export default RebuttalCard;
