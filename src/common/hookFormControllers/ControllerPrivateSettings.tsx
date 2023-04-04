import { Controller } from "react-hook-form";
import { profilePrivacySettings } from "../../modules/authorization/service/BD";
import { SelectElementMuiForApi } from "../mui-element/SelectElementMuiForApi";

import s from "./formFields.module.scss";

export interface ControllerPrivateSettingsType {
  control: any;
  name: string;
}

export const ControllerPrivateSettings = ({ control, name }: ControllerPrivateSettingsType) => {
  return (
    <div className={s.selectField}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: "Обязательное поле",
        }}
        render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => (
          <div className={s.wrapperBlockInput}>
            <SelectElementMuiForApi
              ItemRef={ref}
              value={value}
              placeholder="Настройки приватности анкеты"
              required={true}
              options={profilePrivacySettings}
              onChange={onChange}
              errors={errors[name]}
              {...field}
            />
          </div>
        )}
      />
    </div>
  );
};
