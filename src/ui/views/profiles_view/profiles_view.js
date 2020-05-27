import React from 'react';
import { ViewModelConsumer } from '../../../mvvm';
import ProfilesViewModel from './profiles_viewmodel';
import { authenticationService } from '../../../services/authentication_service'
import { withCookies, Cookies, useCookies  } from 'react-cookie';

class ProfilesView extends ViewModelConsumer {

    constructor(props) {
        super(props, new ProfilesViewModel());
        const {cookies} = this.props;
        console.log('Profile cookies: ',cookies);
        console.log('Profile Props Cookies : ',cookies.get('connect.sid'));
    }

    /**
     * @param {ProfilesViewModel} model
     */
    onRender(props, model) {
        return <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#FBFBFB' }}>
            <nav style={{ top: 0, display: 'fix' }}>
                <div className='nav-wrapper indigo darken-4'>
                    <a href='#!' class='brand-logo left' style={{ marginLeft: 20 }}>Profile Creator</a>
                    <ul className='right hide-on-med-and-down'>
                        <li><a href='#!' onClick={(e) => props.history.push('/createProfile')}>Create Profile</a></li>
                        {/* TODO - Logout the user */}
                        <li><a href="/" onClick={authenticationService.signOut}>Log Out</a></li>
                    </ul>
                </div>
            </nav>

            <center>
                <h2>TODO: Display Profiles here</h2>
            </center>
        </div>
    }
}

export default withCookies(ProfilesView);