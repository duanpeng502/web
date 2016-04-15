
/**
 * Module dependencies.
 */
    /*
    *   加载模块
    */
 //加载 在node_modules 的 express 模块
var express = require('express')
    , http = require('http')
     , routefun = require('./routefun.js')
    , path = require('path');

//  express  初始化
var web = express();

// 设置服务的监听端口
web.set('port', 8000);

//  设置express 寻找资源（客户端的）的位置
web.use(express.static(__dirname + '/frontend'));
// 设置 ejs 引擎，这里是通过express 去帮助我们加载
web.set('view engine','ejs');
// 设置ejs 文件存放位置
web.set('views',__dirname + '/frontend/ejsfile');
// 设置站点图标
web.use(express.favicon());
// 设置日志
web.use(express.logger('dev'));   // 日志

web.use(express.bodyParser());
web.use(express.methodOverride());
web.use(web.router);
web.use(express.static(path.join(__dirname, 'frontend/html')));

// development only
if ('development' == web.get('env')) {
  web.use(express.errorHandler());
}

http.createServer(web).listen(web.get('port'),
    function(){
        console.log('Express port ' + web.get('port'));
    });

//----------- 路由开始---------------------

web.post('/login',routefun.login);

web.get("/ajax", routefun.ajax);
// web.post("/ajax", routefun.ajax);

