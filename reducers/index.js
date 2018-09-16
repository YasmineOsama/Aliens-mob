import { createStore, combineReducers } from 'redux';
import aliens from './aliens';
import users from './users';

const reducers = combineReducers({ aliens, users });
const store = createStore(reducers);

export default store;
