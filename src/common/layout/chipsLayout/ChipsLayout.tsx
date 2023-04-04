import { ReactNode } from "react";
import s from "./сhipsLayout.module.scss";

interface ChipsLayoutType {
 children: ReactNode;
}

export const ChipsLayout = ({
 children,
}: ChipsLayoutType) => {
 return <div className={s.сhipsLayout}>{children}</div>;
};
