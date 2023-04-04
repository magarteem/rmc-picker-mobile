import { Controller } from "react-hook-form";
import { useGetGenreDataQuery } from "../../api/getDataForForm/getCityQuery";
import { GenreGlobalType } from "../../types/PROFILE/genreGlobalType";
import { SelectGenreElementMui } from "../mui-element/selectGenreElementMui/SelectGenreElementMui";
import s from "./formFields.module.scss";

const reselect = (
 data: GenreGlobalType[]
): GenreGlobalType[] => {
 const dataResult = data.map((x: GenreGlobalType) => {
  return {
   id: x.id,
   name: x.name,
   color: x.color,
  };
 });

 return dataResult;
};

export interface ControllerGenreAsyncType {
 control: any;
 name: string;
 required?: boolean;
}

export const ControllerGenreAsync = ({
 control,
 name,
 required = true,
}: ControllerGenreAsyncType) => {
 const { data } = useGetGenreDataQuery();

 if (!data) return null;

 return (
  <div className={s.selectFieldCustomHeight}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: required ? "Обязательное поле" : false,
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectGenreElementMui
      ItemRef={ref}
      value={value}
      placeholder="Жанр"
      required={required}
      options={reselect(data)}
      onChange={onChange}
      errors={errors.genre}
      {...field}
     />
    )}
   />
  </div>
 );
};
