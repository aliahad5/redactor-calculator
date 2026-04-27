import React, { useState } from 'react';

const FAQItem = ({ faq }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="faq-question-text">{faq.objection}</span>
        <span className={`faq-toggle ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? '−' : '+'}
        </span>
      </button>

      {isExpanded && (
        <div className="faq-answer">
          <p className="faq-answer-text">{faq.answer}</p>
          <div className="faq-power-phrase">
            <strong>Power Phrase:</strong> "{faq.powerPhrase}"
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
