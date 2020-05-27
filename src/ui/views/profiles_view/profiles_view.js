import React from 'react';
import { ViewModelConsumer } from '../../../mvvm';
import ProfilesViewModel from './profiles_viewmodel';
import { authenticationService } from '../../../services/authentication_service'
import { withCookies, Cookies, useCookies } from 'react-cookie';

import { getDeveloperFullName } from '../../common/utils';

import HalfDeveloperDisplay from '../../shared_widgets/half_developer_display';

export default class ProfilesView extends ViewModelConsumer {
    constructor(props) {
        super(props, new ProfilesViewModel());
        const { cookies } = this.props;
        console.log('Profile cookies: ', cookies);
        console.log('Profile Props Cookies : ', cookies.get('connect.sid'));
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
                        <li><a href='#!' onClick={(e) => props.history.push('/content')}>Content</a></li>
                        <li><a href="/">Log Out</a></li>
                    </ul>
                </div>
            </nav>
            {model.isBusy() ?
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                : model.getFilteredDevelopers().length == 0 ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div>Aw snap! There's no profiles to show. Please create one</div>
                    </div>
                    : <div style={{ overflow: 'auto' }}>
                        <div className='container'>
                            {
                                model.getFilteredDevelopers().map((developer) => {
                                    return <div key={developer._id} className='row short-profile' style={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '6px', marginTop: '30px', padding: '10px' }}>
                                        <HalfDeveloperDisplay developer={developer} />
                                        <div className='col s12'>
                                            <div className='col' style={{ float: 'right', paddingTop: '10px' }}>
                                                <a href='#!' className='btn-flat waves-effect waves-light'
                                                    style={{
                                                        marginRight: '10px',
                                                        color: '#26A69AFA',
                                                        border: '1px solid #D9D9D9',
                                                        borderRadius: '5px'
                                                    }} >Edit</a>
                                                <a href='#!'
                                                    className='btn waves-effect waves-light'
                                                    onClick={(e) => props.history.push(`/profile/${getDeveloperFullName(developer)}/${developer._id}/`)} >
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
            }
            {!model.isBusy() &&
                <div class="fixed-action-btn">
                    <a class="btn-floating btn-large teal" onClick={(e) => props.history.push('/createProfile')}>
                        <i class="large material-icons">add</i>
                    </a>
                </div>
            }


        </div>
    }
}

export default withCookies(ProfilesView);