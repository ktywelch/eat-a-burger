const connection = require('./connection.js');

const orm = {
  all(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) throw err;
      console.log(result);
      cb(result)

    });
  },

  //orm.create('burgers', cols, vals, (res) => cb(res));
  create(table, cols,vals, cb) {
    const queryString = `INSERT INTO ${table} (${cols}) values ('${vals}')`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
      cb(result)
    });
  },

  update(table, cols, vals, condition, cb) {
    const queryString = `UPDATE ${table} set ${cols} = ${vals} where ${condition}`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
      cb(result)
    });
  },



};

module.exports = orm;
