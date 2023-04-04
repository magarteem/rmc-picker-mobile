import { useState } from "react";
import eye_open from "../../assets/icons/eye_open.webp";
import eye_close from "../../assets/icons/eye_close.webp";
import { Controller, useForm } from "react-hook-form";
import { InButton } from "../../common/ui-elements/button/InButton";
import { Link, useNavigate } from "react-router-dom";
import {
 useAppDispatch,
 useAppSelector,
} from "../../core/redux/app/hooks";
import { authThunkLogin } from "./authThunkLogin";
import { LoginRequestType } from "./types/authType";
import { RouteNames } from "../../core/router/RouteNames";
import s from "./style/formLogin.module.scss";
import { Input } from "../../common/ui-elements/Input/Input";

export const FormLogin = () => {
 const dispatch = useAppDispatch();
 const loginData = useAppSelector(
  (state) => state.authSliceReducer.error
 );
 // const navigate = useNavigate();
 console.log(loginData);
 const [eye, setEye] = useState(false);
 const toggleEye = () => setEye((prev) => !prev);

 const {
  control,
  handleSubmit,
  watch,
  formState: { errors },
 } = useForm<LoginRequestType>({
  mode: "onBlur",
  defaultValues: {
   email: "",
   password: "",
  },
 });

 const onSubmit = (data: LoginRequestType) => {
  dispatch(authThunkLogin(data));
  // navigate(RouteNames.HOME, { replace: true });
 };

 return (
  <form
   className={s.formLogin}
   onSubmit={handleSubmit(onSubmit)}
  >
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

   <div className={s.styleInput}>
    <h2 className={s.title}>Пароль</h2>
    <Controller
     name="password"
     control={control}
     rules={{ required: "Обязательное поле" }}
     render={({ field: { onChange } }) => (
      <Input
       type={eye ? "text" : "password"}
       placeholder="Password"
       errors={errors.password && errors.password.message}
       errorBackgroundOrange={errors.password}
       onChange={onChange}
      >
       {watch("password").length > 0 && (
        <img
         onClick={toggleEye}
         className={s.see}
         src={eye ? eye_open : eye_close}
         alt={eye ? eye_open : eye_close}
        />
       )}
      </Input>
     )}
    />
   </div>

   <Link
    to={RouteNames.RECOVERY_PASSWORD}
    className={s.forgetPassword}
   >
    Забыли пароль?
   </Link>

   <div className={s.styleBtn}>
    <InButton textButton="ВОЙТИ" />
   </div>
  </form>
 );
};
