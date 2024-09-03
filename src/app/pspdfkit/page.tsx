import PSPDFKIT from "@/component/pspdfkit";
import dynamic from "next/dynamic";

function PspdfkitPage() {
  return <PSPDFKIT />;
}

export default dynamic(() => Promise.resolve(PspdfkitPage), { ssr: false });
