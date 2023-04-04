import { useForm } from "react-hook-form";
import { ButtonSubmitMui } from "../../common/mui-element/ButtonSubmitMui";
import { IconButton } from "@mui/material";
import {
 FilterFormsTimeLineFieldsType,
 FilterParamsRequestType,
} from "./types/FilterFormsTimeLineFieldsType";
import { FilterLayoutWrapper } from "../../common/layout/filterLayoutWraper/FilterLayoutWrapper";
import { ControllerTextField } from "../../common/hookFormControllers/ControllerTextField";
import { ControllersCityAsync } from "../../common/hookFormControllers/ControllersCityAsync";
import s from "./style/filterFormsTimline.module.scss";
import { ControllerToolsAsync } from "../../common/hookFormControllers/ControllerToolsAsync";
import { ControllerGenreAsync } from "../../common/hookFormControllers/ControllerGenreAsync";
import { ControllerTypeNews } from "../../common/hookFormControllers/ControllerTypeNews";
import { getNewsListQuery } from "./getNewsListQuery";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { useOutletContext } from "react-router";
import { NewsResultType } from "./types/responseNewsType";

interface FilterFormsTimeLineType {
 handleClose: () => void;
}

export const FilterFormsTimeLine = ({
 handleClose,
}: FilterFormsTimeLineType) => {
 const dispatch = useAppDispatch();
 const [data, isLoading, isFetching, setPageFu]: [
  NewsResultType[],
  boolean,
  boolean,
  (paramsQuery: FilterParamsRequestType) => void
 ] = useOutletContext();

 const { control, handleSubmit, reset, setValue } =
  useForm<FilterFormsTimeLineFieldsType>({
   mode: "onBlur",
   defaultValues: {
    search_text: "",
    type_category: null,
    city: null,
    tools: [],
    genre: [],
   },
  });

 const resetFormFields = () => reset();
 const onSubmit = (data: FilterFormsTimeLineFieldsType) => {
  const paramsQuery = {
   page: -1,
   query: data.search_text,
   type: data.type_category?.id,
   cityIds: data.city?.id,
   genreIds: data.genre.map((x) => x.id),
   instrumentIds: data.tools.map((x) => x.id),
  };
  handleClose();
  dispatch(getNewsListQuery.util.resetApiState());
  setPageFu(paramsQuery);
 };

 return (
  <FilterLayoutWrapper handleClose={handleClose}>
   <form noValidate onSubmit={handleSubmit(onSubmit)}>
    <div className={s.headerForms}>
     <h1>Фильтр</h1>
     <IconButton
      onClick={resetFormFields}
      sx={{
       borderRadius: "10px",
       padding: "13px",
      }}
     >
      <h5>Очистить</h5>
     </IconButton>
    </div>

    <div className={s.gawField}>
     <ControllerTextField
      control={control}
      name="search_text"
      required={false}
      placeholder="Поиск по содержимому"
     />

     <ControllerTypeNews
      control={control}
      name="type_category"
      placeholder="Тип новости"
     />

     <ControllersCityAsync
      name="city"
      placeholder="Город"
      control={control}
      required={false}
      setValue={setValue}
     />

     <ControllerToolsAsync
      control={control}
      placeholder="Инструмент (род деятельности)"
      name="tools"
      required={false}
     />

     <ControllerGenreAsync
      control={control}
      name="genre"
      required={false}
     />
    </div>

    <div className={s.btnWrapper}>
     <ButtonSubmitMui
      isValidInButton={false}
      textButton="Показать результаты"
     />
    </div>
   </form>
  </FilterLayoutWrapper>
 );
};
