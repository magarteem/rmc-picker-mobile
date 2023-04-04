import { ReactNode } from "react";
import s from "./experienceEducationLayout.module.scss";

interface ExperienceEducationLayoutType {
  children: ReactNode;
  skillsCategoryTitle: string;
}

export const ExperienceEducationLayout = ({ skillsCategoryTitle, children }: ExperienceEducationLayoutType) => {
  return (
    <div className={s.skills}>
      <div className={s.profileData}>
        <h2>{skillsCategoryTitle}</h2>

        <div className={s.skills_item}>{children}</div>
      </div>
    </div>
  );
};
