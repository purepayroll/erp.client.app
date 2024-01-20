import { jwtDecode } from 'jwt-decode';
import { LoggedInUserInfo } from '../models/auth/LoggedInUserInfo';
import { AuthenticationResponse } from '../models/auth/AuthenticationResponse';

export class AuthUtility {
  private static SAVE_AUTH_TOKEN_KEY = 'save-auth-token-key';
  private static _user_info: LoggedInUserInfo;

  static setTokenInfo(token_info: AuthenticationResponse): void {
    //token storing
    const parse_token: any = jwtDecode(token_info.jwt_token);

    const user_info: LoggedInUserInfo = JSON.parse(parse_token.user_info);
    user_info.jwt_refresh_token = token_info.jwt_refresh_token;
    user_info.jwt_token = token_info.jwt_token;
    //storing in-memory as well local storage
    this._user_info = user_info;
    localStorage.setItem(
      AuthUtility.SAVE_AUTH_TOKEN_KEY,
      JSON.stringify(user_info)
    );
  }

  static getTokenInfo(): LoggedInUserInfo | null {
    if (this._user_info) return this._user_info;

    const _token = localStorage.getItem(this.SAVE_AUTH_TOKEN_KEY);
    if (_token) {
      const _parsed_token = JSON.parse(_token) as LoggedInUserInfo;
      this._user_info = _parsed_token;
      return _parsed_token;
    }
    return null;
  }

  static removeTokenInfo(): void {
    localStorage.removeItem(AuthUtility.SAVE_AUTH_TOKEN_KEY);
  }
}
