import clearIcon from "../../../../assets/icons/clearIcon.svg";
import { ReactComponent as AddImageIcons } from "../../../../assets/icons/addImageIcons.svg";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import s from "./addNewNewsForm.module.scss";
import { GenreGlobalType } from "../../../../types/PROFILE/genreGlobalType";
import { ToolsGroupeItemType } from "../../../../types/PROFILE/InstrumentGlobalType";
import { InterfaceGlobalSelectTypeCity } from "../../../../modules/user/types/userSliceType";
import { getJsonParseLocalStorage } from "../../../../helpers/getJsonParseLocalStorage";
import { ControllerToolsAsync } from "../../../hookFormControllers/ControllerToolsAsync";
import { ControllerGenreAsync } from "../../../hookFormControllers/ControllerGenreAsync";
import { SelectTypeNews } from "../../../../modules/timeLine/formFieldsSpecificStyle/SelectTypeNews";
import { ControllersCityAsyncCustom } from "../../../../modules/timeLine/formFieldsSpecificStyle/сityСustomField/ControllersCityAsyncCustom";
import { CustomButtomAddImg } from "../../timeLine/customButtomAddImg/CustomButtomAddImg";
import { ButtonSubmitMui } from "../../../mui-element/ButtonSubmitMui";
import { SnackbarWarning } from "../../../mui-element/snackbar/SnackbarWarning";
import { useSendNewNewsMutation } from "../../../../modules/timeLine/getNewsListQuery";
import { optionСategoryBD } from "../../../../modules/timeLine/service/optionСategoryBD";
import { DtPickerOne } from "./DtPickerOne";
import { DtPickerTwo } from "./DtPickerTwo";

interface TimeLinePostType {
 photo: Blob | null;
 text: string;
 typeCategory: string | null;
 genre: GenreGlobalType[];
 tools: ToolsGroupeItemType[];
 city: InterfaceGlobalSelectTypeCity | null;
}

export const DtOneForm = () => {
 const navigate = useNavigate();
 const [onChangeImgTest, setOnChangeImgTest] = useState<Blob | null>(null);

 const [setNewNews] = useSendNewNewsMutation();

 const {
  watch,
  control,
  handleSubmit,
  setValue,
  formState: { isValid },
 } = useForm<TimeLinePostType>({
  mode: "onBlur",
  defaultValues: {
   genre: [],
   tools: [],
   photo: null,
   text: "",
   typeCategory: null,
   city: null,
  },
 });

 const file = watch("photo");

 useEffect(() => {
  if (file && file.size / 1024 / 1024 <= 1) file && setOnChangeImgTest(file);
  else file && setOpen(true);
 }, [file]);

 const onSubmit = (data: TimeLinePostType) => {
  const formData = new FormData();

  formData.append("FormId", `${JSON.parse(getJsonParseLocalStorage()).id}`);

  data.typeCategory && formData.append("Type", data.typeCategory);
  formData.append("Body", data.text);
  data?.city && formData.append("CityId", `${data.city.id}`);
  data.genre.forEach((x) => {
   formData.append("Genres", x.id);
  });
  data.tools.forEach((x) => {
   formData.append("Instruments", x.id);
  });

  onChangeImgTest && formData.append("File", onChangeImgTest);

  setNewNews({ formData }).unwrap();
  navigate(-1);
 };

 const clearPhoto = () => {
  setValue("photo", null);
  setOnChangeImgTest(null);
 };

 const [open, setOpen] = useState(false);
 const inputRef = useRef<null | HTMLInputElement>(null);
 const toggleEditing = () => inputRef.current && inputRef.current.focus();

 return (
  <form noValidate onSubmit={handleSubmit(onSubmit)} className={s.formWrapCreateNews}>
   <section onClick={toggleEditing} className={s.textFields}>
    <div className={s.styleInput}>
     <Controller
      name="text"
      control={control}
      rules={{
       required: "Обязательное поле",
       minLength: {
        value: 3,
        message: "Не менее 3х символов",
       },
      }}
      render={({ field: { onChange, ref, ...field }, formState: { errors } }) => (
       <div className={s.sizeInput}>
        <TextField
         inputRef={inputRef}
         multiline
         sx={styleTextAreaSX}
         fullWidth
         autoComplete="off"
         placeholder="Чем вы хотите поделиться?"
         variant="outlined"
         onChange={onChange}
         error={!!errors.text}
         helperText={errors && errors.text?.message}
        />
       </div>
      )}
     />
    </div>

    <div className={s.imgWrap}>
     {onChangeImgTest && (
      <div className={s.imgCards}>
       <img src={URL.createObjectURL(onChangeImgTest)} alt="img" className={s.photo} />
       <img onClick={clearPhoto} className={s.clearImgButton} src={clearIcon} alt="clear" />
      </div>
     )}

     {open && (
      <SnackbarWarning
       text="Размер файла не более 1 мб"
       open={open}
       setOpen={setOpen}
       severity={"error"}
      />
     )}
    </div>
   </section>

   <section className={s.selectParams}>
    {/*  */}
    <div className={s.wi}>
     <DtPickerOne />
     {/*<DtPickerTwo />*/}
     <br />
    </div>

    {/*  */}

    <div className={s.selectFieldCustomHeight}>
     <ControllerGenreAsync control={control} name="genre" required={false} />
    </div>

    <div className={cn(s.selectFieldCustomHeight, s.addMargin)}>
     <ControllerToolsAsync
      control={control}
      placeholder="Инструмент (род деятельности)"
      name="tools"
      required={false}
     />
    </div>

    <div className={s.selectBlock}>
     <div className={s.selectField}>
      <SelectTypeNews
       required={true}
       control={control}
       placeholder="Тип новости"
       options={optionСategoryBD}
       name="typeCategory"
      />
     </div>

     <div>
      <div className={s.selectField + " " + s.custom}>
       <ControllersCityAsyncCustom name="city" placeholder="Город" control={control} />
      </div>
     </div>
    </div>

    <div className={s.sendBlock}>
     <div className={s.btnWrapper}>
      <Controller
       name="photo"
       control={control}
       render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => (
        <CustomButtomAddImg
         startIcon={<AddImageIcons />}
         textButton="Добавить"
         isValidInButton={!!onChangeImgTest}
         onChange={onChange}
        />
       )}
      />
     </div>
     <div className={s.btnWrapper}>
      <ButtonSubmitMui textButton="Создать новость" isValidInButton={!isValid} />
     </div>
    </div>
   </section>
  </form>
 );
};

export const styleTextAreaSX = {
 width: "100% !important",
 fontSize: "16px",
 fontFamily: `Mulish_Regular, sans-serif !important`,
 padding: "0",

 fieldset: {
  display: "none",
 },

 "& .MuiInputBase-root": {
  height: "auto",
  borderRadius: "8px",
  padding: "0 14px",
  color: "#43483E",
  fontFamily: `Mulish_Regular, sans-serif !important`,

  "&:focus": {
   height: "auto",
  },

  "& .MuiInputBase-input": {
   "&::-webkit-input-placeholder": {
    fontWeight: 500,
    color: "#242424",
    opacity: 1,
   },
  },
 },
};
