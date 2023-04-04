import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import { GenreType, ToolsType } from "../../authorization/types/authType";
import { InterfaceGlobalSelectTypeCity } from "../../user/types/userSliceType";

export interface FilterFormsTimeLineFieldsType {
  search_text: string;
  type_category: InterfaceGlobalSelectType | null;
  city: InterfaceGlobalSelectTypeCity | null;
  tools: ToolsType[];
  genre: GenreType[];
}

export interface FilterParamsRequestType {
  page: number;
  query?: string;
  type?: string;
  cityIds?: number;
  genreIds?: string[];
  instrumentIds?: string[];
  formId?: string
}
