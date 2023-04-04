import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import { PortfolioType, ScheduleType } from "../../../types/PROFILE/accountMainGlobalType";
import { EnumContactRequestStatusResponse } from "../../../types/PROFILE/enum/EnumContactRequestStatusResponse";
import { EnumPrivateType } from "../../../types/PROFILE/enum/EnumPrivateType";
import { MetroGlobalType } from "../../../types/PROFILE/metroGlobalType";
import { ISignUpFormValues } from "../../authorization/types/authType";
import { MusicianTypeResponse } from "./putReqestUpdateMyForm";

export interface InterfaceGlobalSelectTypeCity {
 name: string;
 id: number;
 metros?: null | [];
}

export interface ToolsSliceType extends InterfaceGlobalSelectType {
 icon: string;
}
export interface GenreSliceType extends InterfaceGlobalSelectType {
 color: string;
}

interface SkillsType {
 tool: ToolsSliceType[];
 genre: GenreSliceType[];
 workExperience: string;
 master: InterfaceGlobalSelectType | null;
 education: string;
 inspiration: string | string[];
}

export interface InitialStateUserType {
 id_user: string;
 name: string | "";
 email: string;
 phone: string;
 webSite: string;
 city: InterfaceGlobalSelectTypeCity | null;
 age: number | null;
 avatar: PortfolioType | null;
 gender: InterfaceGlobalSelectType | null;
 type_account: InterfaceGlobalSelectType;
 skills: SkillsType;
 private_settings: InterfaceGlobalSelectType | null;

 type_collective?: InterfaceGlobalSelectType | null;
 institutionType: InterfaceGlobalSelectType | null;
 portfolio_photo: PortfolioType[] | null;
 area: number | null;
 from_opening_hours: number | null;
 to_opening_hours: number | null;
 address: string;
 metroId: MetroGlobalType | null;
 schedule: ScheduleType | null;
 privateType: EnumPrivateType;
 contactRequestStatus:
  | EnumContactRequestStatusResponse.NO_REQUEST
  | EnumContactRequestStatusResponse.PENDING
  | EnumContactRequestStatusResponse.APPROVED
  | EnumContactRequestStatusResponse.MY_FORM;
}

export interface ProfileDataApiDataType {
 institutionForm: MusicianTypeResponse[];
 musicalWorkshopForm: MusicianTypeResponse[];
 musicianForm: MusicianTypeResponse[];
 soundProducerForm: MusicianTypeResponse[];
 musicianSchoolForm: MusicianTypeResponse[];
 musicShopForm: MusicianTypeResponse[];
 rehearsalBaseForm: MusicianTypeResponse[];
 recordingStudioForm: MusicianTypeResponse[];
 teamForm: MusicianTypeResponse[];
}

export interface InitialStateType {
 profileData: InitialStateUserType;
 profileDataApiData: ProfileDataApiDataType;
 isActiveForms: string;
 allMyForms: string[];
 error: string;
 isLoading: boolean;
}

// ===========
export type ChangeProfileFormValues = Omit<
 ISignUpFormValues,
 "emailNew" | "password" | "img_upload" | "type_account"
>;
