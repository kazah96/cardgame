//В server.js создаем приложение epxress app, подключаем модуль middleware, в котором подключаются все нужные middleware приложения.
//Дальше создаем сервер, который будет обрабатывать все входящие подключения через порт, который указан в конфиге.

var express = require('express'),
    http = require('http'),
    app = express(),
    middleware = require('./middleware')(app, express),
    config = require('./config'),
    log = require('./utils/log')(app, module);

http.createServer(app).listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});