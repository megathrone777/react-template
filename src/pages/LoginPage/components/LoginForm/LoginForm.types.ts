export enum TFormFieldTypes {
  username = "username",
  password = "password",
}

export interface TFormErrors {
  password: null | string;
  username: null | string;
}
