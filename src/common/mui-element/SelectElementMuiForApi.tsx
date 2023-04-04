import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import { InterfaceGlobalSelectType } from "../../types/interfaseGlobal/interfaseGlobalSelect";

interface SelectElementMuiForApiType {
  placeholder: string;
  value?: InterfaceGlobalSelectType | any;
  options: InterfaceGlobalSelectType[];
  onChange: (e: any) => void;
  isMulti?: boolean;
  errors?: any;
  ItemRef: any;
  required?: boolean;
}
export const SelectElementMuiForApi = ({
  placeholder,
  value,
  options,
  isMulti = false,
  onChange,
  errors,
  ItemRef,
  required = false,
  ...props
}: SelectElementMuiForApiType) => {
  const [valueSelect, setValueSelect] = useState<InterfaceGlobalSelectType>(
    !!value?.id && value
  );

  const reSelectCity = (data: InterfaceGlobalSelectType) => {
    setValueSelect((prev) => data);
  };

  useEffect(() => {
    onChange(valueSelect);
  }, [valueSelect]);

  return (
    <FormControl
      error={errors}
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
        sx={{ color: "#1A1C18 !important" }}
      >
        {placeholder}
      </InputLabel>

      <Select
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        error={errors}
        value={value?.name}
        //onChange={(e) => {
        // return onChange(i);
        //}}
        input={<OutlinedInput label={placeholder} />}
        fullWidth
        MenuProps={{
          sx: {
            ".MuiList-root li": {
              height: "37px !important",
              fontWeight: "700  !important",
              fontSize: "14px",
              color: "#242424 ",
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
            color: "#1A1C18",
            padding: "0 14px",
            fontFamily: `Mulish_Regular, sans-serif !important`,
            fontSize: "16px !important",
            fontWeight: "600 !important",
          },

          fieldset: {
            border: "1px solid #C6D1B8 !important",
            borderRadius: "8px",
          },
        }}
        {...props}
      >
        {options?.map((x: any) => (
          <MenuItem
            onClick={() => reSelectCity({ id: x.id, name: x.name })}
            key={x.id}
            value={x.name}
          >
            {x.name}
          </MenuItem>
        ))}
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
