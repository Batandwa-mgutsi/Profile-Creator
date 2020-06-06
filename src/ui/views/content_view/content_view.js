import React from 'react';
import { withCookies } from 'react-cookie';
import { ViewModelConsumer } from '../../../mvvm';

import ContentViewModel from './content_viewmodel';
import { Topic } from '../../common/models';

import '../../common/styles.css';

import M from 'materialize-css';

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
                : <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                    <div style={{ overflow: 'auto' }}>
                        <div style={{
                            overflow: 'auto',
                            position: 'fixed',
                            paddingLeft: '20px',
                            width: '20%',
                            height: '100%',
                            display: 'flex',
                            alignContent: 'center',
                            alignItems: 'center',
                            float: 'left'
                        }} >
                            <HyperlinksView topics={model.allTopics()} />
                        </div>
                        <div style={{ width: '80%', float: 'right', overflow: 'auto' }}>
                            <div className='row'>
                                <div className='col s12' style={{ marginTop: '20px' }}>
                                    <a className="waves-effect waves-light btn-large"
                                        onClick={(e) => props.history.push('/newTopic')}
                                        style={{ borderRadius: '20px' }}>
                                        <i className="material-icons left">add</i>Create
                                    </a>
                                </div>

                                <div className='col s12' style={{ paddingTop: '20px', paddingBottom: '20px' }}>
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

class TopicView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        M.AutoInit();
    }

    /**
     * @param {Topic} props.topic
     * @param {Function()} props.onClick
     * @param {Function()} props.onDelete
     * @param {Function()} props.onEdit
     */
    render() {
        var props = this.props;
        return <div id={props.topic.title} className='col s12' style={{ paddingTop: '50px', paddingBottom: '20px' }}>

            <div className='col s12' style={{ paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <div className='col s11' style={{ fontSize: '2.5vw', color: '#051F74' }}>
                    {props.topic.title}
                </div>
                <div className='col s1'>
                    <div href='#' id='menu-trigger' className='dropdown-trigger btn-flat waves-effect waves-light' data-target='topic-menu-target'>
                        <i className="material-icons right" style={{ color: '#051F74', fontSize: '1.9vw' }}>more_vert</i>
                    </div>
                    <ul id='topic-menu-target' className='dropdown-content'>
                        <li><a href="#!">Edit</a></li>
                        <li><a href="#!">Delete</a></li>
                    </ul>
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

}

/**
 * 
 * @param {Material} props.material
 */
function MaterialView(props) {
    return <div id={props.material.title} className='col s12 selectable-item' style={{ paddingLeft: '0px', paddingTop: '15px', paddingBottom: '15px' }}>
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
                    <i className="material-icons" style={{ color: 'white', }}>inbox</i>
                </div>
            </div>
            <div style={{ color: '#333333', fontSize: '1.3vw', fontWeight: '500' }}>
                {props.material.title}
            </div>
        </div>

    </div>
}

/**
 * @param {Array<Topic>} props.topics
 */
function HyperlinksView(props) {
    const linkStyle = {
        color: '#707B7C',
        fontSize: '1.2vw'
    }
    return <div style={{
        flexDirection: 'column',
    }}>
        {
            props.topics.map((topic) => {
                return <div style={{ color: 'black' }}>
                    <a href={`#${topic.title}`} style={linkStyle}>
                        <p>{topic.title}</p>
                    </a>
                    <div style={{ paddingLeft: '10px' }}>
                        {
                            topic.material.map((material) => {
                                return <a href={`#${material.title}`} style={linkStyle}>
                                    <p>{material.title}</p>
                                </a>
                            })
                        }
                    </div>
                </div>
            })
        }
    </div>
}

export default withCookies(ContentView);