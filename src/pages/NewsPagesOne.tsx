import { useLocation, useNavigate, useOutletContext, useParams } from "react-router-dom";
import moreButtonCircle from "../assets/icons/more-button-circle.svg";
import arrow_back from "../assets/icons/arrow_back.svg";
import shareIcons from "../assets/icons/shareIcons.svg";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { OptionLongMenuType } from "../modules/timeLine/types/timlineSliceType";
import { LongMenu } from "../common/mui-element/LongMenu";
import { HeaderCardsNews } from "../common/components/timeLine/headerCards/HeaderCardsNews";
import { RouteNames } from "../core/router/RouteNames";
import { ChipsGenreItem } from "../common/ui-elements/chips/ChipsGenreItem";
import { ChipsToolItem } from "../common/ui-elements/chips/ChipsToolItem";
import { getThisPageURL } from "../helpers/getThisPageURL";
import { NewsResultType } from "../modules/timeLine/types/responseNewsType";
import { useDeleteNewsMutation } from "../modules/timeLine/getNewsListQuery";
import { selectTypeNews } from "../modules/timeLine/service/optionСategoryBD";
import { PreLoader } from "../common/components/preLoader/PreLoader";
import s from "./styles/newsPagesOne.module.scss";
import { useEffect } from "react";

export const NewsPagesOne = () => {
 const [deleteNews] = useDeleteNewsMutation();
 const [data, , , , , myProfileKey]: [
  NewsResultType[],
  undefined,
  undefined,
  undefined,
  undefined,
  string[]
 ] = useOutletContext();

 const navigate = useNavigate();
 const { id_news } = useParams();

 // const { pathname } = useLocation();
 // useEffect(() => {
 //  window.scrollTo(0, 0);
 // }, [pathname]);

 const dataOneNews = data?.find((x) => `${x.id}` === id_news);

 const deleteThisNews = () => {
  id_news && deleteNews(id_news);
  navigate(-1);
 };

 const objectSkills = dataOneNews && [...dataOneNews.genres, ...dataOneNews.instruments];

 const complain = () => {
  window.location.href = "mailto:support@3-tone.ru";
  //e.preventDefault();
 };

 // вынести в useOptionsLongMenu
 let options: OptionLongMenuType[] = [
  {
   label: "Скопировать ссылку",
   link: "",
   action: () => getThisPageURL(),
  },
 ];

 if (dataOneNews && myProfileKey.includes(dataOneNews.form.formId)) {
  options = [
   ...options,
   {
    label: "Удалить",
    link: RouteNames.HOME,
    action: deleteThisNews,
   },
  ];
 } else {
  options = [
   {
    label: "Пожаловаться",
    link: "",
    action: complain,
   },
   ...options,
  ];
 }

 return (
  <StylesFullScreen>
   <HeaderStylesWrapper
    cancelImgIcon={arrow_back}
    textLabel="Новость"
    share={shareIcons}
    tsxElement={<LongMenu moreButtonCircle={moreButtonCircle} options={options} />}
   />
   {!dataOneNews ? (
    <PreLoader />
   ) : (
    <section className={s.timeline}>
     {<HeaderCardsNews author={dataOneNews.form} menu={false} timeLinePost={dataOneNews} />}

     <div className={s.bodyNews}>
      {dataOneNews.attachments.map((elem, index) => (
       <img key={index} src={elem.uri} alt={elem.name} />
      ))}

      <pre className={s.textInfo}>{dataOneNews.body}</pre>
     </div>

     <div className={s.footerNews}>
      <span className={s.theme}>{selectTypeNews[dataOneNews.type]}</span>

      {objectSkills?.map((x: any) => {
       if (x.icon) {
        return <ChipsToolItem itemLabel={x} key={x.id} />;
       } else {
        return <ChipsGenreItem itemLabel={x} key={x.id} />;
       }
      })}
     </div>
    </section>
   )}
  </StylesFullScreen>
 );
};

//{
// label: "Редактировать",
// link: `${RouteNames.CHANGE_THIS_NEWS}/${dataOneNews.id}`,
// action: () => {},
//},
