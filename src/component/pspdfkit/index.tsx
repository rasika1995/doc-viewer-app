"use client";
import { useEffect, useRef, useState } from "react";

const PSPDFKIT: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current document index

  // Array of document URLs
  const documents = [
    "/Portfolio.pptx",
    "/TestDocument.docx",
    "/To-do list.xlsx",
    "/Employer-Consent-Letter.pdf",
  ];

  useEffect(() => {
    const container = containerRef.current;

    if (container && typeof window !== "undefined") {
      import("pspdfkit").then((PSPDFKit: any) => {
        if (PSPDFKit) {
          PSPDFKit.unload(container); // Unload previous document if any
        }

        // Load the current document
        PSPDFKit.load({
          container,
          document: documents[currentIndex], // Load the current document based on index
          baseUrl: `${window.location.protocol}//${window.location.host}/`,
        });
      });
    }
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const handleNext = () => {
    if (currentIndex < documents.length - 1) {
      setCurrentIndex(currentIndex + 1); // Move to the next document
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous document
    }
  };

  return (
    <div>
      <div style={{ display: "flex", padding: "8px" }}>
        <button onClick={handleBack} disabled={currentIndex === 0}>
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === documents.length - 1}
        >
          Next
        </button>
      </div>
      <div ref={containerRef} style={{ height: "94vh" }} />
    </div>
  );
};

export default PSPDFKIT;
