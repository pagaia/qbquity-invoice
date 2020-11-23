import { Fragment } from "react";

const { Grid } = require("@material-ui/core");
const { default: TextInput } = require("./TextInput");

const CompanyInput = ({ name, formFields, createChangeHandler }) => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <TextInput
          name={`${name}.name`}
          label="Company name"
          value={formFields[name].name}
          onChange={createChangeHandler(`${name}.name`)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          name={`${name}.address`}
          label="Company address"
          value={formFields[name].address}
          onChange={createChangeHandler(`${name}.address`)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          name={`${name}.address2`}
          label="Company address2"
          value={formFields[name].address2}
          onChange={createChangeHandler(`${name}.address2`)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          name={`${name}.country`}
          label="Company country"
          value={formFields[name].country}
          onChange={createChangeHandler(`${name}.country`)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          name={`${name}.vat`}
          label="Company vat"
          value={formFields[name].vat}
          onChange={createChangeHandler(`${name}.vat`)}
        />
      </Grid>
    </Fragment>
  );
};

export default CompanyInput;
