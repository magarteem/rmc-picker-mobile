import { Link, useParams } from "react-router-dom";
import { InitialStateUserType } from "../../../../modules/user/types/userSliceType";
import { BtnUserContact } from "./skills/BtnUserContact";
import { SkillsLayoutMaster } from "./skills/SkillsLayoutMaster";
import { SkillsLayoutGenre } from "./skills/SkillsLayoutGenre";
import { SkillsLayoutTools } from "./skills/SkillsLayoutTools";
import { NameProfile } from "../nameProfile/NameProfile";
import { WorkExperienceCard } from "./skills/WorkExperienceCards";
import { RouteNames } from "../../../../core/router/RouteNames";
import { EnumTypeAccount } from "../../../../types/PROFILE/enum/EnumTypeAccount";
import { useAppSelector } from "../../../../core/redux/app/hooks";
import { Portfolio } from "./portfolio/Portfolio";
import { About } from "./about/About";
import { Contacts } from "./contacts/Contacts";
import s from "./aboutProfile.module.scss";
import { EnumPrivateType } from "../../../../types/PROFILE/enum/EnumPrivateType";
import { useSendContactReplyMutation } from "../../../../modules/notification/notificationQuery";
import { EnumContactRequestStatusResponse } from "../../../../types/PROFILE/enum/EnumContactRequestStatusResponse";

interface AboutProfileType {
 userDataProfile: InitialStateUserType;
}

export const AboutProfile = ({ userDataProfile }: AboutProfileType) => {
 const { isActiveForms: idMyForm, allMyForms } = useAppSelector((state) => state.userSliceReducer);
 const parseJson = idMyForm && JSON.parse(idMyForm).nameForms;
 const parseJsonId = idMyForm && JSON.parse(idMyForm).id;

 const { id_user } = useParams();
 const {
  skills: { education, genre, inspiration, master, tool, workExperience },
  id_user: id_userForm,
  age,
  city,
  email,
  name,
  phone,
  portfolio_photo,
  webSite,
  from_opening_hours,
  to_opening_hours,
  metroId,
  address,
  area,
  type_collective,
  institutionType,
  schedule,
  private_settings,
  privateType,
  contactRequestStatus,
 } = userDataProfile;

 const watchMisician = parseJson === EnumTypeAccount.MUSICIAN;
 const watchTeam = parseJson === EnumTypeAccount.TEAM;

 const [sendContactReply, { isSuccess, isError }] = useSendContactReplyMutation();

 const contactReply = () => {
  sendContactReply({
   id_userForm,
   parseJsonId,
  }).unwrap();
 };

 return (
  <>
   <section className={s.main}>
    <NameProfile
     age={age || 0}
     name={name}
     city={city?.name}
     merto={metroId}
     address={address}
     type_collective={type_collective?.name || institutionType?.name}
    />

    {id_user && !allMyForms.includes(id_user) && privateType === EnumPrivateType.HIDE_CONTACTS && (
     <div className={s.noBorder}>
      <BtnUserContact onClick={contactReply}>
       <div className={s.btnUserContact}>
        <button className={s.buttonContactWrapper}>
         {contactRequestStatus === EnumContactRequestStatusResponse.NO_REQUEST
          ? "Запросить контакты"
          : "Контакт запрошен"}
        </button>
       </div>
      </BtnUserContact>
     </div>
    )}

    {/*{id_user && (*/}
    <div className={s.linkPublicationsMusician}>
     <Link
      to={
       id_user
        ? RouteNames.OTHER_USER_POSTS
        : `${RouteNames.OTHER_PROFILE_USER}/${parseJsonId}/${RouteNames.OTHER_USER_POSTS}`
      }
     >
      {id_user ? "Публикации пользователя" : "Мои публикации"}
     </Link>
    </div>
    {/*)}*/}

    {tool && (
     <SkillsLayoutTools
      skillsDataItem={tool}
      skillsCategoryTitle={watchMisician ? "Инструменты" : "Состав"}
     />
    )}

    <SkillsLayoutGenre skillsDataItem={genre} skillsCategoryTitle="Жанр" />
    {master && <SkillsLayoutMaster skillsDataItem={master} skillsCategoryTitle="Мастерство" />}

    {!!workExperience && (
     <WorkExperienceCard workExperience={workExperience} skillsCategoryTitle="Опыт работы" />
    )}

    {!!education && (
     <WorkExperienceCard workExperience={education} skillsCategoryTitle="Образование" />
    )}

    {!watchMisician && !watchTeam && (
     <About
      schedule={schedule}
      watchMisician={watchMisician}
      watchTeam={watchTeam}
      inspiration={inspiration}
      area={area}
     />
    )}

    {(portfolio_photo || inspiration) && (
     <Portfolio
      portfolio_photo={portfolio_photo}
      inspiration={inspiration}
      watchMisician={watchMisician}
      watchTeam={watchTeam}
     />
    )}

    {(phone || email || webSite) && <Contacts phone={phone} email={email} webSite={webSite} />}
   </section>
  </>
 );
};
