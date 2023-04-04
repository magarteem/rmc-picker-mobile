import { Outlet } from "react-router-dom";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";

export const Notification = () => (
 <>
  <Outlet />
  <PopUpNavigateGradient />
 </>
);
