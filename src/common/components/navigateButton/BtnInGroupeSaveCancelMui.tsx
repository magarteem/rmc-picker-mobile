import { ButtonBackMui } from "../../mui-element/ButtonBackMui";
import { ButtonSubmitMui } from "../../mui-element/ButtonSubmitMui";
import s from "./btnInGroupeSaveCancelMui.module.scss";

interface BtnInGroupeSaveCancelMuiType {
  textCancelButton: string;
  textButton: string;
  isValidButtonBack?: boolean;
  isValidInButton?: boolean;
  onClick?: () => void;
  cancelClick?: () => void;
}

export const BtnInGroupeSaveCancelMui = ({
  textCancelButton,
  textButton,
  isValidButtonBack,
  isValidInButton = false,
  cancelClick,
  onClick,
}: BtnInGroupeSaveCancelMuiType) => {
  return (
    <div className={s.sendDataForm}>
      <div className={s.btnWrapper}>
        <ButtonBackMui textCancelButton={textCancelButton} cancelClick={cancelClick} />
      </div>
      <div className={s.btnWrapper}>
        <ButtonSubmitMui onClick={onClick} textButton={textButton} isValidInButton={isValidInButton} />
      </div>
    </div>
  );
};
