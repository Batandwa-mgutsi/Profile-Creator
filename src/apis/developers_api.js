import { post, get, put } from './http_api'

export class DevelopersApi {
    /**
     * Creates a new developer profile
     * 
     * Returns the developer profile on success, throws error message on error
     */
    async createProfile(developer, user) {
        var endpoint = 'https://javaprime-week1-api.herokuapp.com/createProfile';
        return await post(endpoint, developer, 'developer')
    }

    /**
     * Returns the profile of the developer with the given id
     */
    async getProfile(id, user) {
        var endpoint = 'https://javaprime-week1-api.herokuapp.com/profiles/' + id;
        return await get(endpoint, 'developer');
    }

    /**
     * Updates the profile of the developer with the given id.
     * 
     * Returns the new developer profile on success, throws error message on error
     */
    async updateProfile(id, newProfileData, user) {
        var endpoint = 'https://javaprime-week1-api.herokuapp.com/editProfile/' + id;
        return put(endpoint, newProfileData, 'developer');
    }

    /**
     * Returns a list of all developer profiles
     */
    async listDevelopers(user) {
        var endpoint = 'https://javaprime-week1-api.herokuapp.com/profiles';
        return get(endpoint, 'developers');
    }

    /**
     * Returns the public profile of the develoepr with the given name and id
     */
    async getPublicProfile(name, id) {
        var endpoint = `https://javaprime-week1-api.herokuapp.com/profile/${name}/${id}`;
        return get(endpoint, 'developer');
    }
}

export const developersApi = new DevelopersApi();