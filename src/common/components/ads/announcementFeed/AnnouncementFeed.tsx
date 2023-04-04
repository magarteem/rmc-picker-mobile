import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../../core/redux/app/hooks";
import { RouteNames } from "../../../../core/router/RouteNames";
import {
 useOptionsLongMenu,
 useOptionsLongMenu1,
} from "../../../../modules/ads/helpers/OptionsLongMenu";
import { ResultAdsTypeResponse } from "../../../../modules/ads/types/responseAdsType";
import {
 useSendAnnouncementReplyMutation,
 useSendVacancyReplyMutation,
} from "../../../../modules/notification/notificationQuery";
import { setDataNotificationThunk } from "../../../../modules/notification/setDataNotificationThunk";
import { InitialStateUserType } from "../../../../modules/user/types/userSliceType";
import { EnumAnnouncementStatus } from "../../../../types/PROFILE/enum/EnumAnnouncementStatus";
import { AdsLayoutItem } from "../../../layout/adsLayoutItem/AdsLayoutItem";
import { ButtonSubmitMui } from "../../../mui-element/ButtonSubmitMui";
import { WaitingActionButton } from "../../notification/waitinActionButton/WaitingActionButton";
import { AnnouncementCard } from "../announcementCard/AnnouncementCard";
import s from "./announcementFeed.module.scss";

interface AnnouncementFeedType {
 x: ResultAdsTypeResponse;
 profile?: InitialStateUserType;
}

export const AnnouncementFeed = ({ x, profile }: AnnouncementFeedType) => {
 const { isActiveForms: idMyFormStore, allMyForms } = useAppSelector(
  (state) => state.userSliceReducer
 );
 const idMyForm = JSON.parse(idMyFormStore).id;
 let location = useLocation().pathname;

 const [sendVacancyReply, { isSuccess: isSuccessVacancy, isError: isErrorVacancy }] =
  useSendVacancyReplyMutation();
 const [sendAnnouncementReply, { isSuccess: isSuccessAds, isError: isErrorAds }] =
  useSendAnnouncementReplyMutation();

 const respondAds = (idPost: string) => {
  if (location === `${RouteNames.ADS}`) {
   sendVacancyReply({
    idPost,
    idMyForm,
   }).unwrap();
  } else {
   sendAnnouncementReply({
    idPost,
    idMyForm,
   }).unwrap();
  }
 };

 const checkTypeAds = x.jobDocument === null || x.jobDocument;

 return (
  <div className={s.listAds} key={x.id}>
   <AdsLayoutItem>
    <AnnouncementCard
     x={x}
     link={
      checkTypeAds
       ? `${RouteNames.ADS}/${RouteNames.ADS_LIST}/${x.id}`
       : `${RouteNames.ADS}/${x.id}`
     }
     options={useOptionsLongMenu1(x)}
    />

    {isErrorVacancy || isErrorAds ? (
     <div className={s.respond}>
      <ButtonSubmitMui
       onClick={() => respondAds(x.id)}
       isValidInButton={false}
       textButton="Ошибка, повторить"
      />
     </div>
    ) : isSuccessAds || isSuccessVacancy ? (
     <div className={s.respond}>
      <ButtonSubmitMui isValidInButton={true} textButton="Ожидайте ответа" />
     </div>
    ) : (
     !allMyForms.includes(x.form.formId) &&
     (x.announcementStatusResponse === EnumAnnouncementStatus.NO_REPLY ? (
      <div className={s.respond}>
       <ButtonSubmitMui
        onClick={() => respondAds(x.id)}
        isValidInButton={false}
        textButton="Откликнуться"
       />
      </div>
     ) : (
      //<div className={s.pending}>
      // <Pending />
      //</div>
      <WaitingActionButton status={x.announcementStatusResponse} userTargetIdForm={x.form.formId} />
     ))
    )}

    {/*{profile.id_user === x.waitingForResponse.userId && (
     <div className={s.pending}>
      {x.waitingForResponse.status === 0 && <Pending />}
      {x.waitingForResponse.status === 1 && (
       <Received status={x.waitingForResponse} />
      )}
      {x.waitingForResponse.status === 2 && <Rejected />}
     </div>
    )}*/}
   </AdsLayoutItem>
  </div>
 );
};
