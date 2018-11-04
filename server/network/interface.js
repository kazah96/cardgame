const EventEmmiter = require("events");

const wss = require("../network/websocket");
const actions = require("./actions");
const filter = require("./filter");

function send(id, type, msg) {
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

    if (!filter(ws, parsedData)) {
      console.log("blocked unauthorized");
      send(ws.id, "UNAUTHORIZED");
      return;
    }

    if (!Object.keys(actions)
      .some(item => actions[item] === parsedData.type)) console.log("no such msg type");

    const msg = { socket: ws, data: parsedData.payload };
    myEmitter.emit(parsedData.type, msg);
  });
});

// DEBUGGING
global.send = send;
global.broadcast = broadcast;

exports.broadcast = broadcast;
exports.send = send;
exports.emitter = myEmitter;
