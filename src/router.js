import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginView from './ui/views/loginView/login_view';
import CreateProfileView from './ui/views/createProfileView/createProfileView';
import ProfilesView from './ui/views/profilesView/profilesView';

import React from 'react';
import App from './App';

const routes = <Router>
    <Route path='/' component={App} >
        <Route exact path='/' component={LoginView} />
        <Route path='/createProfile' component={CreateProfileView} />
        <Route path='/profiles' component={ProfilesView} />
    </Route>
</Router>

export default routes;