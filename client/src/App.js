import React from "react";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "invoice/Invoice";
import { template } from "data/template";
import SearchInvoice from "pages/SearchInvoice";
import "fontsource-roboto-slab";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewInvoice from "./pages/NewInvoice";

function App() {
  return (
    // <PDFViewer width="100%" height="800">
    //   <Invoice pdfMode={true} data={template}/>
    // </PDFViewer>
    <Router>
      <Switch>
        <Route path="/newInvoice">
          <NewInvoice />
        </Route>
        <Route path="/">
          <SearchInvoice />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
