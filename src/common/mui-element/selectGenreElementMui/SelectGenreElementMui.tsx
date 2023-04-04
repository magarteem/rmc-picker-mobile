import {
 Checkbox,
 Chip,
 FormControl,
 FormHelperText,
 InputLabel,
 ListItemText,
 MenuItem,
 OutlinedInput,
 Select,
 SelectChangeEvent,
 Stack,
} from "@mui/material";
import { ReactComponent as ClearIcon } from "../../../assets/icons/clearIcon.svg";
import { useEffect, useState } from "react";
import { GenreType } from "../../../modules/authorization/types/authType";
import { styleSxGenre } from "./styleSxGenre";
import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import { InstrumentGlobalType } from "../../../types/PROFILE/InstrumentGlobalType";

interface SelectGenreElementMuiType {
 placeholder: string;
 value: GenreType[];
 options:
  | InterfaceGlobalSelectType[]
  | InstrumentGlobalType[]
  | any;
 onChange: (personName: any) => void;
 isMulti?: boolean;
 errors?: any;
 ItemRef: any;
 required?: boolean;
}

export const SelectGenreElementMui = ({
 placeholder,
 value,
 options,
 isMulti = false,
 onChange,
 errors,
 ItemRef,
 required = false,
 ...props
}: SelectGenreElementMuiType) => {
 const [personName, setPersonName] = useState<string[]>(
  value.map((x) => x.name)
 );

 const handleChange = (
  event: SelectChangeEvent<typeof personName>
 ) => {
  const {
   target: { value },
  } = event;
  setPersonName(
   typeof value === "string" ? value.split(",") : value
  );
 };

 const handleDelete = (e: any, value: any) => {
  setPersonName(personName.filter((x) => x !== value));
 };

 useEffect(() => {
  //@ts-ignore
  let u = options.filter((x) => {
   return personName.includes(x.name);
  });

  onChange(u);
 }, [personName]);

 useEffect(() => {
  !!!value.length &&
   !!personName.length &&
   setPersonName([]);
 }, [value]);

 return (
  <FormControl
   fullWidth
   sx={styleSxGenre.formcontrol}
   error={errors}
  >
   <InputLabel
    required={required}
    id="demo-multiple-checkbox-label"
    sx={{ color: "#1A1C18 !important" }}
   >
    {placeholder}
   </InputLabel>
   <Select
    fullWidth
    labelId="demo-multiple-checkbox-label"
    id="demo-multiple-checkbox"
    multiple
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput label={placeholder} />}
    MenuProps={{
     sx: styleSxGenre.menuProps,
    }}
    sx={styleSxGenre.select}
    renderValue={(selected) => {
     return (
      <Stack
       direction="row"
       spacing={1}
       sx={styleSxGenre.stack}
      >
       {selected.map((values: any) => {
        //@ts-ignore
        let colorsChips = options.filter(
         (color: any) => color.name === values
        );

        return (
         <Chip
          deleteIcon={
           <span
            onMouseDown={(event) => {
             event.stopPropagation();
            }}
           >
            <ClearIcon />
           </span>
          }
          onDelete={(e) => handleDelete(e, values)}
          key={values}
          label={values}
          sx={
           colorsChips[0]?.color
            ? {
               display: "flex !important",
               alignItems: "center !important",
               background: colorsChips[0].color,
               boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
               borderRadius: " 30px",
               color: "white !important",

               fontSize: "14px",
               margin: "0 !important",

               "& .MuiChip-deleteIcon": {
                display: "flex",
                alignItems: "center",
                height: "10px !important",
                svg: {
                 width: "14px",
                 stroke: "#fff",
                 path: {
                  fill: "#fff",
                 },
                },
               },
               "& .MuiChip-label": {
                padding: "3px 8px !important",
                "@media (max-width: 400px)": {
                 padding: "0 6px !important",
                },
               },
              }
            : styleSxGenre.chip
          }
         />
        );
       })}
      </Stack>
     );
    }}
    {...props}
   >
    {options.map((x: any) => {
     return (
      <MenuItem key={x.name} value={x.name}>
       <Checkbox
        style={{ width: "15px", height: "15px" }}
        sx={styleSxGenre.checkbox}
        checked={personName.indexOf(x.name) > -1}
       />
       <ListItemText primary={x.name} />
      </MenuItem>
     );
    })}
   </Select>
   {errors && (
    <FormHelperText error={errors} sx={styleSxGenre.helper}>
     {errors.message}
    </FormHelperText>
   )}
  </FormControl>
 );
};
