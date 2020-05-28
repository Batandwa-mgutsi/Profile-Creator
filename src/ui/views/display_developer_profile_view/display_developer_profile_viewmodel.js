import { BaseViewModel } from '../../../mvvm';

import { developersService } from '../../../services/developers_service';
import { authenticationService } from '../../../services/authentication_service';
import { getDeveloperFullName } from '../../common/utils';

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

    async loadDeveloper(fullName, id) {
        console.log('DisplayDeveloperViewModel.loadDeveloper: fetching developer with id ' + id);
        try {
            this.developer = await developersService.getPublicProfile(fullName, id);
            if (this.developer.firstName === undefined) {
                console.log('Returned object is not a developer');
                console.log(this.developer);
                this.developer = null;
            }
        } catch (e) {
            console.log(e);
            console.trace();
            alert('Error ' + e.message);
        }
    }

    async onInitView(fullName, developerId) {
        this.setBusy(true);
        this.notifyListeners(this);

        await this.loadDeveloper(fullName, developerId);
        this.userCanEditProfile = await authenticationService.isUserSignedIn();

        this.setBusy(false);
        this.notifyListeners(this);
    }
}