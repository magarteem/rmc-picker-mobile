import arrow_back from "../assets/icons/arrow_back.svg";
import shareIcons from "../assets/icons/shareIcons.svg";
import Avatar from "@mui/material/Avatar";
import noAvatar from "../assets/icons/noAvatar.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { LongMenu } from "../common/mui-element/LongMenu";
import { SkillsLayoutTools } from "../common/components/profile/aboutProfile/skills/SkillsLayoutTools";
import { SkillsLayoutGenre } from "../common/components/profile/aboutProfile/skills/SkillsLayoutGenre";
import { RibbonLayout } from "../common/layout/ribbonLayout/RibbonLayout";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { Pending } from "../common/components/notification/waitinActionButton/action/Pending";
import { Received } from "../common/components/notification/waitinActionButton/action/Received";
import { Rejected } from "../common/components/notification/waitinActionButton/action/Rejected";
import { RouteNames } from "../core/router/RouteNames";
import { useOneAnnouncementPostQuery, useOneVacancyPostQuery } from "../modules/vacancy/adsQuery";
import { PreLoader } from "../common/components/preLoader/PreLoader";
import { HeaderPageOneAds } from "../common/components/ads/adsPageOne/headerPageOneAds/HeaderPageOneAds";
import { skillGenerator, translationGender } from "../modules/vacancy/service/selectTranslation";
import cn from "classnames";
import s from "./styles/incomingNotificationPageOne.module.scss";
import { WaitingActionButton } from "../common/components/notification/waitinActionButton/WaitingActionButton";
import { ContactsElement } from "../common/components/ads/adsPageOne/ContactsElement";

export const OutgoingNotificationPageOne = () => {
 const { id_inComingNotification } = useParams();
 let location = useLocation().pathname;

 const { data: dataOneVacancysNew, isLoading: isLoadingVacancy } = useOneVacancyPostQuery(
  id_inComingNotification || "",
  {
   skip: !id_inComingNotification || location.indexOf(RouteNames.ONE_VACANCY) === -1,
  }
 );
 const { data: dataOneAdsNew, isLoading: isLoadingAds } = useOneAnnouncementPostQuery(
  id_inComingNotification || "",
  {
   skip: !id_inComingNotification || location.indexOf(RouteNames.ONE_ANNOUNCEMENT) === -1,
  }
 );

 const dataOneNews = dataOneVacancysNew ?? dataOneAdsNew;
 if (isLoadingVacancy || isLoadingAds || !dataOneNews) return <PreLoader />;

 return (
  <>
   <StylesFullScreen>
    <RibbonLayout>
     <div className={s.incomingNotificationPageOne}>
      <HeaderStylesWrapper
       cancelImgIcon={arrow_back}
       textLabel="Запросы"
       share={shareIcons}
       tsxElement={<LongMenu />}
      />

      <section className={s.bodyAdsPageOne}>
       <HeaderPageOneAds data={dataOneNews} />
       <div className={s.about}>{dataOneNews.description}</div>

       {dataOneNews.musicianAnnouncementDocument && (
        <>
         <div className={s.styleAbout}>
          <span className={s.titleSpan}>Пол:</span>
          {translationGender[dataOneNews.musicianAnnouncementDocument.gender]}
         </div>

         <div className={s.styleAbout}>
          <span className={s.titleSpan}>Возраст:</span>
          {` ${dataOneNews.musicianAnnouncementDocument.ageRange.start} - ${dataOneNews.musicianAnnouncementDocument.ageRange.finish}`}
         </div>
        </>
       )}

       {dataOneNews?.experience && (
        <div className={s.styleAbout}>
         <span className={s.titleSpan}>Опыт работы/выступлений:</span>
         {typeof dataOneNews?.experience == "string" && <span>{dataOneNews?.experience}</span>}
        </div>
       )}

       {(dataOneNews.musicianAnnouncementDocument ||
        dataOneNews.soundProducerAnnouncementDocument) && (
        <div className={s.styleAbout}>
         <span className={s.titleSpan}>Мастерство:</span>
         {dataOneNews.musicianAnnouncementDocument &&
          skillGenerator[dataOneNews.musicianAnnouncementDocument.skills]?.name}
         {dataOneNews.soundProducerAnnouncementDocument &&
          skillGenerator[dataOneNews.soundProducerAnnouncementDocument.skills]?.name}
        </div>
       )}

       {dataOneNews.description && (
        <div className={s.styleAbout}>
         <span className={s.titleSpan}>Комментарий:</span>
         {dataOneNews.description}
        </div>
       )}

       {dataOneNews.contacts && dataOneNews.contacts.map((x) => <ContactsElement contacts={x} />)}

       <Link
        to={`${RouteNames.OTHER_PROFILE_USER}/${dataOneNews.form.formId}`}
        className={s.educatione}
       >
        <div className={s.itemImg}>
         <Avatar alt="avatar" src={dataOneNews.form.avatar?.uri || noAvatar} />
        </div>
        <div className={s.text}>
         <p>{dataOneNews.form.name}</p>
         <p>{`${dataOneNews.form.city.title}${
          dataOneNews.form.address ? ", " + dataOneNews.form.address : ""
         }`}</p>
        </div>
       </Link>

       <div className={cn(s.reStyleImportant, s.border)}>
        <SkillsLayoutTools
         skillsDataItem={dataOneNews.instruments}
         skillsCategoryTitle="Инструменты"
        />
       </div>

       <div className={s.reStyleImportant}>
        <SkillsLayoutGenre skillsDataItem={dataOneNews.genres} skillsCategoryTitle="Жанр" />
       </div>

       <div className={s.pending}>
        <WaitingActionButton
         status={dataOneNews.announcementStatusResponse}
         userTargetIdForm={dataOneNews.form.formId}
        />
       </div>
      </section>
     </div>
    </RibbonLayout>
   </StylesFullScreen>
  </>
 );
};
