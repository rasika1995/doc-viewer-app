"use client";
import { useRouter } from "next/navigation";
import React from "react";

function HomePage() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1 style={{ margin: "10px" }}>Document Viewer</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button
          style={{ padding: "10px" }}
          onClick={() => router.push("/react-doc-viewer")}
        >
          Load React Doc Viewer
        </button>
        <button
          style={{ padding: "10px" }}
          onClick={() => router.push("/office-view")}
        >
          Load Office View
        </button>
        <button
          style={{ padding: "10px" }}
          onClick={() => router.push("/only-office")}
        >
          Load ONLY OFFICE Document Viewer
        </button>

        <button
          style={{ padding: "10px" }}
          onClick={() => router.push("/pdftron")}
        >
          Load PDFTron Viewer
        </button>
        <button
          style={{ padding: "10px" }}
          onClick={() => router.push("/pspdfkit")}
        >
          Load PSPDFKit
        </button>
        <button
          style={{ padding: "10px" }}
          onClick={() => router.push("/syncfusion-editor")}
        >
          Load Syncfusion Editor
        </button>
      </div>
    </div>
  );
}

export default HomePage;
