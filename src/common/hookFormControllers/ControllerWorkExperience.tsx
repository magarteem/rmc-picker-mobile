import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFields.module.scss";

export interface ControllerWorkExperienceType {
 control: any;
 name: string;
 helperText: string;
}

export const ControllerWorkExperience = ({
 control,
 name,
 helperText,
}: ControllerWorkExperienceType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       inputValue={value}
       placeholder="Опыт работы/выступлений"
       onChange={onChange}
       multiline={true}
       helperText={helperText}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
