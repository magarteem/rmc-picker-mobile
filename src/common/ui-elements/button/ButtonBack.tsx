import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import s from "./button.module.scss";

interface ButtonBackType {
 textCancelButton: string;
 isValidButtonBack?: boolean;
}

export const ButtonBack = ({
 textCancelButton,
 isValidButtonBack,
 ...props
}: ButtonBackType) => {
 const navigate = useNavigate();
 const returnStepRegister = (
  event: MouseEvent<HTMLButtonElement>
 ) => {
  event.preventDefault();
  navigate(-1);
 };

 return (
  <button
   className={s.buttonBackWrapper}
   type="submit"
   disabled={isValidButtonBack}
   onClick={returnStepRegister}
   {...props}
  >
   {textCancelButton}
  </button>
 );
};
