import React from "react";
import Grid from "@material-ui/core/Grid";

const TableHeader = ({ className }) => {
  return (
    <Grid
      container
      item
      sm={12}
      justify="space-between"
      spacing={1}
      className={className}
    >
      <Grid item sm={1}>
        N.
      </Grid>
      <Grid item sm={5}>
        Description
      </Grid>
      <Grid item sm={1}>
        Unit
      </Grid>
      <Grid container item sm={1}>
        <Grid container item justify="flex-end" alignItems="flex-end">
          <Grid item>Quantity </Grid>
        </Grid>
      </Grid>
      <Grid container item sm={1}>
        Unit Price
      </Grid>
      <Grid container item sm={2}>
        <Grid container item justify="flex-end" alignItems="flex-end">
          <Grid item>Total </Grid>
        </Grid>
      </Grid>
      <Grid container item sm={1}>
        <Grid container item justify="flex-end" alignItems="flex-end">
          <Grid item>Action </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableHeader;
