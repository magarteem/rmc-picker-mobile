import { Controller } from "react-hook-form";
import cn from "classnames";
import s from "../formFields.module.scss";
import { UploadPhoto } from "./UploadPhoto";

export interface ControllerUploadAvatarType {
 control: any;
 name: string;
}

export const ControllerUploadAvatar = ({
 control,
 name,
}: ControllerUploadAvatarType) => {
 return (
  <div className={cn(s.selectField, s.autoHeight)}>
   <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value, ...field } }) => (
     <UploadPhoto onChange={onChange} value={value} />
    )}
   />
  </div>
 );
};
