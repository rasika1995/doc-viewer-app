"use client";
import React, { useState } from "react";

const DocumentViewer = ({ documentUrl }: { documentUrl: string }) => {
  const isPdf = documentUrl.endsWith(".pdf");
  const isGoogleDoc = documentUrl.includes("docs.google.com/document");
  const isSharePointDoc = documentUrl.includes(".sharepoint.com");

  let viewerUrl;

  if (isPdf) {
    viewerUrl = `https://drive.google.com/viewer?embedded=true&url=${encodeURIComponent(
      documentUrl
    )}`;
  } else if (isGoogleDoc) {
    viewerUrl = `https://docs.google.com/document/d/${
      documentUrl.split("/d/")[1].split("/")[0]
    }/preview`;
  } else if (isSharePointDoc) {
    viewerUrl = `${documentUrl}&action=embedview`;
  } else {
    viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      documentUrl
    )}`;
  }

  console.log(viewerUrl);

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
    "https://alliontech-my.sharepoint.com/:w:/g/personal/rasikap_alliontechnologies_com/EWqrdFLUtbpGt4fTu6vcwGEByZormO7yPlLJhwUdd0MBhQ?e=ZvTUg9",
    "https://docs.google.com/document/d/16viR_ME_4IoU_NXaZbH51scMv718c7HDFJJf7iThh_Y/edit?usp=sharing",
    "https://alliontech-my.sharepoint.com/:w:/g/personal/rasikap_alliontechnologies_com/EeN_YHmvYs9ElCRnIIE_UeEByFQ8WCFAEVtTWupZ943sow?e=LlmTjh",
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
