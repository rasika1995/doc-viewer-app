"use client";
import { useState } from "react";
import { DocumentEditor } from "@onlyoffice/document-editor-react";

// https://github.com/ONLYOFFICE/document-editor-react?tab=readme-ov-file
// https://github.com/ONLYOFFICE/CommunityServer
// https://github.com/ONLYOFFICE/Docker-CommunityServer

type DocumentFileType = "xlsx" | "pptx" | "docx" | "pdf" | "doc";

interface DocumentConfig {
  fileType: DocumentFileType;
  key: string;
  title: string;
  url: string;
  permissions: {
    download: boolean;
    edit?: boolean;
    print?: boolean;
  };
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
      fileType: "docx",
      key: "file-sample_100kB6",
      title: "file-sample_100kB3",
      url: "https://doc-viewer-app.vercel.app/file-sample_100kB.doc",
      permissions: {
        download: false,
        edit: false,
        print: false
      },
      // url: "http://192.168.8.152:3000/file-sample_100kB.doc",
    },
    {
      fileType: "docx",
      key: "file-sample_1MB6",
      title: "file-sample_1MB",
      url: "https://doc-viewer-app.vercel.app/file-sample_1MB.docx",
      permissions: {
        download: true,
      },

      // url: "http://192.168.8.152:3000/file-sample_1MB.docx",
    },
    {
      fileType: "docx",
      key: "file-sample_15MB6",
      title: "file-sample_15MB",
      url: "https://doc-viewer-app.vercel.app/15-MB-docx-file-download.docx",
      permissions: {
        download: true,
      },
      // url: "http://192.168.8.152:3000/15-MB-docx-file-download.docx",
    },
    {
      fileType: "docx",
      key: "AWS Overview Notes4",
      title: "AWS Overview Notes.docx",
      url: "https://doc-viewer-app.vercel.app/AWS Overview Notes.docx",
      permissions: {
        download: true,
      },
      // url: "http://192.168.8.152:3000/AWS Overview Notes.docx",
    },
    {
      fileType: "xlsx",
      key: "sample-test-key-gc-1",
      title: "To-do List",
      url: "https://doc-viewer-app.vercel.app/To-do%20list.xlsx",
      permissions: {
        download: true,
      },
      // url: "http://192.168.8.152:3000/To-do%20list.xlsx",
    },
    {
      fileType: "pptx",
      key: "apiwh1e490e07-bcab-469a-801b-5e0af8faa3a27",
      title: "Portfolio Presentation",
      url: "https://doc-viewer-app.vercel.app/Portfolio.pptx",
      permissions: {
        download: true,
      },
      // url: "http://192.168.8.152:3000/Portfolio.pptx",
    },
    {
      fileType: "docx",
      key: "key-docx-155",
      title: "Test Document",
      url: "https://doc-viewer-app.vercel.app/TESTDocument.docx",
      permissions: {
        download: true,
      },
      // url: "http://192.168.8.152:3000/TESTDocument.docx",
    },
    {
      fileType: "pdf",
      key: "key-pdf",
      title: "Employer Consent Letter",
      url: "https://doc-viewer-app.vercel.app/Employer-Consent-Letter.pdf",
      permissions: {
        download: true,
      },
      // url: "http://192.168.8.152:3000/Employer-Consent-Letter.pdf",
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
    doc: "word",
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
            mode: "view",
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
            customization: {
              anonymous: {
                request: true,
                label: "Guest",
              },
              autosave: false,
              comments: true,
              compactHeader: false,
              compactToolbar: false,
              compatibleFeatures: false,
              forcesave: false,
              help: true,
              hideRightMenu: true,
              hideRulers: false,
              integrationMode: "embed",
              macros: true,
              macrosMode: "Warn",
              mentionShare: true,
              mobileForceView: true,
              plugins: true,
              toolbarHideFileName: true,
              toolbarNoTabs: true,
              uiTheme: "theme-dark",
              unit: "cm",
              zoom: 100,
            },
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
