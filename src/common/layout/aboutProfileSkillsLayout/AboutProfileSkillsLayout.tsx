import { ReactNode } from "react";
import s from "./aboutProfileSkillsLayout.module.scss";

interface AboutProfileSkillsLayoutType {
 skillsCategoryTitle: string;
 children?: ReactNode;
}

export const AboutProfileSkillsLayout = ({
 skillsCategoryTitle,
 children,
}: AboutProfileSkillsLayoutType) => {
 return (
  <div className={s.skills}>
   <div className={s.profileDataFields}>
    <h2>{skillsCategoryTitle}</h2>

    <div className={s.skills_item}>{children}</div>
   </div>
  </div>
 );
};
