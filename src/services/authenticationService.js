import { authenticationApi } from '../apis/authenticationApi';

export class AuthenticationService {

    constructor() {
        this.__currentUser = null;
    }

    /**
     * Returns the currently signed in user, null if there is non
     */
    async getCurrentUser() {
        return this.__currentUser;
    }

    /**
     * Signs in the given user.
     * 
     * Throws error object on error.
     * 
     * @param {String} email
     * @param {String} password
     */
    async signInWithEmailAndPassword(email, password) {
        var user = await authenticationApi.signInWithEmailAndPassword(email, password);
        this.__currentUser = user;
    }
}

export const authenticationService = new AuthenticationService();;
