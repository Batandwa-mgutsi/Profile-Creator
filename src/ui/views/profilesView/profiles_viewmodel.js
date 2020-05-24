import { developersApi } from '../../../apis/developersApi';
import { authenticationApi } from '../../../apis/authenticationApi';
import { BaseViewModel } from '../../../mvvm';

/**
 * ViewModel for the profiles view
 */
export default class ProfilesViewModel extends BaseViewModel {
    constructor() {
        super();

        this.developers = [];
        this.nameFilter = '';

        this.setNameFilter = this.setNameFilter.bind(this);
        this.getFilteredDevelopers = this.getFilteredDevelopers.bind(this);
        this.fetchDevelopers = this.fetchDevelopers.bind(this);
    }

    /**
     * @param {String} filter
     */
    setNameFilter(filter) {
        this.nameFilter = filter;
        this.notifyListeners(this);
    }

    /**
     * @return {Array}
     */
    getFilteredDevelopers() {
        var output = [];
        for (var developerIndex in this.developers) {
            var developer = this.developers[developerIndex];
            var fullName = developer.firstName + developer.lastName;
            if (fullName.includes(this.nameFilter))
                output.push(developer);
        }

        return output;
    }

    /**
     * @return {Array}
     */
    async fetchDevelopers() {
        this.setBusy(true);
        this.notifyListeners(this);

        try {
            this.developers = await developersApi.listDevelopers(await authenticationApi.getCurrentUser());
        } catch (e) {
            console.log(e);
            console.trace();
            alert('Error ' + e.message);
        }

        this.setBusy(false);
        this.notifyListeners(this);
    }
}
