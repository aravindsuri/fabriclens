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

const MedallionArchitecturePage: React.FC = () => {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <Link to="/products">Products</Link> <span>/</span> Medallion Architecture Starter Kit
          </div>
          <h1>Medallion Architecture Starter Kit</h1>
          <p>Accelerate your Microsoft Fabric data projects with a comprehensive, production-ready medallion architecture implementation. Build scalable, maintainable data lakes faster with our ready-to-deploy templates, notebooks, and best practices.</p>
          <a href="#pricing" className="cta-button">View Pricing Options</a>
        </div>
      </section>

      <div className="container">
        <div className="product-overview">
          <div className="product-image">
            <img src="/images/medallion-architecture.png" alt="Medallion Architecture Visualization" />
          </div>
          <div className="product-description">
            <h2>Transform Your Data Lake Implementation</h2>
            <p>The Medallion Architecture Starter Kit provides everything you need to implement a robust Bronze-Silver-Gold data architecture in Microsoft Fabric. Skip weeks of development time and leverage industry best practices with our comprehensive templates and tools.</p>
            
            <div className="key-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Ready-to-use notebook templates for each medallion layer</li>
                <li>Complete Delta Lake optimization scripts and configurations</li>
                <li>Realistic sample datasets with common data problems</li>
                <li>Comprehensive implementation guide and documentation</li>
                <li>Monitoring and governance framework</li>
                <li>Performance testing templates</li>
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
            <p>Our starter kit includes everything you need to build a production-ready medallion architecture</p>
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
            <p>Why choose our Medallion Architecture Starter Kit</p>
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
            <p>What our customers are saying about the Medallion Architecture Starter Kit</p>
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

      <PricingSection />

      <section className="faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our Medallion Architecture Starter Kit</p>
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
          <h2>Ready to Accelerate Your Microsoft Fabric Projects?</h2>
          <p>Get started with our Medallion Architecture Starter Kit today and transform your data engineering experience.</p>
          <a href="#pricing" className="cta-button">Choose Your Package</a>
        </div>
      </section>
    </div>
  );
};

const components = [
  {
    icon: <DocumentIcon />,
    title: 'Notebooks & Transformation Logic',
    features: [
      '<strong>Bronze Layer:</strong> Raw ingestion with error handling, schema inference, metadata capture',
      '<strong>Silver Layer:</strong> Data cleansing, deduplication, type casting, SCD templates',
      '<strong>Gold Layer:</strong> Aggregations, business metrics, dimensional modeling'
    ]
  },
  {
    icon: <DatasetIcon />,
    title: 'Sample Datasets',
    features: [
      '<strong>Sales Data Sample:</strong> 1+ year of transaction history with common data issues',
      '<strong>IoT Data Sample:</strong> Sensor readings with variable frequency to demonstrate time series handling'
    ]
  },
  {
    icon: <CodeIcon />,
    title: 'Delta Table Scripts & Configurations',
    features: [
      '<strong>Optimization Scripts:</strong> OPTIMIZE, Z-ORDER, VACUUM templates',
      '<strong>Delta Features:</strong> Time travel setup, schema evolution, partition strategies'
    ]
  },
  {
    icon: <ArchitectureIcon />,
    title: 'Architecture & Documentation',
    features: [
      '<strong>Folder Structure:</strong> Complete directory layout for Fabric Lakehouse projects',
      '<strong>Naming Conventions:</strong> Table, column, job and pipeline naming standards'
    ]
  },
  {
    icon: <MonitoringIcon />,
    title: 'Monitoring & Governance',
    features: [
      '<strong>Data Quality Metrics:</strong> Track completeness, accuracy, freshness across layers',
      '<strong>Lineage Documentation:</strong> Automated data flow tracking and impact analysis',
      '<strong>Performance Testing:</strong> Benchmark notebooks and synthetic data generators'
    ]
  }
];

const benefits = [
  {
    icon: <ClockIcon />,
    title: 'Accelerate Time to Value',
    description: 'Deploy a production-ready data architecture in days instead of weeks or months. Jump-start your project with battle-tested templates.'
  },
  {
    icon: <CheckIcon />,
    title: 'Follow Best Practices',
    description: 'Implement industry-standard patterns and avoid common pitfalls. Our architecture incorporates lessons learned from hundreds of implementations.'
  },
  {
    icon: <ScaleIcon />,
    title: 'Scale With Confidence',
    description: 'Our architecture is designed to handle growing data volumes and increasing complexity. Start small and expand as your needs evolve.'
  },
  {
    icon: <OptimizedIcon />,
    title: 'Microsoft Fabric Optimized',
    description: 'Specifically designed for Microsoft Fabric, taking advantage of its unique features and capabilities for optimal performance and integration.'
  }
];

const testimonials = [
  {
    text: 'The Medallion Architecture Starter Kit saved us at least 3 weeks of development time. The templates were easy to customize to our needs, and the documentation was exceptionally thorough.',
    initials: 'JD',
    name: 'John Donovan',
    title: 'Data Engineering Lead, Financial Services Company'
  },
  {
    text: 'As we were migrating from Azure Synapse to Microsoft Fabric, this starter kit was invaluable. The Fabric-specific implementation guide helped us navigate the transition smoothly.',
    initials: 'SM',
    name: 'Sarah Martinez',
    title: 'Cloud Architect, Healthcare Provider'
  },
  {
    text: 'The data quality monitoring notebooks alone were worth the investment. We\'ve adapted them to create automated quality checks across our entire data estate.',
    initials: 'RK',
    name: 'Raj Kumar',
    title: 'Senior Data Engineer, Retail Analytics'
  }
];

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

const faqItems = [
  {
    question: 'Is this compatible with the latest version of Microsoft Fabric?',
    answer: 'Yes, our starter kit is regularly updated to ensure compatibility with the latest Microsoft Fabric releases. We provide quarterly updates to all Premium tier customers.'
  },
  {
    question: 'Can I customize the templates for my specific needs?',
    answer: 'Absolutely! All templates are fully customizable. The notebooks include detailed comments to help you understand the code and make adaptations. Premium tier customers also receive personalized guidance on customizations.'
  },
  {
    question: 'Do I need any specific skills to use this starter kit?',
    answer: 'Basic familiarity with Microsoft Fabric, Python/Spark, and data concepts is recommended. The templates include extensive documentation to help users of all skill levels, but some technical background will be beneficial.'
  },
  {
    question: 'How are updates delivered?',
    answer: 'Updates are delivered through our customer portal. Standard and Basic customers receive critical updates for 6 months. Premium customers receive quarterly updates for a full year, including new features and improvements.'
  },
  {
    question: 'Can I use this for production workloads?',
    answer: 'Yes, the Medallion Architecture Starter Kit is designed for production use. Many organizations have successfully implemented it in their production environments. Our guides include best practices for testing and deployment.'
  }
];

export default MedallionArchitecturePage;