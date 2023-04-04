import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";

export const convertOptions = (
 data: InterfaceGlobalSelectType[]
) => {
 const dataResult = data.map(
  (x: InterfaceGlobalSelectType) => {
   return {
    value: x.id,
    label: x.name,
   };
  }
 );

 return dataResult;
};
