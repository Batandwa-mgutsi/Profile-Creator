import { developersApi } from '../apis/developers_api'

import { authenticationService } from './authentication_service';

export class DevelopersService {
    /**
     * Creates a new developer profile
     * 
     * Returns the developer profile on success, throws error message on error
     */
    async createProfile(developer) {
        return await developersApi.createProfile(developer, await authenticationService.getCurrentUser());
    }

    /**
     * Returns the profile of the developer with the given id
     */
    async getProfile(id) {
        return await developersApi.getProfile(id, await authenticationService.getCurrentUser());
    }

    /**
     * Updates the profile of the developer with the given id.
     * 
     * Returns the new developer profile on success, throws error message on error
     */
    async updateProfile(id, newProfileData) {
        return await developersApi.updateProfile(id, newProfileData, await authenticationService.getCurrentUser());
    }

    /**
     * Returns a list of all developer profiles
     */
    async listDevelopers() {
        return await developersApi.listDevelopers(await authenticationService.getCurrentUser());
    }

    /**
     * Returns the public profile of the developer with the given name and id
     */
    async getPublicProfile(name, id) {
        return await developersApi.getPublicProfile(name, id);
    }


    static __developersService = null;
    static getInstance() {
        if (DevelopersService.__developersService === null)
            return DevelopersService.__developersService = new DevelopersService();
    }
}


const developersService = DevelopersService.getInstance();
export { developersService };
