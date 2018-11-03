const EventEmmiter = require("events");

const wss = require("../network/websocket");
const actions = require("./actions");

function broadcast(msg) {
  wss.getConnections.forEach((client) => {
    client.send(msg);
  });
}

function send(id, type, msg) {
  if (wss.getConnection(id) === undefined) return;

  const message = JSON.stringify({
    type,
    data: msg,
  });

  wss.getConnection(id).send(message);
}

class MyEmitter extends EventEmmiter { }

const myEmitter = new MyEmitter();

wss.on("connection", (ws) => {
  myEmitter.emit(actions.peerConnected, { id: ws.id });
  ws.on("close", () => myEmitter.emit(actions.peerDisconnected, { id: ws.id }));
  ws.on("message", (data) => {
    const parsedData = JSON.parse(data);
    if (!Object.keys(actions).some(item => actions[item] === parsedData.type)) throw new Error("no such msg type");

    const msg = { id: ws.id, data: parsedData.payload };
    myEmitter.emit(parsedData.type, msg);
  });
});


exports.broadcast = broadcast;
exports.send = send;
exports.emitter = myEmitter;
