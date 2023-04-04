import { Controller } from "react-hook-form";
import TextFieldElementMui from "../mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFields.module.scss";

export interface ControllerWebSiteType {
 control: any;
 name: string;
}

export const ControllerWebSite = ({
 control,
 name,
}: ControllerWebSiteType) => {
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
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldElementMui
       inputValue={value}
       ItemRef={ref}
       placeholder="Вебсайт"
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
