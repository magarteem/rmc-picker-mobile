import React, { ChangeEvent, ReactNode } from "react";
import { TextField } from "@mui/material";
import { styleTextFieldSX } from "./styleTextFieldSX";

interface TextFieldElementMuiType {
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
 onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
 onClick?: () => void;
 onFocus?: () => void;
}

export default function TextFieldElementMui({
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
 onFocus,
 ...props
}: TextFieldElementMuiType) {
 return (
  <TextField
   onFocus={onFocus}
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
