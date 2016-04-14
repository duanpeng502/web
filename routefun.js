/**
 * Created with JetBrains WebStorm.
 * User: ck
 * Date: 14-1-10
 * Time: 下午1:57
 *   做资源的控制分布
 */

var anymodel = require('./backend/db/anydoserver');
var dbcon = require('./backend/db/dbconnection');
var con = dbcon.getCon();

//接口测试
exports.login = function (req,res) {
    var username = req.body.uname;
    var userpd = req.body.upsd;
    //  链接数据库

    var sqlstr = 'select * from t_user where u_name = ? products';
    con.query(sqlstr,[username,userpd], function (e,r,f) {
        //  判读执行 sql 是否有错误
          if(!e){
                //  判读执行结果是否有数据
              if(r.length==0){
                  res.json(0);
              }else{
                  res.json(1);
              }
          }else{
              console.log(e);
          }
    });


}

//  ajax test
exports.ajax = function(req, res){

    console.log("req")
    res.json({"name":"heke"});
}