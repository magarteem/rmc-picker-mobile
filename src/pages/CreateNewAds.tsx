import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import cancelImgIcon from "../assets/icons/arrowBack.svg";
import { FormLayoutCreateADS } from "../common/layout/formLayoutCreateADS/FormLayoutCreateADS";
import { ButtonGroupe } from "../common/mui-element/ButtonGroupe";
import { useAppSelector } from "../core/redux/app/hooks";
import { useSendAdsPostMutation, useSendVacancyPostMutation } from "../modules/vacancy/adsQuery";
import { CreateFormADS } from "../modules/vacancy/CreateFormADS";
import { CreateFormVacancy } from "../modules/vacancy/CreateFormVacancy";
import { selectParamsForCreateAds } from "../modules/vacancy/helpers/selectParamsForCreateAds";
import { selectParamsForCreateVacancy } from "../modules/vacancy/helpers/selectParamsForCreateVacancy";
import { FormsCreatedVacancyType } from "../modules/vacancy/types/typeFormsCreatedAds";
import s from "./styles/createNewAds.module.scss";

// для музыкант/коллектив/звукореж - и вакансия и объявление. Для всех остальных - только вакансия
const rulesShowAds = ["musician", "team", "soundProducer"];

export const CreateNewAds = () => {
 const navigate = useNavigate();
 const activeTypeForm = useAppSelector((state) => state.userSliceReducer.isActiveForms);
 const parseJson = JSON.parse(activeTypeForm);

 const [checked, setCheckedButtom] = useState(true);
 const [titleForm, setTitleForm] = useState("Создать вакансию");

 const showAdsButton = (str: string, toggle: boolean) => {
  setTitleForm(str);
  setCheckedButtom(toggle);
 };

 const methodVacancy = useForm<FormsCreatedVacancyType>({
  mode: "onBlur",

  defaultValues: {
   required: null,
   whoAreLooking: null,
   tool: [],
   genre: [],
   city: null,
   gender: null,
   fromAge: null,
   toAge: null,
   work_experience: "",
   master: null,
   commit: "",
   payment: "",
   workingConditions: null,
   commitAbout: "",
   phone: "",
   email: "",
   web_site: "",
  },
 });

 const [setNewVacancy, { data: dataVacancy }] = useSendVacancyPostMutation();
 const [setNewAds, { data: dataAds }] = useSendAdsPostMutation();

 const onSubmitVacancy = (data: FormsCreatedVacancyType) => {
  setNewVacancy(selectParamsForCreateVacancy(data, parseJson.id)).unwrap();
  navigate(-1);
 };

 const methodAds = useForm<FormsCreatedVacancyType>({
  mode: "onBlur",
  defaultValues: {
   required: null,
   whoAreLooking: null,
   typeOfInstitution: null,
   tool: [],
   genre: [],
   city: null,
   gender: null,
   fromAge: null,
   toAge: null,
   work_experience: "",
   master: null,
   commit: "",
   payment: "",
   workingConditions: null,
   commitAbout: "",
   phone: "",
   email: "",
   web_site: "",
  },
 });

 const onSubmitAds = (data: FormsCreatedVacancyType) => {
  console.log("onSubmitAds = ", data);
  setNewAds(selectParamsForCreateAds(data, parseJson.id)).unwrap();
  navigate(-1);
 };

 return (
  <FormLayoutCreateADS textLabel={titleForm} arrowCanselImgIcon={cancelImgIcon}>
   {rulesShowAds.includes(parseJson.nameForms) && (
    <ButtonGroupe checked={checked} showAdsButton={showAdsButton} />
   )}

   {checked ? (
    <FormProvider {...methodVacancy}>
     <form
      noValidate
      className={s.formVacancy}
      onSubmit={methodVacancy.handleSubmit(onSubmitVacancy)}
     >
      <CreateFormVacancy buttonSubmitText="Создать вакансию" />
     </form>
    </FormProvider>
   ) : (
    rulesShowAds.includes(parseJson.nameForms) && (
     <FormProvider {...methodAds}>
      <form noValidate className={s.formVacancy} onSubmit={methodAds.handleSubmit(onSubmitAds)}>
       <CreateFormADS buttonSubmitText="Создать обявление" />
      </form>
     </FormProvider>
    )
   )}
  </FormLayoutCreateADS>
 );
};
