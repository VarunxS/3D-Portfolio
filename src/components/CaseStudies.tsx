import { useState } from "react";
import "./styles/CaseStudies.css";
import DetailsModal from "./DetailsModal";

const caseStudies = [
  {
    title: "Stock Market Impact of Major Events",
    subtitle: "A case-based equity market analysis examining how major macro and corporate events influence stock prices, volatility, and sectoral behavior.",
    industry: "Capital Markets / Equity Research",
    image: "/uploads/stock-market.png",
    link: "/uploads/Event-Driven Valuation Study Indian Stock Market_compressed-1769619138199-469027544.pdf",
    description: "Context\nFinancial markets often react sharply to macroeconomic decisions, regulatory changes, and corporate controversies. Understanding how such events impact stock prices and volatility is essential for risk management and investment decision-making. This case study examines real-world market reactions to high-impact events in the Indian and global context.\n\nApproach\nConducted time-series analysis of stock prices and trading volumes. Compared pre-event and post-event market behavior. Analyzed sector-level reactions and volatility spikes. Built visualizations to interpret market sentiment and risk perception.\n\nKey events analyzed:\n- Adani–Hindenburg case\n- RBI interest rate decisions\n- US trade tariff announcements\n\nOutcome\nIdentified abnormal volatility patterns around event windows. Highlighted sector-specific sensitivity to macro and corporate shocks. Demonstrated how news-driven events alter short-term risk profiles. The analysis mirrors real-life equity risk assessment used by analysts and portfolio managers."
  },
  {
    title: "Indian IT Industry Strategic Analysis",
    subtitle: "A strategic overview evaluating financial performance, competitive dynamics, and future growth drivers.",
    industry: "Information Technology",
    image: "/uploads/it-sector.png",
    link: "/uploads/IT SECTOR CASE STUDY-1769619540520-891141464.pdf",
    description: "Context\nIndia’s IT industry is undergoing a structural shift from traditional outsourcing to innovation-led growth driven by AI, cloud, cybersecurity, and Global Capability Centers (GCCs). This case study presents a concise, decision-oriented snapshot of the industry.\n\nApproach\nBuilt a one-slide framework covering:\n- Industry overview and global positioning\n- Key financial metrics (revenue, exports, margins, market cap)\n- Competitive landscape of major IT players\n- Key trends: AI, cloud, cybersecurity, GCC expansion\n- Forward-looking outlook (2025–2030)\nAnchored analysis using credible industry reports and public data.\n\nOutcome\nDelivered a concise, executive-ready industry snapshot. Highlighted the industry’s transition toward innovation-led growth. Demonstrated strategic thinking under time and format constraints. This mirrors consulting-style industry analysis used in client discussions."
  },
  {
    title: "Janta Ka Reporter",
    subtitle: "A civic-tech concept focused on identifying, reporting, and analyzing urban issues.",
    industry: "Civic Technology",
    image: "/uploads/janta-reporter.png",
    link: "/uploads/Janta ka Reporter-1769619712237-960942337.pdf",
    description: "Context\nUrban civic issues such as waste mismanagement, sanitation gaps, and public safety concerns often suffer from fragmented reporting and slow institutional response. This case study explores a structured approach to identifying stakeholders and framing civic problems for scalable intervention.\n\nApproach\nConducted problem and stakeholder analysis across civic domains:\n- Sanitation and waste management\n- Public safety and crime reporting\n- Unauthorized access and urban misuse\n- Animal welfare concerns\n\nBuilt visual storytelling to highlight:\n- Impact on citizens\n- Role of municipal bodies and law enforcement\n- Involvement of NGOs and advocacy groups\n\nOutcome\nDeveloped a structured civic problem framework. Clarified stakeholder responsibilities and intervention points. Demonstrated how data and reporting systems can support governance outcomes. This case emphasizes analytical framing rather than technical execution."
  }
];

const CaseStudies = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<any>(null);

  return (
    <div className="case-studies-section" id="case-studies">
      <div className="case-studies-container section-container">
        <h2>
          Case <span>Studies</span>
        </h2>
        <div className="case-studies-grid">
          {caseStudies.map((item, index) => (
            <div className="case-study-card" key={index}>
              <div className="cs-image-wrapper">
                <img src={item.image} alt={item.title} />
                <div 
                  className="cs-hover-link"
                  data-cursor="disable"
                  style={{cursor: 'pointer'}}
                  onClick={() => {
                    setSelectedCase(item);
                    setModalOpen(true);
                  }}
                >
                  <span className="cs-read-btn">View Details</span>
                </div>
              </div>
              <div className="cs-content">
                <div className="cs-industry">{item.industry}</div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCase && (
        <DetailsModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedCase.title}
          category={selectedCase.industry}
          image={selectedCase.image}
          description={selectedCase.description}
          pdfLink={selectedCase.link}
        />
      )}
    </div>
  );
};

export default CaseStudies;
