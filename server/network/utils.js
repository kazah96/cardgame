exports.makeNetworkMessage = function makeNetworkMessage({ type, msg }) {
  const message = JSON.stringify({
    type,
    data: msg,
  });

  return message;
};

exports.randGenerator = function randGenerator(digits) {
  const symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
  const arr = [];
  for (let index = 0; index < digits; index += 1) {
    arr.push(symbols[Math.round(Math.random() * symbols.length)]);
  }
  return arr.join("");
};
