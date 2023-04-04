import { calculateAge } from "../../../../helpers/calculateAge";
import { MetroGlobalType } from "../../../../types/PROFILE/metroGlobalType";
import s from "./nameProfile.module.scss";

interface NameProfileType {
 age: number;
 name: string;
 city: string | undefined;
 merto: MetroGlobalType | null;
 address: string;
 type_collective: string | undefined;
}

const formatter = new Intl.NumberFormat("ru", {
 style: "unit",
 unit: "year",
 unitDisplay: "long",
});

export const NameProfile = ({
 age = 0,
 name,
 city,
 merto,
 address,
 type_collective,
}: NameProfileType) => {
 return (
  <div className={s.nameProfile}>
   <h2>{name}</h2>
   <span className={s.infoMyAccount}>
    {`${
     age > 0
      ? `${formatter.format(+calculateAge(age))},`
      : ""
    }`}
    {type_collective && `${type_collective}, `}

    {city && `${city}`}

    {merto && (
     <>
      {`${merto && ", "}`}
      <span className={s.dotIndicator}></span>
      {`${merto.title}`}
     </>
    )}

    {address && (
     <>
      {`${address && ", "}`}
      {`${address}`}
     </>
    )}
   </span>
  </div>
 );
};
