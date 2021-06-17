import {createSelector} from 'reselect';
const entity = 'Shifts';

export const shiftInfo = createSelector([state => state[entity].shiftInfo], val => val);
export const api = createSelector([state => state[entity].api], val => val);
export const isLoading = createSelector([state => state[entity].api.loading], val => val);
