import { useState, useEffect, useRef } from "react";
import { getJsonParseLocalStorage } from "../../../helpers/getJsonParseLocalStorage";
import { useSendPortfolioImgMutation } from "../../../modules/user/getGetMyProfileQuery";
import { PortfolioType } from "../../../types/PROFILE/accountMainGlobalType";
import { SnackbarWarning } from "../../mui-element/snackbar/SnackbarWarning";
import { UploadImgPreview } from "./UploadImgPreview";
import s from "./uploadPhoto.module.scss";

interface UploadPhotoType {
 onChange: () => void;
 value: PortfolioType[];
}
export const UploadPhoto = ({ onChange, value, ...props }: UploadPhotoType) => {
 const [onChangeImgTest, setOnChangeImgTest] = useState<Array<string | Blob>>([]);

 const filePicker = useRef<HTMLInputElement | null>(null);
 const formDataImg = new FormData();
 const profileId = JSON.parse(getJsonParseLocalStorage()).id;

 const [open, setOpen] = useState(false);

 const [setData, { data, isLoading }] = useSendPortfolioImgMutation();

 const handlePickerRef = () => {
  if (filePicker.current) {
   filePicker.current.click();
  }
 };

 const setPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0].size / 1024 / 1024 <= 1) {
   setOnChangeImgTest([...onChangeImgTest, e.target.files[0]]);

   e.target.files && formDataImg.append("files", e.target.files[0]);
   setData({
    formDataImg,
    profileId,
   }).unwrap();
  } else setOpen(true);
 };

 const clearPhoto = (index: number) => {
  const formDataImg = new FormData();

  if (typeof onChangeImgTest[index] === "string") {
   formDataImg.append("removeFilesUrl", onChangeImgTest[index]);

   setData({
    formDataImg,
    profileId,
   }).unwrap();

   setOnChangeImgTest(onChangeImgTest.filter((x, ind) => ind !== index));
  } else {
   setOnChangeImgTest(onChangeImgTest.filter((x, ind) => ind !== index));

   data && formDataImg.append("removeFilesUrl", data[index].uri);
   data &&
    setData({
     formDataImg,
     profileId,
    }).unwrap();
  }
 };

 useEffect(() => {
  value?.map && setOnChangeImgTest(value?.map((x) => x.uri));
 }, []);

 return (
  <div className={s.uploadPhoto}>
   <div className={s.up1}>
    {onChangeImgTest.map((x, index) => {
     return <UploadImgPreview key={index} x={x} index={index} clearPhoto={clearPhoto} />;
    })}
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

// URL.createObjectURL(e.target.files[0]),
