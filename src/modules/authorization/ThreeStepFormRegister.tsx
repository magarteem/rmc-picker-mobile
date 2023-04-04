import { useFormContext } from "react-hook-form";
import { FormLayout } from "../../common/layout/formLayout/FormLayout";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";
import { teamTypeADS } from "../vacancy/service/createVacancyBD";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../core/router/RouteNames";
import { ControllersCityAsync } from "../../common/hookFormControllers/ControllersCityAsync";
import { EnumTypeAccount } from "../../types/PROFILE/enum/EnumTypeAccount";
import { ControllerGenreAsync } from "../../common/hookFormControllers/ControllerGenreAsync";
import s from "./style/threeStepFormRegister.module.scss";
import { ControllerUploadPortfolio } from "../../common/hookFormControllers/controllerUploadPortfolio/ControllerUploadPortfolio";
import { ControllerUploadAvatar } from "../../common/hookFormControllers/controllerUploadAvatar/ControllerUploadAvatar";
import { ControllerTypeCollective } from "../../common/hookFormControllers/ControllerTypeCollective";
import { ControllersInstitutionTypeAsyncNew } from "../../common/hookFormControllers/ControllersInstitutionTypeAsyncNew";
import { ControllerGender } from "../../common/hookFormControllers/ControllerGender";
import { ControllerToolsAsync } from "../../common/hookFormControllers/ControllerToolsAsync";
import { ControllerMaster } from "../../common/hookFormControllers/ControllerMaster";
import { ControllerWorkExperience } from "../../common/hookFormControllers/ControllerWorkExperience";
import { ControllerEducation } from "../../common/hookFormControllers/ControllerEducation";
import { ControllerPrivateSettings } from "../../common/hookFormControllers/ControllerPrivateSettings";
import { ControllerPhone } from "../../common/hookFormControllers/ControllerPhone";
import { ControllerWebSite } from "../../common/hookFormControllers/ControllerWebSite";
import { ControllerEmail } from "../../common/hookFormControllers/ControllerEmail";
import { ControllerOpeningHours } from "../../common/hookFormControllers/ControllerOpeningHours";
import { ControllerRoomArea } from "../../common/hookFormControllers/ControllerRoomArea";
import { ControllerTextArea } from "../../common/hookFormControllers/ControllerTextArea";
import { ControllerFieldAge } from "../../common/hookFormControllers/ControllerFieldAge";
import { ControllerTextField } from "../../common/hookFormControllers/ControllerTextField";
import { ControllersMetroTest } from "../../common/hookFormControllers/ControllersMetroTest";
import { useAppSelector } from "../../core/redux/app/hooks";

export const ThreeStepFormRegister = () => {
 const navigate = useNavigate();

 const {
  watch,
  control,
  formState: { isValid },
  setValue,
 } = useFormContext();

 const watchFieldType = watch("type_account")?.value;
 const watchMisician = watchFieldType === EnumTypeAccount.MUSICIAN;
 const watchTeam = watchFieldType === EnumTypeAccount.TEAM;
 const watchInstitution = watchFieldType === EnumTypeAccount.INSTITUTION;
 const watchSoundProduser = watchFieldType === EnumTypeAccount.SOUND_PRODUCER;

 useEffect(() => {
  !!!watchFieldType && navigate(`${RouteNames.REGISTER}/${RouteNames.REG_TYPE_ACCOUNT}`);
 }, []);

 return (
  <FormLayout textLabel="Создание анкеты">
   <div className={s.main}>
    {watchTeam && (
     <ControllerTypeCollective
      control={control}
      name="type_collective"
      placeholder="Вид коллектива"
      options={teamTypeADS}
     />
    )}

    <ControllerTextField
     control={control}
     name="name_field"
     required={true}
     placeholder={watchMisician ? "Ваше имя" : "Название"}
    />

    {watchInstitution && (
     <ControllersInstitutionTypeAsyncNew
      name="institutionType"
      control={control}
      placeholder="Тип заведения"
      required={true}
     />
    )}

    <ControllerUploadAvatar control={control} name="img_upload" />

    <ControllersCityAsync name="city" placeholder="Город" control={control} setValue={setValue} />
    {!watchMisician && !watchTeam && !watchSoundProduser && !!watch("city")?.metros?.length && (
     <ControllersMetroTest
      name="metroId"
      placeholder="Станция метро"
      control={control}
      options={watch("city")?.metros}
     />
    )}

    {!watchMisician && !watchTeam && (
     <ControllerTextField control={control} name="address" required={true} placeholder={"Адресс"} />
    )}

    {watchMisician && (
     <>
      <ControllerGender control={control} name="gender" required={false} />
      <ControllerFieldAge control={control} name="age" required={true} />
     </>
    )}

    {(watchMisician || watchTeam) && (
     <>
      <ControllerToolsAsync
       control={control}
       placeholder={!watchTeam ? "Инструмент (род деятельности)" : "Состав"}
       name="tool"
       required={watchTeam ? false : true}
      />

      <ControllerGenreAsync control={control} name="genre" />
     </>
    )}

    {watchMisician && <ControllerMaster control={control} name="master" />}

    {(watchMisician || watchTeam) && (
     <ControllerWorkExperience
      control={control}
      name="work_experience"
      helperText="Опишите требуемый опыт"
     />
    )}

    {watchMisician && <ControllerEducation control={control} name="education" />}

    {(watchMisician || watchTeam) && (
     <ControllerPrivateSettings control={control} name="private_settings" />
    )}

    <div className={s.requirements}>
     <h2>Портфолио</h2>
    </div>

    <ControllerUploadPortfolio control={control} name="portfolio_photo" />

    {(watchMisician || watchTeam) && (
     <ControllerTextArea control={control} placeholder="О себе" name="inspiration" />
    )}

    <div className={s.requirements}>
     <h2>Контакты</h2>
    </div>

    <ControllerPhone control={control} name="phone" />
    <ControllerEmail control={control} name="email_contact" />
    <ControllerWebSite control={control} name="web_site" />

    {!watchMisician && !watchTeam && (
     <>
      <div className={s.requirements}>
       <h2>Описание</h2>
      </div>

      <ControllerOpeningHours control={control} watch={watch} required={true} />
      {watchInstitution && <ControllerRoomArea control={control} name="area" />}
      {/*<InputFormEstablishmentDescription control={control} name="establishment_description" />*/}
      <ControllerTextArea
       control={control}
       placeholder="Опишите ваше заведение"
       name="inspiration"
      />
     </>
    )}
   </div>

   <div className={s.btnFormWrapper}>
    <BtnInGroupeSaveCancelMui
     textCancelButton="Назад"
     textButton="Создать анкету"
     isValidInButton={!isValid}
    />
   </div>
  </FormLayout>
 );
};
