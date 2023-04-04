import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFields.module.scss";

export interface ControllerTextAreaType {
 control: any;
 name: string;
 placeholder: string;
}

export const ControllerTextArea = ({ control, name, placeholder }: ControllerTextAreaType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value, ref, ...field } }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       inputValue={value}
       placeholder={placeholder}
       onChange={onChange}
       multiline={true}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
