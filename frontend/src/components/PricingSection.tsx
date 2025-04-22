import React from 'react';
import '../styles/PricingSection.css';

const pricingPlans = [
  {
    name: 'Basic',
    price: '79',
    features: [
      { text: 'Core notebooks and templates', included: true },
      { text: 'Delta table scripts', included: true },
      { text: 'Basic folder structure', included: true },
      { text: 'Email support (30 days)', included: true },
      { text: 'Sample datasets', included: false },
      { text: 'Monitoring & governance tools', included: false },
      { text: 'Consultation', included: false }
    ]
  },
  {
    name: 'Standard',
    price: '129',
    featured: true,
    features: [
      { text: 'Core notebooks and templates', included: true },
      { text: 'Delta table scripts', included: true },
      { text: 'Complete folder structure', included: true },
      { text: 'Sample datasets', included: true },
      { text: 'Email support (90 days)', included: true },
      { text: 'Monitoring & governance tools', included: true },
      { text: 'Consultation', included: false }
    ]
  },
  {
    name: 'Premium',
    price: '249',
    features: [
      { text: 'Everything in Standard', included: true },
      { text: '30-minute consultation', included: true },
      { text: 'Custom adaptations', included: true },
      { text: 'Priority email support (180 days)', included: true },
      { text: 'Slide deck for internal presentations', included: true },
      { text: 'Architecture review session', included: true },
      { text: 'Quarterly product updates (1 year)', included: true }
    ]
  }
];

const PricingSection = () => (
  <section className="pricing" id="pricing">
    <div className="container">
      <div className="section-title">
        <h2>Pricing Options</h2>
        <p>Choose the package that best fits your needs</p>
      </div>
      
      <div className="pricing-cards">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            <div className="pricing-header">
              <h3>{plan.name}</h3>
              <div className="price-container">
                <span className="price-symbol">$</span>
                <span className="price-value">{plan.price}</span>
              </div>
              <div className="price-period">one-time purchase</div>
            </div>
            
            <div className="pricing-features">
              {plan.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className={`feature-icon ${feature.included ? 'included' : 'not-included'}`}>
                    {feature.included ? '✓' : '×'}
                  </span>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="pricing-footer">
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection; 