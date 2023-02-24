const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("server says", data);
  });
  conn.on("connect", () => {
    console.log('connection successful!');
    console.log('Successfully connected to game server');
    conn.write('name: LC');
  });
  return conn;
};


module.exports = {connect}