define(function(require, exports, module){

// ajax初始化
	var ajax = {};
	function request(param){
		this.xhr = new XMLHttpRequest();

		if( typeof param != "object"){
            return;
        }

        var data = param.data || "",
            type = param.type || "get",
            url = param.url || "",
            async = param.async || false;

		this.xhr.open(type, url, async);
		this.xhr.send(data);

        if((this.xhr.status >= 200 && this.xhr.status < 300) || this.xhr.status == 304){
            alert(this.xhr.responseText);
        }else{
            alert("Request was unsuccessful: "+this.xhr.status);
        }
	}


	ajax.request = request;
	ajax.request = request;

	module.exports = ajax;

})





