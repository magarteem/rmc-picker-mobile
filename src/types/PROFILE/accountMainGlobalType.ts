import { CityResultsType } from "./cityGlobalType";
import { EnumAnnouncementStatus } from "./enum/EnumAnnouncementStatus";
import { EnumPrivateType } from "./enum/EnumPrivateType";
import { EnumSkillType } from "./enum/EnumSkillType";
import { EnumTypeGender } from "./enum/EnumTypeGender";
import { EnumTypeTeam } from "./enum/EnumTypeTeam";

export interface PortfolioType {
 name: string;
 uri: string;
}

export interface ContactsType {
 contactType: string;
 value: string;
}

export interface AdditionalPropType {
 start: string;
 end: string;
}

export interface GeolocationsType {
 longitude: number;
 lattitude: number;
}

export interface ScheduleType {
 Friday: AdditionalPropType[];
 Monday: AdditionalPropType[];
 Sunday: AdditionalPropType[];
 Tuesday: AdditionalPropType[];
 Saturday: AdditionalPropType[];
 Thursday: AdditionalPropType[];
 Wednesday: AdditionalPropType[];
}

export interface DocumentType {
 name: string;
 city: CityResultsType | null;
 description: string;
 contacts: ContactsType[];
 schedule?: ScheduleType;
 geolocations?: GeolocationsType[];
}

export interface MembersType {
 musicianId: string;
 musicianNameOrExternalLink: string;
 instrumentIds: string[];
}

export type PrivateType =
 | EnumPrivateType.SHOW_ALL
 | EnumPrivateType.HIDE_CONTACTS
 | EnumPrivateType.HIDE_ALL;

export type GenderType = EnumTypeGender.MALE | EnumTypeGender.FEMALE | EnumTypeGender.OTHER;

export type TeamAnnouncementType =
 | EnumTypeTeam.GROUP
 | EnumTypeTeam.ORCHESTRA
 | EnumTypeTeam.ENSEMBLE;

export type SkillType =
 | EnumSkillType.NO_SKILL
 | EnumSkillType.NEWBIE
 | EnumSkillType.CONFIDENT
 | EnumSkillType.MASTER
 | EnumSkillType.START
 | EnumSkillType.TEACHER;

export type AnnouncementStatusResponseType =
 | EnumAnnouncementStatus.NO_REPLY
 | EnumAnnouncementStatus.PENDING
 | EnumAnnouncementStatus.APPROVED
 | EnumAnnouncementStatus.REJECTED;
