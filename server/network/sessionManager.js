const { admin, anonymous, user } = require("./userTypes");
const login = require("../logic/login");

const sessionArray = {};

// TODO: add more complex validation logic
function isSessionValid(session) {
  if (session) {
    return true;
  }
  return false;
}

// function login({ username, password }) {
//   if (username === "pok" && password === "123") return { username, type: user };
//   return undefined;
// }

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

function setSession({ ws, token, type }) {

}

// TODO: COVER WIT TESTS
function sessionMiddleware({ ws, msg }) {
  const { session } = ws;

  if (!isSessionValid(session)) {
    ws.session = { type: anonymous };
  }

  if (msg.type === "HANDSHAKE") {
    if (msg.data.token && sessionArray[msg.data.token]) {
      ws.session = {
        token: msg.data.token,
        ...sessionArray[msg.data.token],
      };

      send({ ws, type: "HANDSHAKE_ACCEPTED", msg: "token" });
      return { ws, msg };
    }

    send({ ws, type: "HANDSHAKE_REJECTED", msg: "token" });
    ws.session = { type: anonymous };
    return { ws, msg };
  }

  if (msg.type === "LOGIN") {
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

        send({ ws, type: "LOGIN_SUCCESS", msg: { ...result, token } });
      })
      .catch((error) => {
        send({ ws, type: "LOGIN_FAIL", msg: { error } });
      });

    return { ws, msg };
  }

  return { ws, msg };
}

module.exports = sessionMiddleware;
