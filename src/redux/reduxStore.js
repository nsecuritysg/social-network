import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import newsReducer from './newsReducer';
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  newsPage: newsReducer, 
  form: formReducer,
  app: appReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
