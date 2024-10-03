"use client";
import { useState } from "react";
import { DocumentEditor } from "@onlyoffice/document-editor-react";

// https://github.com/ONLYOFFICE/document-editor-react?tab=readme-ov-file
// https://github.com/ONLYOFFICE/CommunityServer
// https://github.com/ONLYOFFICE/Docker-CommunityServer

type DocumentFileType = "xlsx" | "pptx" | "docx" | "pdf";

interface DocumentConfig {
  fileType: DocumentFileType;
  key: string;
  title: string;
  url: string;
}

const OnlyOffice = () => {
  const documentServerUrl = "http://localhost/"; // URL of your ONLYOFFICE Document Server
  const [editorKey, setEditorKey] = useState(0); // State to manage editor instance

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

  // Define the document configuration
  // https://api1.onlyoffice.com/editors/config/document
  const documents: DocumentConfig[] = [
    {
      fileType: "xlsx",
      key: "sample-test-key-gc-1",
      title: "To-do List",
      url: "https://doc-viewer-app.vercel.app/To-do%20list.xlsx",
    },
    {
      fileType: "pptx",
      key: "apiwh1e490e07-bcab-469a-801b-5e0af8faa3a27",
      title: "Portfolio Presentation",
      url: "https://doc-viewer-app.vercel.app/Portfolio.pptx",
    },
    {
      fileType: "docx",
      key: "key-docx-155",
      title: "Test Document",
      url: "https://doc-viewer-app.vercel.app/TESTDocument.docx",
    },
    {
      fileType: "pdf",
      key: "key-pdf",
      title: "Employer Consent Letter",
      url: "https://doc-viewer-app.vercel.app/Employer-Consent-Letter.pdf",
    },
  ];

  const docConfig = documents[currentIndex]; // Get the current document configuration

  const onDocumentReady = () => {
    console.log("Document is ready to view");
  };

  const onLoadComponentError = (errorCode: any, errorDescription: any) => {
    console.error(`Error code: ${errorCode}, Description: ${errorDescription}`);
  };

  // Map file types to document types
  const documentTypeMap: Record<DocumentFileType, string> = {
    xlsx: "cell",
    pptx: "slide",
    docx: "word",
    pdf: "pdf",
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          display: "flex",
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
      </div>{" "}
      <DocumentEditor
        config={{
          document: docConfig,
          documentType: documentTypeMap[docConfig.fileType], // Change based on your document type https://api1.onlyoffice.com/editors/config
          editorConfig: {
            // callbackUrl: "http://localhost/editors/callback", // Your callback URL for saving documents
            // customization: {
            //   anonymous: {
            //     request: false,
            //   },
            //   feedback: {
            //     visible: true,
            //   },
            //   integrationMode: "embed",
            // },
          },
        }}
        documentServerUrl={documentServerUrl}
        events_onDocumentReady={onDocumentReady}
        onLoadComponentError={onLoadComponentError}
        height="100%"
        width="100%"
        type="desktop"
        id={`editor-${editorKey}`} // Unique ID for the editor
      />
    </div>
  );
};

export default OnlyOffice;
