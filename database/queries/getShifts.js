const pool = require('../connection');

const getShifts = (callback) => {
  pool.query('SELECT * FROM shifts', (err, shifts) => {
    if (err) {
      return callback(err);
    }
    else {
      return callback(null, shifts.rows[0])
    }
  });
};

module.exports = getShifts;
