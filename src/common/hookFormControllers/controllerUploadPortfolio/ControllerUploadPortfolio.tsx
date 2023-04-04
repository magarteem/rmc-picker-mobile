import { Controller } from "react-hook-form";
import cn from "classnames";
import s from "../formFields.module.scss";
import { UploadPhoto } from "./UploadPhoto";

export interface ControllerUploadPortfolioType {
 control: any;
 name: string;
}

export const ControllerUploadPortfolio = ({
 control,
 name,
}: ControllerUploadPortfolioType) => {
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
