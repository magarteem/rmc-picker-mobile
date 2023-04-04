import s from "./fieldCustomAge.module.scss";

export interface FieldCustomAgeType {
 value: string | null;
 placeholder: string;
 onClick: () => void;
}

export const FieldCustomAge = ({
 value,
 placeholder,
 onClick,
}: FieldCustomAgeType) => {
 return (
  <span className={s.fieldCustomAge} onClick={onClick}>
   {value ? (
    value
   ) : (
    <span className={s.customAgePlaceholder}>
     {placeholder}
    </span>
   )}
  </span>
 );
};
