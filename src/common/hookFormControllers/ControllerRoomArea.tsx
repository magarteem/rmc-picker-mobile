import { Controller } from "react-hook-form";
import TextFieldElementMui from "../mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFields.module.scss";

export interface ControllerRoomAreaType {
 control: any;
 name: string;
 required?: boolean;
}

export const ControllerRoomArea = ({ control, name, required = false }: ControllerRoomAreaType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: required ? "Обязательное поле" : false,
     pattern: {
      value: /^[0-9]*[.,]?[0-9]+$/gm,
      message: "Это не число",
     },
    }}
    render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => (
     <div className={s.sizeInput}>
      <TextFieldElementMui
       inputValue={value}
       ItemRef={ref}
       placeholder="Площадь помещения"
       onChange={onChange}
       required={required}
       errors={errors[name]}
       // type="number"
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
