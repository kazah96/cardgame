const { anonymous } = require("./userTypes");
const login = require("../logic/login");
const actions = require("./actions");
const { randGenerator, makeNetworkMessage } = require("./utils");

const sessionArray = {};

// TODO: add more complex validation logic
function isSessionValid(session) {
  if (session) {
    return true;
  }
  return false;
}

// TODO: COVER WIT TESTS
function sessionMiddleware({ ws, msg }) {
  const { session } = ws;

  if (!isSessionValid(session)) {
    ws.session = { type: anonymous };
  }

  if (msg.type === actions.handshake) {
    if (msg.data.token && sessionArray[msg.data.token]) {
      ws.session = {
        token: msg.data.token,
        ...sessionArray[msg.data.token],
      };

      ws.emitSend(actions.handshakeAccepted, ws.session);
      return { ws, msg };
    }

    ws.emitSend(actions.handshakeRejected, "token");
    ws.session = { type: anonymous };
    return { ws, msg };
  }

  if (msg.type === actions.logout) {
    if (ws.session && ws.session.token) {
      delete sessionArray[ws.session.token];
      delete ws.session;
      ws.session = { type: anonymous };
    }
  }

  if (msg.type === actions.login) {
    login({ username: msg.data.username, password: msg.data.password })
      .then((result) => {
        const token = randGenerator(12);
        sessionArray[token] = {
          ...result,
          token,
        };

        ws.session = {
          token,
          ...sessionArray[token],
        };

        ws.emitSend(actions.loginSuccess, { ...result, token });
      })
      .catch((error) => {
        ws.emitSend(actions.loginFail, { error });
      });

    return { ws, msg };
  }

  return { ws, msg };
}

module.exports = sessionMiddleware;
