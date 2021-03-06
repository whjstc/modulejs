﻿// moo.fx.js version 2.0 
//(c) 2006 Valerio Proietti (http://mad4milk.net). MIT-style license.
/**
 * Class: Width
 * 宽度
 *
 * Example:
 *  (code)
 * 	var el = document.getElementById('box');
 * 	var fx = new Width(el);
 * 	fx.toggle(); 
 *  (end)
 */
define("fx/Width", function(require, exports, module){
	
	//IMPORT
	var Base = require("fx/Base"),
		langBase = require("lang/Base");
	
    var Width = function(el, options){
        this.initialize(el, options);
    };
	
    Width.prototype = langBase.mix({
    
        "initialize": function(el, options){
            this.element = el;
            this.setOptions(options);
            this.element.style.overflow = 'hidden';
            this.iniWidth = this.element.offsetWidth;
        },
        
        "toggle": function(){
            if (this.element.offsetWidth > 0) 
                return this.custom(this.element.offsetWidth, 0);
            else 
                return this.custom(0, this.iniWidth);
        },
        
        "show": function(){
            return this.set(this.iniWidth);
        },
        
        "increase": function(){
            this.setStyle(this.element, 'width', this.now);
        }
        
    }, Base);
	
	//EXPOSE
	return Width;
    
});
