import { Controller } from "react-hook-form";
import {
 FormControl,
 InputLabel,
 MenuItem,
 Select,
} from "@mui/material";
import s from "./selectTypeNews.module.scss";
import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";

interface SelectTypeNewsType {
 control: any;
 placeholder: string;
 name: string;
 required?: boolean;
 options: InterfaceGlobalSelectType[];
}

export const SelectTypeNews = ({
 control,
 placeholder,
 options,
 name,
 required,
}: SelectTypeNewsType) => {
 return (
  <Controller
   name={name}
   control={control}
   rules={{
    required: "Обязательное поле",
   }}
   render={({
    field: { onChange, value, ref, ...field },
    formState: { errors },
   }) => {
    return (
     <div className={s.wrapperBlockInput}>
      <FormControl
       fullWidth
       sx={{
        height: "100%",
        "& .MuiFormLabel-root": {
         lineHeight: "inherit",
         color: "#1A1C18",

         "& .MuiFormLabel-asterisk": {
          color: "red",
         },
        },
        "& .Mui-focused": {
         color: "#1A1C18 !important",
        },
       }}
      >
       <InputLabel
        required={required}
        id="demo-simple-select-error-label"
        sx={{
         transform: "translate(14px, 12px) scale(1)",
         color: "#1A1C18 !important",
         fontSize: "14px !important",

         "@media (max-width:400px)": {
          transform: "translate(14px, 17px) scale(1)",
         },

         "&.MuiInputLabel-shrink": {
          display: "none",
         },
        }}
       >
        {placeholder}
       </InputLabel>

       <Select
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        value={value?.name}
        onChange={onChange}
        MenuProps={{
         sx: {
          ".MuiList-root li": {
           height: "37px !important",
           fontWeight: "600  !important",
           fontSize: "14px",
           color: "#43483E ",
           fontFamily: `Mulish_Regular, sans-serif !important`,
           padding: "0 14px",
           minHeight: "auto !important",

           "& .MuiButtonBase-root": {
            minHeight: "auto !important",
           },
          },
         },
        }}
        sx={{
         height: "100%",
         color: "#1A1C18",
         borderRadius: "8px",

         "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          color: "red !important",
          border: "1px solid red !important",
         },

         "& .MuiSvgIcon-root": {
          color: "#000000",
         },

         "& .MuiSelect-select": {
          color: "#43483E",
          padding: "0 14px",
          fontFamily: `Mulish_Regular, sans-serif !important`,
          fontSize: "14px !important",
          display: "flex",
          alignItems: "center",
         },

         fieldset: {
          border: "1px solid #C6D1B8 !important",
          borderRadius: "8px",
         },
        }}
       >
        {options.map((x) => (
         <MenuItem key={x.id} value={x.id}>
          {x.name}
         </MenuItem>
        ))}
       </Select>
      </FormControl>
     </div>
    );
   }}
  />
 );
};
