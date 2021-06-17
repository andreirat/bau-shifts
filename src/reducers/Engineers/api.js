import {API_ROUTES} from '../../config';
import { get } from '../../utils/superagent';

export const getEngineers = async () => {
  return await get(API_ROUTES.engineers.getAll, {});
};
