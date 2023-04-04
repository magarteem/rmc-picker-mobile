import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../../../../core/redux/app/hooks";
import { RouteNames } from "../../../../core/router/RouteNames";
import { updateStatusAds } from "../../../../modules/ads/adsSlice";
import { useOptionsLongMenu } from "../../../../modules/ads/helpers/OptionsLongMenu";
import { TimelineCards } from "../../../../modules/ads/types/adsSliceType";
import { setDataNotificationThunk } from "../../../../modules/notification/setDataNotificationThunk";
import { OptionLongMenuType } from "../../../../modules/timeLine/types/timlineSliceType";
import { InitialStateUserType } from "../../../../modules/user/types/userSliceType";
import { AdsLayoutItem } from "../../../layout/adsLayoutItem/AdsLayoutItem";
import { ButtonSubmitMui } from "../../../mui-element/ButtonSubmitMui";
import { AnnouncementCard } from "../../ads/announcementCard/AnnouncementCard";
import { Pending } from "../../notification/waitinActionButton/action/Pending";
import { Received } from "../../notification/waitinActionButton/action/Received";
import { Rejected } from "../../notification/waitinActionButton/action/Rejected";
import s from "./announcementFeedInNotification.module.scss";

interface AnnouncementFeedType {
 x: TimelineCards;
 profile: InitialStateUserType;
}

export const AnnouncementFeedInNotification = ({ x, profile }: AnnouncementFeedType) => {
 const dispatch = useAppDispatch();

 const respondAds = (adsItem: TimelineCards) => {
  dispatch(setDataNotificationThunk(adsItem));
  dispatch(
   updateStatusAds({
    idAds: adsItem.id,
    userId: profile.id_user,
    status: 0,
   })
  );
 };

 return (
  <div className={s.listAds} key={x.id}>
   <AdsLayoutItem>
    {/*<AnnouncementCard
     x={x}
     link={`${RouteNames.ADS}/${x.id}`}
     options={useOptionsLongMenu(x.id)}
    />*/}

    {profile.id_user !== x.author.id_user && profile.id_user !== x.waitingForResponse.userId && (
     <div className={s.respond}>
      <ButtonSubmitMui
       onClick={() => respondAds(x)}
       isValidInButton={false}
       textButton="Откликнуться"
      />
     </div>
    )}

    {profile.id_user === x.waitingForResponse.userId && (
     <div className={s.pending}>
      {x.waitingForResponse.status === 0 && <Pending />}
      {/*{x.waitingForResponse.status === 1 && <Received status={x.waitingForResponse} />}*/}
      {x.waitingForResponse.status === 2 && <Rejected />}
     </div>
    )}
   </AdsLayoutItem>
  </div>
 );
};
