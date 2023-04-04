import { CityResultsType } from "../../../types/PROFILE/cityGlobalType";

export const reSelector = (data: CityResultsType[]) => {
 const options = data?.map((x: CityResultsType) => {
  return {
   id: x.id,
   name: x.title,
  };
 });

 return options;
};

//options={data?.results?.map(
// (x: CityResultsType) => {
//  return {
//   id: x.id,
//   name: x.title,
//  };
// }
//)}
