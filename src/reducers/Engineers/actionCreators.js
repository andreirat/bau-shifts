import Constants from "./constants";

/**
 * GET ENGINEERS LIST
 */
export const _getEngineers = {
  pending: () => ({
    type: Constants.GET_ENGINEERS_PENDING,
  }),
  success: data => ({
    type: Constants.GET_ENGINEERS_SUCCESS,
    payload: data,
  }),
  error: err => ({
    type: Constants.GET_ENGINEERS_ERROR,
    payload: err,
  }),
};

/**
 * SET ENGINEERS LIST
 */
export const _setEngineers = {
  success: data => ({
    type: Constants.SET_ENGINEERS_SUCCESS,
    payload: data,
  })
};
