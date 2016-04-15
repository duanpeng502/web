
/**
 * Created with JetBrains WebStorm.
 * User: ck
 * Date: 14-1-10
 * Time: 下午1:57
 *   做资源的控制分布
 */

var anymodel = require('../db/anydoserver');
var dbcon = require('../db/dbconnection');
var con = dbcon.getCon();

//  ajax test
exports.ajax = function(req, res){

    console.log("req")
    res.json({"name":"heke"});
}