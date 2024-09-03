"use client";
import { useState } from "react";
import { DocumentEditor } from "@onlyoffice/document-editor-react";

// https://github.com/ONLYOFFICE/document-editor-react?tab=readme-ov-file
// https://github.com/ONLYOFFICE/CommunityServer
// https://github.com/ONLYOFFICE/Docker-CommunityServer
const OnlyOffice = () => {
  const documentServerUrl = "http://localhost/"; // URL of your ONLYOFFICE Document Server
  const [editorKey, setEditorKey] = useState(0); // State to manage editor instance

  // Define the document configuration
  // https://api1.onlyoffice.com/editors/config/document
  const docConfig = {
    // fileType: "xlsx",
    // key: "xlsx-key-unique", // Unique key for the document
    // title: "Example Title",
    // url: "https://doc-viewer-app.vercel.app/To-do list.xlsx",
    // fileType: "pptx",
    // key: "apiwh1e490e07-bcab-469a-801b-5e0af8faa3a27", // Unique key for the document
    // title: "Example Title",
    // url: "https://doc-viewer-app.vercel.app/Portfolio.pptx",
    fileType: "docx",
    key: "key-docx-155", // Unique key for the document
    title: "Example Title",
    url: "https://doc-viewer-app.vercel.app/TESTDocument.docx",
    // fileType: "pdf",
    // key: "key-pdf", // Unique key for the document
    // title: "Example Title",
    // url: "https://doc-viewer-app.vercel.app/Employer-Consent-Letter.pdf",
  };

  const onDocumentReady = () => {
    console.log("Document is ready to view");
  };

  const onLoadComponentError = (errorCode: any, errorDescription: any) => {
    console.error(`Error code: ${errorCode}, Description: ${errorDescription}`);
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* <button onClick={handleEditorReload}>Reload Editor</button> */}
      <DocumentEditor
        config={{
          document: docConfig,
          // documentType: "cell", // Change based on your document type https://api1.onlyoffice.com/editors/config
          // documentType: "slide",
          documentType: "word",
          // documentType: "pdf",
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
