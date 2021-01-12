const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'idq2zjywy31adkvm',
  password: 'm18gvn2n05xv5q8w',
  database: 'bd4ebva0by5abmnp'
});


connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;




