import { ReactNode } from "react";
import s from "./wrapperFullScreen.module.scss";

interface WrapperFullScreenType {
 children: ReactNode;
}
export const WrapperFullScreen = ({
 children,
}: WrapperFullScreenType) => {
 return (
  <section className={s.wrapperFullScreen}>
   {children}
  </section>
 );
};
