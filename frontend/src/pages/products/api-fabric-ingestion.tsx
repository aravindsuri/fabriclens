import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ProductPage.css';
import PricingSection from '../../components/PricingSection';
import {
  DocumentIcon,
  DatasetIcon,
  CodeIcon,
  ArchitectureIcon,
  MonitoringIcon,
  ClockIcon,
  CheckIcon,
  ScaleIcon,
  OptimizedIcon
} from '../../components/icons/ProductIcons';

// Define API pricing plans
const apiPricingPlans = [
  {
    name: 'Basic',
    price: '99',
    features: [
      { text: 'Core connector templates', included: true },
      { text: 'Error handling framework', included: true },
      { text: '3 pre-built connectors', included: true },
      { text: 'Email support (30 days)', included: true },
      { text: 'Custom connector development', included: false },
      { text: 'Advanced monitoring', included: false },
      { text: 'Consultation', included: false }
    ]
  },
  {
    name: 'Standard',
    price: '149',
    featured: true,
    features: [
      { text: 'Core connector templates', included: true },
      { text: 'Error handling framework', included: true },
      { text: '10 pre-built connectors', included: true },
      { text: 'Advanced monitoring tools', included: true },
      { text: 'Email support (90 days)', included: true },
      { text: 'Implementation guide', included: true },
      { text: 'Consultation', included: false }
    ]
  },
  {
    name: 'Premium',
    price: '299',
    features: [
      { text: 'Everything in Standard', included: true },
      { text: 'All pre-built connectors', included: true },
      { text: '1 custom connector development', included: true },
      { text: '60-minute consultation', included: true },
      { text: 'Priority email support (180 days)', included: true },
      { text: 'Quarterly updates (1 year)', included: true },
      { text: 'Implementation workshop', included: true }
    ]
  }
];

