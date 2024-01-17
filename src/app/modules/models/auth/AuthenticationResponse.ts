export interface AuthenticationResponse {
    is_authenticated: boolean;
    message: string;
    jwt_token: string;
    jwt_refresh_token: string;
}