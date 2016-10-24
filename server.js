
/**
 * Module dependencies.
 */
    /*
    *   加载模块
    */
 //加载 在node_modules 的 express 模块
var express = require('express');
var app = express();

var config = require("./config.js");

// 配置静态文件路径
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('public/index.html');
});

var server = app.listen(9001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('My app listening at http://%s:%s', host, port);
});

// 配置子模块启动
config.app.forEach(function(v, i){
    app.get('/'+v, function(req, res){
        res.send(v);
    })
})




