﻿/**
 * Class: Uri
 */
define("util/Uri",function(require, exports, module){
	
	var Base = require("lang/Base");
	
	//http://www.example.com:80/index.php?mod=foo&action=foo
	//var reg=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([0-9.\-A-Za-z]+)+)?(?:\?([&=\w]+))?$/;
	/**
	 * Function: deparam
	 * 参数解析为对象
	 * 
	 * Parameters:
	 * 
	 *  uri - {String}
	 * 
	 * Returns: 
	 * 	{Object} obj
	 * 
	 * Example:
	 * (code)
	 *   var url="http://www.example.com:80/index.php?mod=foo&action=foo";
	 *   var obj= deparam(url); //return {"mod":foo,"action":foo}
	 * (end) 
	 */
	var deparam=function(uri){
		
		var results=decodeURIComponent(uri).match(/[^\?&](\w+=\w+)/g),
			obj={};
		for(var i=0,len=results.length;i<len;i++){
			var pair=results[i].split("=");
			obj[pair[0]]=pair[i];	
		}
		return obj;
	};
	

	/**
	 * Function: param
	 * 参数化
	 * 
	 * Parameters:
	 * 	obj - {Object|String}
	 * 
	 * Returns: 
	 * 	{String} str
	 */	
	var param = function(obj){
		var r = [], 
		encode = encodeURIComponent;
		
		var add = function(key, value){
            // If value is a function, invoke it and return its value
            value = Base.isFunction(value) ? value() : value;
            r[r.length] = encode(key) + "=" + encode(value);
        };
		
		if(Base.isObject(obj)){
			Base.each(obj,function(value,name){
				add(name,value);	
			});
		}	
		else if(Base.isString(obj)){
			r[r.length] = encode(obj);
		}
        
        // Return the resulting serialization
        return r.join("&").replace(/%20/g, "+");
	};
	
	//EXPOSE
	return {
		"deparam": deparam,
		"param":param
		
	}
	
});
