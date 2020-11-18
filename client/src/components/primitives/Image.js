import React from "react";
import { Image as PdfImage } from "@react-pdf/renderer";
import extract from "../../styles/compose";

const Image = ({ className, src }) => {
  return (
    <PdfImage
      style={extract("view " + (className ? className : ""))}
      src={src}
    />
  );
};

export default Image;
