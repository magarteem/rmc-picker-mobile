import { usePWAInstall } from "react-use-pwa-install";
import s from "./pwa.module.scss";

export const ButtonInstallPwa = () => {
 const install = usePWAInstall();

 return (
  install && (
   <button className={s.pwa} onClick={install}>
    Установить как приложение
   </button>
  )
 );
};
