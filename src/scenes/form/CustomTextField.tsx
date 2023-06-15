import { TextField } from "@mui/material";
import React from "react";

interface CustomTextFieldProps {
  label: string;
  name: string;
  values: any;
  touched: any;
  errors: any;
  handleBlur: (args: any) => void;
  handleChange: (args: any) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  return (
    <TextField
      fullWidth
      variant="filled"
      type="text"
      label={label}
      onBlur={handleBlur}
      onChange={handleChange}
      value={values}
      name={name}
      error={!!touched && !!errors}
      helperText={touched && errors}
      sx={{ gridColumn: "span 2" }}
    />
  );
};

export default CustomTextField;
