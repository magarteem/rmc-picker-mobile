import { ContactsType } from "../../../../types/PROFILE/accountMainGlobalType";
import s from "./adsPageOne.module.scss";

interface ContactsElementType {
 contacts: ContactsType;
}

export const ContactsElement = ({ contacts }: ContactsElementType) => {
 const calcTypeContact = () => {
  switch (contacts.contactType) {
   case "phone":
    return "Телефон: ";
   case "email":
    return "Email: ";
   case "web-site":
    return "Web страница: ";
  }
 };

 return (
  <div className={s.styleAbout}>
   <span className={s.titleSpan}>{calcTypeContact()}</span>
   {contacts.value}
  </div>
 );
};
