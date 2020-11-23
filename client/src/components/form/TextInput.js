import { TextField as TextFieldUi } from "@material-ui/core";
import React from "react";

const TextInput = ({ name, label, value, onChange, ...rest }) => (
  <TextFieldUi
    required
    id={name}
    name={name}
    label={label}
    fullWidth
    autoComplete={`given-${name}`}
    value={value}
    onChange={onChange}
    {...rest}
  />
);
export default TextInput;
