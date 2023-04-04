import { Controller } from "react-hook-form";
import { useGetToolDataQuery } from "../../api/getDataForForm/getCityQuery";
import { SelectToolsElementMui } from "../mui-element/selectToolsElementMui/SelectToolsElementMui";
import s from "./formFields.module.scss";

export interface ControllerToolsAsyncType {
 control: any;
 name: string;
 placeholder: string;
 required?: boolean;
}

export const ControllerToolsAsync = ({
 control,
 name,
 placeholder,
 required = true,
}: ControllerToolsAsyncType) => {
 const { data, isLoading } = useGetToolDataQuery();

 if (!data) return null;

 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: required ? "Обязательное поле" : false,
    }}
    render={({ field: { onChange, ref, value, ...field }, formState: { errors } }) => (
     <SelectToolsElementMui
      ItemRef={ref}
      value={value}
      placeholder={placeholder}
      required={required}
      options={data}
      onChange={onChange}
      errors={errors[name]}
      {...field}
     />
    )}
   />
  </div>
 );
};
