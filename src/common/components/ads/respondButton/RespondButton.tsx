import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../../core/redux/app/hooks";
import { RouteNames } from "../../../../core/router/RouteNames";
import { useSendAnnouncementReplyMutation, useSendVacancyReplyMutation } from "../../../../modules/notification/notificationQuery";
import { AnnouncementStatusResponseType } from "../../../../types/PROFILE/accountMainGlobalType";
import { EnumAnnouncementStatus } from "../../../../types/PROFILE/enum/EnumAnnouncementStatus";
import { ButtonSubmitMui } from "../../../mui-element/ButtonSubmitMui";
import { Pending } from "../../notification/waitinActionButton/action/Pending";
import { WaitingActionButton } from "../../notification/waitinActionButton/WaitingActionButton";
import s from "./respondButton.module.scss";

interface RespondButtonType {
  idPost: string;
  autorThisPost: string;
  statusAds: AnnouncementStatusResponseType;
}

export const RespondButton = ({ idPost, autorThisPost, statusAds }: RespondButtonType) => {
  const myForm = useAppSelector((state) => state.userSliceReducer.isActiveForms);
  const idMyForm = JSON.parse(myForm).id;
  let location = useLocation().pathname;

  const [sendVacancyReply, { isSuccess: isSuccessVacancy, isError: isErrorVacancy }] = useSendVacancyReplyMutation();
  const [sendAnnouncementReply, { isSuccess: isSuccessAds, isError: isErrorAds }] = useSendAnnouncementReplyMutation();

  const respondAds = () => {
    if (location === `${RouteNames.ADS}`) {
      sendVacancyReply({
        idPost,
        idMyForm,
      }).unwrap();
    } else {
      sendAnnouncementReply({
        idPost,
        idMyForm,
      }).unwrap();
    }
  };

  return (
    //<div className={s.respond}>
    <div className={s.respond}>
      {isSuccessAds || isSuccessVacancy ? (
        //<div className={s.pending}>
        <ButtonSubmitMui isValidInButton={true} textButton="Ожидайте ответа" />
      ) : //</div>
      isErrorVacancy || isErrorAds ? (
        //<div className={s.pending}>
        <ButtonSubmitMui onClick={() => respondAds} isValidInButton={false} textButton="Ошибка, повторить" />
      ) : //</div>
      statusAds === EnumAnnouncementStatus.NO_REPLY ? (
        //<div className={s.pending}>
        <ButtonSubmitMui onClick={respondAds} isValidInButton={false} textButton="Откликнуться" />
      ) : (
        //</div>
        //<Pending />
        <WaitingActionButton status={statusAds} userTargetIdForm={autorThisPost} />
      )}
    </div>
  );
};
