;define(function(require, exports, module){
	// var model = require("model.js");

	var MainView = Backbone.View.extend({
		'el':'#about',
		'events':{
			"click h2" : "go"
		},

		initialize:function(){
			// alert("about");
			$("#app-content").html("<h2>你好啊</h2>");
		},

		render: function(){

		},

		go: function(){
			alert("go!");
		}
	})

	module.exports = MainView;
})