import { BaseViewModel } from '../../../mvvm';

import { developersService } from '../../../services/developers_service';
import { authenticationService } from '../../../services/authentication_service';

/**
 * ViewModel for the DisplayDeveloper view.
 */
export default class DisplayDeveloperProfileViewModel extends BaseViewModel {
    constructor() {
        super();

        this.developer = null;
        this.userCanEditProfile = false;
        this.loadDeveloper = this.loadDeveloper.bind(this);
    }

    async loadDeveloper(id) {
        console.log('DisplayDeveloperViewModel.loadDeveloper: fetching developer with id ' + id);
        try {
            this.developer = await developersService.getProfile(id);
        } catch (e) {
            console.log(e);
            console.trace();
            alert('Error ' + e.message);
        }
    }

    async onInitView(developerId) {
        this.setBusy(true);
        this.notifyListeners(this);

        await this.loadDeveloper(developerId);
        this.userCanEditProfile = await authenticationService.isUserSignedIn();

        this.setBusy(false);
        this.notifyListeners(this);
    }
}