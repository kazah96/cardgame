const WebSocket = require("ws");

function init() {
  const availableIds = [];
  const connections = [];
  let connectionCount = 0;

  const wss = new WebSocket.Server({
    port: 3000,
  });

  function addNewConnection(ws) {
    let id = availableIds.pop();
    if (id === undefined) {
      id = connectionCount;
    }

    connections[id] = ws;
    ws.id = id; // eslint-disable-line
    connectionCount += 1;
  }

  function removeConnection(ws) {
    delete connections[ws.id];
    availableIds.push(ws.id);
    connectionCount -= 1;
  }


  wss.on("connection", (ws) => {
    ws.on("close", () => {
      removeConnection(ws);
    });
    addNewConnection(ws);
  });

  wss.getAllConnections = () => connections;

  wss.getConnection = id => connections[id];

  return wss;
}

module.exports = init;
