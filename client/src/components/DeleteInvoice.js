import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

export default function DeleteInvoice({ invoice, refresh, className }) {
  const [open, setOpen] = React.useState(false);

  const deleteInvoice = async () => {
    // Make a DELETE request
    await Axios.delete(`/api/invoices/${invoice._id}`);
    // let { data } = res;
    // setInvoices(data);
    setOpen(false);
    refresh();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Tooltip title="Delete invoice">
        <IconButton aria-label="delete invoice" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure to delete this invoice ${invoice.invoice.title}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Is not possible to recover this data once deleted!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Disagree
          </Button>
          <Button onClick={deleteInvoice} color="secondary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
