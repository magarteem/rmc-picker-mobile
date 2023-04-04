import { Controller } from "react-hook-form";
import TextFieldPhoneElementMui from "../mui-element/textFieldElementMui/phoneInput/TextFieldPhoneElementMui";
import s from "./formFields.module.scss";

export interface ControllerPhoneType {
 control: any;
 name: string;
}

export const ControllerPhone = ({
 control,
 name,
}: ControllerPhoneType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, ref, value, ...field },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldPhoneElementMui
       inputValue={value}
       ItemRef={ref}
       placeholder="Телефон"
       onChange={onChange}
       type="phone"
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
