﻿// moo.fx.js version 2.0 
//(c) 2006 Valerio Proietti (http://mad4milk.net). MIT-style license.
/**
 * Class: Opacity
 * 透明度
 *
 * Example:
 *  (code)
 * 	var el = document.getElementById('box');
 * 	var fx = new Opacity(el);
 * 	fx.toggle(); 
 *  (end)
 */
define("fx/Opacity", function(require, exports, module){

	//IMPORT
	var Base = require("fx/Base"),
		langBase = require("lang/Base");
	
    var Opacity = function(el, options){
        this.initialize(el, options);
    };
    
    Opacity.prototype = langBase.mix({
    
        "initialize": function(el, options){
            this.element = el;
            this.setOptions(options);
            this.now = 1;
        },
        
        "toggle": function(){
            if (this.now > 0) 
                return this.custom(1, 0);
            else 
                return this.custom(0, 1);
        },
        
        "show": function(){
            return this.set(1);
        },
        
        "increase": function(){
            this.setStyle(this.element, 'opacity', this.now);
        }
        
    }, Base);
    
	//EXPOSE
	return Opacity;
});
