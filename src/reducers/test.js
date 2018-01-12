import createReducer from './../lib/createReducer';
import * as types from './../action/types';

export const test = createReducer({}, {
    [types.testAction](state, action) {
        return action.data;
    }
})