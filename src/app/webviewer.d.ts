// types/webviewer.d.ts

declare module '@pdftron/webviewer' {
    export interface DocumentViewer {
      on(event: string, callback: () => void): void;
      // Add other necessary methods and properties as needed
    }
  
    export interface WebViewerInstance {
      UI: any;
      docViewer: DocumentViewer;
      // Add other necessary methods and properties as needed
    }
  
    export default function WebViewer(
      options: {
        path: string;
        initialDoc: string;
        licenseKey?: string; // Optional, if you have a license key
        enableOfficeEditing?: boolean;
        preloadWorker?: any
      },
      element: HTMLDivElement
    ): Promise<WebViewerInstance>;
  }