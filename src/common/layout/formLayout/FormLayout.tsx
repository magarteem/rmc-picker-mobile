import cancelImgIcon from "../../../assets/icons/arrowBack.svg";
import { NavigateHeader } from "./NavigateHeader";
import s from "./formLayout.module.scss";

interface FormLayoutType {
 children: React.ReactNode;
 textLabel: string;
 closed?: boolean;
}

export const FormLayout = ({
 children,
 textLabel,
 closed,
}: FormLayoutType) => {
 return (
  <div className={s.formLayout}>
   <NavigateHeader
    textLabel={textLabel}
    closed={closed}
    arrowCanselImgIcon={cancelImgIcon}
   />

   <div className={s.formFieldsWrapper}>{children}</div>
  </div>
 );
};
