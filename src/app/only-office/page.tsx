import OnlyOffice from "@/component/only-office";
import dynamic from "next/dynamic";

function OnlyOfficePage() {
  return <OnlyOffice />;
}

export default dynamic(() => Promise.resolve(OnlyOfficePage), {
  ssr: false,
});
