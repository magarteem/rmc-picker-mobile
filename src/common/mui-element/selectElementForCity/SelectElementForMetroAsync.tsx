import {
 Autocomplete,
 CircularProgress,
 TextField,
} from "@mui/material";
import React, {
 ChangeEvent,
 useEffect,
 useState,
} from "react";
import { useGetMetroForCityMutation } from "../../../api/getDataForForm/getCityQuery";
import { InterfaceGlobalSelectTypeCity } from "../../../modules/user/types/userSliceType";

import { MetroGlobalType } from "../../../types/PROFILE/metroGlobalType";
import { styleTextFieldSX } from "./styleTextFieldSX";

//const reselect = (data: CityGlobalType) => {
// const dataResult = data.results.map(
//  (x: CityResultsType) => {
//   return {
//    id: x.id,
//    name: x.title,
//    metros: x.metros.length !== 0 ? x.metros : null,
//   };
//  }
// );

// return dataResult;
//};

interface SelectElementForMetroAsyncType {
 required?: boolean;
 helperText?: string;
 errors?: any;
 inputValue?: MetroGlobalType;
 placeholder: string;
 options: MetroGlobalType[] | null;
 cityValue: InterfaceGlobalSelectTypeCity | null;
 onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectElementForMetroAsync({
 required = false,
 helperText = "",
 errors,
 inputValue,
 placeholder,
 onChange,
 options,
 cityValue,
 ...props
}: SelectElementForMetroAsyncType) {
 const [searchOptions, setSearchOptions] =
  useState<MetroGlobalType[]>();

 const [open, setOpen] = useState(false);
 const [optionsObj, setOptions] = useState<
  MetroGlobalType[]
 >(options ? options : []);

 const [getMetroForThisCity, { data, isLoading }] =
  useGetMetroForCityMutation();

 const loading = open && optionsObj.length === 0;

 useEffect(() => {
  if (!!inputValue) {
   !!cityValue?.name &&
    getMetroForThisCity(cityValue?.name);
  }
 }, []);

 useEffect(() => {
  if (!isLoading) {
   const m = data?.results.filter((x) => {
    return x?.id === cityValue?.id;
   });

   !!m && setSearchOptions(m[0].metros);
  }
 }, [data]);

 useEffect(() => {
  options && setOptions([...optionsObj, ...options]);
 }, [options]);

 useEffect(() => {
  let active = true;

  if (!loading) return undefined;

  (async () => {
   if (active) {
    options && setOptions(options);
   }
  })();

  return () => {
   active = false;
  };
 }, [loading]);

 useEffect(() => {
  if (!open) setOptions([]);
 }, [open]);

 const asyncFu = async (str: string) => {
  setOptions([]);
 };

 return (
  <Autocomplete
   onChange={(e, data: any) => {
    return onChange(data);
   }}
   fullWidth
   id="asynchronous-demo"
   // open={open}
   onOpen={() => {
    setOpen(true);
   }}
   onClose={() => {
    setOpen(false);
   }}
   value={!!inputValue ? inputValue : null}
   isOptionEqualToValue={(option, value) =>
    option.id === value.id
   }
   getOptionLabel={(option) =>
    option.title ? option.title : ""
   }
   options={
    !!inputValue && !!searchOptions
     ? searchOptions
     : optionsObj
   }
   // options={options}
   loading={loading}
   renderInput={(params) => (
    <TextField
     onChange={(e) => asyncFu(e.currentTarget.value)}
     helperText={errors && errors.message}
     required={required}
     error={errors}
     sx={styleTextFieldSX.input}
     label={placeholder}
     {...params}
     InputProps={{
      ...params.InputProps,
      endAdornment: (
       <React.Fragment>
        {loading ? (
         <CircularProgress color="inherit" size={20} />
        ) : null}
        {params.InputProps.endAdornment}
       </React.Fragment>
      ),
     }}
    />
   )}
   {...props}
  />
 );
}
