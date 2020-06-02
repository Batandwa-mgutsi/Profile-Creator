import React from 'react';
import { withCookies } from 'react-cookie';
import { ViewModelConsumer } from '../../../mvvm';

import ContentViewModel from './content_viewmodel';
import { Topic } from '../../common/models';

import '../../common/styles.css';

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
                        <div style={{ width: '80%', float: 'right' }}>
                            <div className='row'>
                                <div className='col s12'>
                                    <a className="waves-effect waves-light btn-large" style={{ borderRadius: '20px' }}>
                                        <i class="material-icons left">add</i>Create
                                    </a>
                                </div>

                                <div className='col s12' style={{ overflow: 'auto', paddingTop: '20px', paddingBottom: '20px' }}>
                                    <div className='col s10'>
                                        {
                                            model.allTopics().map((topic) => {

                                                return <div className='col s12 floating-view'>
                                                    <TopicView topic={topic} />
                                                </div>
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
    return <div className='col s12' style={{ paddingTop: '50px', paddingBottom: '20px' }}>
        <div className='col s12' style={{ paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <div className='col s11' style={{ fontSize: '2.5vw', color: '#051F74' }}>
                {props.topic.title}
            </div>
            <div className='col s1'>
                <div className='btn-flat waves-effect waves-light'>
                    <i class="material-icons right" style={{ color: '#051F74', fontSize: '1.9vw' }}>more_vert</i>
                </div>
            </div>
        </div>

        <div className='col s12 divider orange' />

        <div className='col s12'>
            {
                props.topic.material.map((material) => {
                    return <div className='col s12' style={{ cursor: 'pointer' }}>
                        <MaterialView material={material} />
                        <div className='col s12 divider' />
                    </div>
                })
            }
        </div>
    </div>
}

/**
 * 
 * @param {Material} props.material
 */
function MaterialView(props) {
    return <div className='col s12 selectable-item' style={{ paddingLeft: '0px', paddingTop: '15px', paddingBottom: '15px' }}>
        <div className='col s12' style={{ display: 'flex', alignItems: 'center' }}>
            <div className='col' >
                <div style={{
                    backgroundColor: '#051F74',
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <i class="material-icons" style={{ color: 'white', }}>inbox</i>
                </div>
            </div>
            <div style={{ color: '#333333', fontSize: '1.3vw', fontWeight: '500' }}>
                {props.material.title}
            </div>
        </div>

    </div>
}

export default withCookies(ContentView);