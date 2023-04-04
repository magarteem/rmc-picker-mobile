import { ReactNode } from "react";
import s from "./cardsLayoutItem.module.scss";

interface CardsLayoutItemType {
 children: ReactNode;
}

export const CardsLayoutItem = ({
 children,
}: CardsLayoutItemType) => {
 return <div className={s.cardsLayoutItem}>{children}</div>;
};
