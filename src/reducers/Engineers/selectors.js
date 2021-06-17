import {createSelector} from 'reselect';
const entity = 'Engineers';

export const engineers = createSelector([state => state[entity].engineers], val => val);
export const api = createSelector([state => state[entity].api], val => val);
export const isLoading = createSelector([state => state[entity].api.loading], val => val);
