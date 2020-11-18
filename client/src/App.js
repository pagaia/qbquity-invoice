import React from "react";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "invoice/Invoice";
import { template } from "data/template";


function App() {
  return (
    <PDFViewer width="100%" height="800">
      <Invoice pdfMode={true} data={template}/>
    </PDFViewer>
  );
}

export default App;
