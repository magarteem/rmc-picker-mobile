import { NavigateHeader } from "../formLayout/NavigateHeader";
import s from "./formLayoutCreateADS.module.scss";

interface FormLayoutCreateADSType {
 children: React.ReactNode;
 textLabel: string;
 arrowCanselImgIcon: string;
 closed?: boolean;
}

export const FormLayoutCreateADS = ({
 children,
 textLabel,
 arrowCanselImgIcon,
 closed = false,
}: FormLayoutCreateADSType) => {
 return (
  <div className={s.formLayoutCreateADS}>
   <NavigateHeader
    textLabel={textLabel}
    closed={closed}
    arrowCanselImgIcon={arrowCanselImgIcon}
   />

   <div className={s.formFieldsWrapper}>{children}</div>
  </div>
 );
};
