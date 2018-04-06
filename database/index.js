const { Pool } = require('pg');

// FOR LOCAL DATABASE TESTING
const pool = new Pool({
  user: 'decross',
  host: 'localhost',
  database: 'clinvitae',
  password: '',
  port: 5432,
  ssl: false,
});

pool.connect();

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('Database Pool Connection Error', err);
  }
  console.log('Database Pool Connected');
});

const getData = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      'select * from invariants', (err, res) => {
        if (err) {
          console.log('GetData err', err);
          reject(err);
        }
        console.log('Query success');
        resolve(res.rows);
      }
    );
  });
};


module.exports = {
  pool,
  getData,
};