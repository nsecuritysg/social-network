import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import { NewsContainer} from './components/News/NewsContainer';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Login as LoginPage } from './components/Login/Login';

const App = props => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/music' component={Music} />
        <Route path='/news' component={NewsContainer} />
        <Route path='/settings' component={Settings} />
        <Route path='/login' render={() => <LoginPage />} />
      </div>
    </div>
  );
};

export default App;
