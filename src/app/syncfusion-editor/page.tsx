import SyncfusionEditor from "@/component/syncfusion-editor";
import dynamic from "next/dynamic";

function SyncfusionEditorPage() {
  return <SyncfusionEditor />;
}

export default dynamic(() => Promise.resolve(SyncfusionEditorPage), {
  ssr: false,
});
