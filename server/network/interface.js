const EventEmmiter = require("events");
const WebSocket = require("../network/websocket");
const actions = require("./actions");
const sessionMiddleware = require("./sessionManager");
const Middleware = require("./middleware");
const makeEmitterMiddleware = require("./emitterMiddleware");
const filterMiddleware = require("./filter");

class MessageEmitter extends EventEmmiter { }

class SocketInterface {
  constructor(wss) {
    this.wss = wss;
    this.middlewareManager = new Middleware();
    this.emitter = new MessageEmitter();
    this.addMiddleware = this.addMiddleware.bind(this);
    this.send = this.send.bind(this);
    this.broadcast = this.broadcast.bind(this);
    this.init = this.init.bind(this);

    this.init();
  }

  init() {
    this.wss.on("connection", (ws) => {
      this.middlewareManager.exec({
        ws,
        msg: {
          type: actions.peerConnected,
          data: {},
        },
      });
      ws.on("close", () => this.middlewareManager.exec({
        ws,
        msg: {
          type: actions.peerDisconnected,
          data: {},
        },
      }));
      ws.on("message", (data) => {
        const parsedData = JSON.parse(data);
        this.middlewareManager
          .exec(
            {
              ws,
              msg: {
                type: parsedData.type,
                data: { ...parsedData.data },
              },
            },
          );
      });
    });

    this.middlewareManager.addMiddleware(makeEmitterMiddleware(this.emitter, this.send));
  }

  addMiddleware(middleware) {
    this.middlewareManager.addMiddleware(middleware);
  }

  broadcast(type, data) {
    this.wss.getAllConnections().forEach((connection) => {
      this.send(connection.id, type, data);
    });
  }

  send(id, type, msg) {
    if (this.wss.getConnection(id) === undefined) return;
    const message = JSON.stringify({
      type,
      data: msg,
    });

    this.wss.getConnection(id).send(message);
  }
}

function initInterface() {
  const webSocket = WebSocket();
  const socketInterface = new SocketInterface(webSocket);

  // middlewares, в обратном порядке
  socketInterface.addMiddleware(filterMiddleware);
  socketInterface.addMiddleware(sessionMiddleware);

  return socketInterface;
}

function getInstance() {
  const name = "webSocketInterface";
  let instance = global[name];

  if (instance === undefined) {
    instance = initInterface();
    global[name] = instance;
  }

  return instance;
}

module.exports = getInstance();
