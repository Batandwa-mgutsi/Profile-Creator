import React from 'react';
import { ViewModelConsumer } from '../../../mvvm';
import '../../../materialize/css/materialize.css';
import LoginViewModel from './login_viewmodel';

export default class HomeView extends ViewModelConsumer {
    constructor(props) {
        super(props, new LoginViewModel());
    }

    /**
     * @param {LoginViewModel} model
     */
    onRender(props, model) {
        return <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {model.isBusy() &&
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>}

            <div style={{
                marginLeft: '40px',
                marginTop: '30px',
                fontSize: '40px',
                fontWeight: 'bold',
                color: '#051F74',
            }}>
                Log In
            </div>
            <div style={{
                marginLeft: '40px',
                height: '7px',
                width: '60px',
                backgroundColor: '#051F74',
            }}></div>

            <div
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}>
                <div className="row">
                    <div style={{
                        width: '600px',
                    }}>
                        <div className="card white darken-1">
                            <div className="card-content input-field" style={{
                                padding: '40px'
                            }}>
                                <div className="row">
                                    <form>
                                        {model.isBusy() ?
                                            <input placeholder="Email" disabled />
                                            : <input placeholder="Email" onChange={(e) => { model.setEmail(e.target.value) }} />
                                        }
                                        <br /><br />
                                        {model.isBusy() ?
                                            <input type="password" placeholder="Password" disabled />
                                            : <input type="password" placeholder="Password" onChange={(e) => { model.setPassword(e.target.value) }} />
                                        }
                                        <br /><br />
                                        <center>
                                            {(!model.isBusy() && model.canLogin()) && <a className="waves-effect waves-light btn" onClick={(e) => model.login()}>Log In</a>}
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <center>
                        <p style={{ marginTop: '50px', fontSize: '18px', color: '#8B8B8BFA' }}>
                            Easily manage all your developer profiles
                        </p>
                    </center>
                </div>
            </div>
        </div>
    }
}