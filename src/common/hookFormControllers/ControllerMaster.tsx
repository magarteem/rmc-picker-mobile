import { Controller } from "react-hook-form";
import { skillBD } from "../../modules/authorization/service/BD";
import { SelectElementMui } from "../mui-element/SelectElementMui";
import s from "./formFields.module.scss";

export interface ControllerMasterType {
 control: any;
 name: string;
}

export const ControllerMaster = ({
 control,
 name,
}: ControllerMasterType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
    }) => (
     <div className={s.wrapperBlockInput}>
      <SelectElementMui
       ItemRef={ref}
       value={value}
       placeholder="Мастерство"
       options={skillBD}
       onChange={onChange}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
