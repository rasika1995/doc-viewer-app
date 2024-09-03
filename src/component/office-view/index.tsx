"use client";
import React from "react";

// https://gist.github.com/theel0ja/b9e44a961f892ccf43e217ab74b9417b
const DocumentViewer = ({ documentUrl }: any) => {
  const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    documentUrl
  )}`;

  return (
    <iframe
      src={viewerUrl}
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="Document Viewer"
    />
  );
};

const OfficeView = () => {
  // const documentUrl = "https://doc-viewer-app.vercel.app/TESTDocument.docx";
  // const documentUrl = 'https://doc-viewer-app.vercel.app/To-do list.xlsx';
  const documentUrl = "https://doc-viewer-app.vercel.app/Portfolio.pptx";

  return <DocumentViewer documentUrl={documentUrl} />;
};

export default OfficeView;
