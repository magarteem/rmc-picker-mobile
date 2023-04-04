import { Controller } from "react-hook-form";
import { useGetInstitutionTypeDataQuery } from "../../api/getDataForForm/getCityQuery";
import { InstitutionTypeGlobalType } from "../../types/PROFILE/institutionTypeGlobalType";
import { SelectElementMui } from "../mui-element/SelectElementMui";
import s from "./formFields.module.scss";

const reselect = (data: InstitutionTypeGlobalType[]) => {
 const dataResult = data.map((x: InstitutionTypeGlobalType) => {
  return {
   id: x.id,
   name: x.type,
  };
 });

 return dataResult;
};

export interface ControllersInstitutionTypeAsyncNewType {
 control: any;
 name: string;
 placeholder: string;
 required: boolean;
}

export const ControllersInstitutionTypeAsyncNew = ({
 control,
 name,
 placeholder,
 required,
}: ControllersInstitutionTypeAsyncNewType) => {
 const { data, isLoading } = useGetInstitutionTypeDataQuery();

 if (isLoading) return null;

 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: required ? "Обязательное поле" : false,
    }}
    render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => {
     return (
      <div className={s.wrapperBlockInput}>
       <SelectElementMui
        ItemRef={ref}
        value={value}
        placeholder={placeholder}
        required={required}
        options={!!data ? reselect(data) : []}
        onChange={onChange}
        errors={errors[name]}
        {...field}
       />
      </div>
     );
    }}
   />
  </div>
 );
};
