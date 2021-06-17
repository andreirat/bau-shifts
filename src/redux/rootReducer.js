import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Engineers from '../reducers/Engineers/reducer';
import Main from '../reducers/Main/reducer';

export default combineReducers({
  routing: routerReducer,
  Engineers,
  Main
});
