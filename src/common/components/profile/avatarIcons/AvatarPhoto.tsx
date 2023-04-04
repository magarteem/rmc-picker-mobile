import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { ReactComponent as AddAccountImgIcon } from "../../../../assets/icons/clearIcon.svg";
import { EffectCoverflow } from "swiper";
import noAvatar from "../../../../assets/icons/noAvatar.svg";
import { ProfileDataApiDataType } from "../../../../modules/user/types/userSliceType";
import { useAppDispatch } from "../../../../core/redux/app/hooks";
import {
 getLocalStorageSwiperActiv,
 setJsonLocalStorage,
 setLocalStorageSwiperActiv,
} from "../../../../helpers/getJsonParseLocalStorage";
import { MusicianTypeResponse } from "../../../../modules/user/types/putReqestUpdateMyForm";
import { toggleForm } from "../../../../modules/user/userSlice";
import { Link, useLocation } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import "swiper/scss";
import "swiper/css/effect-coverflow";
import s from "./avatarPhoto.module.scss";

interface AvatarIconsType {
 avatarPhoto?: string;
 profileDataApiData: ProfileDataApiDataType;
}

type MusicianTypeOmitResponseyy = Pick<MusicianTypeResponse, "type" | any>;
export const AvatarPhoto = ({ avatarPhoto, profileDataApiData }: AvatarIconsType) => {
 let location = useLocation();
 const dispatch = useAppDispatch();
 const [st, setSt] = useState(getLocalStorageSwiperActiv());

 const chechPath = location.pathname === `/${RouteNames.CHANGE_PROFILE}`;

 const entriesFilter = Object.entries(profileDataApiData).filter((x) => x[1]?.length > 0);
 const addType = entriesFilter.map((r) => {
  return r[1].map((e: any) => {
   return { ...e, type: `${r[0]}` };
  });
 });
 const result: MusicianTypeOmitResponseyy = [].concat(...addType);

 const fu = (element: number) => {
  const tempData = result[element];
  setLocalStorageSwiperActiv(element);
  tempData && setJsonLocalStorage(tempData.id, tempData.type.replace("Form", ""));
  setSt((prev) => element);
 };

 useEffect(() => {
  const tempData = result[st];
  const TypeAccountType = tempData && {
   id: tempData.id,
   nameForms: tempData.type.replace("Form", ""),
  };

  dispatch(toggleForm({ tempData, TypeAccountType }));
 }, [st]);

 return (
  <div className={s.infoAccount}>
   <div className={s.photo}>
    {chechPath ? (
     <>
      <Link to={`/${RouteNames.ADD_NEW_ACCOUNT}`} className={s.addAccount}>
       <AddAccountImgIcon />
      </Link>

      <div className={s.wrapperPhoto}>
       <img src={avatarPhoto ? avatarPhoto : noAvatar} alt="avatar" />
      </div>
     </>
    ) : (
     <Swiper
      onRealIndexChange={(element) => {
       return setTimeout(() => {
        typeof element.activeIndex === "number" && fu(element.activeIndex);
       }, 500);
      }}
      effect="coverflow"
      modules={[EffectCoverflow]}
      coverflowEffect={{
       rotate: 0,
       stretch: 6,
       depth: 100,
       modifier: 5,
       slideShadows: false,
      }}
      parallax={false}
      slidesPerView={result.length < 4 ? result.length : 4}
      initialSlide={st}
      centeredSlides
     >
      {result?.map((x: MusicianTypeResponse, index: number) => {
       return (
        <SwiperSlide
         key={index}
         className={s.swiperCard}
         style={{
          display: "flex",
          justifyContent: "center",
         }}
        >
         <div className={s.wrapperPhoto}>
          <img src={!!x.avatar?.uri ? x.avatar.uri : noAvatar} alt="avatar" />
         </div>
        </SwiperSlide>
       );
      })}
     </Swiper>
    )}
   </div>
  </div>
 );
};
