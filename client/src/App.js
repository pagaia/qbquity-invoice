import React from "react";
import "./App.css";
import SearchInvoice from "pages/SearchInvoice";
import "fontsource-roboto-slab";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewInvoice from "./pages/NewInvoice";
import ViewPdfInvoice from "pages/ViewPdfInvoice";
import { Container, CssBaseline } from "@material-ui/core";
import Header from "components/Header";
import Footer from "components/Footer";
import EditInvoice from "pages/EditInvoice";

const sections = [
  { title: "Home", url: "/" },
  { title: "Invoices", url: "/invoices" },
  { title: "New Invoice", url: "/newInvoice" },
];

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="QBvoice" sections={sections} />
        <main>
          <Switch>
            <Route path="/invoice/view/pdf/:id">
              <ViewPdfInvoice />
            </Route>
            <Route path="/invoice/edit/:id">
              <EditInvoice />
            </Route>
            <Route path="/newInvoice">
              <NewInvoice />
            </Route>
            <Route path="/">
              <SearchInvoice />
            </Route>
          </Switch>
        </main>
      </Container>
      <Footer title="QBvoice" description="Your invoice, always with you!" />
    </Router>
  );
}

export default App;
