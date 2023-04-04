import { RecoveryPassGetInstructionsForm } from "../../../../modules/authorization/RecoveryPassGetInstructionsForm";
import { RecoveryInformation } from "../recoveryInformation/RecoveryInformation";

export const RecoveryPasswordFirstSteps = () => {
 return (
  <>
   <RecoveryInformation
    title="Напишите ваш EMAIL"
    message="Мы отправим вам инструкцию, как изменить ваш пароль"
   />

   <RecoveryPassGetInstructionsForm />
  </>
 );
};
