import { CardsLayoutItem } from "../../../layout/cardsLayoutItem/CardsLayoutItem";
import { SkillsLayoutTools } from "../../profile/aboutProfile/skills/SkillsLayoutTools";
import { SkillsLayoutGenre } from "../../profile/aboutProfile/skills/SkillsLayoutGenre";
import { ButtonlActionApplication } from "../buttonlActionApplication/ButtonlActionApplication";
import { dateDeclension } from "../../../../helpers/dateDeclension";
import { HeaderCardsIncoming } from "../headerCardsIncoming/HeaderCardsIncoming";
import { useOutletContext } from "react-router-dom";
import {
 ResponseIncomingType,
 ResultIncomingTypeResponse,
} from "../../../../modules/notification/types/responseNotificationType";
import s from "./incomingNotification.module.scss";
import { InButton } from "../../../ui-elements/button/InButton";

export const IncomingNotification = () => {
 const [, , dataIncoming, isLoadingIncoming]: [
  undefined,
  undefined,
  ResponseIncomingType,
  boolean
 ] = useOutletContext();

 if (isLoadingIncoming) return null;

 return (
  <>
   {dataIncoming.results.length === 0 && (
    <InButton textButton="Нет подписчиков" isValidInButton={false} />
   )}
   {dataIncoming.results.map((x: ResultIncomingTypeResponse) => (
    <CardsLayoutItem key={x.id}>
     <div className={s.addGapStyle}>
      <HeaderCardsIncoming key={x.id} x={x} />

      {x.triggerForm?.instruments.length > 0 && (
       <div className={s.reStyleImportant}>
        <SkillsLayoutTools skillsDataItem={x.triggerForm.instruments} skillsCategoryTitle="" />
       </div>
      )}

      {x?.triggerForm?.genres.length > 0 && (
       <div className={s.reStyleImportant}>
        <SkillsLayoutGenre skillsDataItem={x.triggerForm.genres} skillsCategoryTitle="" />
       </div>
      )}

      <div className={s.publicationDate}>{`Отправлена ${dateDeclension(
       new Date(x.announcement?.createdDate).getTime()
      )}`}</div>

      <ButtonlActionApplication x={x} />
     </div>
    </CardsLayoutItem>
   ))}
  </>
 );
};
