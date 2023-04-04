import { LoginSocial } from "../common/components/signIn/loginSocial/LoginSocialNetwork";
import { RegistrationQuestionLink } from "../common/components/signIn/registrationQuestion/RegistrationQuestionLink";
import { CommonLoginLayout } from "../common/layout/commonLogin/CommonLoginLayout";
import { WrapperFullScreen } from "../common/layout/wrapperFullScreen/WrapperFullScreen";
import { RouteNames } from "../core/router/RouteNames";
import { FormLogin } from "../modules/authorization/FormLogin";
import s from "./styles/loginPage.module.scss";

export const Login = () => {
  return (
    <WrapperFullScreen>
      <CommonLoginLayout>
        <div className={s.fieldLogin}>
          <FormLogin />

          <LoginSocial />
        </div>

        <RegistrationQuestionLink questionText="Нет аккаунта?" linkTo={RouteNames.REGISTER} lintText="ЗАРЕГИСТРИРОВАТЬСЯ" />
      </CommonLoginLayout>
    </WrapperFullScreen>
  );
};
