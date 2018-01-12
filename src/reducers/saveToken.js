import createReducer from './../lib/createReducer';
import * as types from './../action/types';

export const token = createReducer({}, {
    [types.saveToken](state, action) {
        return action.token;
    }
})
