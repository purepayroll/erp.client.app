import { Injectable, isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginPayload } from '../../models/auth/LoginPayload';
import { BaseService } from '../../services/base.service';

@Injectable()
export class AuthService extends BaseService {

  login(user_info: LoginPayload) {
    if (isDevMode() && environment.isJsonServerRunning) {
      return this._http.get('authenticate');
    }
    return this._http.post('authenticate', user_info);
  }
};
