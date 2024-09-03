import ReactDocViewer from "@/component/react-doc-viewer";
import dynamic from "next/dynamic";

function ReactDocViewerPage() {
  return <ReactDocViewer />;
}

export default dynamic(() => Promise.resolve(ReactDocViewerPage), {
  ssr: false,
});
