import { developersApi } from '../apis/developers_api'

import { authenticationService } from './authentication_service';

export class DevelopersService {
    constructor() {
        // Cache the profiles to make for an easy and fluid user experience.
        this.cachedProfiles = null;

        this.createProfile = this.createProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.listDevelopers = this.listDevelopers.bind(this);
        this.getPublicProfile = this.getPublicProfile.bind(this);
    }

    /**
     * Creates a new developer profile
     * 
     * Returns the developer profile on success, throws error message on error
     */
    async createProfile(developer) {
        var profile = await developersApi.createProfile(developer, await authenticationService.getCurrentUser());
        if (this.cachedProfiles !== null)
            this.cachedProfiles.push(profile);
        return profile;
    }

    /**
     * Updates the profile of the developer with the given id.
     * 
     * Returns the new developer profile on success, throws error message on error
     */
    async updateProfile(id, newProfileData) {
        var profile = await developersApi.updateProfile(id, newProfileData, await authenticationService.getCurrentUser());
        for (var index in this.cachedProfiles) {
            if (this.cachedProfiles[index]._id === profile._id) {
                this.cachedProfiles[index] = profile;
                break;
            }
        }

        return profile;
    }

    /**
     * Returns a list of all developer profiles
     */
    async listDevelopers() {
        if (this.cachedProfiles === null)
            return this.cachedProfiles = await developersApi.listDevelopers(await authenticationService.getCurrentUser());
        else
            return this.cachedProfiles;
    }

    /**
     * Returns the public profile of the developer with the given name and id.
     */
    async getPublicProfile(name, id) {
        // For a user that is not signed in, this.cachedProfiles is null
        if (this.cachedProfiles !== null) {
            for (var index in this.cachedProfiles) {
                if (this.cachedProfiles[index]._id === id)
                    return this.cachedProfiles[index];
            }
        }

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