(function(){

	var root = this;

	var previousHiker = root.Hiker;

	function Hiker(obj){
	  if (obj instanceof Hiker) return obj;
	  if (!(this instanceof Hiker)){
	  	return new Hiker(obj);
	  };

	  this._wrapped = obj;

	  this.data = obj.data;
	  this.el = document.querySelector(obj.el);

	  // this.el = document.querySelector("[h-name]");

	  this.params = {};

	  var self = this;

	  // 值更改时执行
	  function change(key, value){
	  	var node = self.el.querySelectorAll("[h="+key+"]");

	  	_.each(node, function(v, i){
	  		v.innerText = value;
	  	});

	  };

	  self.namespace = "self.data";

	  function create(source, name){
	  	var data = _.extend({}, source);
	  	// obj2.father 
    	var keys = _.keys(data),
    		values = _.values(data),
    		length = keys.length;
	  		
	  	var str = 'self.output = {_obj: data,';

	  	for(var i=0; i<length; i++){
	  		if( _.isObject(values[i]) || _.isArray(values[i]) ){
	  		 	// se = create(source[keys[i]], self.namespace);
	  		 	// self.namespace = ""+name+[keys[i]];
	  		}else{
		  		str += 'set '+keys[i]+'(value){\
		  			if(this._obj.hasOwnProperty("'+keys[i]+'")){change("'+keys[i]+'", value)}else{};\
		  			this._obj["'+keys[i]+'"] = value },\
		  		get '+keys[i]+'(){return this._obj["'+keys[i]+'"]},'
	  		}

	  	}

	  	str += "}";

	  	eval(str); 

	  	return self.output;

	  };

	  // init( _.extend({}, obj.data) );
	  self.data =  create(self.data, "self.data");
	  delete self.output;

	};

	

	if (typeof exports !== 'undefined') {
	  if (typeof module !== 'undefined' && module.exports) {
	    exports = module.exports = Hiker;
	  }
	  exports.Hiker = Hiker;
	} else {
	  root.Hiker = Hiker;
	}


	// 增加值时触发
	Hiker.prototype.add = function(){
		console.log("add");
	};
	// function Hiker(obj){
	// 	this._wrapped = obj;
	// 	this.params = {};

	// 	this.params = _.clone({}, obj);

	// };

	// // 包装的类似原对象 可以直接取值
	// // 增加了一些属性和方法

	// // change的操作
	// // 增加
	// var add = function(obj){
	// 	// var 
	// };

	// var del = function(){

	// };

	// var alter = function(){

	// };


	// Hiker.prototype.bind = function(){

	// };

	// Hiker.prototype.change = function(){
	// 	return function(){

	// 	}
	// }

}.call(this))