import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginView from './ui/views/loginView/login_view';
import CreateProfileView from './ui/views/createProfileView/createProfileView';
import ProfilesView from './ui/views/profilesView/profilesView';

function App() {
  return (
    <div style={{ height: '100%', margin: 0 }}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginView />
          </Route>
          <Route path='/createProfile'>
            <CreateProfileView />
          </Route>
          <Route path='/profiles'>
            <ProfilesView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
