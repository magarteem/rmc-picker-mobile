import { ContactsType, GenderType } from "../../../types/PROFILE/accountMainGlobalType";
import { EnumEmploymentType } from "../../../types/PROFILE/enum/EnumEmploymentType";
import { EnumTypeTeam } from "../../../types/PROFILE/enum/EnumTypeTeam";
import { InstitutionTypeGlobalType } from "../../../types/PROFILE/institutionTypeGlobalType";

export type EmploymentType =
 | EnumEmploymentType.NONE
 | EnumEmploymentType.FULL_EMPLOYMENT
 | EnumEmploymentType.PART_TIME_EMPLOYMENT
 | EnumEmploymentType.FREE_TIME_EMPLOYMENT
 | EnumEmploymentType.BUSY_WORK;

export interface ConditionsType {
 salary: string;
 employmentType: EmploymentType | string;
 scheduleDescription: string;
}

export interface JobDocumentType {
 neededEmployeeTypes: string[];
 conditions: ConditionsType;
 jobTypes: string[]; // Undefined, MusicianSchool, MusicianStore, RecordingStudio, RehearsalBase, MusicalWorkshop
 teamTypes: string[]; //Group, Orchestra, Ensemble
 institutionTypeIds: string[];
}
export interface SoundProducerAnnouncementDocumentType {
 skills: string[];
 education: string;
 age: {
  start: number | null;
  finish: number | null;
 };
 gender: GenderType | string;
}
export interface TeamAnnouncementDocumentType {
 teamType: EnumTypeTeam.GROUP | EnumTypeTeam.ORCHESTRA | EnumTypeTeam.ENSEMBLE | string;
}
export interface MusicianAnnouncementDocumentType {
 gender: GenderType | string;
 ageRange: {
  start: number | null;
  finish: number | null;
 };
 skills: string[];
 education: string;
 cooperationTerms: string;
}

interface MainAds {
 formId: string;
 title: string;
 cityId: number | undefined;
 experience: string;
 contacts: ContactsType[];
 genreIds: string[];
 description: string;
 instrumentIds: string[];
}

export interface RequestVacancyType extends MainAds {
 musicianAnnouncementDocument: MusicianAnnouncementDocumentType | null;
 teamAnnouncementDocument: TeamAnnouncementDocumentType | null;
 soundProducerAnnouncementDocument: SoundProducerAnnouncementDocumentType | null;
 conditions: ConditionsType;
}

export interface RequestAdsType extends MainAds {
 musicianAnnouncementDocument: MusicianAnnouncementDocumentType | null;
 teamAnnouncementDocument: TeamAnnouncementDocumentType | null;
 jobDocument: JobDocumentType | null;
}
