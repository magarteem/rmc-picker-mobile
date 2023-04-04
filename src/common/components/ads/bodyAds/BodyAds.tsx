import noAvatar from "../../../../assets/icons/noAvatar.svg";
import Avatar from "@mui/material/Avatar";
import { dateDeclension } from "../../../../helpers/dateDeclension";
import { GroupeToolsAndGenreChips } from "../groupeToolsAndGenreChips/GroupeToolsAndGenreChips";
import { ResultAdsTypeResponse } from "../../../../modules/ads/types/responseAdsType";
import s from "./bodyAds.module.scss";
import { NavLink } from "react-router-dom";

interface BodyAdsType {
 x: ResultAdsTypeResponse;
}

export const BodyAds = ({ x }: BodyAdsType) => {
 return (
  <div className={s.bodyAds}>
   <div className={s.flexPositions}>
    <NavLink to={"/"} className={s.avatarBlock}>
     <Avatar alt="avatar" src={x.form.avatar?.uri || noAvatar} />
    </NavLink>

    <div className={s.city}>
     <h3>
      {x.city?.title}
      {x.form.address && (
       <>
        {`${x.form.address && ", "}`}
        {`${x.form.address}`}
       </>
      )}
     </h3>
     <p>{x.form.name}</p>
    </div>
   </div>

   {(x.instruments || x.genres) && (
    <div className={s.skills}>
     <GroupeToolsAndGenreChips tools={x.instruments} genre={x.genres} />
    </div>
   )}

   <div className={s.about}>{x.description}</div>
   <div className={s.publicationDate}>{`Опубликовано ${dateDeclension(
    new Date(x.createdTime).getTime()
   )}`}</div>
  </div>
 );
};
