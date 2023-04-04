import { memo } from "react";
import skillsIcon from "./../../../../../assets/icons/skillsIcon.svg";
import s from "./skillsLayoutMaster.module.scss";
import { InterfaceGlobalSelectType } from "../../../../../types/interfaseGlobal/interfaseGlobalSelect";
import { skillGenerator } from "../../../../../modules/vacancy/service/selectTranslation";

interface SkillsLayoutType {
 skillsDataItem: InterfaceGlobalSelectType;
 skillsCategoryTitle: string;
}

export const SkillsLayoutMaster = memo(
 ({ skillsDataItem, skillsCategoryTitle }: SkillsLayoutType) => {
  //if (skillsDataItem === "") return null;

  return (
   <div className={s.skills}>
    <div className={s.profileDataFields}>
     <h2>{skillsCategoryTitle}</h2>

     <div className={s.skills_item}>
      <div className={s.wrapperMasterInfo}>
       <div className={s.iconContainer}>
        <img src={skillsDataItem && skillGenerator[skillsDataItem.id]?.src} alt={skillsIcon} />
       </div>
       <span className={s.textNotes}>
        {skillsDataItem && skillGenerator[skillsDataItem.id]?.name}
       </span>
      </div>
     </div>
    </div>
   </div>
  );
 }
);
