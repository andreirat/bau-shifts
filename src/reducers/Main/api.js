import { API_ROUTES } from "../../config";
import { get, post } from "../../utils/superagent";

export const getShiftInfo = async () => {
  return await get( API_ROUTES.shifts.getInfo, {} );
};

export const assignEngineers = async ( payload ) => {
  return await post( API_ROUTES.engineers.assignEngineers, payload );
};
