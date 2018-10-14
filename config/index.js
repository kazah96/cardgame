//В файле config.js содержится информация о настройках соединения с базой данных, а также настройки сессии.
//Для работы с config используется пакет nconf, который позволяет через getter и setter манипулировать с объектом настроек. Также можно использовать вложенные объекты через символ ::
//config.get('session:secret');
//config.get('session:cookie:path');

var nconf = require('nconf');
var path = require('path');

nconf.argv()
    .env()
    .file({file: path.join(__dirname, 'config.json')});

module.exports = nconf;