define(function(require, exports, module){

    var ajax = require("./ajax");

    var index = {};

    function start(param){

        var startTips = document.getElementById("start-tips");

        startTips.innerHTML = "页面初始化参数："+ param.toString();

        var btn = $("#container").html("<button id='testAjaxBtn'>测试ajax</button>")

        //doSomething()
        $("#testAjaxBtn").click(function(){

            var param = {
                "type" : "get",
                "data" : {"name":"heke"},
                "url" : '/ajax'
            }
            ajax.request(param);
        })

    }

    index.start = start;

    module.exports = index;
})