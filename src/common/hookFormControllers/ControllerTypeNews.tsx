import { Controller } from "react-hook-form";
import { SelectElementMui } from "../mui-element/SelectElementMui";
import { optionСategoryBD } from "../../modules/timeLine/service/optionСategoryBD";
import s from "./formFields.module.scss";

export interface ControllerTypeNewsType {
 control: any;
 name: string;
 placeholder: string;
}

export const ControllerTypeNews = ({
 control,
 name,
 placeholder,
}: ControllerTypeNewsType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.wrapperBlockInput}>
      <SelectElementMui
       placeholder={placeholder}
       ItemRef={ref}
       value={value}
       options={optionСategoryBD}
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
