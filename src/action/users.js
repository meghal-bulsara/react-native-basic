import { allUsers } from '../api/User'
import * as types from './types';

export const setUsers = (users) => {
    return { type: types.setUsers, users: users }
}

export const fetchUsers = () => {
    return (dispatch, getState) => {
        try {
            allUsers(getState().token)
                .then((response) => {
                    return dispatch(setUsers(response))
                })
                .catch((e) => {
                    console.log(e);
                });

        } catch (error) {
            console.log(error);
        }
    }
}