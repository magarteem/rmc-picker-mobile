import arrowSelect from "../../assets/icons/arrowSelect.webp";
import {
 Avatar,
 Checkbox,
 Chip,
 FormControl,
 FormHelperText,
 InputLabel,
 ListItemText,
 ListSubheader,
 MenuItem,
 OutlinedInput,
 Select,
} from "@mui/material";
import s from "./optionCustom.module.scss";
import cn from "classnames";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { isClassExpression } from "typescript";
import { InstrumentGlobalType } from "../../types/PROFILE/InstrumentGlobalType";

interface CustomReactSelectToolsMuiType {
 placeholder: string;
 value?: any;
 options: InstrumentGlobalType[];
 onChange: () => void;
 errors: any;
 ItemRef: any;
 required?: boolean;
}

export const CustomReactSelectToolsMui = ({
 placeholder,
 value,
 options,
 onChange,
 errors,
 ItemRef,
 required = false,
 ...props
}: CustomReactSelectToolsMuiType) => {
 const [selectedChips, setSelectedChips] = useState(value);
 const [classesHiddenCount, setClassesHiddenCount] =
  useState(0);

 useEffect(() => {
  setSelectedChips(value);
 }, [value]);

 return (
  <FormControl
   fullWidth
   sx={{
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
   error={errors}
  >
   <InputLabel
    required={required}
    id="demo-multiple-checkbox-label"
    sx={{
     color: "#1A1C18 !important",
    }}
   >
    {placeholder}
   </InputLabel>
   <Select
    fullWidth
    labelId="demo-multiple-checkbox-label"
    id="demo-multiple-checkbox"
    multiple
    value={value && selectedChips}
    onChange={onChange}
    input={<OutlinedInput label={placeholder} />}
    MenuProps={{
     sx: {
      "& .MuiPaper-root": {
       padding: "10px 16px !important",
      },

      ".MuiList-root li": {
       height: "37px !important",
       padding: "0 14px",
       minHeight: "auto !important",

       "&.Mui-selected": {
        background: "#4dd64d2e",
       },

       "& .MuiListItemText-root .MuiTypography-root": {
        lineHeight: "1 !important",
        fontSize: "14px",
        color: "#242424 ",
        fontFamily: `Mulish_Regular, sans-serif !important`,
       },
      },
     },
    }}
    sx={{
     minHeight: "48px !important",
     borderRadius: "8px",

     "& .MuiSvgIcon-root": {
      color: "#000000",
     },

     "& .MuiSelect-select": {
      height: "100% !important",
      padding: "8px 24px 8px 14px !important",

      "&  div": {
       display: "flew",
       flexWrap: "wrap",
       gap: "4px",
      },
     },

     "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      color: "red !important",
      border: "1px solid red !important",
     },

     fieldset: {
      border: "1px solid #C6D1B8 !important",
      borderRadius: "8px",
     },

     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #C6D1B8",
     },
    }}
    renderValue={(selected) => {
     setSelectedChips(selected);
     return (
      <Stack direction="row" spacing={1}>
       {selectedChips.map((values: any) => {
        let iconTools = options.map((op: any) => {
         const temp = op.options.find(
          (x: any) => x.name === values
         );
         return temp;
        });

        return (
         <Chip
          key={values}
          label={values}
          avatar={
           <img
            alt="values"
            src={
             iconTools.filter((y) => y !== undefined)[0]
              .icon
            }
           />
          }
          sx={{
           display: "flex",
           alignItems: "center",
           background:
            " linear-gradient(0deg, rgba(43, 108, 0, 0.08), rgba(43, 108, 0, 0.08)), #FDFDF5",
           border: " 1px solid #66784E",
           borderRadius: " 30px",
           fontSize: "14px",
           margin: "0 !important",
           color: "#1A1C18",
           "& .MuiChip-deleteIcon": {
            height: "10px !important",
           },
           "& .MuiChip-avatar": {
            height: "18px !important",
           },
           "& .MuiChip-label": {
            padding: "8px !important",
           },
          }}
         />
        );
       })}
      </Stack>
     );
    }}
    {...props}
   >
    {/*  */}
    {options.map((x: any, index: any) => {
     let t = 0;
     return x.options.map((p: any) => {
      if (t === 0) {
       t++;
       return (
        <div
         className={s.openMenu}
         onClick={() => setClassesHiddenCount(index)}
        >
         <img
          className={cn({
           [s.iconArrow]: index !== classesHiddenCount,
          })}
          src={arrowSelect}
          alt="arrow"
          style={{ marginRight: "10px" }}
         />
         <ListItemText
          sx={{
           "& .MuiTypography-root": {
            fontWeight: 600,
           },
          }}
          primary={x.name}
         />
        </div>
       );
      } else {
       let iconTools = options.map((op: any) => {
        const temp = op.options.find(
         (x: any) => x.name === p.name
        );
        return temp;
       });

       // console.log("====");
       // console.log(selectedChips.indexOf(p.name));

       // let t = selectedChips.map((x: any) => x);
       // console.table(value.value[0] === p.name);
       // console.table(t);
       // console.table(t.name);

       // console.log("====");
       return (
        <MenuItem
         className={cn({
          [s.optionCustom]: index !== classesHiddenCount,
         })}
         sx={{
          img: {
           padding: "0 5px 0 10px ",
          },
         }}
         key={p.name}
         value={p.name}
        >
         <Checkbox
          style={{ width: "15px", height: "15px" }}
          sx={{
           padding: "0",
           "& .MuiSvgIcon-root": {
            width: "20px !important",
            height: "20px !important",
            borderRadius: "20px !important",
            color: "#727471",
           },

           "&.Mui-checked": {
            svg: {
             color: "#FF5A13",
            },
           },
          }}
          checked={selectedChips.indexOf(p.name) > -1}
         />
         <img
          alt="values"
          src={
           iconTools.filter((y) => y !== undefined)[0].icon
          }
         />
         <ListItemText primary={p.name} />
        </MenuItem>
       );
      }
     });
    })}
   </Select>
   {errors && (
    <FormHelperText
     error={errors}
     sx={{
      position: "absolute",
      bottom: "-18px",
      color: "#ff0000 !important",
     }}
    >
     {errors.message}
    </FormHelperText>
   )}
  </FormControl>
 );
};
