import { Controller } from "react-hook-form";
import TextFieldElementMui from "../mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFields.module.scss";

export interface ControllerTextFieldType {
 control: any;
 name: string;
 placeholder: string;
 required?: boolean;
 helperText?: string;
}

export const ControllerTextField = ({
 control,
 name,
 required = true,
 placeholder,
 helperText = "",
}: ControllerTextFieldType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: required ? "Обязательное поле" : false,
     minLength: {
      value: 3,
      message: "Не менее 3х символов",
     },
    }}
    render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => (
     <div className={s.wrapperBlockInput}>
      <TextFieldElementMui
       inputValue={value}
       ItemRef={ref}
       placeholder={placeholder}
       required={required}
       onChange={onChange}
       errors={errors[name]}
       helperText={helperText}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
