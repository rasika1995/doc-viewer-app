"use client";
import WebViewer, { WebViewerInstance } from "@pdftron/webviewer";
import { useEffect, useRef } from "react";

// https://docs.apryse.com/documentation/web/get-started/nextjs/
export default function PdfTronViewer() {
  const viewer = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false); // To track initialization

  useEffect(() => {
    if (
      !initialized.current &&
      viewer.current
    ) {
      import("@pdftron/webviewer").then(() => {
        WebViewer(
          {
            path: "/lib", // Ensure this path is correct
            // licenseKey: "YOUR_LICENSE_KEY", // Uncomment and set your license key if needed
            initialDoc: "/TESTDocument.docx",
            enableOfficeEditing: true, //https://docs.apryse.com/documentation/web/guides/office/edit-docx-file/
            // initialDoc: "/To-do list.xlsx",
            // initialDoc: "/Employer-Consent-Letter.pdf",
            // initialDoc: "/Portfolio.pptx",
            // initialDoc: "https://docs.google.com/document/d/1pVBR9g_wrDJP3ALTarzSIOw0tTfUE8aHq1NMZ_M250w",
          },
          viewer.current as HTMLDivElement
          // document.getElementById('viewer')
        ).then( (instance: WebViewerInstance) => {
          instance.UI.enableFeatures([instance.UI.Feature.ContentEdit]);
          // const { docViewer } = instance;
          // You can now call WebViewer APIs here...
          // docViewer.on('documentLoaded', () => {
          //   console.log('Document loaded');
          // });
        });
      });
      initialized.current = true; // Mark as initialized
    }
  }, []);

  return (
    <div className="MyComponent" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px", // Optional padding
        }}
      >
        React Viewer
      </div>
      <div className="webviewer" ref={viewer} style={{ flex: 1 }}></div>
    </div>
  );
}
