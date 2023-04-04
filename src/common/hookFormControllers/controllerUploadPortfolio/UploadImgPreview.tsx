import clearIcon from "../../../assets/icons/clearIcon.svg";
import s from "./uploadImgPreview.module.scss";

interface UploadImgPreviewType {
 profileId1?: string;
 x: string | any;
 index: number;
 clearPhoto: (index: number) => void;
}
export const UploadImgPreview = ({
 x,
 index,
 clearPhoto,
}: UploadImgPreviewType) => {
 return (
  <div className={s.imgCards} key={index}>
   <img
    src={typeof x !== "string" ? URL.createObjectURL(x) : x}
    alt="img"
    className={s.photo}
   />
   <img
    onClick={() => clearPhoto(index)}
    className={s.clearImgButton}
    src={clearIcon}
    alt="clear"
   />
  </div>
 );
};
