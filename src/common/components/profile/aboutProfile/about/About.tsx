import { ScheduleType } from "../../../../../types/PROFILE/accountMainGlobalType";
import { AboutProfileSkillsLayout } from "../../../../layout/aboutProfileSkillsLayout/AboutProfileSkillsLayout";
import s from "../aboutProfile.module.scss";

interface AboutType {
 schedule: ScheduleType | null;
 watchMisician: boolean;
 watchTeam: boolean;
 inspiration: string | string[];
 area: number | null;
}

export const About = ({ schedule, watchMisician, watchTeam, inspiration, area }: AboutType) => {
 const areaCheck = area && area > 0;

 return (
  <AboutProfileSkillsLayout skillsCategoryTitle="Описание">
   {!!schedule?.Friday && (
    <div className={s.styleAbout}>
     <span className={s.titleSpan}>Часы работы:</span>
     {`c ${schedule?.Friday[0]?.start?.slice(0, 5)} до ${schedule?.Friday[0]?.end?.slice(0, 5)}`}
    </div>
   )}

   {!!areaCheck && (
    <div className={s.styleAbout}>
     <span className={s.titleSpan}>Площадь:</span>
     {area} м. кв.
    </div>
   )}

   {(!watchMisician || !watchTeam) && inspiration && (
    <div className={s.styleAbout}>
     <span className={s.titleSpan}>О себе:</span>
     {inspiration}
    </div>
   )}
  </AboutProfileSkillsLayout>
 );
};
