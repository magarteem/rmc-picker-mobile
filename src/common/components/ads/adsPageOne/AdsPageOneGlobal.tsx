import arrow_back from "../../../../assets/icons/arrow_back.svg";
import shareIcons from "../../../../assets/icons/shareIcons.svg";
import noAvatar from "../../../../assets/icons/noAvatar.svg";
import moreButtonCircle from "../../../../assets/icons/more-button-circle.svg";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import cn from "classnames";
import s from "./adsPageOne.module.scss";
import { StylesFullScreen } from "../../../layout/stylesFullScreen/StylesFullScreen";
import { HeaderStylesWrapper } from "../../../layout/headerStylesWrapper/HeaderStylesWrapper";
import { LongMenu } from "../../../mui-element/LongMenu";
import { RouteNames } from "../../../../core/router/RouteNames";
import { RespondButton } from "../respondButton/RespondButton";
import { SkillsLayoutGenre } from "../../profile/aboutProfile/skills/SkillsLayoutGenre";
import { SkillsLayoutTools } from "../../profile/aboutProfile/skills/SkillsLayoutTools";
import { ResultAdsTypeResponse } from "../../../../modules/ads/types/responseAdsType";
import {
 skillGenerator,
 translationGender,
} from "../../../../modules/vacancy/service/selectTranslation";
import {
 useOptionsLongMenu,
 useOptionsLongMenu1,
} from "../../../../modules/ads/helpers/OptionsLongMenu";
import { useAppSelector } from "../../../../core/redux/app/hooks";
import { HeaderPageOneAds } from "./headerPageOneAds/HeaderPageOneAds";
import { ContactsElement } from "./ContactsElement";

interface AdsPageOneGlobalType {
 data: ResultAdsTypeResponse;
}

export const AdsPageOneGlobal = ({ data }: AdsPageOneGlobalType) => {
 const { allMyForms } = useAppSelector((state) => state.userSliceReducer);

 console.log("data", data);
 return (
  <StylesFullScreen>
   <div className={s.adsPageOne}>
    <HeaderStylesWrapper
     cancelImgIcon={arrow_back}
     textLabel="Обявления"
     share={shareIcons}
     tsxElement={
      <LongMenu moreButtonCircle={moreButtonCircle} options={useOptionsLongMenu1(data)} />
     }
    />

    <section className={s.bodyAdsPageOne}>
     <HeaderPageOneAds data={data} />
     <div className={s.about}>{data.description}</div>

     {data.musicianAnnouncementDocument && (
      <>
       <div className={s.styleAbout}>
        <span className={s.titleSpan}>Пол:</span>
        {translationGender[data.musicianAnnouncementDocument.gender]}
       </div>

       <div className={s.styleAbout}>
        <span className={s.titleSpan}>Возраст:</span>
        {` ${data.musicianAnnouncementDocument.ageRange.start} - ${data.musicianAnnouncementDocument.ageRange.finish}`}
       </div>
      </>
     )}

     {data?.experience && (
      <div className={s.styleAbout}>
       <span className={s.titleSpan}>Опыт работы/выступлений:</span>
       {typeof data?.experience == "string" && <span>{data?.experience}</span>}
      </div>
     )}

     {(data.musicianAnnouncementDocument || data.soundProducerAnnouncementDocument) && (
      <div className={s.styleAbout}>
       <span className={s.titleSpan}>Мастерство:</span>
       {data.musicianAnnouncementDocument &&
        skillGenerator[data.musicianAnnouncementDocument.skills]?.name}
       {data.soundProducerAnnouncementDocument &&
        skillGenerator[data.soundProducerAnnouncementDocument.skills]?.name}
      </div>
     )}

     {data.description && (
      <div className={s.styleAbout}>
       <span className={s.titleSpan}>Комментарий:</span>
       {data.description}
      </div>
     )}

     {data.contacts && data.contacts.map((x) => <ContactsElement contacts={x} />)}

     <Link to={`${RouteNames.OTHER_PROFILE_USER}/${data.form.formId}`} className={s.educatione}>
      <div className={s.itemImg}>
       <Avatar alt="avatar" src={data.form.avatar?.uri || noAvatar} />
      </div>
      <div className={s.text}>
       <p>{data.form.name}</p>
       <p>{`${data.form.city.title}${data.form.address ? ", " + data.form.address : ""}`}</p>
      </div>
     </Link>

     {data?.instruments && (
      <div className={cn(s.reStyleImportant, s.border)}>
       <SkillsLayoutTools skillsDataItem={data.instruments} skillsCategoryTitle="Инструменты" />
      </div>
     )}

     {data?.genres && (
      <div className={s.reStyleImportant}>
       <SkillsLayoutGenre skillsDataItem={data.genres} skillsCategoryTitle="Жанр" />
      </div>
     )}

     {!allMyForms.includes(data.form.formId) && (
      <RespondButton
       idPost={data.id}
       statusAds={data.announcementStatusResponse}
       autorThisPost={data.form.formId}
      />
     )}
    </section>
   </div>
  </StylesFullScreen>
 );
};
