import { EnumAnnouncementStatus } from "../../../../types/PROFILE/enum/EnumAnnouncementStatus";
import { Pending } from "./action/Pending";
import { Received } from "./action/Received";
import { Rejected } from "./action/Rejected";
import s from "./waitingActionButton.module.scss";

interface WaitingActionButtonType {
 status: string;
 userTargetIdForm: string;
}

export const WaitingActionButton = ({ status, userTargetIdForm }: WaitingActionButtonType) => {
 return (
  <div className={s.pending}>
   {status === EnumAnnouncementStatus.PENDING && <Pending />}
   {status === EnumAnnouncementStatus.APPROVED && (
    <Received status={status} userTargetIdForm={userTargetIdForm} />
   )}
   {status === EnumAnnouncementStatus.REJECTED && <Rejected />}
  </div>
 );
};
