import * as types from './types';

export const testAction = (data) => {
    return { type: types.testAction, data: data }
}
