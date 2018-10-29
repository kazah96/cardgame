const intel = require('intel');

intel.addHandler(new intel.handlers.File('./ddd.txt'));
intel.addHandler(new intel.handlers.Console());

module.exports = intel;