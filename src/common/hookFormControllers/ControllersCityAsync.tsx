import { Controller } from "react-hook-form";
import SelectElementForCityAsync from "../mui-element/selectElementForCity/SelectElementForCityAsync";
import s from "./formFields.module.scss";

export interface ControllersCityAsyncType {
 control: any;
 name: string;
 placeholder: string;
 required?: boolean;
 setValue?: any;
}

export const ControllersCityAsync = ({
 control,
 name,
 placeholder,
 required = true,
 setValue,
}: ControllersCityAsyncType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: required ? "Обязательное поле" : false,
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors, defaultValues },
    }) => {
     return (
      <div className={s.wrapperBlockInput}>
       <SelectElementForCityAsync
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        inputValue={value}
        errors={errors[name]}
        setValue={setValue}
        {...field}
       />
      </div>
     );
    }}
   />
  </div>
 );
};
