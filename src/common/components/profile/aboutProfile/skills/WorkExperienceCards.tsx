import { ExperienceEducationLayout } from "../../../../layout/experienceEducationLayout/ExperienceEducationLayout";
import s from "./workExperienceCard.module.scss";

interface WorkExperienceType {
 workExperience: string | undefined;
 skillsCategoryTitle: string;
}

export const WorkExperienceCard = ({ workExperience, skillsCategoryTitle }: WorkExperienceType) => {
 return (
  <ExperienceEducationLayout skillsCategoryTitle={skillsCategoryTitle}>
   {Array.isArray(workExperience) ? (
    workExperience.map((item) => {
     return (
      <div key={item.period} className={s.workExperience}>
       <div className={s.itemImg}>
        <img src={item.img} alt={item.img} />
       </div>
       <div className={s.text}>
        <p>{item.institution}</p>
        <p>{item.period}</p>
       </div>
      </div>
     );
    })
   ) : !!workExperience ? (
    <span className={s.textNotes}>{workExperience}</span>
   ) : (
    <span className={s.textNotes}>Не указан</span>
   )}
  </ExperienceEducationLayout>
 );
};
