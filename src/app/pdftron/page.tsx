import PdfTronViewer from "@/component/pdftron";
import dynamic from "next/dynamic";

function PdfTronPage() {
  return <PdfTronViewer />;
}

export default dynamic(() => Promise.resolve(PdfTronPage), { ssr: false });
