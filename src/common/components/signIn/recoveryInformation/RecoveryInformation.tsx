import s from "./recoveryInformation.module.scss";

interface RecoveryInformationType {
  title: string;
  message: string;
}
export const RecoveryInformation = ({
  title,
  message,
}: RecoveryInformationType) => {
  return (
    <div className={s.recoveryInformation}>
      <h1>{title}</h1>
      <div className={s.recoveryMessage}>{message}</div>
    </div>
  );
};
