import exportIconsSVG from "../../../assets/icons/iconsTools/exportIconsSVG";
import s from "./chipsToolItem.module.scss";

interface ChipsToolItemType {
 itemLabel: any;
}

export const ChipsToolItem = ({
 itemLabel,
}: ChipsToolItemType) => {
 return (
  <div className={s.item} key={itemLabel.name}>
   <img
    src={exportIconsSVG[itemLabel.icon]}
    alt={itemLabel.name}
   />
   {itemLabel.name}
  </div>
 );
};
