import React from "react";
import Document from "primitives/Document";
import Page from "primitives/Page";
import Text from "primitives/Text";
import View from "primitives/View";
import { StyleSheet, Font } from "@react-pdf/renderer";
import Company from "invoice/Company";
import { template } from "data/template";
import InvoiceInfo from "invoice/InvoiceInfo";
import ProductHeader from "invoice/ProductHeader";
import ProductRow from "invoice/ProductRow";
import Total from "invoice/Total";
import BankInfo from "invoice/BankInfo";
import { styles as myStyles } from "styles/styles";
import { calTotal } from "../../utility/utilityFunctions";

Font.register({
  family: "Crimson Text",
  fonts: [
    {
      src:
        "//fonts.gstatic.com/s/crimsontext/v6/3IFMwfRa07i-auYR-B-zNS3USBnSvpkopQaUR-2r7iU.ttf",
    },
    {
      src:
        "//fonts.gstatic.com/s/crimsontext/v6/a5QZnvmn5amyNI-t2BMkWPMZXuCXbOrAvx5R0IT5Oyo.ttf",
      fontStyle: "italic",
    },
  ],
});

// Create styles
const styles = StyleSheet.create(myStyles);

const data = template;


// Create Invoice Component
const Invoice = ({data}) => {
  console.log({ styles });

  return (
    <Document>
      <Page size="A4">
        <View className="flexVerso">
          <InvoiceInfo data={data.invoice}></InvoiceInfo>
          <Company name="Company" data={data.company} className="w50 bold" />
        </View>
        <View className="flexVerso">
          <Company name="Client" data={data.client} className="w50 bold" />
        </View>
        <ProductHeader data={data.productHeader} />
        {data.productRows.map((row, idx) => (
          <ProductRow data={row} key={idx} />
        ))}

        <Total data={{ ...data.total, ...calTotal(data) }} />

        <View className="term">
          <Text>{data.termLabel}</Text>
          <Text>{data.term}</Text>
        </View>

        <BankInfo data={data.bank} className="mt30" />
        <View>
          <Text className="note">{data.note}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
