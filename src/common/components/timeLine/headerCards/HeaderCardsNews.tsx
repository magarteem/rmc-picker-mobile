import { Avatar } from "@mui/material";
import { LongMenu } from "../../../mui-element/LongMenu";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import noAvatar from "../../../../assets/icons/noAvatar.svg";
import s from "./headerCardsNews.module.scss";
import {
 FormNewsType,
 NewsResultType,
} from "../../../../modules/timeLine/types/responseNewsType";
import { selectTypeNews } from "../../../../modules/timeLine/service/optionСategoryBD";

interface HeaderCardsType {
 author: FormNewsType;
 timeLinePost: NewsResultType;
 menu?: boolean;
 options?: any;
}

export const HeaderCardsNews = ({
 author,
 menu = true,
 timeLinePost,
 options,
}: HeaderCardsType) => {
 return (
  <div className={s.headerCardsNews}>
   <Link
    to={`${RouteNames.OTHER_PROFILE_USER}/${timeLinePost.form.formId}`}
    className={s.author}
   >
    <div className={s.avatar}>
     <Avatar
      alt="Remy Sharp"
      src={author?.avatar ? author.avatar.uri : noAvatar}
     />
    </div>
    <div className={s.infoAuthor}>
     <h2 className={s.name}>{author?.name}</h2>
     <span className={s.visit}>
      {selectTypeNews[timeLinePost.type]}
     </span>
    </div>
   </Link>

   {menu && (
    <div className={s.buttonAction}>
     <LongMenu options={options} />
    </div>
   )}
  </div>
 );
};
