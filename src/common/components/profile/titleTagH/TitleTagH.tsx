import React from "react";
import s from "./titleTagH.module.scss";

interface TitleTagHType {
 titleH: string;
}
export const TitleTagH = ({ titleH }: TitleTagHType) => {
 return (
  <div className={s.requirements}>
   <h2>{titleH}</h2>
  </div>
 );
};
