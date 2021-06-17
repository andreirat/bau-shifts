export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const API_HOST = 'http://localhost:4000/api';
export const TIMEOUT = 10000;

export const API_ROUTES  = {
  engineers: {
    getAll: "/engineers",
    assignEngineers: "/engineers/assign",
  },
  shifts: {
    getInfo: "/shifts"
  }
};
