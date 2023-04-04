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
import { useGetCityDataAsyncQuery } from "../../../api/getDataForForm/getCityQuery";
import { InterfaceGlobalSelectTypeCity } from "../../../modules/user/types/userSliceType";
import {
 CityResultsType,
 CityGlobalType,
} from "../../../types/PROFILE/cityGlobalType";
import { styleTextFieldSX } from "./styleTextFieldSX";

const reselect = (data: CityGlobalType) => {
 const dataResult = data.results.map(
  (x: CityResultsType) => {
   return {
    id: x.id,
    name: x.title,
    metros: x.metros?.length !== 0 ? x.metros : null,
   };
  }
 );

 return dataResult;
};

interface SelectElementForCityAsyncType {
 required?: boolean;
 helperText?: string;
 errors?: any;
 inputValue?: InterfaceGlobalSelectTypeCity;
 placeholder: string;
 onChange: (e: ChangeEvent<HTMLInputElement>) => void;
 setValue?: any;
}

export default function SelectElementForCityAsync({
 required = true,
 helperText = "",
 errors,
 inputValue,
 placeholder,
 onChange,
 setValue,
 ...props
}: SelectElementForCityAsyncType) {
 const [page, setPage] = useState(0);
 const [query, setQuery] = useState("");

 const { data } = useGetCityDataAsyncQuery({
  page,
  query,
 });

 useEffect(() => {
  data && setOptions([...options, ...reselect(data)]);
 }, [data]);

 const [open, setOpen] = useState(false);
 const [options, setOptions] = useState<
  InterfaceGlobalSelectTypeCity[]
 >(data ? reselect(data) : []);

 const loading = open && options.length === 0;

 useEffect(() => {
  let active = true;

  if (!loading) return undefined;

  (async () => {
   if (active) {
    data && setOptions(reselect(data));
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
  setPage(0);
  setQuery(str);
 };

 return (
  <Autocomplete
   onChange={(e, data: any) => {
    setValue("metroId", null);
    return onChange(data);
   }}
   fullWidth
   id="asynchronous-demo"
   open={open}
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
    option.name ? option.name : ""
   }
   options={options}
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
