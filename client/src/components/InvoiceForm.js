import React from "react";
import Grid from "@material-ui/core/Grid";
import { template } from "data/template";
import { Button, makeStyles } from "@material-ui/core";
import useFormFields from "hooks/FormHooks";
import TextInput from "./form/TextInput";
import CompanyInput from "./form/CompanyInput";
import TableHeader from "./form/TableHeader";
import TableRow from "./form/TableRow";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  invoice: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  header: {
    backgroundColor: "grey",
    color: "white",
  },
}));

export default function InvoiceForm({ data }) {
  const edit = !!data;
  const invoice = data ? { ...data } : { ...template };
  const classes = useStyles();
  const history = useHistory();

  const { formFields, createChangeHandler } = useFormFields(invoice);

  const addRow = () => {
    const newRow = {
      number: formFields.productRows.length + 1,
    };
    createChangeHandler(`productRows[${formFields.productRows.length}]`)({
      target: { value: newRow },
    });
  };

  const removeRow = (idx) => {
    const newRow = [...formFields.productRows];
    newRow.splice(idx, 1);
    createChangeHandler("productRows")({
      target: { value: newRow },
    });
  };

  const submit = async () => {
    if (edit) {
      // submit edited invoice
      await Axios.put(`/api/invoices/${invoice._id}`, formFields)
        .then(function (response) {
          console.log(response);
          history.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // submit a new invoice
      await Axios.post("/api/invoices", formFields)
        .then(function (response) {
          console.log(response);
          history.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const cancel = () => {
    console.log("Cancel");
    history.push("/");
  };

  return (
    <React.Fragment>
      <form>
        <Grid container spacing={2}>
          <Grid container xs={12} sm={6} alignContent="flex-start">
            <CompanyInput
              name="company"
              formFields={formFields}
              createChangeHandler={createChangeHandler}
            />
          </Grid>

          <Grid container item xs={12} sm={6}>
            <Grid container className={classes.invoice}>
              <Grid item xs={6}>
                <TextInput
                  name="invoice.title"
                  label={invoice.invoice.titleLabel}
                  value={formFields.invoice.title}
                  onChange={createChangeHandler("invoice.title")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextInput
                  name="invoice.date"
                  label={invoice.invoice.dateLabel}
                  value={formFields.invoice.date}
                  onChange={createChangeHandler("invoice.date")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextInput
                  name="invoice.location"
                  label={invoice.invoice.locationLabel}
                  value={formFields.invoice.location}
                  onChange={createChangeHandler("invoice.location")}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} alignContent="flex-start">
              <CompanyInput
                name="client"
                formFields={formFields}
                createChangeHandler={createChangeHandler}
              />
            </Grid>
          </Grid>

          <TableHeader className={classes.header} />
          {formFields.productRows.map((row, idx) => (
            <TableRow
              key={idx}
              index={idx}
              name={`productRows[${idx}]`}
              formFields={formFields.productRows[idx]}
              createChangeHandler={createChangeHandler}
              removeRow={removeRow}
            />
          ))}

          <Grid item sm={12} container>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={addRow}
            >
              Add
            </Button>
          </Grid>

          <Grid item sm={12} container justify="flex-end">
            <Grid item container justify="flex-end" sm={5}>
              <Grid item sm={12}>
                Subtotal
              </Grid>
              <Grid item sm={12}>
                Vat
              </Grid>
              <Grid item sm={12}>
                Total Vat included
              </Grid>
              <Grid item sm={12}>
                Currency
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            Bank account
            <Grid item xs={12}>
              accountholder
            </Grid>
            <Grid item xs={12}>
              name
            </Grid>
            <Grid item sm={12}>
              iban
            </Grid>
            <Grid item sm={12}>
              bic
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              Note
            </Grid>
            <Grid container item xs={12} justify="center">
              description
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item sm={2}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={submit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item sm={2}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={cancel}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
  // return (
  //   <React.Fragment>
  //     <form onSubmit={handleSubmit}>
  //       <Grid container spacing={1}>
  //         <Grid item xs={12} sm={6}>
  //           {/* Company */}
  //           <TextField
  //             required
  //             id="company.name"
  //             name="company.name"
  //             label="Company name"
  //             fullWidth
  //             autoComplete="given-name"
  //             value={formFields.company.name}
  //             onChange={createChangeHandler("company.name")}
  //           />
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           {/* Invoice data */}
  //           <TextField
  //             required
  //             id="company.address3"
  //             name="company.address3"
  //             label="Company address3"
  //             fullWidth
  //             autoComplete="company.address3"
  //             value={formFields.company.address}
  //             onChange={createChangeHandler("company.address")}
  //           />
  //         </Grid>
  //         <Grid item xs={12}>
  //           <TextField
  //             required
  //             id="company.address"
  //             name="company.address"
  //             label="Company address"
  //             fullWidth
  //             autoComplete="company.address"
  //           />
  //         </Grid>
  //         <Grid item xs={12}>
  //           <TextField
  //             required
  //             id="company.address2"
  //             name="company.address2"
  //             label="Company address 2"
  //             fullWidth
  //             autoComplete="company.address2"
  //           />
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <TextField
  //             required
  //             id="company.country"
  //             name="company.country"
  //             label="Company country"
  //             fullWidth
  //             autoComplete="company.country"
  //           />
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <TextField
  //             id="state"
  //             name="state"
  //             label="State/Province/Region"
  //             fullWidth
  //           />
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <TextField
  //             required
  //             id="zip"
  //             name="zip"
  //             label="Zip / Postal code"
  //             fullWidth
  //             autoComplete="shipping postal-code"
  //           />
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <TextField
  //             required
  //             id="country"
  //             name="country"
  //             label="Country"
  //             fullWidth
  //             autoComplete="shipping country"
  //           />
  //         </Grid>
  //         <Grid item xs={12}>
  //           <FormControlLabel
  //             control={
  //               <Checkbox color="secondary" name="saveAddress" value="yes" />
  //             }
  //             label="Use this address for payment details"
  //           />
  //         </Grid>
  //       </Grid>
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         type="submit"
  //         className={classes.button}
  //       >
  //         Submit
  //       </Button>
  //     </form>
  //   </React.Fragment>
  // );
}
