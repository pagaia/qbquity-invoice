import React from "react";
import { Text as PdfText } from "@react-pdf/renderer";
import extractStyle from "../../styles/compose";

const Text = ({ className, children }) => {
  return (
    <PdfText style={extractStyle("span " + (className ? className : ""))}>
      {children}
    </PdfText>
  );
};

export default Text;
