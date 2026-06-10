declare global {
  interface TUser {
    email: string;
    id: string;
    password: string;
    username: string;
  }

  interface TActionData {
    message: string;
    name: string;
  }
}

export {};
