import request from 'superagent'
import {API_HOST, TIMEOUT} from '../config'

/**
 * @description Append token & other header fields to the default request header
 *
 * @param token: String
 * @param others: Object
 * @returns Object
 * @private
 */
function getRequestHeader(token = null, others = {}) {
  let header = {
    'Content-Type': 'application/json',
    ...others
  };
  if (token) {
    header = Object.assign({}, header, { 'X-jwt': token });
  }
  return header
}

/**
 * @description GET request
 *
 * @param path: String
 * @param query: Object
 * @param token: String
 * @returns Promise
 */
export function get(path, query = {}, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .get(API_HOST+path)
      .query(query)
      .set(header)
      .timeout({ response: TIMEOUT })
      .end((err, res) => {
        if (err) {
          return reject({ message: `${err}` });
        }
        return resolve(res);
      });
  });
}

/**
 * @description POST request
 *
 * @param path: String
 * @param payload: Object
 * @param token: String
 * @returns Promise
 */
export function post(path, payload, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .post(API_HOST+path)
      .set(header)
      .send(payload)
      .timeout({ response: TIMEOUT })
      .end((err, res) => {
        if (err) {
          return reject({ message: `${err}` });
        }
        return resolve(res);
      });
  });
}

/**
 * @description PUT request
 *
 * @param path: String
 * @param payload: Object
 * @param token: String
 * @returns Promise
 */
export function patch(path, payload, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .patch(path)
      .send(payload)
      .set(header)
      .timeout({ response: TIMEOUT })
      .end((err, res) => {
        if (err) {
          return reject({ message: `${err}` });
        }
        return resolve(res);
      });
  });
}

/**
 * @description DELETE request
 *
 * @param path: String
 * @param query: Object
 * @param token: String
 * @returns Promise
 */
export function del(path, query = {}, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .delete(path)
      .query(query)
      .set(header)
      .timeout({ response: TIMEOUT })
      .end((err, res) => {
        if (err) {
          return reject({ message: `${err}` });
        }
        return resolve(res);
      });
  });
}
