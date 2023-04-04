import hourIcons from "../../../../../assets/icons/hourIcons.svg";
import s from "./pending.module.scss";

export const Pending = () => {
 return (
  <div className={s.process}>
   <img src={hourIcons} alt="hourIcons" />
   <span>В ожидании ответа</span>
  </div>
 );
};
