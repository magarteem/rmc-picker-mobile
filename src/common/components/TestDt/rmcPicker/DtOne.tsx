import { FormLayoutCreateADS } from "../../../layout/formLayoutCreateADS/FormLayoutCreateADS";
import arrowCanselImgIcon from "../../../../assets/icons/clearIcon.svg";
import { DtOneForm } from "./DtOneForm";

export const DtOne = () => {
 return (
  <FormLayoutCreateADS textLabel="Создать  новость" arrowCanselImgIcon={arrowCanselImgIcon}>
   <DtOneForm />
  </FormLayoutCreateADS>
 );
};
