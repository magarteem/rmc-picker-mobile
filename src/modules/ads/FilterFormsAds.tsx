import { useForm } from "react-hook-form";
import { ButtonSubmitMui } from "../../common/mui-element/ButtonSubmitMui";
import { FormsFilterType } from "./types/formsFilterType";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { optionsTypeAccount } from "../authorization/service/BD";
import { requiredADS, requiredVacancy, teamTypeADS } from "../vacancy/service/createVacancyBD";
import { FilterLayoutWrapper } from "../../common/layout/filterLayoutWraper/FilterLayoutWrapper";
import { ControllersCityAsync } from "../../common/hookFormControllers/ControllersCityAsync";
import { ControllerToolsAsync } from "../../common/hookFormControllers/ControllerToolsAsync";
import { ControllerGenreAsync } from "../../common/hookFormControllers/ControllerGenreAsync";
import { ControllerGender } from "../../common/hookFormControllers/ControllerGender";
import { ControllerMaster } from "../../common/hookFormControllers/ControllerMaster";
import { ControllerAgeRange } from "../../common/hookFormControllers/ControllerAgeRange";
import { filterTranslateVacancy } from "./service/filterTranslate";
import { ControllersInstitutionTypeAsyncNew } from "../../common/hookFormControllers/ControllersInstitutionTypeAsyncNew";
import { EnumTypeAccount } from "../../types/PROFILE/enum/EnumTypeAccount";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { adsQuery } from "../vacancy/adsQuery";
import {
 AdsFilterParamsRequestType,
 VacancyFilterParamsRequestType,
} from "../vacancy/types/FilterFormsAdsFieldsType";
import s from "./style/filterFormsAds.module.scss";
import { RouteNames } from "../../core/router/RouteNames";
import { ResponseAdsType } from "./types/responseAdsType";
import { ResponseSearchAllFormsType } from "../user/types/responseSearchAllForms";
import { getMyProfileQuery } from "../user/getGetMyProfileQuery";
import { ControllerRandomSelect } from "../../common/hookFormControllers/ControllerRandomSelect";
import { EnumTypeDocumentType } from "../../types/PROFILE/enum/EnumTypeDocumentType";

interface FilterFormsAdsType {
 handleClose: () => void;
 setPageFu: (args: AdsFilterParamsRequestType | VacancyFilterParamsRequestType) => void;
}

