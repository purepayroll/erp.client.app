import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { UserRoles } from "../config/auth.config";
import { AuthUtility } from "../../utils/auth.utility";

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const token = AuthUtility.getTokenInfo();

  if (token) {
    if (token.roles.find((role) => role === UserRoles.ADMIN))
      return true;

    redirectToLogin();
  }


  function redirectToLogin() {
    inject(Router).navigate(['/'])
  }
  redirectToLogin();
  return true;
};
