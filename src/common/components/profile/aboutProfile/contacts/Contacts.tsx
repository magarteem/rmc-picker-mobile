import { AboutProfileSkillsLayout } from "../../../../layout/aboutProfileSkillsLayout/AboutProfileSkillsLayout";
import cn from "classnames";
import s from "../aboutProfile.module.scss";

interface ContactsType {
 phone: string;
 email: string;
 webSite: string;
}

export const Contacts = ({ phone, email, webSite }: ContactsType) => {
 return (
  <AboutProfileSkillsLayout skillsCategoryTitle="Контакты">
   {phone && (
    <a href={`tel:${phone}`} className={s.styleAbout}>
     <span className={s.titleSpan}>Телефон:</span>
     <span className={s.underline}>{phone}</span>
    </a>
   )}

   {email && (
    <a href={`mailto:${email}`} className={s.styleAbout}>
     <span className={s.titleSpan}>E-mail:</span>
     <span className={s.underline}>{email}</span>
    </a>
   )}

   {webSite && (
    <a target="_blank" rel="noreferrer" href={`${webSite}`} className={s.styleAbout}>
     <span className={s.titleSpan}>Вебсайт:</span>
     <span className={cn(s.underline, s.siteColor)}>{webSite}</span>
    </a>
   )}
  </AboutProfileSkillsLayout>
 );
};
