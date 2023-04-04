import clearIcon from "../../../../assets/icons/clearIcon.svg";
import s from "./uploadImgPreview.module.scss";

interface UploadImgPreviewType {
 imgPreview?: string[];
 clearPhoto: (index: number) => void;
}
export const UploadImgPreview = ({
 imgPreview,
 clearPhoto,
}: UploadImgPreviewType) => {
 return (
  <div className={s.uploadImgPreview}>
   {imgPreview?.map((x, index) => {
    return (
     <div className={s.imgCards}>
      <img src={x} alt="img" className={s.photo} />
      <img
       onClick={() => clearPhoto(index)}
       className={s.clearImgButton}
       src={clearIcon}
       alt="clear"
      />
     </div>
    );
   })}
  </div>
 );
};
