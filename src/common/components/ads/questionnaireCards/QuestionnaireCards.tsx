import noAvatar from "../../../../assets/icons/noAvatar.svg";
import { ReactComponent as ArrowCanselImgIcon } from "../../../../assets/icons/clearIcon.svg";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { RouteNames } from "../../../../core/router/RouteNames";
import { GroupeToolsAndGenreChips } from "../groupeToolsAndGenreChips/GroupeToolsAndGenreChips";
import { calculateAge } from "../../../../helpers/calculateAge";
import { AllFormsType } from "../../../../modules/user/types/responseSearchAllForms";
import s from "./questionnaireCards.module.scss";

const formatter = new Intl.NumberFormat("ru", {
 style: "unit",
 unit: "year",
 unitDisplay: "long",
});

interface QuestionnaireCardsType {
 x: AllFormsType;
}

export const QuestionnaireCards = ({ x }: QuestionnaireCardsType) => {
 console.log(x);
 return (
  <div className={s.questionnaireCards}>
   <div className={s.headerQuestionnaireCards}>
    <Link to={`${RouteNames.OTHER_PROFILE_USER}/${x.formId}`} className={s.author}>
     <div className={s.avatar}>
      <Avatar alt="avatar" src={x.avatar?.uri ?? noAvatar} />
     </div>
     <div className={s.infoAuthor}>
      <h2 className={s.name}>{x.name}</h2>

      <span className={s.visit}>
       {`${x.city?.title ?? ""}
       ${x.city ? ", " : ""}
        ${
         x.birthday !== "0001-01-01" &&
         formatter.format(+calculateAge(new Date(x.birthday).getTime() || 0))
        }`}
      </span>
     </div>
    </Link>

    <div className={s.buttonAction}>
     <ArrowCanselImgIcon />
    </div>
   </div>

   {(x.instruments || x.genres) && (
    <div className={s.mainQuestionnaireCards}>
     <GroupeToolsAndGenreChips tools={x?.instruments} genre={x?.genres} />
    </div>
   )}
  </div>
 );
};
