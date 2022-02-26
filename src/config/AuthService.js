import Rest from './RestMicroservices'

const AuthService= {
    register: Rest.authService+"/auth/register",
    dologin: Rest.authService+"/auth/dologin"
}
export default AuthService