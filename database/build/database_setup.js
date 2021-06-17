const fs = require('fs');
const path = require('path');
const connect = require('../connection');

const build = fs.readFileSync(path.join(__dirname, 'database_setup_query.sql'), 'utf8');

connect.query(build, (err, res) => {
  if (err) {
    console.log(err);
    console.error(err);
  } else {
    console.log('Values inserted successfully!');
  }
});
