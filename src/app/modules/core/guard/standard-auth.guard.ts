import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthUtility } from "../../utils/auth.utility";
import { UserRoles } from "../config/auth.config";

export const standardAuthGuard: CanActivateFn = (route, state) => {
    const token = AuthUtility.getTokenInfo();

    if (token) {
        if (token.roles.find((role) => role === UserRoles.STANDARD))
            return true;

        _redirectToLogin();
    }

    function _redirectToLogin() {
        inject(Router).navigate(['/'])
    }
    _redirectToLogin();
    return true;
};
