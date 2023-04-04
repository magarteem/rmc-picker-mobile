import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFields.module.scss";

export interface ControllerEducationType {
 control: any;
 name: string;
}

export const ControllerEducation = ({
 control,
 name,
}: ControllerEducationType) => {
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
       placeholder="Образование"
       multiline={true}
       onChange={onChange}
       helperText="Опишите ваше образование"
       inputValue={value}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
