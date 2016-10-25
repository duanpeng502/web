

/**
 * 
 */
;define(function(require, exports, module) {
	
	var utility = {
	    
	    getData : function(origin_url, param, success, error, type, data_type)
		{
			var url = origin_url;
			if(type.toLowerCase() == 'get' && param){
				url = origin_url + '&info=' + JSON.stringify(param);
				param = {};
			}else if(param){
				param  = {"info":param};
			}
			
			return $.ajax(
			{
				url: url,
				data: $.param(param),
				success: function( data )
				{
					if(data.status){
						result = data.recordset;
						typeof success == 'function' && success.apply(null,[result]);
					}else{
						console.log(data.msg);
					}
				},
				error: function( message )
				{
					typeof error=='function' && error.apply(null,[]);
					
					var msg  = '抱歉，数据读取失败.';
					if (uc) 
					  uc.alert( msg );
					else
					  alert( msg ); 
				},
				complete:function(XMLHttpRequest, textStatus){},
				type: type? type : "post",
				timeout: 15 *1000,
				dataType: data_type? data_type : "json"
			});
		},
		pagination : function(total,pagesize,cur_page,section_num){
				if(total == 0){return ''};
				
				var first_page = 1;
				var last_page = Math.ceil(total / pagesize);
				cur_page = parseInt(cur_page);
				
				if(cur_page > last_page){
					cur_page = last_page;
				}
				
				var section_first = 0;
				if(cur_page <= Math.floor(section_num/2) || last_page <= section_num){
					section_first = 1;
				}else if(last_page -  cur_page < Math.floor(section_num/2) ){
					section_first = last_page - section_num + 1;
				}else{
					section_first = cur_page - Math.floor(section_num/2);
				}
				
				var html  = '<div class="pagination">';
				
				if(cur_page > 1){
					html += '<a href="javascript:void(0);" _p="'+(cur_page-1)+'"  class="p pre"><i></i>上一页</a>' ;
				}else{
					//html += '<div class="p pre">&lt;</div>';
				}
				if(section_first >= 2){
					html += '<a href="javascript:void(0);" _p="'+first_page+'" class="p">' + first_page + '</a>' ;
					if(section_first > 2){html += '<div class="p dot">...</div>';}
				}
				
				for(var i = 0; i < section_num; i++ ){
					if( section_first + i  >  last_page){
						break;
					}
					html += '<a href="javascript:void(0);" _p="'+(section_first+i)+'" class="p';
					if( section_first + i == cur_page){
						html += ' cur';
					}
					html += '">' + (section_first+i) + '</a>' ;
				}
				
				if(section_first + section_num < last_page){
					html += '<div class="p dot">...</div>';
				}
				if(section_first + section_num <= last_page){
					html += '<a href="javascript:void(0);" _p="'+last_page+'" class="p next">' + last_page + '</a>' ;
				}
				if(cur_page < last_page){
					html += '<a href="javascript:void(0);" _p="'+(cur_page+1)+'" class="p next">下一页<i></i></a>' ;
				}else{
					//html += '<div class="p">&gt;</div>';
				}
				
				html +='<div class="jump">到第<input value="" name="jump" />页';
				//html +=	'<a class="button gray_Button button_mini" id="btn_jump">Go</a></div>';
	
				html += "</div>";
				
				return html;
		}
		
	};

	module.exports = utility;
});

