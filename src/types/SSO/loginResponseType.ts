// ======== Запрос к серверу ======== //
export interface LoginReqestType {
 email: string;
 password: string;
}

// ======== Ответ от сервера ======== //
export interface LoginResponseType {
 accountId: string;
 email: string;
 token: {
  value: string;
  expiresAt: number;
 };
 hasPassword: boolean;
 oAuthTypes: string[];
}
