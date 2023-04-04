import s from "./chipsGenreItem.module.scss";

interface ChipsGenreItemType {
 itemLabel: any;
}

export const ChipsGenreItem = ({
 itemLabel,
}: ChipsGenreItemType) => {
 return (
  <div
   style={{ backgroundColor: itemLabel.color }}
   className={s.item}
   key={itemLabel.name}
  >
   {itemLabel.name}
  </div>
 );
};
