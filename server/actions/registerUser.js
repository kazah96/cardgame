const { User } = require("../models/user");

function registerUser({ username, password, year }) {
  return new Promise((resolve, reject) => {
    let user = null;
    const type = "USER";

    try {
      user = new User({
        username,
        password,
        year,
        type,
      });
      user.save();
    } catch (error) {
      reject(error);
    }
    if (user) resolve(user);
  });
}

module.exports = registerUser;
