import clearIcon from "../../../assets/icons/clearIcon.svg";
import { useState, useRef } from "react";
import { getJsonParseLocalStorage } from "../../../helpers/getJsonParseLocalStorage";
import { useChangeAvatarMutation } from "../../../modules/user/getGetMyProfileQuery";
import { PortfolioType } from "../../../types/PROFILE/accountMainGlobalType";
import s from "./uploadPhoto.module.scss";
import { SnackbarWarning } from "../../mui-element/snackbar/SnackbarWarning";

interface UploadPhotoType {
 onChange: () => void;
 value: PortfolioType[];
}
export const UploadPhoto = ({ onChange, value, ...props }: UploadPhotoType) => {
 const [onChangeImgTest, setOnChangeImgTest] = useState<Blob | null>(null);

 const [setAvatar, { data, isLoading }] = useChangeAvatarMutation();

 const filePicker = useRef<HTMLInputElement | null>(null);
 const formDataImg = new FormData();

 const handlePickerRef = () => {
  if (filePicker.current) {
   filePicker.current.click();
  }
 };
 const [open, setOpen] = useState(false);
 const setPhoto = (e: any) => {
  if (e.target.files[0].size / 1024 / 1024 <= 1) {
   const profileId = JSON.parse(getJsonParseLocalStorage()).id;
   e.target.files && setOnChangeImgTest(e.target.files[0]);

   formDataImg.append("file", e.target.files[0]);
   data && formDataImg.append("removeFilesUrl", data.uri);

   setAvatar({
    formDataImg,
    profileId,
   }).unwrap();
  } else {
   setOpen(true);
  }
 };

 const clearPhoto = () => {
  const profileId = JSON.parse(getJsonParseLocalStorage()).id;
  const formDataImg = new FormData();

  setOnChangeImgTest(null);

  data && formDataImg.append("removeFilesUrl", data.uri);

  setAvatar({
   formDataImg,
   profileId,
  }).unwrap();
 };

 return (
  <div className={s.uploadPhoto}>
   <div className={s.up1}>
    {onChangeImgTest && (
     <div className={s.imgCards}>
      <img src={URL.createObjectURL(onChangeImgTest)} alt="img" className={s.photo} />

      <img onClick={clearPhoto} className={s.clearImgButton} src={clearIcon} alt="clear" />
     </div>
    )}
   </div>

   <p onClick={handlePickerRef}>Загрузить фотографию</p>
   <input
    onChange={setPhoto}
    {...props}
    type="file"
    ref={(e) => {
     filePicker.current = e;
    }}
   />
   {open && (
    <SnackbarWarning
     text="Размер файла не более 1 мб"
     open={open}
     setOpen={setOpen}
     severity={"error"}
    />
   )}

   <span>Размер файла не более 1 мб</span>
  </div>
 );
};
