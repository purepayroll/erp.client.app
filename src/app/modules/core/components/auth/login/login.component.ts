import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Messages } from 'src/app/modules/resources/Messages';
import { CommonFormValue } from 'src/app/modules/models/common/CommonFormValue';
import { LoginPayload } from 'src/app/modules/models/auth/LoginPayload';
import { AuthenticationResponse } from 'src/app/modules/models/auth/AuthenticationResponse';
import { AuthUtility } from 'src/app/modules/utils/auth.utility';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
})
export class LoginComponent {
   Message = Messages;
   private get _formInitialState(): CommonFormValue<LoginPayload> {
      return {
         values: { user_id: '', password: '', company_code: '' },
         isCreating: true,
         isLoading: false,
      };
   }

   public formValue: CommonFormValue<LoginPayload> = this._formInitialState;

   constructor(private router: Router, private authService: AuthService) {}

   error_message: string = '';

   submitHandler(e: any) {
      this.formValue.isLoading = true;
      this.authService
         .login({
            user_id: this.formValue.values.user_id,
            password: this.formValue.values.password,
            company_code: 'test',
         })
         .subscribe({
            next: (resp: any) => {
               const _resp: AuthenticationResponse = resp;
               if (resp.is_authenticated) {
                  AuthUtility.setTokenInfo(_resp);
                  //currently we're navigating only admin based on token will navigate other roles
                  this.router.navigate(['/admin']);
               }
            },
            error: (err) => {
               this.error_message = '';
            },
         });
   }

   forgotClickHandler() {
      this.router.navigate(['/forgot-password']);
   }
}
