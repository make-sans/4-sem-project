import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import ErrorWrapperHOC from './components/common/ErrorWrapperHOC';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
import Projects from './components/project/Projects';
import UserProjects from './components/project/UserProjects';
import PrivateRoute from './components/common/PrivateRoute';
import Navbar from './components/common/Navbar';
import ConfirmEmail from './components/auth/ConfirmEmail';
import CreateProject from './components/create-project/CreateProject';
import EditProject from './components/project/EditProject';
import Project from './components/project/Project';
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import MyProfile from './components/MyProfile/MyProfile';
import checkAuthToken from './utils/checkAuthToken';

checkAuthToken();

ReactDOM.render(
  <Provider store={store}>
    <ErrorWrapperHOC>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/confirm/:token" component={ConfirmEmail} />
            <Route exact path="/" component={App} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/projects" component={Projects} />
            <PrivateRoute
              exact
              path="/project/edit/:id"
              component={EditProject}
            />
            <PrivateRoute exact path="/my-profile" component={MyProfile} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/my-projects" component={UserProjects} />
            <PrivateRoute
              exact
              path="/create-project"
              component={CreateProject}
            />
            <PrivateRoute exact path="/project/:id" component={Project} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </ErrorWrapperHOC>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
