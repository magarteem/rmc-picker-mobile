import { useParams } from "react-router-dom";
import arrowCanselImgIcon from "../assets/icons/clearIcon.svg";
import { FormLayoutCreateADS } from "../common/layout/formLayoutCreateADS/FormLayoutCreateADS";
import { useAppSelector } from "../core/redux/app/hooks";
import { ChangeThisNewsForm } from "../modules/timeLine/ChangeThisNewsForm";
import { InitialStateTeamLineType } from "../modules/timeLine/types/timlineSliceType";

export const ChangeThisNews = () => {
 const data: InitialStateTeamLineType[] = useAppSelector(
  (state) => state.timeLineSliceReducer.timeLineData
 );

 const { change_id_news } = useParams();
 const changeDataNews = data.find(
  (x) => `${x.id}` === change_id_news
 );
 if (!changeDataNews) return <h1>Loading ...</h1>;

 return (
  <FormLayoutCreateADS
   textLabel="Редактировать новость"
   arrowCanselImgIcon={arrowCanselImgIcon}
  >
   <ChangeThisNewsForm changeDataNews={changeDataNews} />
  </FormLayoutCreateADS>
 );
};
