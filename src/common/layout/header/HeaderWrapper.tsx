import { ReactNode } from "react";
import cn from "classnames";
import s from "./headerWrapper.module.scss";

interface HeaderWrapperType {
 children: ReactNode;
 srcPhoto: string | undefined;
}

export const HeaderWrapper = ({ children, srcPhoto }: HeaderWrapperType) => {
 const style = {
  backgroundImage: srcPhoto && `url(${srcPhoto})`,
 };

 return (
  <section className={s.headerWrapper}>
   <div className={s.positionImg}>
    <div className={s.backgroundImg}>
     <div
      className={cn(s.reliativ130, {
       [s.backgroundActive]: srcPhoto,
      })}
      style={style}
     ></div>
    </div>
    {children}
   </div>
  </section>
 );
};
