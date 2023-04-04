import { Avatar } from "@mui/material";
import { LongMenu } from "../../../mui-element/LongMenu";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import s from "./headerCardsIncoming.module.scss";
import noAvatar from "../../../../assets/icons/noAvatar.svg";
import { ResultIncomingTypeResponse } from "../../../../modules/notification/types/responseNotificationType";
import { optionTypeMyAccountLowerCase } from "../../../../modules/user/helpers/optionTypeMyAccount";
import { dateDeclension } from "../../../../helpers/dateDeclension";

interface HeaderCardsType {
 menu?: boolean;
 x: ResultIncomingTypeResponse;
}

export const HeaderCardsIncoming = ({ menu = true, x }: HeaderCardsType) => {
 return (
  <div className={s.headerCardsIncoming}>
   <Link to={`${RouteNames.OTHER_PROFILE_USER}/${x.triggerForm.formId}`} className={s.author}>
    <div className={s.avatar}>
     <Avatar alt="avatar" src={x.triggerForm?.avatar ? x.triggerForm.avatar.uri : noAvatar} />
    </div>
    <div className={s.infoAuthor}>
     <h2 className={s.name}>{x.triggerForm?.name}</h2>
     <span className={s.visit}>
      {`${optionTypeMyAccountLowerCase[x.triggerForm.formType.toLowerCase()]}, ${
       x.triggerForm.city.title
      }`}
     </span>
     <p className={s.triggetInfo}>
      на
      <span>{` ${x.type === "Contact" ? "Запросит контакты" : x.announcement?.title}`}</span>
      {`, от ${dateDeclension(new Date(x.triggerForm.createdDate).getTime(), "D MMMM")}`}
     </p>
    </div>
   </Link>

   {menu && (
    <div className={s.buttonAction}>
     <LongMenu />
    </div>
   )}
  </div>
 );
};
