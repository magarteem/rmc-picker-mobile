import { ReactNode } from "react";
import s from "./btnUserContact.module.scss";

interface BtnUserType {
 children: ReactNode;
 onClick: () => void;
}

export const BtnUserContact = ({ children, onClick }: BtnUserType) => {
 return (
  <div onClick={onClick} className={s.btnWrapperPosition}>
   {children}
  </div>
 );
};
