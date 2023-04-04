import noAvatar from "../../../../assets/icons/noAvatar.svg";
import s from "./avatarPhoto.module.scss";

interface AvatarPhotoOtherUserProfileType {
 avatarPhoto?: string;
}

export const AvatarPhotoOtherUserProfile = ({
 avatarPhoto,
}: AvatarPhotoOtherUserProfileType) => {
 return (
  <div className={s.infoAccount}>
   <div className={s.photo}>
    <div className={s.wrapperPhoto}>
     <img
      src={avatarPhoto ? avatarPhoto : noAvatar}
      alt="avatar"
     />
    </div>
   </div>
  </div>
 );
};
