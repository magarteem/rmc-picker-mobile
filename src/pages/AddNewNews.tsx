import arrowCanselImgIcon from "../assets/icons/clearIcon.svg";
import { FormLayoutCreateADS } from "../common/layout/formLayoutCreateADS/FormLayoutCreateADS";
import { AddNewNewsForm } from "../modules/timeLine/AddNewNewsForm";

export const AddNewNews = () => {
 return (
  <FormLayoutCreateADS
   textLabel="Создать  новость"
   arrowCanselImgIcon={arrowCanselImgIcon}
  >
   <AddNewNewsForm />
  </FormLayoutCreateADS>
 );
};
