export interface LoggedInUserInfo {
    jwt_token: string;
    jwt_refresh_token: string;
    user_id: string;
    user_name: string;
    profile_photo: string;
    roles: Array<string>;
    company_info?: {
        name?: string;
        logo?: string;
        slogan?: string
    }
}