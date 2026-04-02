import { useState, useCallback } from "react";
import "./styles/Work.css";
import DetailsModal from "./DetailsModal";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Verdict: Institutional Research Platform",
    category: "AI, Institutional Research, Finance",
    tools: "Next.js, Python, n8n, Automated Diagnostics (DuPont, Five Forces)",
    image: "/uploads/verdict.png",
    description: "Context\nFinancial intelligence tools often lack a unified interface where dual-lens analysis—Investment Banking and Strategic Consulting—can be synthesized seamlessly. VERDICT provides this integrated view for better decision making.\n\nWhat I Built\nI built VERDICT, a web application functioning as a high-fidelity intelligence platform. The architecture is powered by Next.js and React, providing simulated, high-speed UI transitions that mimic a data terminal.\n\nKey Features\n- Dual-lens Analysis: Dedicated views for Investment Committee Memos and Strategic Consulting Reports.\n- High-Fidelity UI: Custom Tailwind CSS design system emphasizing dark mode, high contrast borders, and sharp edges for a terminal aesthetic.\n- Interactive Visualizations: Leverages Recharts and Framer Motion for responsive, data-rich chart components.\n- Scalable Architecture: Robust front-end structure built with React, Radix UI for accessibility, and TypeScript for type safety.\n\nDesign Decisions\n- Terminal Aesthetic: Used a strict `rounded-none` utility for sharp edges and JetBrains Mono for precise data typography.\n- Modular Components: Separated core UI primitives from feature-specific components for easier scaling and maintenance.",
    link: "",
  },
  {
    title: "Zomato Strategy & Valuation",
    category: "Corporate Finance, DCF Valuation, Strategy",
    tools: "Excel, Python, GenAI (1,200+ docs tested), Scenario Planning",
    image: "/uploads/zomato-analysis.png",
    description: "Context\nHigh-growth consumer internet companies often trade at significant premiums to intrinsic value, driven by future optionality rather than current cash flows. Understanding whether these premiums are justified requires combining rigorous valuation with strategic analysis.\n\nThis project analyzes Zomato as a listed Indian consumer-tech company operating across food delivery and quick commerce, with a specific focus on Blinkit-led growth expectations.\n\nWhat I Did\nI conducted a full investment-banking-style valuation and a consulting-style strategic assessment to evaluate whether Zomato’s market pricing is supported by fundamentals and strategy. The analysis integrates financial modeling, market sizing, competitive benchmarking, and scenario-based strategic reasoning.\n\nValuation & Financial Analysis\n- Built a bottom-up DCF valuation with explicit revenue, margin, and cash flow assumptions\n- Performed common-size P&L analysis and benchmarking against key competitors\n- Evaluated capital efficiency and profitability trends post scale-up\n\nStrategic Analysis\nThe strategic assessment focused on:\n- Market sizing for Indian food delivery and quick commerce\n- Unit economics and scalability of Blinkit\n- Competitive positioning and execution risk\n\nKey Conclusion\nWhile Zomato’s current market valuation exceeds intrinsic value based on conservative cash flow assumptions, a balanced growth strategy provides the most sustainable path forward.",    
    pdfLink: "/uploads/Zomato Strategic and valuation analysis -2-1769617969891-40312967.pdf",
  },
  {
    title: "AI Customer Support System",
    category: "n8n Automation, AI Agents, Decision Intelligence",
    tools: "n8n, Vector Search, AI Classification, Decision Routing",
    image: "/uploads/customer-support.png",
    description: "Context\nHandling customer communication at scale is not a tooling problem — it is a decision problem. Incoming messages vary in intent, urgency, relevance, and required context, yet most systems rely on either manual handling or rigid, rule-based automation. This results in wasted effort, inconsistent responses, and poor reuse of organizational knowledge.\n\nWhat I Built\nI designed an event-driven AI support intelligence system using n8n that treats every incoming message as a decision to be evaluated, not a ticket to be processed. The system listens to live communication channels (email and chat), determines whether a message actually requires attention, retrieves the right internal context when needed, and generates structured responses using an AI agent — without hard-coded rules or static workflows.\n\nHow the System Works in Practice\nWhen a message arrives:\n- It is first classified to understand intent and relevance\n- Non-actionable or low-signal messages are filtered out early\n- Relevant queries trigger contextual retrieval from internal documents\n- An AI agent reasons over both the message and retrieved context\n- The final response is generated and sent automatically\n\nDesign Decisions That Matter\nThis system was intentionally designed around control and clarity:\n- Classification is used to avoid blindly responding to everything\n- Vector retrieval replaces brittle rule-based logic\n- AI is treated as a reasoning layer, not a decision-maker\n- Routing logic is explicit, not hidden inside prompts",
    link: "",
  },
  {
    title: "AI Invoice Processing",
    category: "AI, Finance Operations, Automation",
    tools: "AI Extraction, Automated Reconciliation, Finance Workflows",
    image: "/uploads/invoice-system.png",
    description: "Context\nInvoice handling in most organizations is still a manual, error-prone process. Documents arrive in multiple formats, data must be extracted and validated, and reconciliation often depends on human checks across spreadsheets and systems.\n\nWhat I Built\nI designed an AI-driven invoice processing system that treats invoices as structured financial inputs rather than static documents. The system ingests invoice files automatically, extracts relevant financial fields, validates the data, and appends clean, structured records into a centralized ledger for downstream processing and review.\n\nHow the System Works in Practice\nWhen new invoice files are detected:\n- Files are discovered and downloaded automatically\n- Each document is analyzed and parsed using AI-based extraction\n- Key fields such as invoice number, vendor, amount, and dates are identified\n- Extracted data is normalized and validated through custom logic\n- Clean records are appended into a structured finance sheet\n\nDesign Decisions That Matter\nThis system prioritizes reliability over novelty:\n- Explicit looping and validation to prevent partial ingestion\n- AI used for extraction, not blind automation\n- Custom logic layers to enforce consistency before storage\n- Separation between document analysis and financial record creation",
    link: "",
  },
  {
    title: "Fraud Detection System",
    category: "Machine Learning, Risk Analytics",
    tools: "Python, ML Pipeline, Risk Scoring, Live Interface",
    image: "/uploads/fraud-detection.png",
    description: "Context\nFraud detection is fundamentally a risk assessment problem, not just a classification task. Financial transactions exhibit complex patterns where false positives increase operational cost and false negatives expose the system to direct losses. Effective fraud systems must balance accuracy, interpretability, and real-time usability.\n\nWhat I Built\nI designed an end-to-end fraud detection system that transforms raw transaction data into actionable risk signals through a structured machine learning pipeline and a live decision interface. The system separates model development from deployment, enabling scalable and repeatable fraud analysis without retraining overhead.\n\nHow the System Works in Practice\nThe workflow follows a production-oriented pipeline:\n- Transaction data is cleaned, preprocessed, and feature-scaled\n- A supervised machine learning model is trained to identify anomalous transaction behavior\n- The trained model is serialized using joblib for efficient reuse\n- A live web interface allows users to submit transactions for analysis\n- Each transaction is evaluated in real time and flagged based on risk probability rather than binary outcomes\n\nDesign Decisions That Matter\nKey choices were made to reflect real-world constraints:\n- Separation of training and inference to ensure system stability\n- Model persistence to avoid unnecessary retraining\n- Focus on risk scoring instead of hard yes/no decisions\n- Lightweight deployment to support fast iteration and usability",
    link: "",
  },
  {
    title: "Banking Analytics Dashboard",
    category: "Data Analytics, Business Intelligence",
    tools: "Power BI, Transaction Analysis, Customer Segmentation",
    image: "/uploads/banking-dashboard.jpeg",
    description: "Context\nBanks and financial institutions generate large volumes of transactional data, but decision-making often relies on static reports or fragmented views of customer activity. To be useful, analytics dashboards must go beyond visualization and enable clear interpretation of revenue drivers, customer behavior, and geographic patterns.\n\nWhat I Built\nI developed an interactive Power BI dashboard that consolidates banking transaction and customer data into a single analytical view. The dashboard is designed to help stakeholders quickly understand how revenue, customer segments, and transaction behavior vary across regions, categories, and payment methods.\n\nWhat the Dashboard Enables\nThe dashboard provides:\n- Revenue and transaction-level performance metrics\n- Active customer tracking and average transaction value\n- Geographic analysis across key global markets\n- Customer segmentation by demographics and behavior\n- Category and subcategory-level transaction breakdown\n- Payment method analysis across different transaction types\n\nDesign Decisions That Matter\nThe focus was on clarity and usability:\n- KPIs prioritized at the top for immediate visibility\n- Geographic and segment-level views to identify concentration risk\n- Filters designed to support exploratory analysis, not static reporting\n- Visual hierarchy optimized for executive-level consumption",
    link: "",
  },
  {
    title: "Automated Financial Analysis Model",
    category: "Financial Analysis, Accounting, Decision Support",
    tools: "Excel, Screener Data, Ratio Analysis, Dashboards",
    image: "/uploads/financial-model.png",
    description: "Context\nEquity analysis often starts with financial data exported from platforms such as Screener, but raw data alone is not decision-ready. Analysts typically spend significant time cleaning inputs, recalculating ratios, and building views to interpret performance trends. This friction slows down screening and introduces inconsistency across analyses.\n\nWhat I Built\nI built an automated Excel-based financial analysis model designed to work with Screener-compatible financial data formats. The model ingests standardized financial statements, structures them automatically, computes key financial ratios, and presents insights through an integrated Excel dashboard for quick interpretation.\n\nWhat the Model Enables\nThe model supports:\n- Direct ingestion of Screener-exported financial data\n- Automated structuring of income statement, balance sheet, and cash flow data\n- Formula-driven computation of profitability, liquidity, and leverage ratios\n- Trend analysis across reporting periods\n- A dashboard view summarizing key financial metrics and signals\n- Rapid identification of strengths, weaknesses, and potential red flags\n\nDesign Decisions That Matter\n- Input sheets aligned with Screener’s export structure\n- Clear separation between raw inputs, calculations, and dashboard outputs\n- Automation through formulas rather than manual recalculation\n- Ratios and visuals chosen for analytical relevance, not quantity",
    link: "",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Highlights</span>
                          <p>{project.tools}</p>
                        </div>
                        <button 
                          style={{
                            marginTop: '25px',
                            background: 'transparent',
                            border: '1px solid var(--accentColor)',
                            color: 'var(--accentColor)',
                            padding: '10px 20px',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            maxWidth: '160px',
                            fontWeight: '500'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--accentColor)';
                            e.currentTarget.style.color = '#000';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--accentColor)';
                          }}
                          onClick={() => {
                            setSelectedProject(project);
                            setModalOpen(true);
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link || undefined}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <DetailsModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedProject.title}
          category={selectedProject.category}
          tools={selectedProject.tools}
          image={selectedProject.image}
          description={selectedProject.description}
          pdfLink={selectedProject.pdfLink}
        />
      )}
    </div>
  );
};

export default Work;
