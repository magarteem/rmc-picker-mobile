import { Controller } from "react-hook-form";
import { genderBD } from "../../modules/authorization/service/BD";
import { SelectElementMui } from "../mui-element/SelectElementMui";
import s from "./formFields.module.scss";

export interface ControllerGenderType {
 control: any;
 name: string;
 required?: boolean;
}

export const ControllerGender = ({ control, name, required = true }: ControllerGenderType) => {
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
       placeholder="Пол"
       required={required}
       options={genderBD}
       onChange={onChange}
       errors={errors.gender}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
