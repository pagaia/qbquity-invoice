import { PDFViewer } from "@react-pdf/renderer";
import Axios from "axios";
import Invoice from "components/invoice/Invoice";
import Loading from "components/Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewPdfInvoice = (props) => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const [invoice, setInvoice] = useState();

  const getInvoice = async () => {
    // Make a GET request
    let res = await Axios.get(`/api/invoices/${id}`);
    let { data } = res;
    setInvoice(data);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getInvoice();
  }, []);

  console.log("invoice: ",invoice)


  if (!invoice) {
    return <Loading />;
  }
  return (
    <PDFViewer width="100%" height="800">
      <Invoice data={invoice} />
    </PDFViewer>
  );
};

export default ViewPdfInvoice;
