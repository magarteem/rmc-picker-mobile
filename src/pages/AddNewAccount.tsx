import { FormProvider, useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { WrapperFullScreen } from "../common/layout/wrapperFullScreen/WrapperFullScreen";
import { useAppDispatch } from "../core/redux/app/hooks";
import { RouteNames } from "../core/router/RouteNames";
import { getJsonParseLocalStorage } from "../helpers/getJsonParseLocalStorage";
import { ISignUpFormValues } from "../modules/authorization/types/authType";
import { putUpdateMyFormAccountData } from "../modules/user/helpers/putUpdateMyFormAccountData";
import { updateDataMyFormTypeAccountThunk } from "../modules/user/updateDataMyFormTypeAccountThunk";
import s from "./styles/registrationPage.module.scss";

export const AddNewAccount = () => {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();

 const method = useForm<ISignUpFormValues>({
  mode: "onBlur",
  defaultValues: {
   email: "",
   password: "",
   type_account: null,
   type_collective: null,
   institutionType: null,
   name_field: "",
   img_upload: "",
   city: null,
   gender: null,
   age: null,
   tool: [],
   genre: [],
   master: null,
   work_experience: "",
   portfolio_photo: [],
   education: "",
   private_settings: null,
   inspiration: "",
   web_site: "",
   email_contact: "",
   phone: "",
   area: null,
   establishment_description: "",
   from_opening_hours: null,
   to_opening_hours: null,
   address: "",
  },
 });

 const typeAccount = getJsonParseLocalStorage() || "{}";
 const onSubmit = (data: ISignUpFormValues) => {
  console.log("onSubmit", data);
  let bodyDataSend = putUpdateMyFormAccountData(data, typeAccount);

  dispatch(
   updateDataMyFormTypeAccountThunk({
    typeAccount,
    bodyDataSend,
   })
  );

  navigate(RouteNames.LOGIN, { replace: true });
 };

 return (
  <WrapperFullScreen>
   <FormProvider {...method}>
    <form noValidate className={s.formRegister} onSubmit={method.handleSubmit(onSubmit)}>
     <Outlet />
    </form>
   </FormProvider>
  </WrapperFullScreen>
 );
};
