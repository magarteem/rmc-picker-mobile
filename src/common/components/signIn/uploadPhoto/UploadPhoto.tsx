import { useState, useRef } from "react";
import {
 FieldValues,
 UseFormRegister,
} from "react-hook-form";
import { UploadImgPreview } from "../uploadImgPreview/UploadImgPreview";
import s from "./uploadPhoto.module.scss";

interface UploadPhotoType {
 register: UseFormRegister<FieldValues>;
}
export const UploadPhoto = ({
 register,
}: UploadPhotoType) => {
 const [imgPreview, setImgPreview] = useState<string[]>([]);
 const filePicker = useRef<HTMLInputElement | null>(null);
 const { ref, ...rest } = register("img_upload");

 const handlePickerRef = (e: any) => {
  if (filePicker.current) {
   filePicker.current.click();
  }
 };
 const setPhoto = (e: any) => {
  setImgPreview([
   ...imgPreview,
   URL.createObjectURL(e.target.files[0]),
  ]);
 };

 const clearPhoto = (deiPhotoId: number) => {
  setImgPreview(
   imgPreview.filter((x, index) => index !== deiPhotoId)
  );
 };

 return (
  <div className={s.uploadPhoto}>
   <UploadImgPreview
    imgPreview={imgPreview}
    clearPhoto={clearPhoto}
   />
   <p onClick={handlePickerRef}>Загрузить фотографию</p>
   <input
    //onChange={setPhoto}
    {...rest}
    type="file"
    ref={(e) => {
     ref(e);
     filePicker.current = e;
    }}
   />

   <span>Размер файла не более 1 мб</span>
  </div>
 );
};
