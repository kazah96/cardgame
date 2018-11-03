const WebSocket = require("ws");

function init() {
  const availableIds = [];
  const connections = [];
  let connectionCount = 0;

  const wss = new WebSocket.Server({
    port: 8080,
  });

  wss.on("connection", (ws) => {
    ws.on("close", () => {
      removeConnection(ws);
    });
    addNewConnection(ws);

    ws.on("message", data => console.log(data));
  });

  wss.getAllConnections = () => connections;

  wss.getConnection = id => connections[id];

  function addNewConnection(ws) {
    let id = availableIds.pop();
    if (id === undefined) {
      id = connectionCount;
    }

    connections[id] = ws;
    ws.id = id;
    connectionCount += 1;
  }

  function removeConnection(ws) {
    delete connections[ws.id];
    availableIds.push(ws.id);
    connectionCount -= 1;
  }

  return wss;
}

const name = 'websocketServer';

function getInstance() {
  if (global[name]) {
    return global[name];
  }

  global[name] = init();
  return global[name];
}

module.exports = getInstance();
