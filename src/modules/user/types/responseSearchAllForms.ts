import { PortfolioType } from "../../../types/PROFILE/accountMainGlobalType";
import { CityResultsType } from "../../../types/PROFILE/cityGlobalType";
import { GenreSliceType, ToolsSliceType } from "../../user/types/userSliceType";

//==============================================
export interface AllFormsType {
 formId: string;
 name: string;
 city: CityResultsType;
 avatar: PortfolioType;
 instruments: ToolsSliceType[];
 genres: GenreSliceType[];
 createdDate: string;
 birthday: string;
}

export interface ResponseSearchAllFormsType {
 currentPage: number;
 pageCount: number;
 pageSize: number;
 rowCount: number;
 results: AllFormsType[];
}
