import { Controller } from "react-hook-form";
import { InterfaceGlobalSelectType } from "../../types/interfaseGlobal/interfaseGlobalSelect";
import { SelectElementMui } from "../mui-element/SelectElementMui";
import s from "./formFields.module.scss";

export interface ControllerTypeCollectiveType {
 control: any;
 placeholder: string;
 name: string;
 options: InterfaceGlobalSelectType[];
}

export const ControllerTypeCollective = ({
 control,
 placeholder,
 name,
 options,
}: ControllerTypeCollectiveType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.wrapperBlockInput}>
      <SelectElementMui
       ItemRef={ref}
       value={value}
       placeholder={placeholder}
       options={options}
       required={true}
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
