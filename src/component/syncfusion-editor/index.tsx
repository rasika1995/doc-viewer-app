// https://ej2.syncfusion.com/react/documentation/document-editor/getting-started

"use client";
import * as React from "react";
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";

DocumentEditorContainerComponent.Inject(Toolbar);

function SyncfusionEditor() {
  return (
    <DocumentEditorContainerComponent
      id="container"
      height={"590px"}
      serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
      enableToolbar={true}
    />
  );
}
export default SyncfusionEditor;
