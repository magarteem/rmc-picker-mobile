import { ReactNode } from "react";
import s from "./skillsCardItem.module.scss";

interface SkillsCardItemType {
  children: ReactNode;
}

export const SkillsCardItem = ({ children }: SkillsCardItemType) => {
  return (
    <div className={s.skills}>
      <div className={s.profileData}>{children}</div>
    </div>
  );
};
