export interface MainFilterParamsType {
 page: number;
 pageSize?: number;
 query?: string;
 formId?: string;
 cityIds?: number | null;
 genreIds?: string[];
 instrumentIds?: string[];
}

export interface VacancyFilterParamsRequestType extends MainFilterParamsType {
 vacancyOwnerFormType?: string;
 searchVacancyDocumentType?: string;
 institutionTypeId?: string;
}

export interface AdsFilterParamsRequestType extends MainFilterParamsType {
 searchAnnouncementDocumentType?: string;
}
