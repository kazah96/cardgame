const EventEmmiter = require("events");

const wss = require("../network/websocket");
const actions = require("./actions");


function send(id, type, msg) {
  console.log("sendiq");
  if (wss.getConnection(id) === undefined) return;

  const message = JSON.stringify({
    type,
    data: msg,
  });

  wss.getConnection(id).send(message);
}

function broadcast(type, data) {
  wss.getAllConnections().forEach((connection) => {
    send(connection.id, type, data);
  });
}


class MyEmitter extends EventEmmiter { }

const myEmitter = new MyEmitter();

wss.on("connection", (ws) => {
  myEmitter.emit(actions.peerConnected, { id: ws.id });
  ws.on("close", () => myEmitter.emit(actions.peerDisconnected, { id: ws.id }));
  ws.on("message", (data) => {
    const parsedData = JSON.parse(data);
    if (!Object.keys(actions).some(item => actions[item] === parsedData.type)) console.log("no such msg type");

    const msg = { id: ws.id, data: parsedData.payload };
    myEmitter.emit(parsedData.type, msg);
  });
});

// DEBUGGING
global.send = send;
global.broadcast = broadcast;

exports.broadcast = broadcast;
exports.send = send;
exports.emitter = myEmitter;
