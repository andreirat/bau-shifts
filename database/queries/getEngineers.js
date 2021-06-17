const pool = require('../connection');

const getEngineers = (callback) => {
  pool.query('SELECT * FROM engineers', (err, engineers) => {
    if (err) {
      return callback(err);
    }
    else {
      return callback(null, engineers.rows)
    }
  });
};

module.exports = getEngineers;
