import { useRef, useState } from "react";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { getJsonParseLocalStorage } from "../../helpers/getJsonParseLocalStorage";
import { useChangeAvatarMutation } from "./getGetMyProfileQuery";
import { updateAvatar } from "./userSlice";
import s from "./style/changePhoto.module.scss";
import { SnackbarWarning } from "../../common/mui-element/snackbar/SnackbarWarning";

interface ChangePhotoType {
 thisSrcAvatar: string | undefined;
}

export const ChangePhoto = ({ thisSrcAvatar }: ChangePhotoType) => {
 const dispatch = useAppDispatch();
 const filePicker = useRef<HTMLInputElement | null>(null);
 const profileId = JSON.parse(getJsonParseLocalStorage()).id;
 //
 const [open, setOpen] = useState(false);
 //
 const [setAvatar, { data, isLoading }] = useChangeAvatarMutation();

 const handlePickerRef = () => {
  if (filePicker.current) {
   filePicker.current.click();
  }
 };

 const formDataImg = new FormData();

 const setPhoto = (e: any) => {
  if (e.target.files[0].size / 1024 / 1024 <= 1) {
   formDataImg.append("file", e.target.files[0]);
   formDataImg.append("removeFilesUrl", `${thisSrcAvatar}`);

   setAvatar({
    formDataImg,
    profileId,
   })
    .unwrap()
    .then((res) => dispatch(updateAvatar(res)))
    .catch(() =>
     dispatch(
      updateAvatar({
       name: "1611925535_15-p-zadnii-fon-temnii-15.jpg",
       uri: URL.createObjectURL(e.target.files[0]),
      })
     )
    );
  } else setOpen(true);
 };

 return (
  <>
   <div className={s.uploadPhoto}>
    <p onClick={handlePickerRef}>Изменить фото профиля</p>
    <input
     onChange={setPhoto}
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
   </div>
  </>
 );
};
