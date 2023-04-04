import { ReactNode, memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { PreLoader } from "../../components/preLoader/PreLoader";
import s from "./ribbonLayout.module.scss";

interface RibbonLayoutType {
 children: ReactNode;
 isFetching?: boolean;
 setPageFu?: () => void;
}

export const RibbonLayout = memo(({ children, isFetching, setPageFu }: RibbonLayoutType) => {
 const { ref, inView, entry } = useInView({
  threshold: 0,
  rootMargin: "100px",
 });

 useEffect(() => {
  setPageFu && setPageFu();
 }, [inView]);

 return (
  <section className={s.ribbonLayout}>
   {children}
   <span ref={ref}>{isFetching && <PreLoader />}</span>
  </section>
 );
});
