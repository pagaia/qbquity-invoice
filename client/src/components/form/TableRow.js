import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextInput from "./TextInput";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  divider: {
    // margin: theme.spacing(1, 0),
    width: "100%",
  },
}));

const TableRow = ({
  className,
  name,
  formFields,
  createChangeHandler,
  index,
  removeRow,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid
        container
        item
        sm={12}
        justify="space-between"
        alignItems="center"
        spacing={1}
        className={className}
      >
        <Grid item sm={1}>
          <Typography fontWeight="fontWeightBold">{index + 1}</Typography>
        </Grid>
        <Grid item sm={5}>
          <TextInput
            name={`${name}.description`}
            value={formFields.description}
            onChange={createChangeHandler(`${name}.description`)}
            multiline
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item sm={1}>
          <TextInput
            name={`${name}.unit`}
            value={formFields.unit}
            onChange={createChangeHandler(`${name}.unit`)}
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid container item sm={1}>
          <Grid container item justify="flex-end">
            <Grid item>
              <TextInput
                name={`${name}.quantity`}
                value={formFields.quantity}
                onChange={createChangeHandler(`${name}.quantity`)}
                type="number"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item sm={1}>
          <Grid container item justify="flex-end">
            <Grid item>
              <TextInput
                name={`${name}.unitPrice`}
                value={formFields.unitPrice}
                onChange={createChangeHandler(`${name}.unitPrice`)}
                type="number"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item sm={2}>
          <Grid container item justify="flex-end">
            <Grid item>
              <Typography fontWeight="fontWeightBold">
                {formFields.quantity * formFields.unitPrice}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={1}>
          <Grid container item justify="flex-end">
            <Grid item>
              <Tooltip title="Delete product">
                <IconButton
                  aria-label="delete product"
                  onClick={() => removeRow(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Fragment>
  );
};

export default TableRow;
