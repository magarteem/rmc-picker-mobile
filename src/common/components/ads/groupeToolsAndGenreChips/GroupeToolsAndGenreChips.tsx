import { useState } from "react";
import {
 GenreType,
 ToolsType,
} from "../../../../modules/authorization/types/authType";
import { ChipsLayout } from "../../../layout/chipsLayout/ChipsLayout";
import { ChipsGenreItem } from "../../../ui-elements/chips/ChipsGenreItem";
import { ChipsToolItem } from "../../../ui-elements/chips/ChipsToolItem";
import cn from "classnames";
import s from "./groupeToolsAndGenreChips.module.scss";

interface GroupeToolsAndGenreChipsType {
 tools: ToolsType[];
 genre: GenreType[];
}

export const GroupeToolsAndGenreChips = ({
 tools,
 genre,
}: GroupeToolsAndGenreChipsType) => {
 const [showMore, setShowMore] = useState(true);
 const [maxShowChips, setMaxShowChips] = useState(5);
 const objectSkills = [...tools, ...genre];

 const toggle = (num: number) => {
  setShowMore((prev) => !prev);
  setMaxShowChips(num);
 };

 return (
  <ChipsLayout>
   {objectSkills.slice(0, maxShowChips).map((x: any) => {
    if (x.icon) {
     return <ChipsToolItem itemLabel={x} key={x.id} />;
    } else {
     return <ChipsGenreItem itemLabel={x} key={x.id} />;
    }
   })}

   {objectSkills.length > maxShowChips && (
    <div
     onClick={(e) => {
      e.preventDefault();
      toggle(objectSkills.length);
     }}
     className={cn(s.item, s.itemHidden)}
    >
     Ещё {objectSkills.length - maxShowChips}
    </div>
   )}

   {!showMore && (
    <div
     onClick={(e) => {
      e.preventDefault();
      toggle(5);
     }}
     className={cn(s.item, s.itemHidden)}
    >
     Скрыть
    </div>
   )}
  </ChipsLayout>
 );
};
