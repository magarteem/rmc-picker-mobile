// ======== Запрос к серверу ======== //
// POST: /api/v1/auth/registration
export interface RegistrationReqestType {
  email: string;
  password: string;
}

// {"email": "string3","password": "string3"}



// ======== Ответ от сервера ======== //
export interface RegistrationResponseType {
  accountId: string;
  email: string;
  token: {
    value: string;
    expiresAt: number;
  };
  hasPassword: boolean;
  oAuthTypes: [];
}

//   {
//     "accountId": "906fbaad-2e8c-460f-b9d4-ffd4f0546203",
//     "email": "string3",
//     "token": {
//       "value": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzI0MTA4MjgsImp0aSI6IjE0N2VjNjA4LTYzNzctNGMzNi05ZTVmLTU4YzI4YmY2NTEzNyIsImFjY291bnRfaWQiOiI5MDZmYmFhZC0yZThjLTQ2MGYtYjlkNC1mZmQ0ZjA1NDYyMDMiLCJlbWFpbCI6IlNUUklORzMiLCJuYmYiOjE2NzI0MTA4MjgsImV4cCI6MTY4NjkyNjAyOCwiaXNzIjoidHJpdG9uLXNzbyIsImF1ZCI6InRyaXRvbiJ9.k8malx-GI_cBb5kmpOHExehCDJT1ok1hjLxdTDpt030iTCRSRD54-9dZNDqPR8mRgCbkqwwyuKOTNjnjIeFUOu03WXRcggRsU_ZVPQhdWJOjMrZXJJlOJwSzQJXInoJu-RO-KlGpbbFxy_RPQ8Y9-JPP9cAVa4kVWUQW1AmqVpzZye-rWajnch4z0j7KWq5oj3Xkbkbs96B_At1ON-kf8DQCcJ-6SmNLrygHMrUerFrFA6LF4wCUzjo-QRRrciBwFUhBY1IRhLl6NBIFBDqnKqaZciHSa3eeyQdDQuM7MOr46fTib7O-pQCE0dji4ik_VITDmvxZ-V1LwkBnwrQNlQ",
//       "expiresAt": 1672410828
//     },
//     "hasPassword": true,
//     "oAuthTypes": []
//   }
