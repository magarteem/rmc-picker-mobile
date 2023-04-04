import {
 AnnouncementStatusResponseType,
 ContactsType,
 PortfolioType,
 SkillType,
 TeamAnnouncementType,
} from "../../../types/PROFILE/accountMainGlobalType";
import { CityResultsType } from "../../../types/PROFILE/cityGlobalType";
import { InstitutionTypeGlobalType } from "../../../types/PROFILE/institutionTypeGlobalType";
import { FormNewsType } from "../../timeLine/types/responseNewsType";
import { GenreSliceType, ToolsSliceType } from "../../user/types/userSliceType";
import { ConditionsType, EmploymentType } from "./requestAdsType";

export interface JobDocumentType {
 neededEmployeeTypes: ["Musician", "Team", "SoundEngineer"];
 conditions: ConditionsType;
 jobTypes: string[]; // Undefined, MusicianSchool, MusicianStore, RecordingStudio, RehearsalBase, MusicalWorkshop
 teamTypes: string[]; //Group, Orchestra, Ensemble
 institutionTypeIds: string[]; // ???
}
export interface SoundProducerAnnouncementDocumentType {
 skills: string;
 education: string;
 age: {
  start: number;
  finish: number;
 };
 gender: string;
}
export interface TeamAnnouncementDocumentType {
 teamType: TeamAnnouncementType;
}
export interface MusicianAnnouncementDocumentType {
 gender: string;
 ageRange: {
  start: number;
  finish: number;
 };
 skills: string;
 education: string;
}

export interface ResultAdsTypeResponse {
 id: string;
 form: FormNewsType;
 title: string | null;
 city: CityResultsType;
 experience: string;
 contacts: ContactsType[];
 createdTime: string;
 genres: GenreSliceType[];
 description: string;
 instruments: ToolsSliceType[];
 musicianAnnouncementDocument: MusicianAnnouncementDocumentType | null;
 teamAnnouncementDocument: TeamAnnouncementDocumentType | null;
 soundProducerAnnouncementDocument?: SoundProducerAnnouncementDocumentType | null;
 jobDocument?: JobDocumentType | null;
 conditions: ConditionsType;
 announcementStatusResponse: AnnouncementStatusResponseType;
}

export interface ResponseAdsType {
 currentPage: number;
 pageCount: number;
 pageSize: number;
 rowCount: number;
 results: ResultAdsTypeResponse[];
}

//==================================
type UserTypeOmit = Omit<FormNewsType, "address">;

export interface ResponseAllUsersType extends UserTypeOmit {
 instruments: ToolsSliceType[];
 genres: GenreSliceType[];
 createdDate: string;
}
