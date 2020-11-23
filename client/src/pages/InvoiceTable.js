import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { calTotal } from "../utility/utilityFunctions";
import { useHistory } from "react-router-dom";
import DeleteInvoice from "components/DeleteInvoice";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  actionLink: {
    marginLeft: theme.spacing(1),
  },
}));

export default function ManagementInvoice() {
  const classes = useStyles();
  const [invoices, setInvoices] = useState([]);
  const history = useHistory();

  const getInvoiceList = async () => {
    // Make a GET request
    let res = await axios.get("/api/invoices");
    let { data } = res;
    setInvoices(data);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getInvoiceList();
  }, []);

  const viewInvoice = (url) => {
    history.push(url);
  };

  const editInvoice = (url) => {
    history.push(url);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Invoice table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.invoice.date}
              </TableCell>
              <TableCell align="right">{row.client.name}</TableCell>
              <TableCell align="right">
                {calTotal(row).total} {row.total.currency}
              </TableCell>
              <TableCell align="right">
                <Tooltip title="View invoice">
                  <IconButton
                    aria-label="view invoice"
                    onClick={() => viewInvoice(`/invoice/view/pdf/${row._id}`)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={`Edit invoice ${row.invoice.title}`}>
                  <IconButton
                    aria-label="Create new invoice"
                    onClick={() => editInvoice(`/invoice/edit/${row._id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <DeleteInvoice invoice={row} refresh={getInvoiceList} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
