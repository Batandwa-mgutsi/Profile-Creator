import React from 'react';
import { withCookies } from 'react-cookie';
import { ViewModelConsumer } from '../../../mvvm';

import ContentViewModel from './content_viewmodel';
import { Topic } from '../../common/models';

class ContentView extends ViewModelConsumer {
    constructor(props) {
        super(props, new ContentViewModel());
    }

    /**
     * @param {ContentViewModel} model 
     */
    onRender(props, model) {
        return <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#FBFBFB' }}>
            <nav style={{ top: 0, display: 'fix' }}>
                <div className='nav-wrapper indigo darken-4'>
                    <a href='#!' className='brand-logo left' style={{ marginLeft: 20 }}>Content</a>
                    <ul className='right hide-on-med-and-down'>
                        <li><a href='#!profiles' onClick={(e) => props.history.push('/profiles')}>Profiles</a></li>
                        <li><a href="/">Log Out</a></li>
                    </ul>
                </div>
            </nav>
            {model.isBusy() ?
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                : <div>
                    <div style={{ height: 15 }}></div>
                    <div layout horizontal>
                        <div style={{ backgroundColor: 'grey', width: '20%', float: 'left' }} >
                            Hyperlinks here jodijoi  dsiooids  dsoijoijds  sdpojpojfds  sdpojpofd  dsoijo
                    </div>
                        <div style={{ backgroundColor: 'orange', width: '80%', float: 'right' }}>
                            <div className='row'>
                                <div className='col s12'>
                                    <a className="waves-effect waves-light btn-large" style={{ borderRadius: '20px' }}>
                                        <i class="material-icons left">add</i>Create
                                    </a>
                                </div>

                                <div className='col s12' style={{ overflow: 'auto' }}>
                                    <div className='col s10'>
                                        {
                                            model.allTopics().map((topic) => {
                                                return <TopicView topic={topic} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }

        </div>
    }
}

/**
 * @param {Topic} props.topic
 * @param {Function()} props.onClick
 * @param {Function()} props.onDelete
 * @param {Function()} props.onEdit
 */
function TopicView(props) {
    return <h1>{props.topic.title}</h1>
}

export default withCookies(ContentView);