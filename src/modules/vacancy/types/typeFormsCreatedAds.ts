import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import {
 GenreSliceType,
 InterfaceGlobalSelectTypeCity,
 ToolsSliceType,
} from "../../user/types/userSliceType";

export interface FormsCreatedVacancyType {
 required: InterfaceGlobalSelectType | null;
 gender: InterfaceGlobalSelectType | null;
 tool: ToolsSliceType[];
 genre: GenreSliceType[];
 city: InterfaceGlobalSelectTypeCity | null;
 fromAge: number | null;
 toAge: number | null;
 work_experience: string;
 master: InterfaceGlobalSelectType | null;
 commit: string;
 payment: string;
 workingConditions: InterfaceGlobalSelectType | null;
 commitAbout: string;
 phone: string;
 email: string;
 web_site: string;
 whoAreLooking: InterfaceGlobalSelectType | null;
 typeOfInstitution: InterfaceGlobalSelectType | null;
}
