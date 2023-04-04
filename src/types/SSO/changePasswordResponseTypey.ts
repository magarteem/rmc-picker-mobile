// ======== Запрос к серверу ======== //
// POST: /api/v1/auth/change_password
export interface ChangePasswordReqestType {}

//

// ======== Ответ от сервера ======== //
export interface ChangePasswordResponseType {
  currentPassword: string;
  newPassword: string;
}

// {
//   "currentPassword": "string",
//   "newPassword": "string"
// }
