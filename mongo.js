const worldModel = require('./models/world').World;

const world = new worldModel({
    user: "eba",
    map: "asdasdas",
    time: 4,
    temperature: 4,
    event: {
        cataclysm: "fire"
    }
});

world.save();

worldModel.find({}, console.log);
