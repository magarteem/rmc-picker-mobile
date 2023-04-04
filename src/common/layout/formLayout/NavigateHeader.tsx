import { Link } from "react-router-dom";
import { RouteNames } from "../../../core/router/RouteNames";
import clearIcon from "../../../assets/icons/clearIcon.svg";
import { ArrowBtnStepsBack } from "../../components/navigateButton/ArrowBtnStepsBack";
import s from "./navigateHeader.module.scss";

interface NavigateHeaderType {
 textLabel: string;
 closed?: boolean;
 arrowCanselImgIcon: string;
}

export const NavigateHeader = ({
 arrowCanselImgIcon,
 textLabel,
 closed,
}: NavigateHeaderType) => {
 return (
  <div className={s.navigateHeader}>
   <div className={s.titleNavigation}>
    <ArrowBtnStepsBack cancelImgIcon={arrowCanselImgIcon} />
    <p>{textLabel}</p>
   </div>

   <div className={s.closed}>
    {closed && (
     <Link to={RouteNames.SETTINGS}>
      <img src={clearIcon} alt={clearIcon} />
     </Link>
    )}
   </div>
  </div>
 );
};
