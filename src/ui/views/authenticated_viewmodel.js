import { BaseViewModel } from '../../mvvm';
import { authenticationService } from '../../services/authenticationService';

export default class AuthenticatedViewModel extends BaseViewModel {
    constructor() {
        super();
    }

    async onViewMounted() {
        if (!(await authenticationService.isUserSignedIn())) {
            // Force the user to the home screen where they can login.
            window.location = '/';
        }
    }
}