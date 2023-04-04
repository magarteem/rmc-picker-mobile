import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import pencil from "../../../../assets/icons/pencil.svg";
import settingsIcon from "../../../../assets/icons/setting.svg";
import { RouteNames } from "../../../../core/router/RouteNames";
import { ArrowBtnStepsBack } from "../../navigateButton/ArrowBtnStepsBack";
import { AvatarPhoto } from "../avatarIcons/AvatarPhoto";
import { IconButton } from "@mui/material";
import { ProfileDataApiDataType } from "../../../../modules/user/types/userSliceType";
import { AvatarPhotoOtherUserProfile } from "../avatarIcons/AvatarPhotoOtherUserProfile";
import s from "./headerProfile.module.scss";
import { optionTypeMyAccount } from "../../../../modules/user/helpers/optionTypeMyAccount";

interface HeaderProfileType {
 textLabel?: string;
 cancelImgIcon?: string;
 avatar?: string;
 change?: boolean;
 settings?: boolean;
 share?: ReactNode;
 profileDataApiData: ProfileDataApiDataType | any;
}

export const HeaderProfile = ({
 textLabel,
 cancelImgIcon,
 avatar,
 change = false,
 settings = false,
 share,
 profileDataApiData,
}: HeaderProfileType) => {
 let location = useLocation();
 const chechPathOtherUserProfile = location.pathname.includes(RouteNames.OTHER_PROFILE_USER);

 return (
  <div className={s.headerProfile}>
   <div className={s.title}>
    <div className={s.titleNavigation}>
     {cancelImgIcon && <ArrowBtnStepsBack cancelImgIcon={cancelImgIcon} />}
     <p>{textLabel && optionTypeMyAccount[textLabel]}</p>
    </div>

    <div className={s.titleSettings}>
     {change && (
      <Link to={RouteNames.CHANGE_PROFILE}>
       <IconButton>
        <img src={pencil} alt={pencil} />
       </IconButton>
      </Link>
     )}
     {settings && (
      <Link to={RouteNames.SETTINGS}>
       <IconButton>
        <img src={settingsIcon} alt={settingsIcon} />
       </IconButton>
      </Link>
     )}

     {!!share && <IconButton>{share}</IconButton>}
    </div>
   </div>

   {chechPathOtherUserProfile ? (
    <AvatarPhotoOtherUserProfile avatarPhoto={avatar} />
   ) : (
    <AvatarPhoto avatarPhoto={avatar} profileDataApiData={profileDataApiData} />
   )}
  </div>
 );
};
