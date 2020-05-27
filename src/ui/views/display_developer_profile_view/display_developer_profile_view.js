import React from 'react';
import { ViewModelConsumer } from '../../../mvvm';
import DisplayDeveloperProfileViewModel from './display_developer_profile_viewmodel'

import HalfDeveloperDisplay from '../../shared_widgets/half_developer_display';
import { getDeveloperFullName } from '../../common/utils';

import YouTubeIcon from '../../../image_assets/youtube.png';
import GithubIcon from '../../../image_assets/github.png';

export default class DisplayDeveloperProfileView extends ViewModelConsumer {
    constructor(props) {
        super(props, new DisplayDeveloperProfileViewModel());
    }

    /**
     * @param {DisplayDeveloperProfileViewModel} model
     */
    onRender(props, model) {
        return <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#051F74' }}>
            <nav style={{ top: 0, display: 'fix' }}>
                <div className='nav-wrapper indigo darken-4'>
                    <a href='#!' class='brand-logo left' style={{ marginLeft: 20 }}>
                        {model.developer === null ?
                            'Profile Creator'
                            : getDeveloperFullName(model.developer)
                        }
                    </a>
                    <ul className='right hide-on-med-and-down'>
                        {model.userCanEditProfile ?
                            <li>
                                <a href='#!'
                                    onClick={(e) => props.history.push(`/profile/${getDeveloperFullName(model.developer)}/${model.developer._id}/`)}>Edit
                                </a>
                            </li>
                            : <li><a href="/">Log In</a></li>
                        }
                    </ul>
                </div>
            </nav>
            {model.isBusy() ?
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                : model.developer === null ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div>Aw snap! The profile you requested is either not public or does not exist</div>
                    </div>
                    : <div style={{ overflow: 'auto' }}>
                        <div className='container' style={{ paddingTop: '20px' }}>
                            <div className='row white' style={{ padding: '20px' }}>
                                <HalfDeveloperDisplay developer={model.developer} >
                                    <div className='col s12' style={{ color: '#051F74', fontWeight: 'bold' }}>
                                        Meet Me
                                    </div>
                                    <div className='col s12' style={{ paddingTop: '7px' }}>
                                        <div className='col s6'>
                                            <div className='col s2'>
                                                <img src={YouTubeIcon} style={{ maxHeight: '30px', maxWidth: '30px' }} />
                                            </div>
                                            <a href={this.getSocialMediaLink('youtube', model.developer)} className='col s10'>
                                                {this.getSocialMediaLink('youtube', model.developer)}
                                            </a>
                                        </div>
                                        <div className='col s6'>
                                            <div className='col s2'>
                                                <img src={GithubIcon} style={{ maxHeight: '30px', maxWidth: '30px' }} />
                                            </div>
                                            <a href={this.getSocialMediaLink('github', model.developer)} className='col s10'>
                                                {this.getSocialMediaLink('github', model.developer)}
                                            </a>
                                        </div>
                                    </div>
                                </HalfDeveloperDisplay>
                            </div>
                        </div>
                    </div>
            }

        </div>
    }

    /**
    * @param {DisplayDeveloperProfileViewModel} model
    */
    onModelReady(model) {
        model.onInitView(this.props.match.params.id);
    }

    /** 
     * @param {String} socialMediaId
     */
    getSocialMediaLink(socialMediaId, developer) {
        return developer.socialMedia.find((service) => service.name === socialMediaId).link;
    }
}