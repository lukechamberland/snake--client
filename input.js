let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  } else {
    // implementing wasd as if statements
    if (key === "w") {
      console.log("moving up");
      connection.write("Move: up");
    }
    if (key === "a") {
      console.log("moving left"); 
      connection.write("Move: left");
    }
    if (key === "s") {
      console.log("moving down"); 
      connection.write("Move: down");
    }
    if (key === "d") {
      console.log("moving right"); 
      connection.write("Move: right");
    }
    if (key === 'z'){
      connection.write("Say: Hello!")
    }
    if (key === 'x'){
      connection.write("Say: I")
    }
    if (key === 'c'){
      connection.write("Say: am")
    }
    if (key === 'v'){
      connection.write("Say: a")
    }
    if (key === 'b'){
      connection.write("Say: SNAKE!!!")
    }
  }
};

module.exports = {setupInput};