import { useFormContext } from "react-hook-form";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";
import { requiredADS, teamTypeADS, workingConditionsBD } from "./service/createVacancyBD";
import { ControllerPhone } from "../../common/hookFormControllers/ControllerPhone";
import { ControllerEmail } from "../../common/hookFormControllers/ControllerEmail";
import { ControllerWebSite } from "../../common/hookFormControllers/ControllerWebSite";
import { ControllerGender } from "../../common/hookFormControllers/ControllerGender";
import { ControllerWorkExperience } from "../../common/hookFormControllers/ControllerWorkExperience";
import { ControllerGenreAsync } from "../../common/hookFormControllers/ControllerGenreAsync";
import { ControllersInstitutionTypeAsyncNew } from "../../common/hookFormControllers/ControllersInstitutionTypeAsyncNew";
import { ControllersCityAsync } from "../../common/hookFormControllers/ControllersCityAsync";
import { ControllerToolsAsync } from "../../common/hookFormControllers/ControllerToolsAsync";
import { ControllerMaster } from "../../common/hookFormControllers/ControllerMaster";
import { ControllerRandomSelect } from "../../common/hookFormControllers/ControllerRandomSelect";
import { ControllerTextField } from "../../common/hookFormControllers/ControllerTextField";
import { ControllerTextArea } from "../../common/hookFormControllers/ControllerTextArea";
import { ControllerAgeRange } from "../../common/hookFormControllers/ControllerAgeRange";
import s from "./style/createFormADS.module.scss";
import { EnumTypeDocumentType } from "../../types/PROFILE/enum/EnumTypeDocumentType";

interface CreateFormADSType {
 buttonSubmitText: string;
}

export const CreateFormADS = ({ buttonSubmitText }: CreateFormADSType) => {
 const { control, watch, setValue } = useFormContext();
 const typeAds = watch("required")?.id;

 return (
  <>
   <ControllerRandomSelect
    control={control}
    options={requiredADS}
    placeholder="Ищу \ Ищем"
    name="required"
    required={true}
   />
   {typeAds === EnumTypeDocumentType.TEAM && (
    <ControllerRandomSelect
     control={control}
     placeholder="Вид коллектива"
     name="whoAreLooking"
     options={teamTypeADS}
    />
   )}
   {!!typeAds && (
    <>
     {typeAds === EnumTypeDocumentType.WORK && (
      <ControllersInstitutionTypeAsyncNew
       name="typeOfInstitution"
       control={control}
       placeholder="Место работы"
       required={true}
      />
     )}

     <ControllerToolsAsync
      control={control}
      required={typeAds !== EnumTypeDocumentType.TEAM ? true : false}
      placeholder="Инструмент (род деятельности)"
      name="tool"
     />
     <ControllerGenreAsync control={control} name="genre" />
     <ControllersCityAsync name="city" placeholder="Город" control={control} setValue={setValue} />
     {typeAds === EnumTypeDocumentType.MUSICIAN && (
      <>
       <ControllerGender control={control} name="gender" required={false} />

       <ControllerAgeRange control={control} watch={watch} required={false} />
      </>
     )}

     <div className={s.requirements}>
      {typeAds === EnumTypeDocumentType.WORK ? <h2>О себе</h2> : <h2>Требования</h2>}
     </div>

     <ControllerWorkExperience
      control={control}
      name="work_experience"
      helperText="Опишите требуемый опыт"
     />
     {typeAds !== EnumTypeDocumentType.TEAM && <ControllerMaster control={control} name="master" />}

     <ControllerTextArea
      control={control}
      name="commit"
      placeholder={typeAds === EnumTypeDocumentType.WORK ? "О себе" : "Комментарий"}
     />

     <div className={s.requirements}>
      {typeAds === EnumTypeDocumentType.WORK ? <h2>О работе</h2> : <h2>О сотрудничестве</h2>}
     </div>

     {typeAds === EnumTypeDocumentType.WORK && (
      <ControllerTextField
       control={control}
       name="payment"
       placeholder="Оплата"
       helperText="Обязательное поле"
      />
     )}

     {typeAds === EnumTypeDocumentType.WORK ? (
      <ControllerRandomSelect
       control={control}
       options={workingConditionsBD}
       placeholder="Условия работы"
       name="workingConditions"
       required={false}
      />
     ) : (
      <ControllerTextArea control={control} name="workingConditions" placeholder="Условия" />
     )}

     {typeAds === EnumTypeDocumentType.WORK && (
      <ControllerTextArea control={control} name="commitAbout" placeholder="Комментарий" />
     )}

     <div className={s.requirements}>
      <h2>Контакты</h2>
     </div>

     <ControllerPhone control={control} name="phone" />
     <ControllerEmail control={control} name="email" />
     <ControllerWebSite control={control} name="web_site" />

     <div className={s.btnFormWrapper}>
      <BtnInGroupeSaveCancelMui textCancelButton="Назад" textButton={buttonSubmitText} />
     </div>
    </>
   )}
  </>
 );
};
