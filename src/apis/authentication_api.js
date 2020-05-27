import { post } from './http_api'

/**
 * Api to authenticate the user with remote server.
 */
export class AuthenticationApi {

    /**
     * Signs in the user with the given email and password.
     * 
     * Returns the signed in user on success, throws error object on error
     * 
     * @param {String} email
     * @param {String} password
     */
    async signInWithEmailAndPassword(email, password) {
        var endpoint = 'https://javaprime-week1-api.herokuapp.com/login/admin';
        var data = {
            userName: email,
            password: password,
        };
        return await post(endpoint, data, 'user');
    }
    /**
     * Signs out a user.
     * 
     * Returns the signed in user on success, throws error object on error
     * 
     */
    async signOut() {
        var endpoint = 'http://localhost:4000/logout';
        var data = {
        };
        return await post(endpoint, data, 'user');
    }
}


export const authenticationApi = new AuthenticationApi();