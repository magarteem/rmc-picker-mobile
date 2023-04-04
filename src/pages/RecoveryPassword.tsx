import { Outlet } from "react-router-dom";
import { CommonLoginLayout } from "../common/layout/commonLogin/CommonLoginLayout";
import { WrapperFullScreen } from "../common/layout/wrapperFullScreen/WrapperFullScreen";
import s from "./styles/recoveryPassword.module.scss";

export const RecoveryPassword = () => {
 return (
  <WrapperFullScreen>
   <CommonLoginLayout>
    <div className={s.fieldLogin}>
     <Outlet />
    </div>
   </CommonLoginLayout>
  </WrapperFullScreen>
 );
};
