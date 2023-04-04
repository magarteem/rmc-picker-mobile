import cancelImgIcon from "../assets/icons/arrowBack.svg";
import { useNavigate, useParams } from "react-router-dom";
import { FormLayoutCreateADS } from "../common/layout/formLayoutCreateADS/FormLayoutCreateADS";
import { useAppSelector } from "../core/redux/app/hooks";
import { CreateFormVacancy } from "../modules/vacancy/CreateFormVacancy";
import { CreateFormADS } from "../modules/vacancy/CreateFormADS";
import { FormProvider, useForm } from "react-hook-form";
import s from "./styles/changeThisAds.module.scss";
import { genderBD, skillBD } from "../modules/authorization/service/BD";
import { ContactsType } from "../types/PROFILE/accountMainGlobalType";
import { FormsCreatedVacancyType } from "../modules/vacancy/types/typeFormsCreatedAds";
import { teamTypeADS, workingConditionsBD } from "../modules/vacancy/service/createVacancyBD";
import {
 useUpdateThisAdsPostMutation,
 useUpdateThisVacancyPostMutation,
} from "../modules/vacancy/adsQuery";
import { selectParamsForCreateVacancy } from "../modules/vacancy/helpers/selectParamsForCreateVacancy";
import { selectParamsForCreateAds } from "../modules/vacancy/helpers/selectParamsForCreateAds";
import { ResponseAdsType } from "../modules/ads/types/responseAdsType";
import { EnumTypeDocumentType } from "../types/PROFILE/enum/EnumTypeDocumentType";

export const ChangeThisAds = () => {
 const { change_id_ads } = useParams();
 const navigate = useNavigate();
 const activeTypeForm = useAppSelector((state) => state.userSliceReducer.isActiveForms);
 const parseJson = JSON.parse(activeTypeForm);
 const [updateNewVacancy] = useUpdateThisVacancyPostMutation();
 const [updateNewAds] = useUpdateThisAdsPostMutation();

 const cacheStoreAds = useAppSelector(
  (state) => state.adsQuery.queries.listAds?.data
 ) as ResponseAdsType;

 const cacheStoreVacancy = useAppSelector(
  (state) => state.adsQuery.queries.listVacancy?.data
 ) as ResponseAdsType;

 let dataM = [];
 cacheStoreAds?.results && dataM.push(...cacheStoreAds.results);
 cacheStoreVacancy?.results && dataM.push(...cacheStoreVacancy.results);

 const changeDataADS1 = dataM.find((x) => `${x.id}` === change_id_ads);

 const spreadOpenObject = {
  ...changeDataADS1,
  ...changeDataADS1?.jobDocument,
  ...changeDataADS1?.soundProducerAnnouncementDocument,
  ...changeDataADS1?.teamAnnouncementDocument,
  ...changeDataADS1?.musicianAnnouncementDocument,
 };

 const nVacancy = () => {
  if (changeDataADS1?.soundProducerAnnouncementDocument)
   return { id: EnumTypeDocumentType.SOUND_PRODUCER, name: "Звукорежиссёр" };
  else if (changeDataADS1?.teamAnnouncementDocument)
   return { id: EnumTypeDocumentType.TEAM, name: "Коллектив" };
  else return { id: EnumTypeDocumentType.MUSICIAN, name: "Музыкант" };
 };
 const nAds = () => {
  if (changeDataADS1?.jobDocument) return { id: EnumTypeDocumentType.WORK, name: "Работу" };
  else if (changeDataADS1?.teamAnnouncementDocument)
   return { id: EnumTypeDocumentType.TEAM, name: "Коллектив" };
  else return { id: EnumTypeDocumentType.MUSICIAN, name: "Музыканта" };
 };

 const changeData = {
  tool: spreadOpenObject?.instruments,
  genre: spreadOpenObject?.genres,
  city: { id: spreadOpenObject?.city?.id, name: changeDataADS1?.city.title },
  gender: genderBD.find((x) => x.id === spreadOpenObject?.gender),
  fromAge:
   spreadOpenObject.ageRange?.start ??
   spreadOpenObject.soundProducerAnnouncementDocument?.age.start,
  toAge:
   spreadOpenObject.ageRange?.finish ??
   spreadOpenObject.soundProducerAnnouncementDocument?.age.finish,
  // !
  work_experience: spreadOpenObject.experience,
  master: spreadOpenObject.skills
   ? skillBD.find((x) => spreadOpenObject?.skills && x.id === spreadOpenObject.skills[0])
   : null,
  commit: spreadOpenObject.description,
  payment: spreadOpenObject.conditions?.salary,
  // !
  workingConditions: workingConditionsBD.find(
   (x) => x.id === spreadOpenObject.conditions?.employmentType
  ),
  whoAreLooking: teamTypeADS.find((x) => x.id === spreadOpenObject?.teamType),
  commitAbout: spreadOpenObject.conditions?.scheduleDescription,
  phone: changeDataADS1?.contacts.find((x: ContactsType) => x.contactType === "phone")?.value,
  email: changeDataADS1?.contacts.find((x: ContactsType) => x.contactType === "email")?.value,
  web_site: changeDataADS1?.contacts.find((x: ContactsType) => x.contactType === "web-site")?.value,
 };

 const methodVacancy = useForm<FormsCreatedVacancyType>({
  mode: "onBlur",
  defaultValues: {
   ...changeData,
   required: nVacancy(),
  },
 });

 const onSubmitVacancy = (dataForm: FormsCreatedVacancyType) => {
  const data = selectParamsForCreateVacancy(dataForm, parseJson.id);
  change_id_ads && updateNewVacancy({ data, change_id_ads }).unwrap();
  navigate(-1);
 };

 const methodAds = useForm<FormsCreatedVacancyType>({
  mode: "onBlur",
  defaultValues: {
   ...changeData,
   required: nAds(),
   typeOfInstitution: teamTypeADS.find((x) => x.id === spreadOpenObject?.teamType),
  },
 });

 const onSubmitAds = (dataForm: FormsCreatedVacancyType) => {
  const data = selectParamsForCreateAds(dataForm, parseJson.id);
  change_id_ads && updateNewAds({ data, change_id_ads }).unwrap();
  navigate(-1);
 };

 if (!changeDataADS1) return <h1>Not Found this ADS ...</h1>;

 return (
  <FormLayoutCreateADS textLabel="Редактировать" arrowCanselImgIcon={cancelImgIcon}>
   {changeDataADS1.conditions ? (
    <FormProvider {...methodVacancy}>
     <form
      noValidate
      className={s.formVacancy}
      onSubmit={methodVacancy.handleSubmit(onSubmitVacancy)}
     >
      <CreateFormVacancy buttonSubmitText="Редактировать вакансию" />
     </form>
    </FormProvider>
   ) : (
    <FormProvider {...methodAds}>
     <form noValidate className={s.formVacancy} onSubmit={methodAds.handleSubmit(onSubmitAds)}>
      <CreateFormADS buttonSubmitText="Редактировать объявление" />
     </form>
    </FormProvider>
   )}
  </FormLayoutCreateADS>
 );
};
