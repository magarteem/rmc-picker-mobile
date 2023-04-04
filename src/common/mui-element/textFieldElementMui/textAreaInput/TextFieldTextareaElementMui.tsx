import { TextField } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";
import { styleTextAreaSX } from "./styleTextAreaSX";

interface TextFieldTextareaElementMuiType {
 type?: string;
 multiline?: boolean;
 required?: boolean;
 helperText?: string;
 errors?: any;
 inputValue?: string | any;
 children?: ReactNode;
 placeholder: string;
 onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
 ItemRef?: any;
 onClick?: () => void;
}

export default function TextFieldTextareaElementMui({
 children,
 type = "text",
 multiline = false,
 required = false,
 helperText = "",
 errors,
 inputValue,
 placeholder,
 ItemRef,
 onChange,
 onClick,
 ...props
}: TextFieldTextareaElementMuiType) {
 return (
  <TextField
   helperText={helperText}
   multiline={multiline}
   maxRows={4}
   error={errors}
   type={type}
   value={inputValue}
   sx={styleTextAreaSX.input}
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
