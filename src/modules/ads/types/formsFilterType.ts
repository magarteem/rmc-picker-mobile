import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import { GenreType, ToolsType } from "../../authorization/types/authType";

export interface FormsFilterType {
 city: InterfaceGlobalSelectType | null;
 tool: ToolsType[];
 genre: GenreType[];
 gender: InterfaceGlobalSelectType | null;
 typeOfInstitution: InterfaceGlobalSelectType | null;
 teamType: InterfaceGlobalSelectType | null;
 who_is_looking_vacancy: InterfaceGlobalSelectType | null;
 who_is_looking_vacancy_partner: InterfaceGlobalSelectType | null;
 who_is_looking_ads: InterfaceGlobalSelectType | null;
 who_is_looking_questionnaire: InterfaceGlobalSelectType | null;
 fromAge: null;
 toAge: null;
 master: null;
}
