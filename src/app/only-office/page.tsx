'use client';
import { useEffect, useState } from 'react';
import { DocumentEditor } from '@onlyoffice/document-editor-react';

// https://github.com/ONLYOFFICE/document-editor-react?tab=readme-ov-file
const Home = () => {
  const documentServerUrl = 'http://localhost/'; // URL of your ONLYOFFICE Document Server
  const [editorKey, setEditorKey] = useState(0); // State to manage editor instance

  // Define the document configuration
  const docConfig = {
    fileType: 'docx', // Change based on your document type
    key: 'unique-document-key', // Unique key for the document
    title: 'Example Document Title',
    url: '/example.docx', // URL to the document in the public directory
  };

  const handleEditorReload = () => {
    setEditorKey((prevKey) => prevKey + 1); // Change key to force a re-render
  };

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <h1>ONLYOFFICE Document Editor</h1>
      {/* <button onClick={handleEditorReload}>Reload Editor</button> */}
      <DocumentEditor
        config={{
          document: docConfig,
          documentType: 'word', // Change based on your document type
          editorConfig: {
            callbackUrl: 'http://localhost/callback', // Your callback URL for saving documents
          },
        }}
        documentServerUrl={documentServerUrl}
        height="80%"
        width="80%"
        id={`editor-${editorKey}`} // Unique ID for the editor
      />
    </div>
  );
};

export default Home;