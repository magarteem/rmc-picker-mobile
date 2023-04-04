import { Link } from "react-router-dom";
import { ReactComponent as ArrowCanselImgIcon } from "../assets/icons/clearIcon.svg";
import moon from "../assets/icons/moon.svg";
import infoIcon from "../assets/icons/infoIcon.svg";
import logOutIcon from "../assets/icons/logOutIcon.svg";
import { useAppDispatch } from "../core/redux/app/hooks";
import { logout } from "../modules/authorization/authSlice";
import { InButton } from "../common/ui-elements/button/InButton";
import { RouteNames } from "../core/router/RouteNames";
import { ButtonInstallPwa } from "../modules/pwa/ButtonInstallPwa";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import s from "./styles/settings.module.scss";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { SwitchMui } from "../common/mui-element/Switch";

export const Settings = () => {
 const dispatch = useAppDispatch();
 const logoutHandle = () => dispatch(logout());

 return (
  <StylesFullScreen>
   <HeaderStylesWrapper
    cancelImgIcon={
     <div className={s.customStyleSvg}>
      <ArrowCanselImgIcon />
     </div>
    }
    textLabel="Настройки"
   />

   <section className={s.mainSettings}>
    <div className={s.buttonAction}>
     <div className={s.title}>
      <img src={moon} alt="moon" />
      <p>Ночная тема</p>
     </div>

     <SwitchMui />
    </div>

    <a className={s.buttonAction} href="mailto:support@3-tone.ru">
     <div className={s.buttonAction}>
      <div className={s.title}>
       <img src={infoIcon} alt="infoIcon" />
       <p>Написать в техподдержку</p>
      </div>
     </div>
    </a>

    <div className={s.buttonAction} onClick={logoutHandle}>
     <div className={s.buttonAction}>
      <div className={s.title}>
       <img src={logOutIcon} alt="logOutIcon" />
       <p>Выйти</p>
      </div>
     </div>
    </div>

    <div className={s.buttonAction}>
     <div className={s.buttonAction}>
      <div className={s.title}>
       <Link to="/dt-1">
        <p>Тест Dt Pickers-1</p>
       </Link>
      </div>
     </div>
    </div>
   </section>
  </StylesFullScreen>
 );
};

//return (
//  <>
//    <div className={s.settings}>
//      <Link className={s.styleBtn} onClick={logoutHandle} to={RouteNames.LOGIN}>
//        <InButton textButton="Выход" />
//      </Link>
//      <Link className={s.styleBtn} to={RouteNames.USER}>
//        <InButton textButton="Назад" />
//      </Link>
//      <ButtonInstallPwa />
//    </div>
//    <PopUpNavigateGradient />
//  </>
//);
