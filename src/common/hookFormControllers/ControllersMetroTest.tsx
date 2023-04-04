import { Controller } from "react-hook-form";
import { InterfaceGlobalSelectTypeCity } from "../../modules/user/types/userSliceType";
import SelectElementForMetroAsync from "../mui-element/selectElementForCity/SelectElementForMetroAsync";
import s from "./formFields.module.scss";

export interface ControllersMetroTestType {
 control: any;
 name: string;
 placeholder: string;
 options: [] | null | undefined;
 required?: boolean;
 cityValue?: InterfaceGlobalSelectTypeCity | null;
}

export const ControllersMetroTest = ({
 control,
 name,
 placeholder,
 options,
 required = true,
 cityValue = null,
}: ControllersMetroTestType) => {
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
     formState: { errors },
    }) => (
     <div className={s.wrapperBlockInput}>
      <SelectElementForMetroAsync
       cityValue={cityValue}
       placeholder={placeholder}
       required={required}
       onChange={onChange}
       inputValue={value && value}
       errors={errors[name]}
       options={options ? options : null}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
