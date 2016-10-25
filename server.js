
/**
 * Module dependencies.
 */
    /*
    *   加载模块
    */
 //加载 在node_modules 的 express 模块
var express = require('express');
var server = express();

var config = require("./config.js");

// 配置静态文件路径
server.use(express.static('frontend'));

server.get('/', function(req, res){
    res.send('public/index.html');
});

var httpServer = server.listen(9001, function () {
  var host = httpServer.address().address;
  var port = httpServer.address().port;

  console.log('My server listening at http://%s:%s', host, port);
});

// 配置子模块启动
// config.app.forEach(function(v, i){
//     server.get('/'+v, function(req, res){
//       // 启动不同app
        
//         // res.send(v);
        
//     })
// })
