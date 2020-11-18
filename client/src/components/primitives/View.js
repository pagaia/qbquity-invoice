import React from "react";
import { View as PdfView } from "@react-pdf/renderer";
import extract from "../../styles/compose";

const View = ({ className, children }) => {
  return (
    <PdfView style={extract("view " + (className ? className : ""))}>
      {children}
    </PdfView>
  );
};

export default View;
