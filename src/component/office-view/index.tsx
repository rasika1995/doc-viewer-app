"use client";
import React, { useState } from "react";

const DocumentViewer = ({ documentUrl }: { documentUrl: string }) => {
  const isPdf = documentUrl.endsWith(".pdf");
  const viewerUrl = isPdf
    ? `https://drive.google.com/viewer?embedded=true&url=${encodeURIComponent(
        documentUrl
      )}`
    : `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        documentUrl
      )}`;

  return (
    <iframe
      src={viewerUrl}
      style={{ width: "100%", height: "94vh", border: "none" }}
      title="Document Viewer"
    />
  );
};

const OfficeView = () => {
  const documents = [
    "https://doc-viewer-app.vercel.app/Portfolio.pptx",
    "https://doc-viewer-app.vercel.app/TESTDocument.docx",
    "https://doc-viewer-app.vercel.app/To-do%20list.xlsx",
    "https://doc-viewer-app.vercel.app/Employer-Consent-Letter.pdf",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < documents.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          padding: "8px",
        }}
      >
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
      <DocumentViewer documentUrl={documents[currentIndex]} />
    </div>
  );
};

export default OfficeView;
