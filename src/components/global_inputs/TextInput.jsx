import { Box, InputBase, TextField } from "@mui/material";
import React from "react";
import theme from "../../theme";
import { CloudDone } from "@mui/icons-material";
const TextInput = ({ field, form: { toched, errors }, ...props }) => {
  console.log(field)
  return (
    <>
      <InputBase
        placeholder={props.placeholder}
        fullWidth
        type={props.type}
        {...field}
        sx={theme.spacing(5, 12)}
      />
      {errors[field.name] && [field.name] ? (
        <span>{errors[field.name]}</span>
      ) : null}
    </>
  );
};

export default TextInput;
