import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthUtility } from '../../utils/auth.utility';
import { AuthConfig } from '../config/auth.config';


export class HttpRequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = AuthUtility.getTokenInfo();
        if (token) {
            const _req = req.clone({
                url: `${AuthConfig.API_BASE_URL}/${req.url}`,
                setHeaders: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": `Bearer ${token.jwt_token}`,
                }
            });
            return next.handle(_req);
        } else {
            const _req = req.clone({
                url: `${AuthConfig.API_BASE_URL}/${req.url}`,
                setHeaders: {
                    "Content-Type": "application/json; charset=utf-8",
                }
            });
            return next.handle(_req);
        }
    }

}