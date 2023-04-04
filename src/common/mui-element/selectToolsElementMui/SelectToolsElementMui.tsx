import arrowSelect from "../../../assets/icons/arrowSelect.webp";
import { ReactComponent as ClearIcon } from "../../../assets/icons/clearIcon.svg";
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
} from "@mui/material";
import s from "../optionCustom.module.scss";
import cn from "classnames";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { styleSxTool } from "./styleSxTool";
import { InstrumentGlobalType } from "../../../types/PROFILE/InstrumentGlobalType";
import exportIconsSVG from "../../../assets/icons/iconsTools/exportIconsSVG";

interface SelectToolsElementMuiType {
 placeholder: string;
 value?: any;
 options: InstrumentGlobalType[];
 onChange: (personName: any) => void;
 errors: any;
 ItemRef: any;
 required?: boolean;
}

export const SelectToolsElementMui = ({
 placeholder,
 value,
 options,
 onChange,
 errors,
 ItemRef,
 required = false,
 ...props
}: SelectToolsElementMuiType) => {
 const [classesHiddenCount, setClassesHiddenCount] = useState(1);
 const [personName, setPersonName] = useState<string[]>(value.map((x: any) => x.name));

 const handleChange = (event: SelectChangeEvent<typeof personName>) => {
  const {
   target: { value },
  } = event;
  setPersonName(typeof value === "string" ? value.split(",") : value);
 };

 const handleDelete = (e: any, value: any) => {
  setPersonName(personName.filter((x) => x !== value));
 };

 useEffect(() => {
  let i: any = [];

  options.forEach((x) => {
   const t = x.subInstruments.forEach((m) => {
    if (personName.includes(m.name)) {
     i.push(m);
    }
   });
   return t;
  });

  onChange(i);
 }, [onChange, options, personName]);

 useEffect(() => {
  !!!value.length && !!personName.length && setPersonName([]);
 }, [value]);

 return (
  <FormControl fullWidth sx={styleSxTool.formcontrol} error={errors}>
   <InputLabel required={required} id="demo-multiple-checkbox-label" sx={styleSxTool.inputLabel}>
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
    MenuProps={{ sx: styleSxTool.MenuProps }}
    sx={styleSxTool.select}
    renderValue={(selected) => {
     return (
      <Stack direction="row" spacing={1} sx={styleSxTool.stack}>
       {selected.map((values: any) => {
        let iconTools = options.map((op: any) => {
         const temp = op.subInstruments?.find((x: any) => x.name === values);
         return temp;
        });

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
          avatar={
           <img
            alt="icon"
            src={exportIconsSVG[iconTools.filter((y) => y !== undefined)[0]?.icon]}
            //src={
            // iconTools.filter((y) => y !== undefined)[0]
            //  ?.icon
            //}
           />
          }
          sx={styleSxTool.chip}
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
     return x.subInstruments.map((p: any) => {
      if (t === 0) {
       t++;
       return (
        <div
         className={s.openMenu}
         onTouchEnd={() => setClassesHiddenCount(index)}
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
         <ListItemText sx={styleSxTool.listItem} primary={x.name} />
        </div>
       );
      } else {
       let iconTools = options.map((op: any) => {
        const temp = op.subInstruments.find((x: any) => x.name === p.name);
        return temp;
       });

       return (
        <MenuItem
         className={cn({
          [s.optionCustom]: index !== classesHiddenCount,
         })}
         sx={styleSxTool.menuItem}
         key={p.name}
         value={p.name}
        >
         <Checkbox
          style={{ width: "15px", height: "15px" }}
          sx={styleSxTool.checkbox}
          checked={personName.indexOf(p.name) > -1}
         />
         <img
          alt="icon"
          src={
           exportIconsSVG[iconTools.filter((y) => y !== undefined)[0].icon]
           // iconTools.filter((y) => y !== undefined)[0].icon
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
    <FormHelperText error={errors} sx={styleSxTool.helper}>
     {errors.message}
    </FormHelperText>
   )}
  </FormControl>
 );
};
