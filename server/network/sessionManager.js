const { anonymous } = require("./userTypes");
const login = require("../logic/login");
const actions = require("./actions");

const sessionArray = {};

// TODO: add more complex validation logic
function isSessionValid(session) {
  if (session) {
    return true;
  }
  return false;
}

function send({ ws, type, msg }) {
  const message = JSON.stringify({
    type,
    data: msg,
  });

  ws.send(message);
}

function randGenerator(digits) {
  const symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
  const arr = [];
  for (let index = 0; index < digits; index += 1) {
    arr.push(symbols[Math.round(Math.random() * symbols.length)]);
  }
  return arr.join("");
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

      send({ ws, type: actions.handshakeAccepted });
      return { ws, msg };
    }

    send({ ws, type: actions.handshakeRejected, msg: "token" });
    ws.session = { type: anonymous };
    return { ws, msg };
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

        send({ ws, type: actions.loginSuccess, msg: { ...result, token } });
      })
      .catch((error) => {
        send({ ws, type: actions.loginFail, msg: { error } });
      });

    return { ws, msg };
  }

  return { ws, msg };
}

module.exports = sessionMiddleware;
