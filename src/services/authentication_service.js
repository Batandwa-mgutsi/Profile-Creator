import { authenticationApi } from '../apis/authentication_api';

export class AuthenticationService {

    constructor() {
        this.__currentUser = null;

        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.isUserSignedIn = this.isUserSignedIn.bind(this);
        this.signInWithEmailAndPassword = this.signInWithEmailAndPassword.bind(this);
    }

    /**
     * Returns the currently signed in user, null if there is non
     */
    async getCurrentUser() {
        alert(JSON.stringify(this.__currentUser));
        return this.__currentUser;
    }

    /**
     * Returns true if the current user signed in.
     */
    async isUserSignedIn() {
        return this.__currentUser !== null;
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
        this.__currentUser = await authenticationApi.signInWithEmailAndPassword(email, password);
    }
    /**
     * Signs out the given user.
     * 
     * Throws error object on error.
     * 
     */
    async signOut() {
        // pass
    }

    static __authenticationService = null;
    static getInstance() {
        if (AuthenticationService.__authenticationService === null)
            return AuthenticationService.__authenticationService = new AuthenticationService();
    }
}


const authenticationService = AuthenticationService.getInstance();
export { authenticationService };
