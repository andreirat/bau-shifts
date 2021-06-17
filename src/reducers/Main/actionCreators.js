import Constants from './constants';

/**
 * GET SHIFT INFORMATION
 */
export const _getShiftInfo = {
  pending: () => ({
    type: Constants.GET_SHIFT_INFO_PENDING,
  }),
  success: data => ({
    type: Constants.GET_SHIFT_INFO_SUCCESS,
    payload: data,
  }),
  error: err => ({
    type: Constants.GET_SHIFT_INFO_ERROR,
    payload: err,
  }),
};

/**
 * ASSIGN ENGINEERS FOR TODAY SHIFT
 */
export const _assignEngineers = {
  pending: () => ({
    type: Constants.ASSIGN_ENGINEERS_PENDING,
  }),
  success: data => ({
    type: Constants.ASSIGN_ENGINEERS_SUCCESS,
    payload: data,
  }),
  error: err => ({
    type: Constants.ASSIGN_ENGINEERS_ERROR,
    payload: err,
  }),
};
