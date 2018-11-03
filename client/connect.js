const socket = new WebSocket("ws://localhost:8080");

const id = window.sessionStorage.getItem("id");

socket.onopen = function () {
  alert("Соединение установлено.");
  sendMessage("ESTABLISH_SESSION", { sessionId: id });
};

function sendMessage(type, obj) {
  const message = JSON.stringify({ type, payload: obj });

  socket.send(message);
}

socket.onmessage = (msg) => {
  const message = JSON.parse(msg.data);
  switch (message.type) {
    case "ESTABLISH_SESSION":
      window.sessionStorage.setItem("id", message.data.sessionId);
      console.log("estaclihh");
      break;
    default:
      console.log(msg);
  }
};
