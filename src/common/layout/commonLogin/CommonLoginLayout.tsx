import { ReactNode } from "react";
import s from "./commonLoginLayout.module.scss";

interface CommonLoginLayoutType {
 children: ReactNode;
}

export const CommonLoginLayout = ({
 children,
}: CommonLoginLayoutType) => {
 return (
  <section className={s.commonLoginLayout}>
   {children}
  </section>
 );
};
