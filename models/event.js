const mongoose = require('../lib/mongoose');

const modelName = "event";

const eventSchema = mongoose.Schema({
    cataclysm: String
});

module.Event = mongoose.model(modelName, eventSchema);