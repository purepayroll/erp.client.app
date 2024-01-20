export const environment = {
    API_BASE_URL: "http://localhost:62303/api",
    // API_BASE_URL: "https://api.sonner.in/api",

    isJsonServerRunning: true
};

if (environment.isJsonServerRunning) {
    environment.API_BASE_URL = "http://localhost:3000";
}
