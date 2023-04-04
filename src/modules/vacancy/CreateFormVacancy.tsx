import { useFormContext } from "react-hook-form";
import s from "./style/createFormADS.module.scss";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";
import { requiredVacancy, teamTypeADS, workingConditionsBD } from "./service/createVacancyBD";
import { ControllerGender } from "../../common/hookFormControllers/ControllerGender";
import { ControllerPhone } from "../../common/hookFormControllers/ControllerPhone";
import { ControllerEmail } from "../../common/hookFormControllers/ControllerEmail";
import { ControllerWebSite } from "../../common/hookFormControllers/ControllerWebSite";
import { ControllerWorkExperience } from "../../common/hookFormControllers/ControllerWorkExperience";
import { ControllerGenreAsync } from "../../common/hookFormControllers/ControllerGenreAsync";
import { ControllersCityAsync } from "../../common/hookFormControllers/ControllersCityAsync";
import { ControllerToolsAsync } from "../../common/hookFormControllers/ControllerToolsAsync";
import { ControllerMaster } from "../../common/hookFormControllers/ControllerMaster";
import { ControllerRandomSelect } from "../../common/hookFormControllers/ControllerRandomSelect";

// исследовать NumberPickerUiElement !!!!
import NumberPickerUiElement from "../../common/ui-elements/reactMobileStylePicker/ReactMobileStylePicker";
import { ControllerTextField } from "../../common/hookFormControllers/ControllerTextField";
import { ControllerTextArea } from "../../common/hookFormControllers/ControllerTextArea";
import { ControllerAgeRange } from "../../common/hookFormControllers/ControllerAgeRange";
import { useLocation } from "react-router-dom";
import { EnumTypeDocumentType } from "../../types/PROFILE/enum/EnumTypeDocumentType";

interface CreateFormVacancyType {
 buttonSubmitText: string;
}

export const CreateFormVacancy = ({ buttonSubmitText }: CreateFormVacancyType) => {
 let location = useLocation();
 const checkChange = location.pathname.includes("change-this-ads");
 const { control, watch, setValue } = useFormContext();
 const typeVacancy = watch("required")?.id;

 return (
  <>
   <ControllerRandomSelect
    control={control}
    options={requiredVacancy}
    placeholder="Требуется"
    name="required"
    required={true}
   />
   {typeVacancy === EnumTypeDocumentType.TEAM && (
    <ControllerRandomSelect
     control={control}
     placeholder="Вид коллектива"
     name="whoAreLooking"
     options={teamTypeADS}
    />
   )}
   {!!typeVacancy && (
    <>
     <ControllerToolsAsync
      control={control}
      placeholder="Инструмент (род деятельности)"
      name="tool"
     />
     <ControllerGenreAsync control={control} name="genre" />
     {!checkChange && (
      <ControllersCityAsync name="city" placeholder="Город" control={control} setValue={setValue} />
     )}

     {(typeVacancy === EnumTypeDocumentType.MUSICIAN ||
      typeVacancy === EnumTypeDocumentType.SOUND_PRODUCER) && (
      <>
       <ControllerGender control={control} name="gender" required={false} />

       <ControllerAgeRange control={control} watch={watch} required={false} />
      </>
     )}

     <div className={s.requirements}>
      <h2>Требования</h2>
     </div>

     <ControllerWorkExperience
      control={control}
      name="work_experience"
      helperText="Опишите требуемый опыт"
     />
     {(typeVacancy === EnumTypeDocumentType.MUSICIAN ||
      typeVacancy === EnumTypeDocumentType.SOUND_PRODUCER) && (
      <ControllerMaster control={control} name="master" />
     )}

     <ControllerTextArea control={control} name="commit" placeholder="Комментарий" />

     <div className={s.requirements}>
      <h2>О работе</h2>
     </div>

     <ControllerTextField
      control={control}
      name="payment"
      placeholder="Оплата"
      helperText="Обязательное поле"
     />

     <ControllerRandomSelect
      control={control}
      options={workingConditionsBD}
      placeholder="Условия работы"
      name="workingConditions"
      required={false}
     />

     <ControllerTextArea control={control} name="commitAbout" placeholder="Комментарий" />

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
