import { ReactNode } from "react";
import s from "./stylesFullScreen.module.scss";

interface StylesFullScreenType {
 children: ReactNode;
}
export const StylesFullScreen = ({
 children,
}: StylesFullScreenType) => {
 return (
  <div className={s.stylesFullScreen}>{children}</div>
 );
};
