import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginView from './ui/views/loginView/login_view';

function App() {
  return (
    <div style={{ height: '100%', margin: 0 }}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
