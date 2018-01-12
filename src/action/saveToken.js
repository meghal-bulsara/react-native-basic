import * as types from './types';

export const saveToken = (token) => {
    return { type: types.saveToken, token: token }
}