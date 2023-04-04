import { Controller } from "react-hook-form";
import { SelectElementMui } from "../mui-element/SelectElementMui";
import s from "./formFields.module.scss";

export interface ControllerRandomSelectType {
 control: any;
 name: string;
 placeholder: string;
 options: any;
 required?: boolean;
}

export const ControllerRandomSelect = ({
 control,
 name,
 placeholder,
 options,
 required = false,
}: ControllerRandomSelectType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: required ? "Обязательное поле" : false,
    }}
    render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => (
     <div className={s.wrapperBlockInput}>
      <SelectElementMui
       ItemRef={ref}
       value={value}
       placeholder={placeholder}
       required={required}
       options={options}
       onChange={onChange}
       errors={errors[name]}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
