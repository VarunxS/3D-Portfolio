import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Innovator Intern</h4>
                <h5>The Future University</h5>
              </div>
              <h3>2026–NOW</h3>
            </div>
            <p>
              Led the end-to-end development of the platform's core AI analysis module covering 5,000+ stocks. Engineered and rigorously benchmarked 100+ prompts across 10 AI models to maximize output quality over competing tools. Developed Python AI agents for real-time news ingestion and deployed 10+ n8n automations, compressing a full day of manual operations into under an hour. Additionally, mapped the product's entire user journey funnel from scratch to directly drive roadmap decisions alongside the founding team.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Joint Placement Head</h4>
                <h5>Career Development & Guidance Cell, PEC</h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              Driving outreach and industry networking for 800+ students. Building advanced Excel and Power BI dashboards to track placement data, support strategic planning, and enhance decision-making capabilities. 
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Management Head</h4>
                <h5>NASA HERC Team, PEC</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Raised ₹20 Lakhs in funding for PEC's Mars Rover Project. Led strategic planning, sponsor outreach, and cross-department collaboration for the national-level execution of the NASA Human Exploration Rover Challenge.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Executive Member</h4>
                <h5>Robotics Society, PEC</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Orchestrated 3+ robotics competitions and AI technical sessions for 100+ participants. Mentored 15+ junior students in robotics, AI strategy, and project execution. Coordinated 5+ technical workshops.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
