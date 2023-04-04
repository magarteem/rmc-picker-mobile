import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import { PortfolioType } from "../../../types/PROFILE/accountMainGlobalType";
import { GenreType, ToolsType } from "../../authorization/types/authType";
import { InterfaceGlobalSelectTypeCity } from "../../user/types/userSliceType";

export interface AuthorType {
 id_user: string;
 name: string;
 city: InterfaceGlobalSelectTypeCity;
 avatar: PortfolioType;
 type_account: InterfaceGlobalSelectType;
 private_settings: InterfaceGlobalSelectType;
}

interface WorkExperienceType {
 img: string;
 institution: string;
 period: string;
}

//ожидание отклика других пользователей
export interface WaitingForResponseType {
 userId: string;
 status: number; // 0 - pending, 1 - принято, 2 - отклонено
}

export interface TimelineCards {
 id: number;
 typeVacancyOrAds: "vacancy" | "ads";
 author: AuthorType;
 publicationDate: number;
 required: InterfaceGlobalSelectType;
 typeOfInstitution: InterfaceGlobalSelectType[];
 tool: ToolsType[];
 genre: GenreType[];
 city: InterfaceGlobalSelectTypeCity;
 gender: InterfaceGlobalSelectType;
 fromAge: number;
 toAge: number;
 work_experience: string | WorkExperienceType[];
 master: InterfaceGlobalSelectType;
 commit: string;
 payment: string;
 workingConditions: InterfaceGlobalSelectType;
 commitAbout: string;
 phone: string;
 email: string;
 web_site: string;
 waitingForResponse: WaitingForResponseType;
}

export interface InitialStateAdsType {
 adsList: TimelineCards[];
 isLoading: boolean;
 error: Error | null;
}
