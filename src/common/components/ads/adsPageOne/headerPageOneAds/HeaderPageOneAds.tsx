import React from "react";
import { ConditionsType } from "../../../../../modules/ads/types/requestAdsType";
import { ResultAdsTypeResponse } from "../../../../../modules/ads/types/responseAdsType";
import { translationEmploymentType } from "../../../../../modules/vacancy/service/selectTranslation";
import s from "./headerPageOneAds.module.scss";

interface HeaderPageOneAdsType {
 data: ResultAdsTypeResponse;
}

export const HeaderPageOneAds = ({ data }: HeaderPageOneAdsType) => {
 const salary = (): ConditionsType => {
  if (data.jobDocument) return data.jobDocument.conditions;
  else return data.conditions;
 };

 return (
  <div className={s.headerAds}>
   <div className={s.title}>
    <h2>{data?.title}</h2>
    {<p>{salary()?.salary || "Не коммерческое"}</p>}
    <p>{translationEmploymentType[salary()?.employmentType]}</p>
   </div>
  </div>
 );
};
