import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import { PortfolioType, ScheduleType } from "../../../types/PROFILE/accountMainGlobalType";
import { MetroGlobalType } from "../../../types/PROFILE/metroGlobalType";
import { InterfaceGlobalSelectTypeCity, ToolsSliceType } from "../../user/types/userSliceType";

export interface LoginRequestType {
 email: string;
 password: string;
}

export interface LoginResponseType {
 accountId: string;
 email: string;
 token: {
  value: string;
  expiresAt: number;
 };
 hasPassword: boolean;
 oAuthTypes: string[];
}

export interface LoginResponseErrorType {
 Type: string;
 Message: string;
 Code: number;
 StackTrace: string;
}

//====================

export interface ToolsType extends InterfaceGlobalSelectType {
 icon: string;
}
export interface GenreType extends InterfaceGlobalSelectType {
 color: string;
}

export interface ISignUpFormValues extends LoginRequestType {
 type_account: InterfaceGlobalSelectType | null;
 name_field: string;
 img_upload: string;
 city: InterfaceGlobalSelectTypeCity | null;
 phone: string;
 web_site: string;
 gender: InterfaceGlobalSelectType | null;
 age: number | null;
 tool: ToolsType[];
 genre: GenreType[];
 work_experience: string;
 master: InterfaceGlobalSelectType | null;
 education: string;
 private_settings: InterfaceGlobalSelectType | null;
 inspiration: string | string[];
 type_collective?: InterfaceGlobalSelectType | null;
 institutionType?: InterfaceGlobalSelectType | null;
 portfolio_photo: PortfolioType[] | null;
 members: ToolsSliceType | null;
 email_contact: string;

 area: number | null;
 establishment_description: string;
 from_opening_hours: string | null;
 to_opening_hours: string | null;
 address: string;
 metroId: MetroGlobalType | null;
 schedule: ScheduleType | null;
}
