import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InvoiceTable from "pages/InvoiceTable";
import Typography from "@material-ui/core/Typography";
import { Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const sections = [
  { title: "Home", url: "#" },
  { title: "Invoices", url: "#" },
  { title: "New Invoice", url: "#" },
];

export default function Searchinvoice() {
  const classes = useStyles();
  const history = useHistory();

  const createNewInvoice = () => {
    history.push("/newInvoice");
  };

  return (
    <React.Fragment>
      <Typography variant="h1">Search your invoice</Typography>
      <InvoiceTable />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={createNewInvoice}
      >
        Add Invoice
      </Button>
    </React.Fragment>
  );
}
