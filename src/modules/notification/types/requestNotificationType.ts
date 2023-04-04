import { ContactsType, GenderType, SkillType } from "../../../types/PROFILE/accountMainGlobalType";

export type EmploymentType =
 | "None"
 | "FullEmployment"
 | "PartTimeEmployment"
 | "FreeTimeEmployment"
 | "BusyWork";

export interface ConditionsType {
 salary: string;
 employmentType: EmploymentType | string;
 scheduleDescription: string;
}

export interface JobDocumentType {
 neededEmployeeTypes: string[];
 conditions: ConditionsType;
}
export interface SoundProducerAnnouncementDocumentType {
 skills: string[];
 education: string;
}
export interface TeamAnnouncementDocumentType {
 teamType: "Group" | "Orchestra" | "Ensemble" | string;
}
export interface MusicianAnnouncementDocumentType {
 gender: GenderType | string;
 ageRange: {
  start: number | null;
  finish: number | null;
 };
 skills: string[];
 education: string;
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
