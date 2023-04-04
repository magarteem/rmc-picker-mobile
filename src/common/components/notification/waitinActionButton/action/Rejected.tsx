import lockClosed from "../../../../../assets/icons/lockClosed.svg";
import s from "./rejected.module.scss";

export const Rejected = () => {
 return (
  <div className={s.rejected}>
   <img src={lockClosed} alt="lockClosed" />
   <span>Отклонена</span>
  </div>
 );
};
