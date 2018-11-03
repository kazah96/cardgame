const { User } = require("../models/user");

function registerUser({ username, password, year }) {
  return new Promise((resolve, reject) => {
    User.find({ username }, (err, docs) => {
      if (err) {
        reject(err);
        return;
      }

      if (docs.length > 0) {
        console.log("Uzhe suzhwesoiqwe");
        reject(`${username} Уже существует`); // eslint-disable-line
        return;
      }

      let user = null;

      try {
        user = new User({ username, password, year });
      } catch (error) {
        reject(error);
      }

      user.save(error => reject(error));
      resolve(user);
    });
  });
}

module.exports = registerUser;
