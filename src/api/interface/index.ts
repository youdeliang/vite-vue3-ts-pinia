// * 登录模块
export namespace Login {
  export interface RepLoginForm {
    username: string;
    password: string;
  }

  export interface ResLogin {
    access_token: string;
  }
  export interface ResAuthButtons {
    [key: string]: {
      [key: string]: boolean;
    };
  }
}
