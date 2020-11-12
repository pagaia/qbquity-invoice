import React from "react";
import { Page as PdfPage } from "@react-pdf/renderer";
import extract from "../../styles/compose";

const Page = ({ className, children }) => {
  return (
    <PdfPage size="A4" style={extract("page " + (className ? className : ""))}>
      {children}
    </PdfPage>
  );
};

export default Page;
