import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginView from './ui/views/login_view/login_view';
import CreateProfileView from './ui/views/create_profile_view/create_profile_view';
import ProfilesView from './ui/views/profiles_view/profiles_view';

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