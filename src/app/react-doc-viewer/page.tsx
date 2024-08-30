"use client";

import React from "react";
import DocViewer, {
  DocViewerRenderers,
 
} from "@cyntler/react-doc-viewer";

import "@cyntler/react-doc-viewer/dist/index.css";

// https://www.npmjs.com/package/@cyntler/react-doc-viewer
// https://www.npmjs.com/package/react-doc-viewer
// https://github.com/Alcumus/react-doc-viewer/issues/72
const Home = () => {
  const docs = [
    //   {
    //   uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
    //   fileType: 'docx',
    //   // uri: "/TESTDocument.docx"
    //   // uri: "/To-do list.xlsx",
    //   // uri: "/Portfolio.pptx",
    //   // uri: "/sample.txt"
    //  // uri: "/Employer-Consent-Letter.pdf"
    // },
    {
      uri: "https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
      fileType: "xls",
    },
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
    },
    {
      uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
      fileType: "ppt",
    },

    {
      uri: "/Employer-Consent-Letter.pdf", // Direct path from the public directory
      fileType: "pdf",
    },
  ];

  return (
    <DocViewer
      pluginRenderers={DocViewerRenderers}
      //pluginRenderers={[PDFRenderer]}
      documents={docs}
      //style={{ width: 500, height: 500 }}
      className="test-class"
      config={{
        header: {
          disableHeader: false,
          disableFileName: false,
          retainURLParams: false,
        },
      }}
    />
  );
};

export default Home;
