import { Controller, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BtnInFormSaveCancel } from "../../common/components/navigateButton/BtnInFormSaveCancel";
import { ReactSelectElement } from "../../common/ui-elements/react-select/ReactSelectElement";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { RouteNames } from "../../core/router/RouteNames";
import { authThunkCreateMyTypeForms } from "../authorization/authThunkCreateMyTypeForms";
import { convertOptions } from "../authorization/helpers/convertOptions";
import { optionsTypeAccount } from "../authorization/service/BD";
import s from "./style/secondStepFormRegister.module.scss";

export const AddTypeAccountStepSelect = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const customStyles = {
    singleValue: (provided: any) => ({
      ...provided,
      fontSize: `14px !important`,
    }),
  };

  const nextStepRegister = () => {
    dispatch(authThunkCreateMyTypeForms(watch("type_account").value));
    navigate(`/${RouteNames.ADD_NEW_ACCOUNT}/${RouteNames.REG_CREATE_ACCOUNT}`);
  };

  return (
    <div className={s.secondStepFormRegister}>
      <h2>Тип аккаунта</h2>
      <Controller
        name="type_account"
        control={control}
        rules={{
          required: "тип обязателен",
        }}
        render={({ field: { onChange, ref, ...field } }) => (
          <ReactSelectElement
            ItemRef={ref}
            placeholder="Выбрать"
            options={convertOptions(optionsTypeAccount)}
            //options={optionsTypeAccount}
            onChange={onChange}
            errors={errors.type_account}
            customStyles={customStyles}
            {...field}
          />
        )}
      />

      <div className={s.btnFormWrapper}>
        <BtnInFormSaveCancel textCancelButton="Назад" textButton="Далее" isValidInButton={!!!watch("type_account")} onClick={nextStepRegister} />
      </div>
    </div>
  );
};
