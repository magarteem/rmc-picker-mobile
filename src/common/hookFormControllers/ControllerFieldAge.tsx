import { Controller } from "react-hook-form";
import cn from "classnames";
import s from "./formFields.module.scss";
import { DatePickerMobile } from "../ui-elements/datePickerMobile/DatePickerMobile";

export interface ControllerFieldAgeType {
 control: any;
 name: string;
 required?: boolean;
}

export const ControllerFieldAge = ({ control, name, required = false }: ControllerFieldAgeType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: required ? "Обязательное поле" : false,
    }}
    render={({ field: { onChange, ref, value, ...field }, formState: { errors } }) => (
     <div className={cn(s.sizeInput, s.wrappPicker)}>
      <DatePickerMobile value={value} placeholder="Возраст" onChange={onChange} {...field} />
     </div>
    )}
   />
  </div>
 );
};
