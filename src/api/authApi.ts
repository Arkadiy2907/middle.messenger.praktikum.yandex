import { Client } from '../core/HTTP';
import { TSignUp } from '../pages/registration';
import { TLogin } from '../pages/login';

const _http = new Client('/auth');

class AuthApi {
    signUp(data: TSignUp) {
        return _http.post('/signup', data);
    }

    signIn(data: TLogin) {
        return _http.post('/signin', data);
    }

    getUser() {
        return _http.get('/user');
    }

    logOut() {
        return _http.post('/logout');
    }
}

const authApi = new AuthApi();

export default authApi;
