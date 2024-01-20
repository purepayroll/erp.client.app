import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUserInfo } from 'src/app/modules/models/auth/LoggedInUserInfo';
import { AuthUtility } from 'src/app/modules/utils/auth.utility';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  user: LoggedInUserInfo | null = {
    jwt_refresh_token: '',
    jwt_token: '',
    profile_photo: '',
    roles: [],
    user_id: '',
    user_name: '',
    company_info: { logo: '', name: '', slogan: '' },
  };

  ngOnInit(): void {
    this.user = AuthUtility.getTokenInfo();
  }

  constructor(public router: Router) {}
  signOut() {
    AuthUtility.removeTokenInfo();
    this.router.navigate(['/']);
  }
}