const APIFabricIngestionPage: React.FC = () => {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <Link to="/products">Products</Link> <span>/</span> API to Fabric Ingestion Toolkit
          </div>
          <h1>API to Fabric Ingestion Toolkit</h1>
          <p>Seamlessly connect external APIs to Microsoft Fabric with our comprehensive ingestion toolkit. Build reliable, scalable data pipelines faster with ready-to-use templates, error handling patterns, and best practices for popular SaaS platforms.</p>
          <a href="#pricing" className="cta-button">View Pricing Options</a>
        </div>
      </section>

      <div className="container">
        <div className="product-overview">
          <div className="product-image">
            <img src="/images/api-fabric-ingestion.png" alt="API to Fabric Ingestion Toolkit Visualization" />
          </div>
          <div className="product-description">
            <h2>Streamline Your API Data Integration</h2>
            <p>The API to Fabric Ingestion Toolkit provides everything you need to efficiently connect external data sources to your Microsoft Fabric environment. Stop building connectors from scratch and leverage our battle-tested templates for popular services like Stripe, Salesforce, HubSpot, and more.</p>
            
            <div className="key-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Ready-to-use Python/Notebook templates for REST API integration</li>
                <li>Normalization and transformation patterns for common data sources</li>
                <li>Complete error handling and retry logic</li>
                <li>Detailed logging and monitoring framework</li>
                <li>Delta table optimization for efficient storage</li>
                <li>Pre-built connectors for popular SaaS platforms</li>
              </ul>
            </div>
            
            <a href="#components" className="cta-button">Explore Components</a>
          </div>
        </div>
      </div>

      <section className="components" id="components">
        <div className="container">
          <div className="section-title">
            <h2>Core Components</h2>
            <p>Our toolkit includes everything you need to build production-ready API integrations</p>
          </div>
          
          <div className="component-grid">
            {components.map((component, index) => (
              <div key={index} className="component-card">
                <h3>
                  {component.icon}
                  {component.title}
                </h3>
                <ul>
                  {component.features.map((feature, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <div className="section-title">
            <h2>Benefits</h2>
            <p>Why choose our API to Fabric Ingestion Toolkit</p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Customer Testimonials</h2>
            <p>What our customers are saying about the API to Fabric Ingestion Toolkit</p>
          </div>
          
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-text">
                  {testimonial.text}
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.initials}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIXED: Pass the apiPricingPlans to the PricingSection component */}
      <PricingSection plans={apiPricingPlans} />

      <section className="faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our API to Fabric Ingestion Toolkit</p>
          </div>
          
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Simplify Your API Integrations?</h2>
          <p>Get started with our API to Fabric Ingestion Toolkit today and transform your data integration experience.</p>
          <a href="#pricing" className="cta-button">Choose Your Package</a>
        </div>
      </section>
    </div>
  );
};

const components = [
  {
    icon: <DocumentIcon />,
    title: 'API Connector Templates',
    features: [
      '<strong>Authentication:</strong> OAuth, API Key, and Basic Auth implementations',
      '<strong>Rate Limiting:</strong> Smart throttling and backoff strategies',
      '<strong>Pagination:</strong> Cursor, offset, and link-based pagination handlers'
    ]
  },
  {
    icon: <DatasetIcon />,
    title: 'Data Transformation Patterns',
    features: [
      '<strong>Schema Mapping:</strong> Flexible JSON to tabular conversion',
      '<strong>Type Handling:</strong> Date/time normalization, nested structure flattening',
      '<strong>Custom Functions:</strong> Reusable transformation utilities'
    ]
  },
  {
    icon: <CodeIcon />,
    title: 'Pre-built Connectors',
    features: [
      '<strong>Business Applications:</strong> Salesforce, HubSpot, QuickBooks, Xero templates',
      '<strong>Payment & Financial:</strong> Stripe, Square, PayPal integration patterns',
      '<strong>Marketing & Analytics:</strong> Google Analytics, Facebook Ads, LinkedIn Ads'
    ]
  },
  {
    icon: <MonitoringIcon />,
    title: 'Error Handling & Logging',
    features: [
      '<strong>Exception Management:</strong> Comprehensive error capture and classification',
      '<strong>Retry Logic:</strong> Configurable exponential backoff strategies',
      '<strong>Audit Trail:</strong> Detailed logging for debugging and compliance'
    ]
  },
  {
    icon: <ArchitectureIcon />,
    title: 'Integration Architecture',
    features: [
      '<strong>Pipeline Patterns:</strong> Incremental load, full refresh, and CDC templates',
      '<strong>Delta Tables:</strong> Optimized storage configurations for API data',
      '<strong>Metadata Management:</strong> Source tracking and lineage documentation'
    ]
  }
];

const benefits = [
  {
    icon: <ClockIcon />,
    title: 'Accelerate Development',
    description: 'Implement API integrations in hours instead of days. Our templates handle the complexity so you can focus on your specific business needs.'
  },
  {
    icon: <CheckIcon />,
    title: 'Ensure Reliability',
    description: 'Built-in error handling, retry logic, and monitoring ensure your data pipelines are robust and production-ready from day one.'
  },
  {
    icon: <ScaleIcon />,
    title: 'Handle Any Volume',
    description: 'Whether you are processing thousands or millions of records, our toolkit scales to meet your needs with optimized Delta table configurations.'
  },
  {
    icon: <OptimizedIcon />,
    title: 'Microsoft Fabric Native',
    description: 'Specifically designed for Microsoft Fabric, taking full advantage of its Spark pools, notebooks, and lakehouse architecture.'
  }
];

const testimonials = [
  {
    text: 'The API to Fabric Ingestion Toolkit saved us weeks of development time. We were able to connect our Salesforce and HubSpot data to Fabric in just a few hours with minimal customization.',
    initials: 'ML',
    name: 'Maria Lopez',
    title: 'Data Integration Lead, SaaS Company'
  },
  {
    text: 'The error handling patterns alone were worth the investment. We have applied them across all our data pipelines and have seen a dramatic reduction in failed loads.',
    initials: 'AJ',
    name: 'Alex Johnson',
    title: 'BI Developer, E-commerce Platform'
  },
  {
    text: 'As we were migrating to Microsoft Fabric, connecting our existing APIs was a major concern. This toolkit made the transition smooth and allowed us to maintain business continuity.',
    initials: 'TP',
    name: 'Thomas Park',
    title: 'CTO, Marketing Analytics Firm'
  }
];

const faqItems = [
  {
    question: 'Which APIs do you provide templates for?',
    answer: 'Our toolkit includes templates for popular services like Salesforce, HubSpot, Stripe, PayPal, QuickBooks, Google Analytics, Facebook Ads, LinkedIn Ads, and more. The Premium tier includes all available connectors, while Basic and Standard tiers include a subset.'
  },
  {
    question: 'Can I customize the connectors for my specific API needs?',
    answer: 'Absolutely! All templates are designed to be easily customizable. They include clear comments and modular code to help you adapt them to your specific requirements. Premium tier customers also receive assistance with one custom connector development.'
  },
  {
    question: 'Do I need any specific skills to use this toolkit?',
    answer: 'Basic familiarity with Python, Microsoft Fabric notebooks, and REST APIs is recommended. The templates include extensive documentation to help users of all skill levels, but some technical background will be beneficial.'
  },
  {
    question: 'Is this compatible with the latest version of Microsoft Fabric?',
    answer: 'Yes, our toolkit is regularly updated to ensure compatibility with the latest Microsoft Fabric releases. Premium tier customers receive quarterly updates to keep their integrations running smoothly.'
  },
  {
    question: 'How does the error handling work?',
    answer: 'Our toolkit includes a comprehensive error handling framework with exception capturing, classification, and logging. It provides configurable retry logic with exponential backoff strategies and detailed audit trails for troubleshooting and compliance.'
  }
];

export default APIFabricIngestionPage;