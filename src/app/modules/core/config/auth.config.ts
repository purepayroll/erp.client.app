

import { isDevMode } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { environment as devEnvironment } from '../../../../environments/environment';

export enum UserRoles {
    ADMIN = 'admin',
    STANDARD = 'standard'
}

//it should be dynamic based on running mode we need load these things dynamically
export const AuthConfig = {
    API_BASE_URL: isDevMode() ? devEnvironment.API_BASE_URL : environment.API_BASE_URL
};
