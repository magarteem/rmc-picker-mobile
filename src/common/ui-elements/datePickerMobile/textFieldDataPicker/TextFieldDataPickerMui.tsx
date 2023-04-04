import React, { ChangeEvent, ReactNode } from "react";
import { TextField } from "@mui/material";
import { styleTextFieldSX } from "./styleTextFieldSX";
import dayjs from "dayjs";

interface TextFieldDataPickerMuiType {
 type?: string;
 multiline?: boolean;
 required?: boolean;
 helperText?: string;
 errors?: any;
 inputValue?: string | any;
 children?: ReactNode;
 placeholder: string;
 ItemRef?: any;
 disabled?: boolean;
 InputLabelProps?: {};
 onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
 onClick?: () => void;
}

export default function TextFieldDataPickerMui({
 children,
 type = "text",
 multiline = false,
 required = false,
 helperText = "",
 errors,
 inputValue,
 placeholder,
 ItemRef,
 disabled,
 onChange,
 onClick,
 InputLabelProps,
 ...props
}: TextFieldDataPickerMuiType) {
 return (
  <TextField
   InputLabelProps={InputLabelProps}
   disabled={disabled}
   helperText={errors && errors.message}
   multiline={multiline}
   maxRows={4}
   error={errors}
   type={type}
   value={inputValue}
   sx={styleTextFieldSX.input}
   fullWidth
   label={placeholder}
   autoComplete="off"
   variant="outlined"
   required={required}
   onChange={onChange}
   onClick={onClick}
   {...props}
  />
 );
}