export const FilterFormsAds = ({ handleClose, setPageFu }: FilterFormsAdsType) => {
 const navigate = useNavigate();
 const dispatch = useAppDispatch();
 let location = useLocation();
 const locationTabs = location.pathname;

 const { control, handleSubmit, watch, reset, setValue } = useForm<FormsFilterType>({
  mode: "onBlur",
  defaultValues: {
   city: null,
   tool: [],
   genre: [],
   gender: null,
   typeOfInstitution: null,
   teamType: null,
   who_is_looking_vacancy: null,
   who_is_looking_vacancy_partner: null,
   who_is_looking_ads: null,
   who_is_looking_questionnaire: null,
   fromAge: null,
   toAge: null,
   master: null,
  },
 });

 const watch_vacancy_partner = watch("who_is_looking_vacancy_partner")?.id;
 const who_is_looking_vacancy = watch("who_is_looking_vacancy")?.id;
 const watch_looking_ads = watch("who_is_looking_ads")?.id;
 const watch_questionnaire = watch("who_is_looking_questionnaire")?.id;

 const resetFormFields = () => reset();
 const onSubmit = (data: FormsFilterType) => {
  console.log("who_is_looking_vacancy_partner", data.who_is_looking_vacancy_partner);
  console.log(
   data.who_is_looking_vacancy_partner
    ? filterTranslateVacancy[data.who_is_looking_vacancy_partner.id]
    : "ddd"
  );
  console.log("onSubmitAds  = ", data);

  const mainObjFilter = {
   pageSize: 5,
   page: 0,
   formId: undefined,
   cityIds: data.city && +data.city.id,
   genreIds: data.genre.map((x) => x.id),
   instrumentIds: data.tool.map((x) => x.id),
  };

  const paramsQueryVacancy = {
   ...mainObjFilter,
   vacancyOwnerFormType: data.who_is_looking_vacancy?.id,
   searchVacancyDocumentType: data.who_is_looking_vacancy_partner
    ? filterTranslateVacancy[data.who_is_looking_vacancy_partner.id]
    : undefined,
   institutionTypeId: data.typeOfInstitution?.id,
  };

  const paramsQueryAds = {
   ...mainObjFilter,
   searchAnnouncementDocumentType: data.who_is_looking_ads
    ? filterTranslateVacancy[data.who_is_looking_ads.id]
    : undefined,
  };

  const paramsQueryAccount = {
   ...mainObjFilter,
   query: undefined,
   formType: data.who_is_looking_questionnaire?.id,
   institutionTypeId: data.typeOfInstitution?.id,
   gender: data.gender?.id,
   ageStart: data.fromAge,
   ageEnd: data.toAge,
   teamType: data.teamType?.id,
  };

  handleClose();
  switch (locationTabs) {
   case RouteNames.ADS:
    dispatch(
     adsQuery.util.updateQueryData("listVacancy", undefined, (draft: ResponseAdsType) => {
      //draft.pageCount = 1;
      //draft.currentPage = 0;
      draft.results.length = 0;
     })
    );
    setPageFu(paramsQueryVacancy);
    navigate(RouteNames.ADS);
    break;

   case `${RouteNames.ADS}/${RouteNames.ADS_LIST}`:
    dispatch(
     adsQuery.util.updateQueryData("listAds", undefined, (draft: ResponseAdsType) => {
      draft.results.length = 0;
     })
    );
    setPageFu(paramsQueryAds);
    navigate(RouteNames.ADS_LIST);
    break;

   default:
    dispatch(
     getMyProfileQuery.util.updateQueryData(
      "listAccount",
      undefined,
      (draft: ResponseSearchAllFormsType) => {
       draft.results.length = 0;
      }
     )
    );
    console.log("paramsQueryAccount", paramsQueryAccount);
    setPageFu(paramsQueryAccount);
    navigate(RouteNames.ADS_QUESTIONNAIRE_LIST);
    console.log("Account Send");
  }
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
     <ControllersCityAsync
      name="city"
      placeholder="Город"
      control={control}
      setValue={setValue}
      required={false}
     />
     <ControllerToolsAsync
      control={control}
      placeholder="Инструмент (род деятельности)"
      name="tool"
      required={false}
     />
     <ControllerGenreAsync control={control} name="genre" required={false} />

     <h2 className={s.filterForVacancy}>
      {locationTabs === "/ads"
       ? "Фильтр по вакансиям"
       : locationTabs === "/ads/ads-list"
       ? "Фильтр по объявлениям"
       : "Фильтр по анкетам"}
     </h2>

     {locationTabs === RouteNames.ADS ? (
      <ControllerRandomSelect
       control={control}
       placeholder="Кто ищет?"
       name="who_is_looking_vacancy"
       options={optionsTypeAccount}
      />
     ) : locationTabs === `${RouteNames.ADS}/${RouteNames.ADS_LIST}` ? (
      <ControllerRandomSelect
       control={control}
       placeholder="Что/кого ищут?"
       name="who_is_looking_ads"
       options={requiredADS}
      />
     ) : (
      <ControllerRandomSelect
       name="who_is_looking_questionnaire"
       control={control}
       placeholder="Тип аккаунта"
       options={optionsTypeAccount}
      />
     )}

     {locationTabs === RouteNames.ADS && (
      <>
       {who_is_looking_vacancy === EnumTypeAccount.INSTITUTION && (
        <ControllersInstitutionTypeAsyncNew
         name="typeOfInstitution"
         control={control}
         placeholder="Тип заведения"
         required={false}
        />
       )}
       <ControllerRandomSelect
        control={control}
        placeholder="Кого ищет?"
        name="who_is_looking_vacancy_partner"
        options={requiredVacancy}
       />
      </>
     )}

     {locationTabs === RouteNames.ADS &&
      (watch_vacancy_partner === EnumTypeDocumentType.TEAM ? (
       <ControllerRandomSelect
        control={control}
        placeholder="Вид коллектива"
        name="teamType"
        options={teamTypeADS}
       />
      ) : (
       watch_vacancy_partner === EnumTypeDocumentType.MUSICIAN && (
        <WatchMusician control={control} watch={watch} />
       )
      ))}

     {locationTabs === `${RouteNames.ADS}/${RouteNames.ADS_LIST}` &&
      (watch_looking_ads === EnumTypeDocumentType.TEAM ? (
       <ControllerRandomSelect
        control={control}
        placeholder="Вид коллектива"
        name="teamType"
        options={teamTypeADS}
       />
      ) : watch_looking_ads === EnumTypeDocumentType.MUSICIAN ? (
       <WatchMusician control={control} watch={watch} />
      ) : watch_looking_ads === EnumTypeDocumentType.WORK ? (
       <ControllersInstitutionTypeAsyncNew
        name="typeOfInstitution"
        control={control}
        placeholder="Место работы"
        required={false}
       />
      ) : null)}

     {locationTabs === `${RouteNames.ADS}/${RouteNames.ADS_QUESTIONNAIRE_LIST}` &&
      (watch_questionnaire === EnumTypeAccount.MUSICIAN ? (
       <WatchMusician control={control} watch={watch} />
      ) : watch_questionnaire === EnumTypeAccount.TEAM ? (
       <ControllerRandomSelect
        control={control}
        placeholder="Вид коллектива"
        name="teamType"
        options={teamTypeADS}
       />
      ) : watch_questionnaire === EnumTypeAccount.INSTITUTION ? (
       <ControllersInstitutionTypeAsyncNew
        name="typeOfInstitution"
        control={control}
        placeholder="Тип заведения"
        required={true}
       />
      ) : null)}
    </div>

    <div className={s.btnWrapper}>
     <ButtonSubmitMui isValidInButton={false} textButton="Показать результаты" />
    </div>
   </form>
  </FilterLayoutWrapper>
 );
};

interface WatchMusicianType {
 watch: any;
 control: any;
}

const WatchMusician = ({ watch, control }: WatchMusicianType) => {
 return (
  <>
   <ControllerGender control={control} name="gender" required={false} />
   <ControllerAgeRange control={control} watch={watch} required={false} />
   <ControllerMaster control={control} name="master" />
  </>
 );
};
