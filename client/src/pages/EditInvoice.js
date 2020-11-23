import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InvoiceForm from "components/InvoiceForm";
import { Link as LinkRouter } from "react-router-dom";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "components/Loading";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      // width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  link: {
      marginRight: 10
  }
}));


export default function EditInvoice() {
  const classes = useStyles();
  const [invoice, setInvoice] = useState();
  let { id } = useParams();

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
    <React.Fragment>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <LinkRouter to="/" className={classes.link}>&lt; Go back</LinkRouter>
          <Typography variant="h6" color="inherit" noWrap>
            QBvoice - Edit Invoice 
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Edit invoice
          </Typography>
          <InvoiceForm data={invoice} />
        </Paper>
      </main>
    </React.Fragment>
  );
}
