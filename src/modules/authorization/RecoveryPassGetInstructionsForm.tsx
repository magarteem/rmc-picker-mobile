import { Controller, useForm } from "react-hook-form";
import { InButton } from "../../common/ui-elements/button/InButton";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../core/router/RouteNames";
import s from "./style/recoveryPassGetInstructionsForm.module.scss";
import { RecoveryPassGetInstructionsFormType } from "./types/recoveryPasswordType";
import { Input } from "../../common/ui-elements/Input/Input";

export const RecoveryPassGetInstructionsForm = () => {
 const navigate = useNavigate();

 const {
  control,
  handleSubmit,
  formState: { errors },
 } = useForm<RecoveryPassGetInstructionsFormType>({
  mode: "onBlur",
  defaultValues: {
   email: "",
  },
 });

 const onSubmit = (
  data: RecoveryPassGetInstructionsFormType
 ) => {
  // dispatch(authThunkLogin(data));
  navigate(`${RouteNames.RECOVERY_CREATE_PASSWORD}`, {
   replace: true,
  });
 };

 return (
  <form
   className={s.recoveryPassword}
   onSubmit={handleSubmit(onSubmit)}
  >
   <div className={s.styleInput}>
    <h2 className={s.title}>Email</h2>
    <Controller
     name="email"
     control={control}
     rules={{
      required: "Введите Email",
      pattern: {
       value: /\S+@\S+\.\S+/,
       message: "Это не Email",
      },
     }}
     render={({ field: { onChange } }) => (
      <Input
       type="text"
       placeholder="Email"
       errors={errors.email && errors.email.message}
       errorBackgroundOrange={errors.email}
       onChange={onChange}
      />
     )}
    />
   </div>

   <div className={s.styleBtn}>
    <InButton textButton="Отправить" />
   </div>
  </form>
 );
};
