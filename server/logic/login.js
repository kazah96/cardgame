const { User } = require("../models/user");

function loginUser({ username, password }) {
  return new Promise((resolve, reject) => {
    User.find({ username }, (err, docs) => {
      if (err) {
        reject(err);
        return;
      }

      if (docs.length === 0) {
        reject(`${username} Пользовательн не существует`); // eslint-disable-line
        return;
      }

      if (docs[0].password === password) {
        resolve({ username: docs[0].username, type: docs[0].type });
      }

      reject("PASSWORD INCORRECT"); // eslint-disable-line
    });
  });
}

module.exports = loginUser;
