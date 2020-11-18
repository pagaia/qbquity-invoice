import React from "react";
import { Document as PdfDocument } from "@react-pdf/renderer";

const Document = ({ children, pdfMode = true }) => {
  console.log({ Document: pdfMode });
  const docProperties = {
    title: "QBQUITY invoice",
    author: "pagaia",
    subject: "React Invoice",
    keywords: "QBQUITY react invoice javascript react-pdf",
    creator: "Pagaia",
    producer: "QBQUITY",
  };
  return <PdfDocument {...docProperties}>{children}</PdfDocument>;
};

export default Document;
