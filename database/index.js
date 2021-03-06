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

const getData = (geneName) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select distinct(Gene) as title from invariants
       where Gene like '%${geneName.toUpperCase()}%'
       limit 6`, (err, res) => {
        if (err) {
          console.log('GetData err', err);
          reject(err);
        }
        console.log('getData Query success');
        resolve(res.rows);
      }
    );
  });
};

const findVariants = (geneName) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select * from invariants
       where Gene like '${geneName.toUpperCase()}'
       order by nucleotidechange desc`, (err, res) => {
        if (err) {
          console.log('Find Variant err', err);
          reject(err);
        }
        console.log('Variant Query success');
        resolve(res.rows);
      }
    );
  });
};

module.exports = {
  pool,
  getData,
  findVariants
};
