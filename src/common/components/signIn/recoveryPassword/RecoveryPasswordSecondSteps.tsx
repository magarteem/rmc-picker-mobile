import { RecoveryCreateNewPassForm } from "../../../../modules/authorization/RecoveryCreateNewPassForm";
import { RecoveryInformation } from "../recoveryInformation/RecoveryInformation";

export const RecoveryPasswordSecondSteps = () => {
  return (
    <>
      <RecoveryInformation
        title="УСТАНОВИТЬ НОВЫЙ ПАРОЛЬ"
        message="Напишите ваш новый пароль"
      />

      <RecoveryCreateNewPassForm />
    </>
  );
};
