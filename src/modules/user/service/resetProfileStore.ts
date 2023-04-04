import { EnumContactRequestStatusResponse } from "../../../types/PROFILE/enum/EnumContactRequestStatusResponse";
import { EnumPrivateType } from "../../../types/PROFILE/enum/EnumPrivateType";

export const resetProfileData = {
 id_user: "",
 name: "",
 email: "",
 phone: "",
 webSite: "",
 city: null,
 age: 0,
 avatar: null,
 gender: null,
 type_account: { id: "", name: "" },
 skills: {
  tool: [],
  genre: [],
  workExperience: "",
  education: "",
  master: null,
  inspiration: [],
 },
 institutionType: null,
 private_settings: { id: "", name: "" },
 type_collective: null,
 portfolio_photo: null,
 members: [], // удалить
 address: "",
 from_opening_hours: 0,
 to_opening_hours: 0,
 area: null,
 metroId: null,
 schedule: null,
 privateType: EnumPrivateType.SHOW_ALL,
 contactRequestStatus: EnumContactRequestStatusResponse.NO_REQUEST,
};

export const resetProfileDataApiData = {
 institutionForm: [],
 musicalWorkshopForm: [],
 musicianForm: [],
 soundProducerForm: [],
 musicianSchoolForm: [],
 musicShopForm: [],
 rehearsalBaseForm: [],
 recordingStudioForm: [],
 teamForm: [],
};
