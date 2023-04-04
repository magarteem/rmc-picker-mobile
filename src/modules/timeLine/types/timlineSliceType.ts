import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import { PortfolioType } from "../../../types/PROFILE/accountMainGlobalType";
import { GenreType, ToolsType } from "../../authorization/types/authType";
import { InterfaceGlobalSelectTypeCity } from "../../user/types/userSliceType";

export interface OptionLongMenuType {
 label: string;
 link: string;
 action: () => void | any;
}

export interface AuthorType {
 id_user: string;
 name: string;
 city: InterfaceGlobalSelectTypeCity | null;
 avatar: PortfolioType | null;
}
export interface TimeLinePostType {
 photo: string[];
 text: string;
 typeCategory: InterfaceGlobalSelectType | null;
 genre: GenreType[];
 tools: ToolsType[];
 city: InterfaceGlobalSelectTypeCity | null;
}
export interface InitialStateTeamLineType {
 id: string;
 author: AuthorType;
 date: number;
 timeLinePost: TimeLinePostType;
}

export interface InitialStateType {
 timeLineData: InitialStateTeamLineType[];
 error: Error | null;
 isLoading: boolean;
 firstLoadingNews: boolean;
}
