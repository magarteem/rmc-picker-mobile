import { MyTypeFormsAccountProfileType } from "../types/myTypeFormProfile";
import { ProfileDataApiDataType } from "../types/userSliceType";

export const restructureDateApiForStore = (
 actions_payload: MyTypeFormsAccountProfileType
) => {
 let stateOtherUser: ProfileDataApiDataType = {
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

 for (const key in actions_payload) {
  //@ts-ignore
  if (actions_payload[key]) {
   //@ts-ignore
   stateOtherUser[key].push(actions_payload);
  }
 }
 return stateOtherUser;
};
