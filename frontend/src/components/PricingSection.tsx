import React from 'react';
import '../styles/PricingSection.css';

// Define types for our pricing features and plans
interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  featured?: boolean;
  features: PricingFeature[];
}

interface PricingSectionProps {
  plans?: PricingPlan[];
  title?: string;
  subtitle?: string;
}

// Default pricing plans (for Medallion Architecture)
const defaultPricingPlans = [
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

const PricingSection: React.FC<PricingSectionProps> = ({ 
  plans = defaultPricingPlans,
  title = "Pricing Options",
  subtitle = "Choose the package that best fits your needs"
}) => {
  // For debugging
  console.log("PricingSection received plans:", plans);
  
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        
        <div className="pricing-cards">
          {plans.map((plan) => (
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
};

export default PricingSection;