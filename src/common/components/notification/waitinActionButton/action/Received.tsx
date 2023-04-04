import lockOpen from "../../../../../assets/icons/lockOpen.svg";
import { Link } from "react-router-dom";
import { ButtonSubmitMui } from "../../../../mui-element/ButtonSubmitMui";
import { RouteNames } from "../../../../../core/router/RouteNames";
import { AnnouncementStatusResponseType } from "../../../../../types/PROFILE/accountMainGlobalType";
import s from "./received.module.scss";

interface ReceivedType {
 status: AnnouncementStatusResponseType;
 userTargetIdForm: string;
}

export const Received = ({ status, userTargetIdForm }: ReceivedType) => {
 return (
  <div className={s.received}>
   <div className={s.status}>
    <img src={lockOpen} alt="lockOpen" />
    <span>Принята</span>
   </div>

   <Link to={`${RouteNames.OTHER_PROFILE_USER}/${userTargetIdForm}`} className={s.showAuthor}>
    <div className={s.btnWrapper}>
     <ButtonSubmitMui textButton="Посмотреть анкету" isValidInButton={false} />
    </div>
   </Link>
  </div>
 );
};
