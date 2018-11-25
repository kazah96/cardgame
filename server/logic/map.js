const {
  send, outEmitter, emitter, broadcast,
} = require("../network/interface");

const fs = require("fs");

const actions = require("../network/actions");
const registerUser = require("../actions/registerUser");
const userTypes = require("../network/userTypes");
const dirname = require("path");

const mapDir = `${__dirname}/../assets/maps`;

function loadMap(filePath) {
  return new Promise((accept, reject) => {
    fs.access(filePath, fs.constants.F_OK | fs.constants.R_OK, (err) => {
      if (err) {
        reject(err);
        return;
      }
      fs.readFile(filePath, "utf-8", (fileErr, data) => {
        if (fileErr) {
          reject(fileErr);
          return;
        }
        accept(JSON.parse(data));
      });
    });
  });
}

emitter.on(actions.getMap, ({ ws, msg }) => {
  loadMap(`${mapDir}/${msg.data.name}.json`)
    .then(map => send(ws.id, "MAP", { map }))
    .catch(err => send(ws.id, "URRAA", { error: err }));
});
