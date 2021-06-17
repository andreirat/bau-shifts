import * as api from './api';
import * as actions from './actionCreators';

/**
 * @description Get engineers list action
 * @returns {function(...[*]=)}
 */
export const getEngineers = () => dispatch => {
  dispatch(actions._getEngineers.pending());
  api
    .getEngineers()
    .then( res => {
      dispatch(actions._getEngineers.success(res.body));
      }
    )
    .catch(
      err => {
        dispatch(actions._getEngineers.error(err));
      }
    );
};

/**
 * Update engineers list in state
 * @param engineers
 * @returns {function(...[*]=)}
 */
export const setEngineers = (engineers) => dispatch => {
  dispatch(actions._setEngineers.success(engineers));
};

