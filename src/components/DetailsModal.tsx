import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";
import "./styles/DetailsModal.css";

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  tools?: string;
  image: string;
  description: string;
  pdfLink?: string;
}

const DetailsModal = ({
  isOpen,
  onClose,
  title,
  category,
  tools,
  image,
  description,
  pdfLink,
}: DetailsModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose} data-cursor="disable">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        data-cursor="auto"
      >
        <button className="modal-close" onClick={onClose}>
          <MdClose />
        </button>

        <div className="modal-header">
          <div className="modal-image-wrapper">
            <img src={image} alt={title} />
          </div>
          <div className="modal-title-sec">
            <h2>{title}</h2>
            <h4 className="modal-category">{category}</h4>
            {tools && (
              <div className="modal-tools">
                <span className="tools-label">Tools & Features</span>
                <p>{tools}</p>
              </div>
            )}
            {pdfLink && (
              <a href={pdfLink} target="_blank" rel="noreferrer" className="modal-pdf-link">
                View Full PDF Report
              </a>
            )}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            {description.split("\n\n").map((para, i) => {
              if (para.startsWith("Context") || para.startsWith("What I Built") || para.startsWith("How the System Works") || para.startsWith("Design Decisions") || para.startsWith("Why This Is") || para.startsWith("Key Features") || para.startsWith("Valuation & Financial") || para.startsWith("Strategic Analysis") || para.startsWith("Key Conclusion") || para.startsWith("What I Did") || para.startsWith("Approach") || para.startsWith("Outcome")) {
                const lines = para.split("\n");
                return (
                  <div key={i} className="desc-section">
                    <h3>{lines[0]}</h3>
                    {lines.slice(1).map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DetailsModal;
