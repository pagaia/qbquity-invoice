import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "components/Header";
import Footer from "components/Footer";
import InvoiceTable from "pages/InvoiceTable";
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Home", url: "#" },
  { title: "Invoices", url: "#" },
  { title: "New Invoice", url: "#" },
];

export default function Searchinvoice() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="QBQUITY - invoice" sections={sections} />
        <main>
          <Typography variant="h1">Search your invoice</Typography>
          <InvoiceTable />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
