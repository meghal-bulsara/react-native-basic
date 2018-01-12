import createReducer from '../lib/createReducer';
import * as types from '../action/types';

export const users = createReducer([], {
    [types.setUsers](state, action) {
        return action.users;
    }
})