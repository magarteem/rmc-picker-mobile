import { useState } from "react";
import { Controller } from "react-hook-form";
//import { calculateAge } from "../../../helpers/calculateAge";
import { DatePickerMobileTextFieldTEST } from "../ui-elements/datePickerMobile/DatePickerMobileTextFieldTEST";
import s from "./formFields.module.scss";

export interface ControllerAgeRangeType {
 control: any;
 watch: any;
 required?: boolean;
}

export const ControllerAgeRange = ({ control, watch, required = true }: ControllerAgeRangeType) => {
 const [valid, setValid] = useState<Date>(new Date());

 return (
  <div className={s.ageRange}>
   <div className={s.styleInput}>
    <Controller
     name="fromAge"
     control={control}
     rules={{
      required: required ? "Обязательное поле" : false,
     }}
     render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => (
      <div className={s.sizeInput}>
       <DatePickerMobileTextFieldTEST
        InputLabelProps={value && { shrink: true }}
        typePicker="age"
        customHeader={`От ${value || ""}`}
        placeholder="Возраст от"
        value={value}
        onChange={(date) => {
         setValid(new Date(date));
         return onChange(`${new Date(date).getFullYear()}`.slice(2, 4));
        }}
        errors={errors.fromAge}
        {...field}
       />
      </div>
     )}
    />
   </div>

   <div className={s.styleInput}>
    <Controller
     name="toAge"
     control={control}
     rules={{
      required: required ? "Обязательное поле" : false,
     }}
     render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => (
      <div className={s.sizeInput}>
       <DatePickerMobileTextFieldTEST
        InputLabelProps={value && { shrink: true }}
        typePicker="age"
        customHeader={`До ${value || ""}`}
        //min={valid}
        placeholder="До"
        value={value}
        onChange={(date) => {
         return onChange(`${new Date(date).getFullYear()}`.slice(2, 4));
        }}
        errors={errors.toAge}
        {...field}
       />
      </div>
     )}
    />
   </div>
  </div>
 );
};
