import { Controller } from "react-hook-form";
import TextFieldElementMui from "../mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFields.module.scss";

export interface ControllerEmailType {
 control: any;
 name: string;
}

export const ControllerEmail = ({
 control,
 name,
}: ControllerEmailType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    rules={{
     minLength: {
      value: 3,
      message: "Не менее 3х символов",
     },
     pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Это не Email",
     },
    }}
    render={({
     field: { onChange, ref, value, ...field },
     formState: { errors },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldElementMui
       inputValue={value}
       ItemRef={ref}
       placeholder="E-mail"
       onChange={onChange}
       helperText="Обязательное поле"
       errors={errors[name]}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
