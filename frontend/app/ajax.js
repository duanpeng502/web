define(function(require, exports, module){

// ajax初始化
	var ajax = {};
	function request(param){
		xhr = new XMLHttpRequest();

		if( typeof param != "object"){
            return;
        }

        var data = param.data || "",
            type = param.type || "get",
            url = param.url || "",
            async = param.async || false;

        url = addURLParam(url, "name", "yunkehe");

		xhr.open(type, url, async);
		// 自定义请求头
		// xhr.setRequestHeader("myheader", "myvalue");
		xhr.send(data);

		xhr.onreadystatechange = function(){

	        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
	            alert(xhr.responseText);
	        }else{
	            alert("Request was unsuccessful: "+xhr.status);
	        }
		}

		// 停止触发事件
		xhr.abort();
    }

    function addURLParam(url, name, value){
    	url += (url.indexOf("?") == -1) ? "?" : "&";
    	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);

    	return url;
    }

    ajax.request = request;

	module.exports = ajax;

})





