/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-14
 * Time: 上午10:02
 * To change this template use File | Settings | File Templates.
 */

var db = require('./dbconnection');


/**
 *   用户登录
 * @param req   请求对象
 * @param cback   sql 语句执行完后的回调函数
 * @return {*}   返回链接对象
 */
exports.serverlogin = function(req,cback){
   var tempcon =  db.getCon();
    tempcon.query('select * from t_login where l_name = ? and l_password = ?',
        [req.body.username,req.body.psd],cback);
    return tempcon;
}

