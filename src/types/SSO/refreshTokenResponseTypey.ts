// ======== Запрос к серверу ======== //
// POST: /api/v1/auth/refresh_token
export interface RefreshTokenReqestType {}

//

// ======== Ответ от сервера ======== //
export interface RefreshTokenResponseType {
  accountId: string;
  email: string;
  token: {
    value: string;
    expiresAt: number;
  };
  hasPassword: boolean;
  oAuthTypes: string[];
}

// {
//   "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "email": "string",
//   "token": {
//     "value": "string",
//     "expiresAt": 0
//   },
//   "hasPassword": true,
//   "oAuthTypes": [
//     "None"
//   ]
// }
