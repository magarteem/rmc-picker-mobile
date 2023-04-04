import { Controller } from "react-hook-form";
import s from "./formFields.module.scss";
import CityCustomField from "./CityCustomField";

export interface ControllersCityAsyncCustomType {
 control: any;
 name: string;
 placeholder: string;
 required?: boolean;
 setValue?: any;
}

export const ControllersCityAsyncCustom = ({
 control,
 name,
 placeholder,
}: ControllersCityAsyncCustomType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors, defaultValues },
    }) => {
     return (
      <div className={s.wrapperBlockInput}>
       <CityCustomField
        placeholder={placeholder}
        onChange={onChange}
        inputValue={value}
        errors={errors[name]}
        {...field}
       />
      </div>
     );
    }}
   />
  </div>
 );
};
