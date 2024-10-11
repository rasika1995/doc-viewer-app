"use client";
import { useEffect, useRef, useState } from "react";
import WebViewer, { WebViewerInstance } from "@pdftron/webviewer";

const PdfTronViewer: React.FC = () => {
  const viewerContainerRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<WebViewerInstance | null>(null); // Track WebViewer instance
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current document index

  // Array of document URLs
  const documents = [
    "/Portfolio.pptx",
    "/Employer-Consent-Letter.pdf",
    "/To-do list.xlsx",
    "/TESTDocument.docx",
    "/AWS Overview Notes.docx",
    "/pkpadmin,+408-2146-1-CE.pdf",
    "https://doc-viewer-app.vercel.app/file-sample_100kB.doc",
    "https://doc-viewer-app.vercel.app/file-sample_1MB.docx",
    "https://doc-viewer-app.vercel.app/15-MB-docx-file-download.docx",
    "https://doc-viewer-app.vercel.app/AWS Overview Notes.docx",
  ];

  useEffect(() => {
    const container = viewerContainerRef.current;

    if (container && typeof window !== "undefined") {
      // Initialize WebViewer only once on initial load
      WebViewer(
        {
          path: "/lib", // Ensure this path is correct
          licenseKey: process.env.NEXT_PUBLIC_PDFTRON_LICENSE_KEY, // Add your license key if needed
          initialDoc: documents[currentIndex], // Load the current document
          enableOfficeEditing: true,
        },
        container as HTMLDivElement
      )
        .then((instance: WebViewerInstance) => {
          instanceRef.current = instance;
          instance.UI.loadDocument(documents[currentIndex]); // Load the initial document
          instance.UI.enableFeatures([instance.UI.Feature.ContentEdit]);
        })
        .catch((error) => {
          console.error("Error initializing WebViewer:", error);
        });
    }

    return () => {
      // Cleanup the WebViewer instance when unmounting
      if (instanceRef.current) {
        instanceRef.current.UI.dispose();
        instanceRef.current = null;
      }
    };
  }, []); // Run this effect only once on initial load

  useEffect(() => {
    // Load a new document when the currentIndex changes
    if (instanceRef.current) {
      instanceRef.current.UI.loadDocument(documents[currentIndex]);
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
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", padding: "10px" }}>
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
      <div ref={viewerContainerRef} style={{ flex: 1 }}></div>
    </div>
  );
};

export default PdfTronViewer;
