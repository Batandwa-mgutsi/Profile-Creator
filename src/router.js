import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginView from './ui/views/login_view/login_view';
import CreateProfileView from './ui/views/create_profile_view/create_profile_view';
import ProfilesView from './ui/views/profiles_view/profiles_view';
import DisplayDeveloperProfileView from './ui/views/display_developer_profile_view/display_developer_profile_view';
import CreateTopicView from './ui/views/create_topic_view/create_topic_view';

import ContentView from './ui/views/content_view/content_view';

import React from 'react';
import App from './App';

const routes = <Router>
    <Route path='/' component={App} >
        <Route exact path='/' component={LoginView} />
        <Route path='/createProfile' component={CreateProfileView} />
        <Route path='/editProfile/:name/:id' component={CreateProfileView} />
        <Route path='/profiles' component={ProfilesView} />
        <Route path='/profile/:name/:id' component={DisplayDeveloperProfileView} />
        <Route path='/content' component={ContentView} />
        <Route path='/newTopic' component={CreateTopicView} />
    </Route>
</Router>

export default routes;