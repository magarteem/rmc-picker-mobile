import { Outlet } from "react-router-dom";
import s from "./firstToStepsLayout.module.scss";

export const FirstToStepsLayout = () => {
  return (
    <div className={s.firstToStepsLayout}>
      <Outlet />
    </div>
  );
};
