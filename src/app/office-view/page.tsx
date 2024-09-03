import OfficeView from "@/component/office-view";
import dynamic from "next/dynamic";

function OfficeViewPage() {
  return <OfficeView />;
}

export default dynamic(() => Promise.resolve(OfficeViewPage), { ssr: false });
