import { ChangeEvent, ReactNode } from "react";
import { TextField } from "@mui/material";
import {
 handlePhoneInput,
 handlePhoneKeyDown,
 handlePhonePaste,
} from "./maskPhone";
import { stylePhoneSX } from "./stylePhoneSX";

interface TextFieldPhoneElementMuiType {
 type?: string;
 multiline?: boolean;
 required?: boolean;
 helperText?: string;
 errors?: any;
 inputValue?: string;
 children?: ReactNode;
 placeholder: string;
 onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
 ItemRef?: any;
 onClick?: () => void;
}

export default function TextFieldPhoneElementMui({
 children,
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
}: TextFieldPhoneElementMuiType) {
 return (
  <TextField
   helperText={errors && errors.message}
   multiline={multiline}
   maxRows={4}
   error={errors}
   type="number"
   value={inputValue}
   onInput={handlePhoneInput}
   onKeyDown={handlePhoneKeyDown}
   onPaste={handlePhonePaste}
   sx={stylePhoneSX.input}
   fullWidth
   label={placeholder}
   autoComplete="off"
   // placeholder={placeholder}
   variant="outlined"
   required={required}
   onChange={onChange}
   onClick={onClick}
   {...props}
  />
 );
}

//const handleInput = (
//  e: React.ChangeEvent<HTMLInputElement>
// ) => {
//  if (type === "phone") {
//   console.log(e.target.dataset.phoneClear);
//   let el = e.target,
//    clearVal = el.dataset.phoneClear,
//    pattern = el.dataset.phonePattern,
//    matrix_def = "+7(___) ___-__-__",
//    matrix = pattern ? pattern : matrix_def,
//    i = 0,
//    def = matrix.replace(/\D/g, ""),
//    val = e.target.value.replace(/\D/g, "");

//   if (clearVal !== "false" && e.type === "blur") {
//    //@ts-ignore
//    if (val.length < matrix.match(/([\_\d])/g).length) {
//     e.target.value = "";
//     return;
//    }
//   }
//   if (def.length >= val.length) val = def;
//   e.target.value = matrix.replace(/./g, function (a) {
//    return /[_\d]/.test(a) && i < val.length
//     ? val.charAt(i++)
//     : i >= val.length
//     ? ""
//     : a;
//   });
//   //@ts-ignore
//   for (let elem of inpRef) {
//    for (let ev of ["input", "blur", "focus"]) {
//     elem.addEventListener(ev, handleInput);
//    }
//   }
//  }
// };
