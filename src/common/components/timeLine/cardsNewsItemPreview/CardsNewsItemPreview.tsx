import { RouteNames } from "../../../../core/router/RouteNames";
import { getThisPageURL } from "../../../../helpers/getThisPageURL";
import { useDeleteNewsMutation } from "../../../../modules/timeLine/getNewsListQuery";
import { NewsResultType } from "../../../../modules/timeLine/types/responseNewsType";
import { OptionLongMenuType } from "../../../../modules/timeLine/types/timlineSliceType";
import { BodyCards } from "../bodyCards/BodyCards";
import { HeaderCardsNews } from "../headerCards/HeaderCardsNews";
import s from "./cardsNewsItemPreview.module.scss";

export interface CardsNewsItemPreviewType {
 itemDataNews: NewsResultType;
 myProfileKey: string[];
}

export const CardsNewsItemPreview = ({ itemDataNews, myProfileKey }: CardsNewsItemPreviewType) => {
 const [deleteNews] = useDeleteNewsMutation();

 const deleteThisNews = () => {
  deleteNews(itemDataNews.id);
 };

 const complain = () => (window.location.href = "mailto:support@3-tone.ru");

 // вынести в useOptionsLongMenu
 let options: OptionLongMenuType[] = [
  {
   label: "Скопировать ссылку",
   link: "",
   action: () => getThisPageURL(),
  },
 ];

 if (myProfileKey.includes(itemDataNews.form.formId)) {
  options = [
   ...options,
   {
    label: "Удалить",
    link: RouteNames.NEWS,
    action: deleteThisNews,
   },
  ];
 } else {
  options = [
   ...options,
   {
    label: "Пожаловаться",
    link: "",
    action: complain,
   },
  ];
 }

 return (
  <div className={s.cardsItemWrapp} key={itemDataNews.id}>
   <div className={s.customStyleA}>
    <HeaderCardsNews author={itemDataNews.form} timeLinePost={itemDataNews} options={options} />
   </div>
   <BodyCards
    timeLinePost={itemDataNews}
    id_news={itemDataNews.id}
    date={new Date(itemDataNews.createdDate).getTime()}
   />
  </div>
 );
};
//{
// label: "Редактировать",
// link: `${RouteNames.CHANGE_THIS_NEWS}/${itemDataNews.id}`,
// action: changeThisNews,
//},

// const changeThisNews = () => (
//  <Navigate to={RouteNames.CHANGE_THIS_NEWS} />
// );
