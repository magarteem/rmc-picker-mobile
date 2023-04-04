import { IconButton } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import s from "./arrowBtnStepsBack.module.scss";

interface ArrowBtnStepsBackType {
 cancelImgIcon: string | ReactNode;
}

export const ArrowBtnStepsBack = ({
 cancelImgIcon,
}: ArrowBtnStepsBackType) => {
 const navigate = useNavigate();
 const goBack = () => navigate(-1);

 return (
  <div className={s.btnBack} onClick={goBack}>
   {typeof cancelImgIcon === "string" ? (
    <IconButton>
     <img src={cancelImgIcon} alt="back" />
    </IconButton>
   ) : (
    <IconButton>{cancelImgIcon}</IconButton>
   )}
  </div>
 );
};
