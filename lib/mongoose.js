const mongoose = require("mongoose");
const config = require("../config/config");
const logger = require("../lib/logger");

mongoose.connect(config.mongoose.url, config.mongoose.options);

const db = mongoose.connection;
db.once("open", info => logger.error(`server connected ${info || ""}`));


module.exports = mongoose;
