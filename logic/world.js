const worldModel = require("../models/world").World;

function getWorld(user) {
  return new Promise((accept, reject) => {
    worldModel.findOne({ user })
      .then((result) => {
        if (result) accept(result);

        reject(`World for ${user} Not found`);
      });
  });
}

function addWorld(world) {
  return new Promise((accept, reject) => {
    worldModel.findOneAndUpdate({ user: world.user },
      world, { upsert: true, new: true }, (err, res) => {
        if (err) {
          reject(err);
        }
        accept(res);
      });
  });
}

exports.getWorld = getWorld;
exports.addWorld = addWorld;
