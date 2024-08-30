import PdfTronViewer from "@/component/pdftron";
import dynamic from "next/dynamic";

function HomePage() {
  return <PdfTronViewer />;
}

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
