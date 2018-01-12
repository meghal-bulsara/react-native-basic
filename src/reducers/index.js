import { combineReducers } from 'redux';
import * as test from './test';
import * as saveToken from './saveToken';
import * as setUsers from './setUsers';

export default combineReducers(Object.assign(test, setUsers, saveToken ));