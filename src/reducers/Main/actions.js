import * as api from './api';
import * as actions from './actionCreators';
import * as engineersActions from '../Engineers/actionCreators';

/**
 * @description Get information about the shifts
 * @returns {function(...[*]=)}
 */
export const getShiftInfo = () => dispatch => {
  dispatch(actions._getShiftInfo.pending());
  api
    .getShiftInfo()
    .then( res => {
      dispatch(actions._getShiftInfo.success(res.body));
      }
    )
    .catch(
      err => {
        dispatch(actions._getShiftInfo.error(err));
      }
    );
};

/**
 * @description Assign engineers to today's shift
 * @returns {function(...[*]=)}
 */
export const assignEngineers = (payload) => dispatch => {
  dispatch(actions._assignEngineers.pending());
  api
    .assignEngineers(payload)
    .then( res => {
      dispatch(actions._assignEngineers.success(res.body));
      dispatch(engineersActions._setEngineers.success(payload.engineers));
      }
    )
    .catch(
      err => {
        dispatch(actions._assignEngineers.error(err));
      }
    );
};
