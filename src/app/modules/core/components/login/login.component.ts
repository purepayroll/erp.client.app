import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  Message = {


    LOGIN_BUTTON_TEXT: ' Sign In',


    LOADING_TEXT: 'Loading ...'
  }


  constructor(private router: Router) {
  }

  error_message: string = ''

  submitHandler(e: any) {

  };

  forgotClickHandler() {
    this.router.navigate(['/forgot-password'])
  }

};

