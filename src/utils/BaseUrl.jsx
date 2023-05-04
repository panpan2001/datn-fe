const BASE_URL="http://localhost:3001/api"

const LoginApi= BASE_URL+"/auth/login"
const RegisterApi= BASE_URL+"/auth/register"
const RefreshTokenApi= BASE_URL+"/auth/refresh"
const AccountApi={
    getAllAccount:BASE_URL+"/accounts/",
} 


 export {LoginApi,RegisterApi,AccountApi,RefreshTokenApi}