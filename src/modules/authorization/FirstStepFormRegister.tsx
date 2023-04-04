import { useState } from "react";
import eye_open from "../../assets/icons/eye_open.webp";
import eye_close from "../../assets/icons/eye_close.webp";
import {
 Controller,
 useFormContext,
} from "react-hook-form";
import { InButton } from "../../common/ui-elements/button/InButton";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../core/router/RouteNames";
import { RegistrationQuestionLink } from "../../common/components/signIn/registrationQuestion/RegistrationQuestionLink";
import s from "./style/firstStepFormRegister.module.scss";
import { Input } from "../../common/ui-elements/Input/Input";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { authThunkRegister } from "./authThunkRegister";

export const FirstStepFormRegister = () => {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();

 const {
  trigger,
  control,
  watch,
  formState: { errors },
 } = useFormContext();

 const nextStepRegister = async (data: string[]) => {
  const regData = {
   email: watch(data[0]),
   password: watch(data[1]),
  };

  const result = await trigger(data);
  if (!result) return;
  dispatch(authThunkRegister(regData));
  navigate(RouteNames.REG_TYPE_ACCOUNT);
 };

 const [eye, setEye] = useState(false);
 const toggleEye = () => setEye((prev) => !prev);

 const watchHandler = (
  watches: string,
  eye: boolean,
  toggle: () => void
 ) =>
  watches.length > 0 && (
   <img
    onClick={toggle}
    className={s.see}
    src={eye ? eye_open : eye_close}
    alt={eye ? eye_open : eye_close}
   />
  );

 return (
  <div className={s.wrapperFirstFormRegister}>
   <div>
    <div className={s.styleInput}>
     <h2 className={s.title}>Email</h2>

     <Controller
      name="email"
      control={control}
      rules={{
       required: "Email обязателен",
       pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Это не Email",
       },
      }}
      render={({ field: { onChange, value } }) => (
       <Input
        inputValue={value}
        type="text"
        placeholder="Выберите Email"
        errors={errors.email && errors.email.message}
        errorBackgroundOrange={errors.email}
        onChange={onChange}
       />
      )}
     />
    </div>

    <div className={s.styleInput}>
     <h2 className={s.title}>Пароль</h2>
     <Controller
      name="password"
      control={control}
      rules={{
       required: "Обязательное поле",
       minLength: {
        value: 3,
        message: "Не менее 3х символов",
       },
      }}
      render={({ field: { onChange, value } }) => (
       <>
        <Input
         inputValue={value}
         type={eye ? "text" : "password"}
         placeholder="Выберите пароль"
         errors={errors.password && errors.password.message}
         errorBackgroundOrange={errors.password}
         onChange={onChange}
        >
         {watchHandler(watch("password"), eye, toggleEye)}
        </Input>
       </>
      )}
     />
    </div>

    <div className={s.styleBtn}>
     <InButton
      textButton="Продолжить"
      onClick={() =>
       nextStepRegister(["email", "password"])
      }
     />
    </div>
   </div>

   <RegistrationQuestionLink
    linkTo={RouteNames.LOGIN}
    lintText="ВОЙТИ"
    questionText="Уже есть аккаунт?"
   />
  </div>
 );
};
