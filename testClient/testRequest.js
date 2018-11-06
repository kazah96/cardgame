const Ws = require("ws");

const socket = new Ws("ws://localhost:3000");

const qwr = function sendMsg(type, data) {
  socket.send(JSON.stringify({ type, data }));
};

socket.on("message", console.log);

global.sendMsg = qwr;
