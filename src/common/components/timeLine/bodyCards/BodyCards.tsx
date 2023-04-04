import { TimeLinePostType } from "../../../../modules/timeLine/types/timlineSliceType";
import s from "./bodyCards.module.scss";
import cn from "classnames";
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import { dateDeclension } from "../../../../helpers/dateDeclension";
import { NewsResultType } from "../../../../modules/timeLine/types/responseNewsType";

interface BodyCardsType {
 timeLinePost: NewsResultType;
 id_news: string;
 date: number;
}

export const BodyCards = ({ timeLinePost, id_news, date }: BodyCardsType) => {
 const [hidden, setHidden] = useState(true);
 const [showMore, setShowMore] = useState(false);
 const ref = useRef<HTMLDivElement | null>(null);

 useLayoutEffect(() => {
  if (ref.current) {
   setShowMore(ref.current.scrollHeight > ref.current.clientHeight);
  }
 }, []);

 const toggleShowMore = () => setHidden((prev) => !prev);

 return (
  <div className={s.bodyCards}>
   <Link to={`${RouteNames.NEWS}/${id_news}`} className={s.openFullNews}>
    {timeLinePost.attachments.map((elem, index) => (
     <img key={index} src={elem.uri} alt={elem.uri} />
    ))}

    <div ref={ref} className={cn(s.textInfo, { [s.textHidden]: hidden })}>
     <pre style={{ whiteSpace: "pre-wrap" }}>{timeLinePost.body}</pre>
    </div>
   </Link>

   <div className={s.footer}>
    {showMore && (
     <p onClick={toggleShowMore} className={s.showMore}>
      {hidden ? "Показать полностью" : "Скрыть"}
     </p>
    )}

    <span className={s.theme}>{`${dateDeclension(date)}${
     timeLinePost.city ? ", " + timeLinePost.city.title : ""
    }`}</span>
   </div>
  </div>
 );
};
