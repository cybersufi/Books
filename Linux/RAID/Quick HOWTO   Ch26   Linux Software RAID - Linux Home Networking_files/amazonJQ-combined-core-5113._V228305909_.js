

/* jquery_1_2_6 Starts */

(function(){/*!
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
var _jQuery=window.jQuery,_$=window.$;var jQuery=window.jQuery=window.$=function(selector,context){return new jQuery.fn.init(selector,context);};var quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/,isSimple=/^.[^:#\[\.]*$/,undefined;jQuery.fn=jQuery.prototype={init:function(selector,context){selector=selector||document;if(selector.nodeType){this[0]=selector;this.length=1;return this;}
if(typeof selector=="string"){var match=quickExpr.exec(selector);if(match&&(match[1]||!context)){if(match[1])
selector=jQuery.clean([match[1]],context);else{var elem=document.getElementById(match[3]);if(elem){if(elem.id!=match[3])
return jQuery().find(selector);return jQuery(elem);}
selector=[];}
}else
return jQuery(context).find(selector);}else if(jQuery.isFunction(selector))
return jQuery(document)[jQuery.fn.ready?"ready":"load"](selector);return this.setArray(jQuery.makeArray(selector));},jquery:"1.2.6",size:function(){return this.length;},length:0,get:function(num){return num==undefined?jQuery.makeArray(this):this[num];},pushStack:function(elems){var ret=jQuery(elems);ret.prevObject=this;return ret;},setArray:function(elems){this.length=0;Array.prototype.push.apply(this,elems);return this;},each:function(callback,args){return jQuery.each(this,callback,args);},index:function(elem){var ret=-1;return jQuery.inArray(elem&&elem.jquery?elem[0]:elem,this);},attr:function(name,value,type){var options=name;if(name.constructor==String)
if(value===undefined)
return this[0]&&jQuery[type||"attr"](this[0],name);else{options={};options[name]=value;}
return this.each(function(i){for(name in options)
jQuery.attr(type?this.style:this,name,jQuery.prop(this,options[name],type,i,name));});},css:function(key,value){if((key=='width'||key=='height')&&parseFloat(value)<0)
value=undefined;return this.attr(key,value,"curCSS");},text:function(text){if(typeof text!="object"&&text!=null)
return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));var ret="";jQuery.each(text||this,function(){jQuery.each(this.childNodes,function(){if(this.nodeType!=8)
ret+=this.nodeType!=1?this.nodeValue:jQuery.fn.text([this]);});});return ret;},wrapAll:function(html){if(this[0])
jQuery(html,this[0].ownerDocument)
.clone()
.insertBefore(this[0])
.map(function(){var elem=this;while(elem.firstChild)
elem=elem.firstChild;return elem;})
.append(this);return this;},wrapInner:function(html){return this.each(function(){jQuery(this).contents().wrapAll(html);});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},append:function(){return this.domManip(arguments,true,false,function(elem){if(this.nodeType==1)
this.appendChild(elem);});},prepend:function(){return this.domManip(arguments,true,true,function(elem){if(this.nodeType==1)
this.insertBefore(elem,this.firstChild);});},before:function(){return this.domManip(arguments,false,false,function(elem){this.parentNode.insertBefore(elem,this);});},after:function(){return this.domManip(arguments,false,true,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});},end:function(){return this.prevObject||jQuery([]);},find:function(selector){var elems=jQuery.map(this,function(elem){return jQuery.find(selector,elem);});return this.pushStack(/[^+>] [^+>]/.test(selector)||selector.indexOf("..")>-1?jQuery.unique(elems):elems);},clone:function(events){var ret=this.map(function(){if(jQuery.browser.msie&&!jQuery.isXMLDoc(this)){var clone=this.cloneNode(true),container=document.createElement("div");container.appendChild(clone);return jQuery.clean([container.innerHTML])[0];}else
return this.cloneNode(true);});var clone=ret.find("*").andSelf().each(function(){if(this[expando]!=undefined)
this[expando]=null;});if(events===true)
this.find("*").andSelf().each(function(i){if(this.nodeType==3)
return;var events=jQuery.data(this,"events");for(var type in events)
for(var handler in events[type])
jQuery.event.add(clone[i],type,events[type][handler],events[type][handler].data);});return ret;},filter:function(selector){return this.pushStack(jQuery.isFunction(selector)&&jQuery.grep(this,function(elem,i){return selector.call(elem,i);})||jQuery.multiFilter(selector,this));},not:function(selector){if(selector.constructor==String)
if(isSimple.test(selector))
return this.pushStack(jQuery.multiFilter(selector,this,true));else
selector=jQuery.multiFilter(selector,this);var isArrayLike=selector.length&&selector[selector.length-1]!==undefined&&!selector.nodeType;return this.filter(function(){return isArrayLike?jQuery.inArray(this,selector)<0:this!=selector;});},add:function(selector){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),typeof selector=='string'?jQuery(selector):jQuery.makeArray(selector))));},is:function(selector){return!!selector&&jQuery.multiFilter(selector,this).length>0;},hasClass:function(selector){return this.is("."+selector);},val:function(value){if(value==undefined){if(this.length){var elem=this[0];if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type=="select-one";if(index<0)
return null;for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected){value=jQuery.browser.msie&&!option.attributes.value.specified?option.text:option.value;if(one)
return value;values.push(value);}}
return values;}else
return(this[0].value||"").replace(/\r/g,"");}
return undefined;}
if(value.constructor==Number)
value+='';return this.each(function(){if(this.nodeType!=1)
return;if(value.constructor==Array&&/radio|checkbox/.test(this.type))
this.checked=(jQuery.inArray(this.value,value)>=0||jQuery.inArray(this.name,value)>=0);else if(jQuery.nodeName(this,"select")){var values=jQuery.makeArray(value);jQuery("option",this).each(function(){this.selected=(jQuery.inArray(this.value,values)>=0||jQuery.inArray(this.text,values)>=0);});if(!values.length)
this.selectedIndex=-1;}else
this.value=value;});},html:function(value){return value==undefined?(this[0]?this[0].innerHTML:null):this.empty().append(value);},replaceWith:function(value){return this.after(value).remove();},eq:function(i){return this.slice(i,i+1);},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},andSelf:function(){return this.add(this.prevObject);},data:function(key,value){var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){var data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length)
data=jQuery.data(this[0],key);return data===undefined&&parts[1]?this.data(parts[0]):data;}else
return this.trigger("setData"+parts[1]+"!",[parts[0],value]).each(function(){jQuery.data(this,key,value);});},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});},domManip:function(args,table,reverse,callback){var clone=this.length>1,elems;return this.each(function(){if(!elems){elems=jQuery.clean(args,this.ownerDocument);if(reverse)
elems.reverse();}
var obj=this;if(table&&jQuery.nodeName(this,"table")&&jQuery.nodeName(elems[0],"tr"))
obj=this.getElementsByTagName("tbody")[0]||this.appendChild(this.ownerDocument.createElement("tbody"));var scripts=jQuery([]);jQuery.each(elems,function(){var elem=clone?jQuery(this).clone(true)[0]:this;if(jQuery.nodeName(elem,"script"))
scripts=scripts.add(elem);else{if(elem.nodeType==1)
scripts=scripts.add(jQuery("script",elem).remove());callback.call(obj,elem);}});scripts.each(evalScript);});}};jQuery.fn.init.prototype=jQuery.fn;function evalScript(i,elem){if(elem.src)
jQuery.ajax({url:elem.src,async:false,dataType:"script"});else
jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"");if(elem.parentNode)
elem.parentNode.removeChild(elem);}
function now(){return+new Date;}
jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options;if(target.constructor==Boolean){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!="object"&&typeof target!="function")
target={};if(length==i){target=this;--i;}
for(;i<length;i++)
if((options=arguments[i])!=null)
for(var name in options){var src=target[name],copy=options[name];if(target===copy)
continue;if(deep&&copy&&typeof copy=="object"&&!copy.nodeType)
target[name]=jQuery.extend(deep,src||(copy.length!=null?[]:{}),copy);else if(copy!==undefined)
target[name]=copy;}
return target;};var expando="jQuery"+now(),uuid=0,windowData={},exclude=/z-?index|font-?weight|opacity|zoom|line-?height/i,defaultView=document.defaultView||{};jQuery.extend({noConflict:function(deep){window.$=_$;if(deep)
window.jQuery=_jQuery;return jQuery;},isFunction:function(fn){return!!fn&&typeof fn!="string"&&!fn.nodeName&&fn.constructor!=Array&&/^[\s[]?function/.test(fn+"");},isXMLDoc:function(elem){return elem.documentElement&&!elem.body||elem.tagName&&elem.ownerDocument&&!elem.ownerDocument.body;},globalEval:function(data){data=jQuery.trim(data);if(data){var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");script.type="text/javascript";if(jQuery.browser.msie)
script.text=data;else
script.appendChild(document.createTextNode(data));head.insertBefore(script,head.firstChild);head.removeChild(script);}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()==name.toUpperCase();},cache:{},data:function(elem,name,data){elem=elem==window?windowData:elem;var id=elem[expando];if(!id)
id=elem[expando]=++uuid;if(name&&!jQuery.cache[id])
jQuery.cache[id]={};if(data!==undefined)
jQuery.cache[id][name]=data;return name?jQuery.cache[id][name]:id;},removeData:function(elem,name){elem=elem==window?windowData:elem;var id=elem[expando];if(name){if(jQuery.cache[id]){delete jQuery.cache[id][name];name="";for(name in jQuery.cache[id])
break;if(!name)
jQuery.removeData(elem);}
}else{try{delete elem[expando];}catch(e){if(elem.removeAttribute)
elem.removeAttribute(expando);}
delete jQuery.cache[id];}},each:function(object,callback,args){var name,i=0,length=object.length;if(args){if(length==undefined){for(name in object)
if(callback.apply(object[name],args)===false)
break;}else
for(;i<length;)
if(callback.apply(object[i++],args)===false)
break;}else{if(length==undefined){for(name in object)
if(callback.call(object[name],name,object[name])===false)
break;}else
for(var value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}
return object;},prop:function(elem,value,type,i,name){if(jQuery.isFunction(value))
value=value.call(elem,i);return value&&value.constructor==Number&&type=="curCSS"&&!exclude.test(name)?value+"px":value;},className:{add:function(elem,classNames){jQuery.each((classNames||"").split(/\s+/),function(i,className){if(elem.nodeType==1&&!jQuery.className.has(elem.className,className))
elem.className+=(elem.className?" ":"")+className;});},remove:function(elem,classNames){if(elem.nodeType==1)
elem.className=classNames!=undefined?jQuery.grep(elem.className.split(/\s+/),function(className){return!jQuery.className.has(classNames,className);}).join(" "):"";},has:function(elem,className){return jQuery.inArray(className,(elem.className||elem).toString().split(/\s+/))>-1;}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
callback.call(elem);for(var name in options)
elem.style[name]=old[name];},css:function(elem,name,force){if(name=="width"||name=="height"){var val,props={position:"absolute",visibility:"hidden",display:"block"},which=name=="width"?["Left","Right"]:["Top","Bottom"];function getWH(){val=name=="width"?elem.offsetWidth:elem.offsetHeight;var padding=0,border=0;jQuery.each(which,function(){padding+=parseFloat(jQuery.curCSS(elem,"padding"+this,true))||0;border+=parseFloat(jQuery.curCSS(elem,"border"+this+"Width",true))||0;});val-=Math.round(padding+border);}
if(jQuery(elem).is(":visible"))
getWH();else
jQuery.swap(elem,props,getWH);return Math.max(0,val);}
return jQuery.curCSS(elem,name,force);},curCSS:function(elem,name,force){var ret,style=elem.style;function color(elem){if(!jQuery.browser.safari)
return false;var ret=defaultView.getComputedStyle(elem,null);return!ret||ret.getPropertyValue("color")=="";}
if(name=="opacity"&&jQuery.browser.msie){ret=jQuery.attr(style,"opacity");return ret==""?"1":ret;}
if(jQuery.browser.opera&&name=="display"){var save=style.outline;style.outline="0 solid black";style.outline=save;}
if(name.match(/float/i))
name=styleFloat;if(!force&&style&&style[name])
ret=style[name];else if(defaultView.getComputedStyle){if(name.match(/float/i))
name="float";name=name.replace(/([A-Z])/g,"-$1").toLowerCase();var computedStyle=defaultView.getComputedStyle(elem,null);if(computedStyle&&!color(elem))
ret=computedStyle.getPropertyValue(name);else{var swap=[],stack=[],a=elem,i=0;for(;a&&color(a);a=a.parentNode)
stack.unshift(a);for(;i<stack.length;i++)
if(color(stack[i])){swap[i]=stack[i].style.display;stack[i].style.display="block";}
ret=name=="display"&&swap[stack.length-1]!=null?"none":(computedStyle&&computedStyle.getPropertyValue(name))||"";for(i=0;i<swap.length;i++)
if(swap[i]!=null)
stack[i].style.display=swap[i];}
if(name=="opacity"&&ret=="")
ret="1";}else if(elem.currentStyle){var camelCase=name.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase();});ret=elem.currentStyle[name]||elem.currentStyle[camelCase];if(!/^\d+(px)?$/i.test(ret)&&/^\d/.test(ret)){var left=style.left,rsLeft=elem.runtimeStyle.left;elem.runtimeStyle.left=elem.currentStyle.left;style.left=ret||0;ret=style.pixelLeft+"px";style.left=left;elem.runtimeStyle.left=rsLeft;}}
return ret;},clean:function(elems,context){var ret=[];context=context||document;if(typeof context.createElement=='undefined')
context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;jQuery.each(elems,function(i,elem){if(!elem)
return;if(elem.constructor==Number)
elem+='';if(typeof elem=="string"){elem=elem.replace(/(<(\w+)[^>]*?)\/>/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+"></"+tag+">";});var tags=jQuery.trim(elem).toLowerCase(),div=context.createElement("div");var wrap=!tags.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!tags.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||tags.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!tags.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!tags.indexOf("<td")||!tags.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!tags.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||jQuery.browser.msie&&[1,"div<div>","</div>"]||[0,"",""];div.innerHTML=wrap[1]+elem+wrap[2];while(wrap[0]--)
div=div.lastChild;if(jQuery.browser.msie){var tbody=!tags.indexOf("<table")&&tags.indexOf("<tbody")<0?div.firstChild&&div.firstChild.childNodes:wrap[1]=="<table>"&&tags.indexOf("<tbody")<0?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j)
if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length)
tbody[j].parentNode.removeChild(tbody[j]);if(/^\s/.test(elem))
div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]),div.firstChild);}
elem=jQuery.makeArray(div.childNodes);}
if(elem.length===0&&(!jQuery.nodeName(elem,"form")&&!jQuery.nodeName(elem,"select")))
return;if(elem[0]==undefined||jQuery.nodeName(elem,"form")||elem.options)
ret.push(elem);else
ret=jQuery.merge(ret,elem);});return ret;},attr:function(elem,name,value){if(!elem||elem.nodeType==3||elem.nodeType==8)
return undefined;var notxml=!jQuery.isXMLDoc(elem),set=value!==undefined,msie=jQuery.browser.msie;name=notxml&&jQuery.props[name]||name;if(elem.tagName){var special=/href|src|style/.test(name);if(name=="selected"&&jQuery.browser.safari)
elem.parentNode.selectedIndex;if(name in elem&&notxml&&!special){if(set){if(name=="type"&&jQuery.nodeName(elem,"input")&&elem.parentNode)
throw"type property can't be changed";elem[name]=value;}
if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name))
return elem.getAttributeNode(name).nodeValue;return elem[name];}
if(msie&&notxml&&name=="style")
return jQuery.attr(elem.style,"cssText",value);if(set)
elem.setAttribute(name,""+value);var attr=msie&&notxml&&special
?elem.getAttribute(name,2):elem.getAttribute(name);return attr===null?undefined:attr;}
if(msie&&name=="opacity"){if(set){elem.zoom=1;elem.filter=(elem.filter||"").replace(/alpha\([^)]*\)/,"")+
(parseInt(value)+''=="NaN"?"":"alpha(opacity="+value*100+")");}
return elem.filter&&elem.filter.indexOf("opacity=")>=0?(parseFloat(elem.filter.match(/opacity=([^)]*)/)[1])/100)+'':"";}
name=name.replace(/-([a-z])/ig,function(all,letter){return letter.toUpperCase();});if(set)
elem[name]=value;return elem[name];},trim:function(text){return(text||"").replace(/^\s+|\s+$/g,"");},makeArray:function(array){var ret=[];if(array!=null){var i=array.length;if(i==null||array.split||array.setInterval||array.call)
ret[0]=array;else
while(i)
ret[--i]=array[i];}
return ret;},inArray:function(elem,array){for(var i=0,length=array.length;i<length;i++)
if(array[i]===elem)
return i;return-1;},merge:function(first,second){var i=0,elem,pos=first.length;if(jQuery.browser.msie){while(elem=second[i++])
if(elem.nodeType!=8)
first[pos++]=elem;}else
while(elem=second[i++])
first[pos++]=elem;return first;},unique:function(array){var ret=[],done={};try{for(var i=0,length=array.length;i<length;i++){var id=jQuery.data(array[i]);if(!done[id]){done[id]=true;ret.push(array[i]);}}}catch(e){ret=array;}
return ret;},grep:function(elems,callback,inv){var ret=[];for(var i=0,length=elems.length;i<length;i++)
if(!inv!=!callback(elems[i],i))
ret.push(elems[i]);return ret;},map:function(elems,callback){var ret=[];for(var i=0,length=elems.length;i<length;i++){var value=callback(elems[i],i);if(value!=null)
ret[ret.length]=value;}
return ret.concat.apply([],ret);}});var userAgent=navigator.userAgent.toLowerCase();jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};var styleFloat=jQuery.browser.msie?"styleFloat":"cssFloat";jQuery.extend({boxModel:!jQuery.browser.msie||document.compatMode=="CSS1Compat",props:{"for":"htmlFor","class":"className","float":styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing"}});jQuery.each({parent:function(elem){return elem.parentNode;},parents:function(elem){return jQuery.dir(elem,"parentNode");},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(selector){var ret=jQuery.map(this,fn);if(selector&&typeof selector=="string")
ret=jQuery.multiFilter(selector,ret);return this.pushStack(jQuery.unique(ret));};});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(){var args=arguments;return this.each(function(){for(var i=0,length=args.length;i<length;i++)
jQuery(args[i])[original](this);});};});jQuery.each({removeAttr:function(name){jQuery.attr(this,name,"");if(this.nodeType==1)
this.removeAttribute(name);},addClass:function(classNames){jQuery.className.add(this,classNames);},removeClass:function(classNames){jQuery.className.remove(this,classNames);},toggleClass:function(classNames){jQuery.className[jQuery.className.has(this,classNames)?"remove":"add"](this,classNames);},remove:function(selector){if(!selector||jQuery.filter(selector,[this]).r.length){jQuery("*",this).add(this).each(function(){jQuery.event.remove(this);jQuery.removeData(this);});if(this.parentNode)
this.parentNode.removeChild(this);}},empty:function(){jQuery(">*",this).remove();while(this.firstChild)
this.removeChild(this.firstChild);}},function(name,fn){jQuery.fn[name]=function(){return this.each(fn,arguments);};});jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn[type]=function(size){return this[0]==window?jQuery.browser.opera&&document.body["client"+name]||jQuery.browser.safari&&window["inner"+name]||document.compatMode=="CSS1Compat"&&document.documentElement["client"+name]||document.body["client"+name]:this[0]==document?Math.max(Math.max(document.body["scroll"+name],document.documentElement["scroll"+name]),Math.max(document.body["offset"+name],document.documentElement["offset"+name])):size==undefined?(this.length?jQuery.css(this[0],type):null):this.css(type,size.constructor==String?size:size+"px");};});function num(elem,prop){return elem[0]&&parseInt(jQuery.curCSS(elem[0],prop,true),10)||0;}var chars=jQuery.browser.safari&&parseInt(jQuery.browser.version)<417?"(?:[\\w*_-]|\\\\.)":"(?:[\\w\u0128-\uFFFF*_-]|\\\\.)",quickChild=new RegExp("^>\\s*("+chars+"+)"),quickID=new RegExp("^("+chars+"+)(#)("+chars+"+)"),quickClass=new RegExp("^([#.]?)("+chars+"*)");jQuery.extend({expr:{"":function(a,i,m){return m[2]=="*"||jQuery.nodeName(a,m[2]);},"#":function(a,i,m){return a.getAttribute("id")==m[2];},":":{lt:function(a,i,m){return i<m[3]-0;},gt:function(a,i,m){return i>m[3]-0;},nth:function(a,i,m){return m[3]-0==i;},eq:function(a,i,m){return m[3]-0==i;},first:function(a,i){return i==0;},last:function(a,i,m,r){return i==r.length-1;},even:function(a,i){return i%2==0;},odd:function(a,i){return i%2;},"first-child":function(a){return a.parentNode.getElementsByTagName("*")[0]==a;},"last-child":function(a){return jQuery.nth(a.parentNode.lastChild,1,"previousSibling")==a;},"only-child":function(a){return!jQuery.nth(a.parentNode.lastChild,2,"previousSibling");},parent:function(a){return a.firstChild;},empty:function(a){return!a.firstChild;},contains:function(a,i,m){return(a.textContent||a.innerText||jQuery(a).text()||"").indexOf(m[3])>=0;},visible:function(a){return"hidden"!=a.type&&jQuery.css(a,"display")!="none"&&jQuery.css(a,"visibility")!="hidden";},hidden:function(a){return"hidden"==a.type||jQuery.css(a,"display")=="none"||jQuery.css(a,"visibility")=="hidden";},enabled:function(a){return!a.disabled;},disabled:function(a){return a.disabled;},checked:function(a){return a.checked;},selected:function(a){return a.selected||jQuery.attr(a,"selected");},text:function(a){return"text"==a.type;},radio:function(a){return"radio"==a.type;},checkbox:function(a){return"checkbox"==a.type;},file:function(a){return"file"==a.type;},password:function(a){return"password"==a.type;},submit:function(a){return"submit"==a.type;},image:function(a){return"image"==a.type;},reset:function(a){return"reset"==a.type;},button:function(a){return"button"==a.type||jQuery.nodeName(a,"button");},input:function(a){return/input|select|textarea|button/i.test(a.nodeName);},has:function(a,i,m){return jQuery.find(m[3],a).length;},header:function(a){return/h\d/i.test(a.nodeName);},animated:function(a){return jQuery.grep(jQuery.timers,function(fn){return a==fn.elem;}).length;}}},parse:[/^(\[) *@?([\w-]+) *([!*$^~=]*) *('?"?)(.*?)\4 *\]/,/^(:)([\w-]+)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/,new RegExp("^([:.#]*)("+chars+"+)")],multiFilter:function(expr,elems,not){var old,cur=[];while(expr&&expr!=old){old=expr;var f=jQuery.filter(expr,elems,not);expr=f.t.replace(/^\s*,\s*/,"");cur=not?elems=f.r:jQuery.merge(cur,f.r);}
return cur;},find:function(t,context){if(typeof t!="string")
return[t];if(context&&context.nodeType!=1&&context.nodeType!=9)
return[];context=context||document;var ret=[context],done=[],last,nodeName;while(t&&last!=t){var r=[];last=t;t=jQuery.trim(t);var foundToken=false,re=quickChild,m=re.exec(t);if(m){nodeName=m[1].toUpperCase();for(var i=0;ret[i];i++)
for(var c=ret[i].firstChild;c;c=c.nextSibling)
if(c.nodeType==1&&(nodeName=="*"||c.nodeName.toUpperCase()==nodeName))
r.push(c);ret=r;t=t.replace(re,"");if(t.indexOf(" ")==0)continue;foundToken=true;}else{re=/^([>+~])\s*(\w*)/i;if((m=re.exec(t))!=null){r=[];var merge={};nodeName=m[2].toUpperCase();m=m[1];for(var j=0,rl=ret.length;j<rl;j++){var n=m=="~"||m=="+"?ret[j].nextSibling:ret[j].firstChild;for(;n;n=n.nextSibling)
if(n.nodeType==1){var id=jQuery.data(n);if(m=="~"&&merge[id])break;if(!nodeName||n.nodeName.toUpperCase()==nodeName){if(m=="~")merge[id]=true;r.push(n);}
if(m=="+")break;}}
ret=r;t=jQuery.trim(t.replace(re,""));foundToken=true;}}
if(t&&!foundToken){if(!t.indexOf(",")){if(context==ret[0])ret.shift();done=jQuery.merge(done,ret);r=ret=[context];t=" "+t.substr(1,t.length);}else{var re2=quickID;var m=re2.exec(t);if(m){m=[0,m[2],m[3],m[1]];}else{re2=quickClass;m=re2.exec(t);}
m[2]=m[2].replace(/\\/g,"");var elem=ret[ret.length-1];if(m[1]=="#"&&elem&&elem.getElementById&&!jQuery.isXMLDoc(elem)){var oid=elem.getElementById(m[2]);if((jQuery.browser.msie||jQuery.browser.opera)&&oid&&typeof oid.id=="string"&&oid.id!=m[2])
oid=jQuery('[@id="'+m[2]+'"]',elem)[0];ret=r=oid&&(!m[3]||jQuery.nodeName(oid,m[3]))?[oid]:[];}else{for(var i=0;ret[i];i++){var tag=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];if(tag=="*"&&ret[i].nodeName.toLowerCase()=="object")
tag="param";r=jQuery.merge(r,ret[i].getElementsByTagName(tag));}
if(m[1]==".")
r=jQuery.classFilter(r,m[2]);if(m[1]=="#"){var tmp=[];for(var i=0;r[i];i++)
if(r[i].getAttribute("id")==m[2]){tmp=[r[i]];break;}
r=tmp;}
ret=r;}
t=t.replace(re2,"");}}
if(t){var val=jQuery.filter(t,r);ret=r=val.r;t=jQuery.trim(val.t);}}
if(t)
ret=[];if(ret&&context==ret[0])
ret.shift();done=jQuery.merge(done,ret);return done;},classFilter:function(r,m,not){m=" "+m+" ";var tmp=[];for(var i=0;r[i];i++){var pass=(" "+r[i].className+" ").indexOf(m)>=0;if(!not&&pass||not&&!pass)
tmp.push(r[i]);}
return tmp;},filter:function(t,r,not){var last;while(t&&t!=last){last=t;var p=jQuery.parse,m;for(var i=0;p[i];i++){m=p[i].exec(t);if(m){t=t.substring(m[0].length);m[2]=m[2].replace(/\\/g,"");break;}}
if(!m)
break;if(m[1]==":"&&m[2]=="not")
r=isSimple.test(m[3])?jQuery.filter(m[3],r,true).r:jQuery(r).not(m[3]);else if(m[1]==".")
r=jQuery.classFilter(r,m[2],not);else if(m[1]=="["){var tmp=[],type=m[3];for(var i=0,rl=r.length;i<rl;i++){var a=r[i],z=a[jQuery.props[m[2]]||m[2]];if(z==null||/href|src|selected/.test(m[2]))
z=jQuery.attr(a,m[2])||'';if((type==""&&!!z||type=="="&&z==m[5]||type=="!="&&z!=m[5]||type=="^="&&z&&!z.indexOf(m[5])||type=="$="&&z.substr(z.length-m[5].length)==m[5]||(type=="*="||type=="~=")&&z.indexOf(m[5])>=0)^not)
tmp.push(a);}
r=tmp;}else if(m[1]==":"&&m[2]=="nth-child"){var merge={},tmp=[],test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(m[3]=="even"&&"2n"||m[3]=="odd"&&"2n+1"||!/\D/.test(m[3])&&"0n+"+m[3]||m[3]),first=(test[1]+(test[2]||1))-0,last=test[3]-0;for(var i=0,rl=r.length;i<rl;i++){var node=r[i],parentNode=node.parentNode,id=jQuery.data(parentNode);if(!merge[id]){var c=1;for(var n=parentNode.firstChild;n;n=n.nextSibling)
if(n.nodeType==1)
n.nodeIndex=c++;merge[id]=true;}
var add=false;if(first==0){if(node.nodeIndex==last)
add=true;}else if((node.nodeIndex-last)%first==0&&(node.nodeIndex-last)/first>=0)
add=true;if(add^not)
tmp.push(node);}
r=tmp;}else{var fn=jQuery.expr[m[1]];if(typeof fn=="object")
fn=fn[m[2]];if(typeof fn=="string")
fn=eval("false||function(a,i){return "+fn+";}");r=jQuery.grep(r,function(elem,i){return fn(elem,i,m,r);},not);}}
return{r:r,t:t};},dir:function(elem,dir){var matched=[],cur=elem[dir];while(cur&&cur!=document){if(cur.nodeType==1)
matched.push(cur);cur=cur[dir];}
return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir])
if(cur.nodeType==1&&++num==result)
break;return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType==1&&n!=elem)
r.push(n);}
return r;}});jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType==3||elem.nodeType==8)
return;if(jQuery.browser.msie&&elem.setInterval)
elem=window;if(!handler.guid)
handler.guid=this.guid++;if(data!=undefined){var fn=handler;handler=this.proxy(fn,function(){return fn.apply(this,arguments);});handler.data=data;}
var events=jQuery.data(elem,"events")||jQuery.data(elem,"events",{}),handle=jQuery.data(elem,"handle")||jQuery.data(elem,"handle",function(){if(typeof jQuery!="undefined"&&!jQuery.event.triggered)
return jQuery.event.handle.apply(arguments.callee.elem,arguments);});handle.elem=elem;jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];handler.type=parts[1];var handlers=events[type];if(!handlers){handlers=events[type]={};if(!jQuery.event.special[type]||jQuery.event.special[type].setup.call(elem)===false){if(elem.addEventListener)
elem.addEventListener(type,handle,false);else if(elem.attachEvent)
elem.attachEvent("on"+type,handle);}}
handlers[handler.guid]=handler;jQuery.event.global[type]=true;});elem=null;},guid:1,global:{},remove:function(elem,types,handler){if(elem.nodeType==3||elem.nodeType==8)
return;var events=jQuery.data(elem,"events"),ret,index;if(events){if(types==undefined||(typeof types=="string"&&types.charAt(0)=="."))
for(var type in events)
this.remove(elem,type+(types||""));else{if(types.type){handler=types.handler;types=types.type;}
jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];if(events[type]){if(handler)
delete events[type][handler.guid];else
for(handler in events[type])
if(!parts[1]||events[type][handler].type==parts[1])
delete events[type][handler];for(ret in events[type])break;if(!ret){if(!jQuery.event.special[type]||jQuery.event.special[type].teardown.call(elem)===false){if(elem.removeEventListener)
elem.removeEventListener(type,jQuery.data(elem,"handle"),false);else if(elem.detachEvent)
elem.detachEvent("on"+type,jQuery.data(elem,"handle"));}
ret=null;delete events[type];}}});}
for(ret in events)break;if(!ret){var handle=jQuery.data(elem,"handle");if(handle)handle.elem=null;jQuery.removeData(elem,"events");jQuery.removeData(elem,"handle");}}},trigger:function(type,data,elem,donative,extra){data=jQuery.makeArray(data);if(type.indexOf("!")>=0){type=type.slice(0,-1);var exclusive=true;}
if(!elem){if(this.global[type])
jQuery("*").add([window,document]).trigger(type,data);}else{if(elem.nodeType==3||elem.nodeType==8)
return undefined;var val,ret,fn=jQuery.isFunction(elem[type]||null),event=!data[0]||!data[0].preventDefault;if(event){data.unshift({type:type,target:elem,preventDefault:function(){},stopPropagation:function(){},timeStamp:now()});data[0][expando]=true;}
data[0].type=type;if(exclusive)
data[0].exclusive=true;var handle=jQuery.data(elem,"handle");if(handle)
val=handle.apply(elem,data);if((!fn||(jQuery.nodeName(elem,'a')&&type=="click"))&&elem["on"+type]&&elem["on"+type].apply(elem,data)===false)
val=false;if(event)
data.shift();if(extra&&jQuery.isFunction(extra)){ret=extra.apply(elem,val==null?data:data.concat(val));if(ret!==undefined)
val=ret;}
if(fn&&donative!==false&&val!==false&&!(jQuery.nodeName(elem,'a')&&type=="click")){this.triggered=true;try{elem[type]();}catch(e){}}
this.triggered=false;}
return val;},handle:function(event){var val,ret,namespace,all,handlers;event=arguments[0]=jQuery.event.fix(event||window.event);namespace=event.type.split(".");event.type=namespace[0];namespace=namespace[1];all=!namespace&&!event.exclusive;handlers=(jQuery.data(this,"events")||{})[event.type];for(var j in handlers){var handler=handlers[j];if(all||handler.type==namespace){event.handler=handler;event.data=handler.data;ret=handler.apply(this,arguments);if(val!==false)
val=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}}
return val;},fix:function(event){if(event[expando]==true)
return event;var originalEvent=event;event={originalEvent:originalEvent};var props="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target timeStamp toElement type view wheelDelta which".split(" ");for(var i=props.length;i;i--)
event[props[i]]=originalEvent[props[i]];event[expando]=true;event.preventDefault=function(){if(originalEvent.preventDefault)
originalEvent.preventDefault();originalEvent.returnValue=false;};event.stopPropagation=function(){if(originalEvent.stopPropagation)
originalEvent.stopPropagation();originalEvent.cancelBubble=true;};event.timeStamp=event.timeStamp||now();if(!event.target)
event.target=event.srcElement||document;if(event.target.nodeType==3)
event.target=event.target.parentNode;if(!event.relatedTarget&&event.fromElement)
event.relatedTarget=event.fromElement==event.target?event.toElement:event.fromElement;if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc.clientTop||0);}
if(!event.which&&((event.charCode||event.charCode===0)?event.charCode:event.keyCode))
event.which=event.charCode||event.keyCode;if(!event.metaKey&&event.ctrlKey)
event.metaKey=event.ctrlKey;if(!event.which&&event.button)
event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));return event;},proxy:function(fn,proxy){proxy.guid=fn.guid=fn.guid||proxy.guid||this.guid++;return proxy;},special:{ready:{setup:function(){bindReady();return;},teardown:function(){return;}},mouseenter:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind("mouseover",jQuery.event.special.mouseenter.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind("mouseover",jQuery.event.special.mouseenter.handler);return true;},handler:function(event){if(withinElement(event,this))return true;event.type="mouseenter";return jQuery.event.handle.apply(this,arguments);}},mouseleave:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind("mouseout",jQuery.event.special.mouseleave.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind("mouseout",jQuery.event.special.mouseleave.handler);return true;},handler:function(event){if(withinElement(event,this))return true;event.type="mouseleave";return jQuery.event.handle.apply(this,arguments);}}}};jQuery.fn.extend({bind:function(type,data,fn){return type=="unload"?this.one(type,data,fn):this.each(function(){jQuery.event.add(this,type,fn||data,fn&&data);});},one:function(type,data,fn){var one=jQuery.event.proxy(fn||data,function(event){jQuery(this).unbind(event,one);return(fn||data).apply(this,arguments);});return this.each(function(){jQuery.event.add(this,type,one,fn&&data);});},unbind:function(type,fn){return this.each(function(){jQuery.event.remove(this,type,fn);});},trigger:function(type,data,fn){return this.each(function(){jQuery.event.trigger(type,data,this,true,fn);});},triggerHandler:function(type,data,fn){return this[0]&&jQuery.event.trigger(type,data,this[0],false,fn);},toggle:function(fn){var args=arguments,i=1;while(i<args.length)
jQuery.event.proxy(fn,args[i++]);return this.click(jQuery.event.proxy(fn,function(event){this.lastToggle=(this.lastToggle||0)%i;event.preventDefault();return args[this.lastToggle++].apply(this,arguments)||false;}));},hover:function(fnOver,fnOut){return this.bind('mouseenter',fnOver).bind('mouseleave',fnOut);},ready:function(fn){bindReady();if(jQuery.isReady)
fn.call(document,jQuery);else
jQuery.readyList.push(function(){return fn.call(this,jQuery);});return this;}});jQuery.extend({isReady:false,readyList:[],ready:function(){if(!jQuery.isReady){jQuery.isReady=true;if(jQuery.readyList){jQuery.each(jQuery.readyList,function(){this.call(document);});jQuery.readyList=null;}
jQuery(document).triggerHandler("ready");}}});var readyBound=false;function bindReady(){if(readyBound)return;readyBound=true;if(document.addEventListener&&!jQuery.browser.opera)
document.addEventListener("DOMContentLoaded",jQuery.ready,false);if(jQuery.browser.msie&&window==top)(function(){if(jQuery.isReady)return;try{document.documentElement.doScroll("left");}catch(error){setTimeout(arguments.callee,0);return;}
jQuery.ready();})();if(jQuery.browser.opera)
document.addEventListener("DOMContentLoaded",function(){if(jQuery.isReady)return;for(var i=0;i<document.styleSheets.length;i++)
if(document.styleSheets[i].disabled){setTimeout(arguments.callee,0);return;}
jQuery.ready();},false);if(jQuery.browser.safari){var numStyles;(function(){if(jQuery.isReady)return;if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,0);return;}
if(numStyles===undefined)
numStyles=jQuery("style, link[rel=stylesheet]").length;if(document.styleSheets.length!=numStyles){setTimeout(arguments.callee,0);return;}
jQuery.ready();})();}
jQuery.event.add(window,"load",jQuery.ready);}
jQuery.each(("blur,focus,load,resize,scroll,unload,click,dblclick,"+
"mousedown,mouseup,mousemove,mouseover,mouseout,change,select,"+
"submit,keydown,keypress,keyup,error").split(","),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name);};});var withinElement=function(event,elem){var parent=event.relatedTarget;while(parent&&parent!=elem)try{parent=parent.parentNode;}catch(error){parent=elem;}
return parent==elem;};jQuery(window).bind("unload",function(){jQuery("*").add(document).unbind();});jQuery.fn.extend({_load:jQuery.fn.load,load:function(url,params,callback){if(typeof url!='string')
return this._load(url);var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
callback=callback||function(){};var type="GET";if(params)
if(jQuery.isFunction(params)){callback=params;params=null;}else{params=jQuery.param(params);type="POST";}
var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(res,status){if(status=="success"||status=="notmodified")
self.html(selector?jQuery("<div/>")
.append(res.responseText.replace(/<script(.|\s)*?\/script>/g,""))
.find(selector):res.responseText);self.each(callback,[res.responseText,status,res]);}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return jQuery.nodeName(this,"form")?jQuery.makeArray(this.elements):this;})
.filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type));})
.map(function(i,elem){var val=jQuery(this).val();return val==null?null:val.constructor==Array?jQuery.map(val,function(val,i){return{name:elem.name,value:val};}):{name:elem.name,value:val};}).get();}});jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});var jsc=now();jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data=null;}
return jQuery.ajax({type:"GET",url:url,data:data,success:callback,dataType:type});},getScript:function(url,callback){return jQuery.get(url,null,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},post:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data={};}
return jQuery.ajax({type:"POST",url:url,data:data,success:callback,dataType:type});},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings);},ajaxSettings:{url:location.href,global:true,type:"GET",timeout:0,contentType:"application/x-www-form-urlencoded",processData:true,async:true,data:null,username:null,password:null,accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(s){s=jQuery.extend(true,s,jQuery.extend(true,{},jQuery.ajaxSettings,s));var jsonp,jsre=/=\?(&|$)/g,status,data,type=s.type.toUpperCase();if(s.data&&s.processData&&typeof s.data!="string")
s.data=jQuery.param(s.data);if(s.dataType=="jsonp"){if(type=="GET"){if(!s.url.match(jsre))
s.url+=(s.url.match(/\?/)?"&":"?")+(s.jsonp||"callback")+"=?";}else if(!s.data||!s.data.match(jsre))
s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?";s.dataType="json";}
if(s.dataType=="json"&&(s.data&&s.data.match(jsre)||s.url.match(jsre))){jsonp="jsonp"+jsc++;if(s.data)
s.data=(s.data+"").replace(jsre,"="+jsonp+"$1");s.url=s.url.replace(jsre,"="+jsonp+"$1");s.dataType="script";window[jsonp]=function(tmp){data=tmp;success();complete();window[jsonp]=undefined;try{delete window[jsonp];}catch(e){}
if(head)
head.removeChild(script);};}
if(s.dataType=="script"&&s.cache==null)
s.cache=false;if(s.cache===false&&type=="GET"){var ts=now();var ret=s.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+ts+"$2");s.url=ret+((ret==s.url)?(s.url.match(/\?/)?"&":"?")+"_="+ts:"");}
if(s.data&&type=="GET"){s.url+=(s.url.match(/\?/)?"&":"?")+s.data;s.data=null;}
if(s.global&&!jQuery.active++)
jQuery.event.trigger("ajaxStart");var remote=/^(?:\w+:)?\/\/([^\/?#]+)/;if(s.dataType=="script"&&type=="GET"&&remote.test(s.url)&&remote.exec(s.url)[1]!=location.host){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src=s.url;if(s.scriptCharset)
script.charset=s.scriptCharset;if(!jsonp){var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;success();complete();head.removeChild(script);}};}
head.appendChild(script);return undefined;}
var requestDone=false;var xhr=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(s.username)
xhr.open(type,s.url,s.async,s.username,s.password);else
xhr.open(type,s.url,s.async);try{if(s.data)
xhr.setRequestHeader("Content-Type",s.contentType);if(s.ifModified)
xhr.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]||"Thu, 01 Jan 1970 00:00:00 GMT");xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default);}catch(e){}
if(s.beforeSend&&s.beforeSend(xhr,s)===false){s.global&&jQuery.active--;xhr.abort();return false;}
if(s.global)
jQuery.event.trigger("ajaxSend",[xhr,s]);var onreadystatechange=function(isTimeout){if(!requestDone&&xhr&&(xhr.readyState==4||isTimeout=="timeout")){requestDone=true;if(ival){clearInterval(ival);ival=null;}
status=isTimeout=="timeout"&&"timeout"||!jQuery.httpSuccess(xhr)&&"error"||s.ifModified&&jQuery.httpNotModified(xhr,s.url)&&"notmodified"||"success";if(status=="success"){try{data=jQuery.httpData(xhr,s.dataType,s.dataFilter);}catch(e){status="parsererror";}}
if(status=="success"){var modRes;try{modRes=xhr.getResponseHeader("Last-Modified");}catch(e){}
if(s.ifModified&&modRes)
jQuery.lastModified[s.url]=modRes;if(!jsonp)
success();}else
jQuery.handleError(s,xhr,status);complete();if(s.async)
xhr=null;}};if(s.async){var ival=setInterval(onreadystatechange,13);if(s.timeout>0)
setTimeout(function(){if(xhr){xhr.abort();if(!requestDone)
onreadystatechange("timeout");}},s.timeout);}
try{xhr.send(s.data);}catch(e){jQuery.handleError(s,xhr,null,e);}
if(!s.async)
onreadystatechange();function success(){if(s.success)
s.success(data,status);if(s.global)
jQuery.event.trigger("ajaxSuccess",[xhr,s]);}
function complete(){if(s.complete)
s.complete(xhr,status);if(s.global)
jQuery.event.trigger("ajaxComplete",[xhr,s]);if(s.global&&!--jQuery.active)
jQuery.event.trigger("ajaxStop");}
return xhr;},handleError:function(s,xhr,status,e){if(s.error)s.error(xhr,status,e);if(s.global)
jQuery.event.trigger("ajaxError",[xhr,s,e]);},active:0,httpSuccess:function(xhr){try{return!xhr.status&&location.protocol=="file:"||(xhr.status>=200&&xhr.status<300)||xhr.status==304||xhr.status==1223||jQuery.browser.safari&&xhr.status==undefined;}catch(e){}
return false;},httpNotModified:function(xhr,url){try{var xhrRes=xhr.getResponseHeader("Last-Modified");return xhr.status==304||xhrRes==jQuery.lastModified[url]||jQuery.browser.safari&&xhr.status==undefined;}catch(e){}
return false;},httpData:function(xhr,type,filter){var ct=xhr.getResponseHeader("content-type"),xml=type=="xml"||!type&&ct&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.tagName=="parsererror")
throw"parsererror";if(filter)
data=filter(data,type);if(type=="script")
jQuery.globalEval(data);if(type=="json")
data=eval("("+data+")");return data;},param:function(a){var s=[];if(a.constructor==Array||a.jquery)
jQuery.each(a,function(){s.push(encodeURIComponent(this.name)+"="+encodeURIComponent(this.value));});else
for(var j in a)
if(a[j]&&a[j].constructor==Array)
jQuery.each(a[j],function(){s.push(encodeURIComponent(j)+"="+encodeURIComponent(this));});else
s.push(encodeURIComponent(j)+"="+encodeURIComponent(jQuery.isFunction(a[j])?a[j]():a[j]));return s.join("&").replace(/%20/g,"+");}});jQuery.fn.extend({show:function(speed,callback){return speed?this.animate({height:"show",width:"show",opacity:"show"},speed,callback):this.filter(":hidden").each(function(){this.style.display=this.oldblock||"";if(jQuery.css(this,"display")=="none"){var elem=jQuery("<"+this.tagName+" />").appendTo("body");this.style.display=elem.css("display");if(this.style.display=="none")
this.style.display="block";elem.remove();}}).end();},hide:function(speed,callback){return speed?this.animate({height:"hide",width:"hide",opacity:"hide"},speed,callback):this.filter(":visible").each(function(){this.oldblock=this.oldblock||jQuery.css(this,"display");this.style.display="none";}).end();},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){return jQuery.isFunction(fn)&&jQuery.isFunction(fn2)?this._toggle.apply(this,arguments):fn?this.animate({height:"toggle",width:"toggle",opacity:"toggle"},fn,fn2):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"]();});},slideDown:function(speed,callback){return this.animate({height:"show"},speed,callback);},slideUp:function(speed,callback){return this.animate({height:"hide"},speed,callback);},slideToggle:function(speed,callback){return this.animate({height:"toggle"},speed,callback);},fadeIn:function(speed,callback){return this.animate({opacity:"show"},speed,callback);},fadeOut:function(speed,callback){return this.animate({opacity:"hide"},speed,callback);},fadeTo:function(speed,to,callback){return this.animate({opacity:to},speed,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);return this[optall.queue===false?"each":"queue"](function(){if(this.nodeType!=1)
return false;var opt=jQuery.extend({},optall),p,hidden=jQuery(this).is(":hidden"),self=this;for(p in prop){if(prop[p]=="hide"&&hidden||prop[p]=="show"&&!hidden)
return opt.complete.call(this);if(p=="height"||p=="width"){opt.display=jQuery.css(this,"display");opt.overflow=this.style.overflow;}}
if(opt.overflow!=null)
this.style.overflow="hidden";opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(/toggle|show|hide/.test(val))
e[val=="toggle"?hidden?"show":"hide":val](prop);else{var parts=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";if(unit!="px"){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit;}
if(parts[1])
end=((parts[1]=="-="?-1:1)*end)+start;e.custom(start,end,unit);}else
e.custom(start,val,"");}});return true;});},queue:function(type,fn){if(jQuery.isFunction(type)||(type&&type.constructor==Array)){fn=type;type="fx";}
if(!type||(typeof type=="string"&&!fn))
return queue(this[0],type);return this.each(function(){if(fn.constructor==Array)
queue(this,type,fn);else{queue(this,type).push(fn);if(queue(this,type).length==1)
fn.call(this);}});},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue)
this.queue([]);this.each(function(){for(var i=timers.length-1;i>=0;i--)
if(timers[i].elem==this){if(gotoEnd)
timers[i](true);timers.splice(i,1);}});if(!gotoEnd)
this.dequeue();return this;}});var queue=function(elem,type,array){if(elem){type=type||"fx";var q=jQuery.data(elem,type+"queue");if(!q||array)
q=jQuery.data(elem,type+"queue",jQuery.makeArray(array));}
return q;};jQuery.fn.dequeue=function(type){type=type||"fx";return this.each(function(){var q=queue(this,type);q.shift();if(q.length)
q[0].call(this);});};jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&speed.constructor==Object?speed:{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&easing.constructor!=Function&&easing};opt.duration=(opt.duration&&opt.duration.constructor==Number?opt.duration:jQuery.fx.speeds[opt.duration])||jQuery.fx.speeds.def;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false)
jQuery(this).dequeue();if(jQuery.isFunction(opt.old))
opt.old.call(this);};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],timerId:null,fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig)
options.orig={};}});jQuery.fx.prototype={update:function(){if(this.options.step)
this.options.step.call(this.elem,this.now,this);(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if(this.prop=="height"||this.prop=="width")
this.elem.style.display="block";},cur:function(force){if(this.elem[this.prop]!=null&&this.elem.style[this.prop]==null)
return this.elem[this.prop];var r=parseFloat(jQuery.css(this.elem,this.prop,force));return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0;},custom:function(from,to,unit){this.startTime=now();this.start=from;this.end=to;this.unit=unit||this.unit||"px";this.now=this.start;this.pos=this.state=0;this.update();var self=this;function t(gotoEnd){return self.step(gotoEnd);}
t.elem=this.elem;jQuery.timers.push(t);if(jQuery.timerId==null){jQuery.timerId=setInterval(function(){var timers=jQuery.timers;for(var i=0;i<timers.length;i++)
if(!timers[i]())
timers.splice(i--,1);if(!timers.length){clearInterval(jQuery.timerId);jQuery.timerId=null;}},13);}},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.show=true;this.custom(0,this.cur());if(this.prop=="width"||this.prop=="height")
this.elem.style[this.prop]="1px";jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=now();if(gotoEnd||t>this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var done=true;for(var i in this.options.curAnim)
if(this.options.curAnim[i]!==true)
done=false;if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(jQuery.css(this.elem,"display")=="none")
this.elem.style.display="block";}
if(this.options.hide)
this.elem.style.display="none";if(this.options.hide||this.options.show)
for(var p in this.options.curAnim)
jQuery.attr(this.elem.style,p,this.options.orig[p]);}
if(done)
this.options.complete.call(this.elem);return false;}else{var n=t-this.startTime;this.state=n/this.options.duration;this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update();}
return true;}};jQuery.extend(jQuery.fx,{speeds:{slow:600,fast:200,def:400},step:{scrollLeft:function(fx){fx.elem.scrollLeft=fx.now;},scrollTop:function(fx){fx.elem.scrollTop=fx.now;},opacity:function(fx){jQuery.attr(fx.elem.style,"opacity",fx.now);},_default:function(fx){fx.elem.style[fx.prop]=fx.now+fx.unit;}}});jQuery.fn.offset=function(){var left=0,top=0,elem=this[0],results;if(elem)with(jQuery.browser){var parent=elem.parentNode,offsetChild=elem,offsetParent=elem.offsetParent,doc=elem.ownerDocument,safari2=safari&&parseInt(version)<522&&!/adobeair/i.test(userAgent),css=jQuery.curCSS,fixed=css(elem,"position")=="fixed";if(elem.getBoundingClientRect){var box=elem.getBoundingClientRect();add(box.left+Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),box.top+Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));add(-doc.documentElement.clientLeft,-doc.documentElement.clientTop);}else{add(elem.offsetLeft,elem.offsetTop);while(offsetParent){add(offsetParent.offsetLeft,offsetParent.offsetTop);if(mozilla&&!/^t(able|d|h)$/i.test(offsetParent.tagName)||safari&&!safari2)
border(offsetParent);if(!fixed&&css(offsetParent,"position")=="fixed")
fixed=true;offsetChild=/^body$/i.test(offsetParent.tagName)?offsetChild:offsetParent;offsetParent=offsetParent.offsetParent;}
while(parent&&parent.tagName&&!/^body|html$/i.test(parent.tagName)){if(!/^inline|table.*$/i.test(css(parent,"display")))
add(-parent.scrollLeft,-parent.scrollTop);if(mozilla&&css(parent,"overflow")!="visible")
border(parent);parent=parent.parentNode;}
if((safari2&&(fixed||css(offsetChild,"position")=="absolute"))||(mozilla&&css(offsetChild,"position")!="absolute"))
add(-doc.body.offsetLeft,-doc.body.offsetTop);if(fixed)
add(Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));}
results={top:top,left:left};}
function border(elem){add(jQuery.curCSS(elem,"borderLeftWidth",true),jQuery.curCSS(elem,"borderTopWidth",true));}
function add(l,t){left+=parseInt(l,10)||0;top+=parseInt(t,10)||0;}
return results;};jQuery.fn.extend({position:function(){var left=0,top=0,results;if(this[0]){var offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(offsetParent[0].tagName)?{top:0,left:0}:offsetParent.offset();offset.top-=num(this,'marginTop');offset.left-=num(this,'marginLeft');parentOffset.top+=num(offsetParent,'borderTopWidth');parentOffset.left+=num(offsetParent,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}
return results;},offsetParent:function(){var offsetParent=this[0].offsetParent;while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&jQuery.css(offsetParent,'position')=='static'))
offsetParent=offsetParent.offsetParent;return jQuery(offsetParent);}});jQuery.each(['Left','Top'],function(i,name){var method='scroll'+name;jQuery.fn[method]=function(val){if(!this[0])return;return val!=undefined?this.each(function(){this==window||this==document?window.scrollTo(!i?val:jQuery(window).scrollLeft(),i?val:jQuery(window).scrollTop()):this[method]=val;}):this[0]==window||this[0]==document?self[i?'pageYOffset':'pageXOffset']||jQuery.boxModel&&document.documentElement[method]||document.body[method]:this[0][method];};});jQuery.each(["Height","Width"],function(i,name){var tl=i?"Left":"Top",br=i?"Right":"Bottom";jQuery.fn["inner"+name]=function(){return this[name.toLowerCase()]()+
num(this,"padding"+tl)+
num(this,"padding"+br);};jQuery.fn["outer"+name]=function(margin){return this["inner"+name]()+
num(this,"border"+tl+"Width")+
num(this,"border"+br+"Width")+
(margin?num(this,"margin"+tl)+num(this,"margin"+br):0);};});})();

/* jquery_1_2_6 Ends */



/* amazonJQ Starts */

//! ################################################################
//! Copyright (c) 2008 Amazon.com, Inc., and its Affiliates.
//! All rights reserved.
//! Not to be reused without permission
//! $DateTime: 2009/10/28 19:28:34 $
//! ################################################################
if(typeof window.jQuery!='undefined'){jQuery.noConflict();jQuery.fn.offset126=jQuery.fn.offset;if(document.documentElement["getBoundingClientRect"])
jQuery.fn.offset=function(){if(!this[0])return{top:0,left:0};if(this[0]===this[0].ownerDocument.body)return jQuery.offset.bodyOffset(this[0]);var box=this[0].getBoundingClientRect(),doc=this[0].ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,top=box.top+(self.pageYOffset||jQuery.boxModel&&docElem.scrollTop||body.scrollTop)-clientTop,left=box.left+(self.pageXOffset||jQuery.boxModel&&docElem.scrollLeft||body.scrollLeft)-clientLeft;return{top:top,left:left};};else
jQuery.fn.offset=function(){if(!this[0])return{top:0,left:0};if(this[0]===this[0].ownerDocument.body)return jQuery.offset.bodyOffset(this[0]);jQuery.offset.initialized||jQuery.offset.initialize();var elem=this[0],offsetParent=elem.offsetParent,prevOffsetParent=elem,doc=elem.ownerDocument,computedStyle,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView.getComputedStyle(elem,null),top=elem.offsetTop,left=elem.offsetLeft;while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){computedStyle=defaultView.getComputedStyle(elem,null);top-=elem.scrollTop,left-=elem.scrollLeft;if(elem===offsetParent){top+=elem.offsetTop,left+=elem.offsetLeft;if(jQuery.offset.doesNotAddBorder&&!(jQuery.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(elem.tagName)))
top+=parseInt(computedStyle.borderTopWidth,10)||0,left+=parseInt(computedStyle.borderLeftWidth,10)||0;prevOffsetParent=offsetParent,offsetParent=elem.offsetParent;}
if(jQuery.offset.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible")
top+=parseInt(computedStyle.borderTopWidth,10)||0,left+=parseInt(computedStyle.borderLeftWidth,10)||0;prevComputedStyle=computedStyle;}
if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static")
top+=body.offsetTop,left+=body.offsetLeft;if(prevComputedStyle.position==="fixed")
top+=Math.max(docElem.scrollTop,body.scrollTop),left+=Math.max(docElem.scrollLeft,body.scrollLeft);return{top:top,left:left};};jQuery.offset={initialize:function(){if(this.initialized)return;var body=document.body,container=document.createElement('div'),innerDiv,checkDiv,table,rules,prop,bodyMarginTop=body.style.marginTop,html='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"cellpadding="0"cellspacing="0"><tr><td></td></tr></table>';rules={position:'absolute',top:0,left:0,margin:0,border:0,width:'1px',height:'1px',visibility:'hidden'}
for(prop in rules)container.style[prop]=rules[prop];container.innerHTML=html;body.insertBefore(container,body.firstChild);innerDiv=container.firstChild,checkDiv=innerDiv.firstChild,td=innerDiv.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(checkDiv.offsetTop!==5);this.doesAddBorderForTableAndCells=(td.offsetTop===5);innerDiv.style.overflow='hidden',innerDiv.style.position='relative';this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);body.style.marginTop='1px';this.doesNotIncludeMarginInBodyOffset=(body.offsetTop===0);body.style.marginTop=bodyMarginTop;body.removeChild(container);this.initialized=true;},bodyOffset:function(body){jQuery.offset.initialized||jQuery.offset.initialize();var top=body.offsetTop,left=body.offsetLeft;if(jQuery.offset.doesNotIncludeMarginInBodyOffset)
top+=parseInt(jQuery.curCSS(body,'marginTop',true),10)||0,left+=parseInt(jQuery.curCSS(body,'marginLeft',true),10)||0;return{top:top,left:left};}};if(jQuery.browser.msie&&document.compatMode=="BackCompat"){var fixOriginal=jQuery.event.fix;jQuery.event.fix=function(event){var e=fixOriginal(event);e.pageX-=2;e.pageY-=2;return e;}}
if(jQuery.browser.msie){var userAgent=navigator.userAgent;if(userAgent.search(/msie 6\./i)>=0&&userAgent.search(/windows/i)>=0){try{document.execCommand("BackgroundImageCache",false,true);}catch(err){}}}
(function($){var bootstrapAmznJQ=window.amznJQ;window.amznJQ=new function(){;var _logicalToPhysical={JQuery:{functionality:'JQuery',urls:null},popover:{functionality:'popover',urls:null}
};var _func_loaded={};var _url_loaded={};var _loading={};function _loadFunctionality(functionality){var urls=_logicalToPhysical[functionality].urls;;if(urls){$.each(urls,function(){if(!_url_loaded[this]){_loadURL(this,functionality)}});}}
function _loadURL(url,functionality){;$.ajax({type:'GET',url:url,success:_onUrlLoadedFcn(url,functionality),dataType:'script',cache:true})}
function _onUrlLoadedFcn(url,functionality){return function(){;_url_loaded[url]=true;var all_loaded=true;$.each(_logicalToPhysical[functionality].urls,function(){all_loaded=all_loaded&&!!_url_loaded[this];});if(all_loaded){}}}
this.addLogical=function(functionality,urls){;_logicalToPhysical[functionality]={functionality:functionality,urls:urls};if(!urls){this.declareAvailable(functionality);return;}
if(_loading[functionality]){_loadFunctionality(functionality);}};this.declareAvailable=function(functionality){;if(typeof _logicalToPhysical[functionality]=='undefined'){_logicalToPhysical[functionality]={functionality:functionality,urls:null};};_func_loaded[functionality]=true;$(document).trigger(functionality+'.loaded');};this.addStyle=function(css_url){var dcss=document.styleSheets[0];if(dcss&&dcss.addImport){while(dcss.imports.length>=31){dcss=dcss.imports[0];}
dcss.addImport(css_url);}else{$("style[type='text/css']:first").append('@import url("'+css_url+'");');}};this.addStyles=function(args){var urls=args.urls||[];var styles=args.styles||[];var dcss=document.styleSheets;if(dcss&&!dcss.length&&document.createStyleSheet){document.createStyleSheet();}
dcss=dcss[0];if(dcss&&dcss.addImport){$.each(urls,function(){while(dcss.imports.length>=31){dcss=dcss.imports[0];}
dcss.addImport(this);});}else{$.each(urls,function(){var attrs={type:'text/css',rel:'stylesheet',href:this};$('head').append($('<link/>').attr(attrs));});}
var css='';$.each(styles,function(){css+=this;});if(css){if(document.createStyleSheet){try{var sheet=document.createStyleSheet();sheet.cssText=css;}catch(e){}}else{$('head').append($('<style/>').attr({type:'text/css'}).append(css));}}};this.available=function(functionality,eventCallbackFunction){if(_func_loaded[functionality]){;$(document).one(functionality+'.loaded',eventCallbackFunction);$(document).trigger(functionality+'.loaded');}else if(_loading[functionality]){;$(document).one(functionality+'.loaded',eventCallbackFunction);}else if(_logicalToPhysical[functionality]){;_loading[functionality]=true;$(document).one(functionality+'.loaded',eventCallbackFunction);_loadFunctionality(functionality);}else{;_loading[functionality]=true;$(document).one(functionality+'.loaded',eventCallbackFunction);}};this.onReady=function(functionality,eventCallbackFunction){var ajq=this;$(function(){ajq.available(functionality,eventCallbackFunction)})}
var _stage_completed={};var _fail_safe_stages=['amznJQ.theFold','amznJQ.criticalFeature'];this.onCompletion=function(stage,callbackFn){if(_stage_completed[stage]){;$(document).one(stage,callbackFn);$(document).trigger(stage);}else{;$(document).one(stage,callbackFn);}}
this.completedStage=function(stage){if(!_stage_completed[stage]){;_stage_completed[stage]=true;$(document).trigger(stage);}}
this.windowOnLoad=function(){;$.each(_fail_safe_stages,function(){if(!_stage_completed[this]){;_stage_completed[this]=true;$(document).trigger(this);}});}
this.strings={};this.chars={};$.extend(this.strings,bootstrapAmznJQ.strings);$.extend(this.chars,bootstrapAmznJQ.chars);}();$(window).load(function(){amznJQ.windowOnLoad();});amznJQ.declareAvailable('JQuery');amznJQ.declareAvailable('jQuery');if(bootstrapAmznJQ){;$.each(bootstrapAmznJQ._l,function(){amznJQ.addLogical(this[0],this[1])});$.each(bootstrapAmznJQ._s,function(){amznJQ.addStyle(this[0])});$.each(bootstrapAmznJQ._d,function(){amznJQ.declareAvailable(this[0],this[1])});$.each(bootstrapAmznJQ._a,function(){amznJQ.available(this[0],this[1])});$.each(bootstrapAmznJQ._o,function(){amznJQ.onReady(this[0],this[1])});$.each(bootstrapAmznJQ._c,function(){amznJQ.onCompletion(this[0],this[1])});$.each(bootstrapAmznJQ._cs,function(){amznJQ.completedStage(this[0],this[1])});}
delete bootstrapAmznJQ;}(jQuery));}

/* amazonJQ Ends */



/* amzPopover Starts */

//! Amazon Popover
//! Copyright Amazon.com 2008
if(typeof window.jQuery!='undefined'){(function($){var rootElement=function(){var container=$("#ap_container");return container.length&&container||$("body");};var viewport={width:function(){return Math.min($(window).width(),$(document).width());},height:function(){return $(window).height();}};var mouseTracker=function(){var regions=[];var cursor={x:0,y:0};var scroll=[0,0];var listening=false;var check=function(immediately){for(var i=0;i<regions.length;i++){var r=regions[i];var inside=$.grep(r.rects,function(n){return cursor.x>=n[0]&&cursor.y>=n[1]&&cursor.x<n[0]+n[2]&&cursor.y<n[1]+n[3];}).length>0;if(r.inside!==null&&inside&&!r.inside&&r.mouseEnter){r.inside=r.mouseEnter();}else if(r.inside!==null&&!inside&&r.inside&&r.mouseLeave){r.inside=!r.mouseLeave(immediately);}}}
var startListening=function(){scroll=[$(window).scrollLeft(),$(window).scrollTop()];$(document).mousemove(function(e){cursor={x:e.pageX,y:e.pageY};check();});$(document).scroll(function(e){cursor.x+=($(window).scrollLeft()-scroll[0]);cursor.y+=($(window).scrollTop()-scroll[1]);scroll=[$(window).scrollLeft(),$(window).scrollTop()];check();});listening=true;}
return{add:function(rectsArray,options){if(!listening){startListening();}
var r=$.extend({rects:rectsArray},options);regions.push(r);return r;},remove:function(region){for(var i=0;i<regions.length;i++){if(regions[i]===region){regions.splice(i,1);return;}}},checkNow:function(){check(true);}};}();var iframePool=function(){var ie6=$.browser.msie&&parseInt($.browser.version)<=6;var src=ie6?window.AmazonPopoverImages.pixel:"javascript:void(false)";var HTML='<iframe frameborder="0" tabindex="-1" src="'+src+'" style="display:none;position:absolute;z-index:0;filter:Alpha(Opacity=\'0\');opacity:0;" />';var pool=[];var addToLib=function(n){for(i=0;i<n;i++){pool.push($(HTML).prependTo(rootElement()));}};$(document).ready(function(){addToLib(3);});return{checkout:function(jqObj){if(!pool.length)addToLib(1);return pool.pop().css({display:'block',top:jqObj.offset().top,left:jqObj.offset().left,width:jqObj.outerWidth(),height:jqObj.outerHeight(),zIndex:Number(jqObj.css("z-index"))-1});},checkin:function(iframe){pool.push(iframe.css("display","none"));}};}();var elementHidingManager=function(){var hiddenElements=[];var win=/Win/.test(navigator.platform);var mac=/Mac/.test(navigator.platform);var linux=/Linux/.test(navigator.platform);var version=parseInt($.browser.version);var canOverlayWmodeWindow=false;var intersectingPopovers=function(obj){var bounds=[obj.offset().left,obj.offset().top,obj.outerWidth(),obj.outerHeight()];var intersecting=[];for(var i=0;i<popovers.length;i++){var r=popovers[i].bounds;var disparate=bounds[0]>r[0]+r[2]||r[0]>bounds[0]+bounds[2]||bounds[1]>r[1]+r[3]||r[1]>bounds[1]+bounds[3];if(!disparate)intersecting.push(popovers[i]);}
return intersecting;};var shouldBeVisible=function(obj){if(obj.hasClass("ap_never_hide"))return true;if(intersectingPopovers(obj).length){if(obj.is("object,embed")){var wmode=obj.attr("wmode")||obj.children("object,embed").attr("wmode")||obj.parent("object,embed").attr("wmode")||"window";if(wmode.toLowerCase()=="window"&&!canOverlayWmodeWindow){return false;}}
if(obj.is("iframe")){if($.browser.safari&&/Windows/.test(window.navigator.userAgent))return false;}}
return true;};return{update:function(){var stillHidden=[];for(var i=0;i<hiddenElements.length;i++){if(!shouldBeVisible(hiddenElements[i])){stillHidden.push(hiddenElements[i]);}else{hiddenElements[i].css("visibility","visible");}}
hiddenElements=stillHidden;$("object:visible,embed:visible,iframe:visible").each(function(){var obj=jQuery(this);if(!shouldBeVisible(obj)){hiddenElements.push(obj);obj.css("visibility","hidden");}});}};}();var applyBacking=function(popover,options){var region=null;var iframe=null;options=options||{};var destroy=function(){if(region){mouseTracker.remove(region);region=null;}
if(iframe){iframePool.checkin(iframe);iframe=null;}
elementHidingManager.update();};var refreshBounds=function(){var newBounds=[popover.offset().left,popover.offset().top,popover.outerWidth(),popover.outerHeight()];if(region){region.rects[0]=newBounds;}
if(iframe)iframe.css({left:newBounds[0],top:newBounds[1],width:newBounds[2],height:newBounds[3]});elementHidingManager.update();};var reposition=function(x,y){if(iframe){iframe.css({left:x,top:y});}
if(region){region.rects[0][0]=x;region.rects[0][1]=y;}};if(options.useIFrame!==false)iframe=iframePool.checkout(popover);var bounds=[[popover.offset().left,popover.offset().top,popover.outerWidth(),popover.outerHeight()]];if(options.additionalCursorRects){for(var i=0;i<options.additionalCursorRects.length;i++){bounds.push(options.additionalCursorRects[i]);}}
region=mouseTracker.add(bounds,options);elementHidingManager.update();popover.backing={destroy:destroy,refreshBounds:refreshBounds,reposition:reposition,iframe:iframe};};var defaultSettings={width:500,followScroll:false,locationMargin:4,alignMargin:0,windowMargin:4,locationFitInWindow:true,focusOnShow:true,modal:false,draggable:false,zIndex:200,showOnHover:false,hoverShowDelay:400,hoverHideDelay:200,skin:"default",useIFrame:true,clone:false,ajaxSlideDuration:400,ajaxErrorContent:null,paddingLeft:17,paddingRight:17,paddingBottom:8};var overlay=null;var popovers=[];var et={MOUSE_ENTER:0x01,MOUSE_LEAVE:0x02,CLICK_TRIGGER:0x04,CLICK_OUTSIDE:0x08,fromStrings:function(s){var flags=0;var self=this;if(s){$.each($.makeArray(s),function(){flags=flags|self[this];});}
return flags;}};var ajaxCache={};var preparedPopover=null;var openGroupPopover={};var skins={"default":'<div class="ap_popover ap_popover_sprited" surround="6,16,18,16" tabindex="0"> \
                <div class="ap_header"> \
                    <div class="ap_left"/> \
                    <div class="ap_middle"/> \
                    <div class="ap_right"/> \
                </div> \
                <div class="ap_body"> \
                    <div class="ap_left"/> \
                    <div class="ap_content"><img src="'+window.AmazonPopoverImages.snake+'"/></div> \
                    <div class="ap_right"/> \
                </div> \
                <div class="ap_footer"> \
                    <div class="ap_left"/> \
                    <div class="ap_middle"/> \
                    <div class="ap_right"/> \
                </div> \
                <div class="ap_titlebar"> \
                    <div class="ap_title"/> \
                </div> \
                <div class="ap_close"><a href="#"><span class="ap_closetext"/><span class="ap_closebutton"><span></span></span></a></div> \
            </div>',"default_non_sprited":'<div class="ap_popover ap_popover_unsprited" surround="6,16,18,16" tabindex="0"> \
                <div class="ap_header"> \
                    <div class="ap_left"/> \
                    <div class="ap_middle"/> \
                    <div class="ap_right"/> \
                </div> \
                <div class="ap_body"> \
                    <div class="ap_left"/> \
                    <div class="ap_content"><img src="'+window.AmazonPopoverImages.snake+'"/></div> \
                    <div class="ap_right"/> \
                </div> \
                <div class="ap_footer"> \
                    <div class="ap_left"/> \
                    <div class="ap_middle"/> \
                    <div class="ap_right"/> \
                </div> \
                <div class="ap_titlebar"> \
                    <div class="ap_title"/> \
                </div> \
                <div class="ap_close"><a href="#"><span class="ap_closetext"/><img border="0" src="'+window.AmazonPopoverImages.btnClose+'"/></a></div> \
            </div>',"classic":'<div class="ap_classic"> \
                <div class="ap_titlebar"> \
                    <div class="ap_close"> \
                        <img width="46" height="16" border="0" alt="close" onmouseup=\'this.src="'+window.AmazonPopoverImages.closeTan+'";\' onmouseout=\'this.src="'+window.AmazonPopoverImages.closeTan+'";\' onmousedown=\'this.src="'+window.AmazonPopoverImages.closeTanDown+'";\' src="'+window.AmazonPopoverImages.closeTan+'" /> \
                    </div> \
                    <span class="ap_title"></span> \
                </div> \
                <div class="ap_content"><img src="'+window.AmazonPopoverImages.loadingBar+'"/></div> \
            </div>'};var boundingRectangle=function(set){var b={left:Infinity,top:Infinity,right:-Infinity,bottom:-Infinity};set.each(function(){try{var t=$(this);var o=t.offset();var w=t.outerWidth();var h=t.outerHeight();if(t.is("area")){var ab=boundsOfAreaElement(t);o={left:ab[0],top:ab[1]};w=ab[2]-ab[0];h=ab[3]-ab[1];}
if(o.left<b.left)b.left=o.left;if(o.top<b.top)b.top=o.top;if(o.left+w>b.right)b.right=o.left+w;if(o.top+h>b.bottom)b.bottom=o.top+h;}
catch(e){}});return b;};var bringToFront=function(popover){if(popovers.length<=1){return;}
var maxZ=Math.max.apply(Math,$.map(popovers,function(p){return Number(p.css("z-index"));}));if(Number(popover.css("z-index"))==maxZ){return;}
popover.css("z-index",maxZ+2);popover.backing&&popover.backing.iframe.css("z-index",maxZ+1);};$.fn.removeAmazonPopoverTrigger=function(){this.unbind('click.amzPopover');this.unbind('mouseover.amzPopover');this.unbind('mouseout.amzPopover');return this;};$.fn.amazonPopoverTrigger=function(customSettings){var settings=$.extend({},defaultSettings,customSettings);var triggers=this;var popover=null;if(!settings.showOnHover&&settings.skin=='default')this.bind('mouseover.amzPopover',preparePopover);if(typeof settings.showOnHover=="string"){var hoverSet=triggers.filter(settings.showOnHover);}else{var hoverSet=settings.showOnHover?triggers:jQuery([]);}
var timerID=null;hoverSet.bind('mouseover.amzPopover',function(e){if(!popover&&!timerID){timerID=setTimeout(function(){if(!popover){if(triggers.parent().length&&triggers.parent().attr("tagName")){if(!settings.triggeringEnabled||settings.triggeringEnabled.call(triggers)){popover=displayPopover(settings,triggers,function(){popover=null;});}}}
timerID=null;},settings.hoverShowDelay);}
return false;});hoverSet.bind('mouseout.amzPopover',function(e){if(!popover&&timerID){clearTimeout(timerID);timerID=null;}});triggers.bind('click.amzPopover',function(e){var followLink=settings.followLink===true||typeof settings.followLink=="function"&&settings.followLink.call(triggers,popover,settings);if(followLink)return true;if(popover){popover.triggerClicked();}else{if(!settings.triggeringEnabled||settings.triggeringEnabled.call(triggers)){popover=displayPopover(settings,triggers,function(){popover=null;});}}
return false;});return this;};var displayPopover=function(settings,triggers,destroyFunction){addAliases(settings);var parent=null;if(triggers){var parents=triggers.eq(0).parents().get();for(var t=0;t<parents.length&&!parent;t++){for(var i=0;i<popovers.length&&!parent;i++){if(popovers[i].get(0)==parents[t]){parent=popovers[i];}}}}
var children=[];children.remove=function(p){for(var i=0;i<this.length;i++){if(this[i]===p){this.splice(i,1);return;}}};var interactedWith=false;$.each(defaultSettings,function(k,v){if(typeof settings[k]=="undefined")settings[k]=v;});if(!settings.location){settings.location=settings.modal||!triggers?"centered":"auto";}
if(settings.showCloseButton===null)settings.showCloseButton=!settings.showOnHover;$.each(popovers,function(){settings.zIndex=Math.max(settings.zIndex,Number(this.css("z-index"))+2);});var closeEvent=(settings.showOnHover?et.MOUSE_LEAVE:et.CLICK_TRIGGER)|(settings.modal?et.CLICK_OUTSIDE:0);closeEvent=(closeEvent|et.fromStrings(settings.closeEventInclude))&~et.fromStrings(settings.closeEventExclude);var close=function(){if(settings.group){openGroupPopover[settings.group]=null;}
if(original){if(ballMarker&&ballMarker.parents("body").length){original.hide().insertAfter(ballMarker);ballMarker.remove();ballMarker=null;}else{original.hide().appendTo(rootElement());}}
if(original!=popover){popover.remove();}
if(parent)parent.children.remove(popover);for(var i=0;i<popovers.length;i++){if(popovers[i]===popover){popovers.splice(i,1);break;}}
if(popover.backing){popover.backing.destroy();popover.backing=null;}
mouseTracker.checkNow();if(destroyFunction)destroyFunction();if(settings.onHide)settings.onHide.call(triggers,popover,settings);if(settings.modal&&overlay){if(overlay.fitToScreen){$(window).unbind("resize",overlay.fitToScreen);}
overlay.remove();overlay=null;}
$(document).unbind('scroll.AmazonPopover');$(document).unbind('click',close);for(var i=0;i<children.length;i++){children[i].close();}
children=[];return false;};var fill=function(content,autoshow){var container=popover.find('.ap_sub_content');if(container.length==0){container=popover.find('.ap_content');}
container.empty().append(content);if(typeof settings.autoshow=="boolean"?settings.autoshow:autoshow){if($.browser.msie){container.children().show().hide();}
container.children(":not(style)").show();}
container.find('.ap_custom_close').click(close);if(settings.onFilled){settings.onFilled.call(triggers,popover,settings);}};if(settings.modal&&!overlay){overlay=showOverlay(close,settings.zIndex);}
var popover=null;var original=null;var ballMarker=null;if(settings.skin=="default"){preparePopover();popover=preparedPopover;preparedPopover=null;}else{var skin=settings.skin||"<div><div class='ap_content' /></div>";var skinIsHtml=/^[^<]*(<(.|\s)+>)[^>]*$/.test(skin);var skinHtml=(skinIsHtml?skin:skins[skin]);popover=$(skinHtml);}
if($.browser.msie&&parseInt($.browser.version)==6){fixPngs(popover);}
if(settings.skin=="default"){popover.find(".ap_content").css({paddingLeft:settings.paddingLeft,paddingRight:settings.paddingRight,paddingBottom:settings.paddingBottom});}
if(settings.localContent){if(settings.clone){fill($(settings.localContent).clone(true),true);}else{original=$(settings.localContent);ballMarker=$("<span style='display:none' />").insertBefore(original);fill(original,true);}}else if(settings.literalContent){fill(settings.literalContent);}
if(settings.destination){var destinationUrl=(typeof settings.destination=="function")?settings.destination():settings.destination;if(settings.cacheable!==false&&ajaxCache[destinationUrl]){fill(ajaxCache[destinationUrl]);}else{$.ajax({url:destinationUrl,timeout:settings.ajaxTimeout,success:function(data){var contentCacheable=data.match(/^(\s|<!--[\s\S]*?-->)*<\w+[^>]*\s+cacheable="(.*?)"/i)||data.match(/^(\s|<!--[\s\S]*?-->)*<\w+[^>]*\s+cacheable='(.*?)'/i);if(settings.cacheable!==false&&(!contentCacheable||contentCacheable[2]!=="0")){ajaxCache[destinationUrl]=data;}
var title=data.match(/^(\s|<!--[\s\S]*?-->)*<\w+[^>]*\s+popoverTitle="(.*?)"/i)||data.match(/^(\s|<!--[\s\S]*?-->)*<\w+[^>]*\s+popoverTitle='(.*?)'/i);if(title){settings.title=title[2];popover.find('.ap_title').html(settings.title);}
if(settings.ajaxSlideDuration>0&&!($.browser.msie&&document.compatMode=="BackCompat")){popover.find(".ap_content").hide();fill(data);if(!settings.width){position(popover,settings,triggers);}
popover.find(".ap_content").slideDown(settings.ajaxSlideDuration,function(){position(popover,settings,triggers);});}else{fill(data);position(popover,settings,triggers);}},error:function(){var data=null;if(typeof settings.ajaxErrorContent=="function"){data=settings.ajaxErrorContent.apply(settings,arguments);}else{data=settings.ajaxErrorContent;}
if(data!==null){fill(data);position(popover,settings,triggers);}}});}}
if(!settings.localContent&&!settings.literalContent&&!settings.destination){throw("AmazonPopover wasn't provided a source of content.");}
if(parent){parent.children.push(popover);}
settings.surround=jQuery.map((popover.attr("surround")||"0,0,0,0").split(","),function(n){return Number(n);});popover.css({zIndex:settings.zIndex,position:"absolute",left:-2000,top:-2000});popover.click(function(e){if(!e.metaKey)e.stopPropagation();interactedWith=true;});if(closeEvent&et.CLICK_OUTSIDE){$(document).click(function(e){var leftButton=e.button===0||e.which==1;if(leftButton&&!e.metaKey)close();});}
popover.mousedown(function(e){if(!children.length){bringToFront(popover);}});var width=settings.width&&(typeof settings.width=="function"?settings.width():settings.width);if(!width){width=getDynamicWidth(popover,settings)||popover.outerWidth();}
if(width)popover.css("width",width);if(settings.followScroll){$(document).bind('scroll.AmazonPopover',function(e){followScroll(e);});}
if(settings.title!==null&&settings.title!==undefined){var titleBar=popover.find('.ap_titlebar');if(settings.skin=="default"){titleBar.css({width:(width-36)});titleBar.find(".ap_title").css("width",width-70);popover.find('.ap_content').css({paddingTop:18});}
popover.find('.ap_title').html(settings.title);if(settings.draggable&&!settings.modal){enableDragAndDrop(titleBar,popover);}
titleBar.show();if(settings.skin=="default"&&settings.wrapTitlebar){titleBar.addClass("multiline");popover.find('.ap_content').css({paddingTop:titleBar.outerHeight()-9});}}else{popover.find('.ap_titlebar').hide();}
if(settings.showCloseButton!==false){popover.find('.ap_close').show().click(close)
.mousedown(function(e){e.preventDefault();e.stopPropagation();return false;})
.css("cursor","default");if(!settings.title){popover.find('.ap_content').css({paddingTop:10});}
popover.keydown(function(e){if(e.keyCode==27){close();}});}else{popover.find('.ap_close').css("display","none");}
if(settings.closeText){popover.find('.ap_closetext').text(settings.closeText).show();}else{popover.find('.ap_closebutton span').text("Close");}
popover.appendTo(rootElement());position(popover,settings,triggers);$('input[type=text]').blur();popover.close=close;if(settings.group){if(openGroupPopover[settings.group]){openGroupPopover[settings.group].close();}
openGroupPopover[settings.group]=popover;}
popover.show();if(settings.focusOnShow){popover.get(0).hideFocus=true;popover.focus();}
if(settings.onShow){settings.onShow.call(triggers,popover,settings);}
popover.bounds=[popover.offset().left,popover.offset().top,popover.outerWidth(),popover.outerHeight()];popovers.push(popover);if(closeEvent&et.MOUSE_LEAVE){var timerID=null;var triggerRects=[];$.each(triggers,function(){var n=$(this);if(n.is("area")){var b=boundsOfAreaElement(n);triggerRects.push([b[0],b[1],b[2]-b[0],b[3]-b[1]]);}else{triggerRects.push([n.offset().left,n.offset().top,n.outerWidth(),n.outerHeight()]);}});if(settings.additionalCursorRects){$(settings.additionalCursorRects).each(function(){var n=$(this);triggerRects.push([n.offset().left,n.offset().top,n.outerWidth(),n.outerHeight()]);});}
applyBacking(popover,{solidRectangle:settings.solidRectangle,useIFrame:settings.useIFrame,mouseEnter:function(){if(timerID){clearTimeout(timerID);timerID=null;}
return true;},mouseLeave:function(immediately){if(settings.semiStatic&&interactedWith){return!children.length;}
if(timerID){clearTimeout(timerID);timerID=null;}
if(children.length==0){if(immediately){close();}else{timerID=setTimeout(function(){close();timerID=null;},settings.hoverHideDelay);}
return true;}
return false;},additionalCursorRects:triggerRects,inside:true});}else{applyBacking(popover,{solidRectangle:settings.solidRectangle,useIFrame:settings.useIFrame});}
popover.close=close;popover.settings=settings;popover.triggerClicked=function(){if(closeEvent&et.CLICK_TRIGGER)close();};popover.children=children;return popover;};var getPageWidth=function(){return $.browser.msie?$(window).width():'100%';};var getPageHeight=function(){return $.browser.msie?$(document).height():'100%';};var showOverlay=function(closeFunction,z){var overlay=$('<div id="ap_overlay"/>');overlay.css({width:getPageWidth(),height:getPageHeight(),position:($.browser.mozilla||$.browser.safari)?'fixed':'',opacity:0.4,zIndex:z});if($.browser.msie){overlay.fitToScreen=function(e){overlay.css({width:getPageWidth(),height:getPageHeight()});};$(window).resize(overlay.fitToScreen);}
return overlay.appendTo(rootElement());};var HEADER_HEIGHT=45;var FOOTER_HEIGHT=35;var VERT_ARROW_OFFSET=327;var LEFT_ARROW_OFFSET=0;var RIGHT_ARROW_OFFSET=-51;var attachedPositioning=function(popover,targetY,location,position,offset){if(popover.hasClass("ap_popover_sprited")){var dist=targetY-location.top-offset[1];if(dist<HEADER_HEIGHT){dist=HEADER_HEIGHT;}else if(dist>popover.outerHeight()-FOOTER_HEIGHT){dist=popover.outerHeight()-FOOTER_HEIGHT;}
var attachingSide=position=="left"?"right":"left";var elm=popover.find('.ap_body .ap_'+attachingSide).removeClass('ap_'+attachingSide)
.addClass('ap_'+attachingSide+'-arrow');var xOffset=attachingSide=="left"?LEFT_ARROW_OFFSET:RIGHT_ARROW_OFFSET;elm.css('backgroundPosition',xOffset+'px '+(dist-VERT_ARROW_OFFSET)+'px');}}
var position=function(popover,settings,triggers){if(!settings.width){popover.css('width',getDynamicWidth(popover,settings));}
var offset=settings.locationOffset||[0,0];if(typeof settings.location=="function"){var location=settings.location.call(triggers,popover,settings);}else{var names=$.map($.makeArray(settings.location),function(n){return n=="auto"?["bottom","left","right","top"]:n;});var set=settings.locationElement&&$(settings.locationElement)||triggers;var b=set&&boundingRectangle(set);var location=locationFunction[names[0]](b,popover,settings);var index=0;for(var i=1;i<names.length&&!location.fits;i++){var next=locationFunction[names[i]](b,popover,settings);if(next.fits){location=next;index=i;}}
if(settings.attached&&(names[index]=="left"||names[index]=="right")){attachedPositioning(popover,(b.top+b.bottom)/2,location,names[index],offset);}}
popover.css({left:location.left+offset[0],top:location.top+offset[1],margin:location.margin,right:location.right});if(popover.backing){popover.backing.refreshBounds();}};var horizPosition=function(b,popover,settings){var align=$.makeArray(settings.align||"left");var x={min:$(document).scrollLeft()+settings.windowMargin-settings.surround[3],max:viewport.width()+$(document).scrollLeft()-settings.windowMargin-popover.outerWidth(),left:b.left-settings.surround[3]-settings.alignMargin,right:b.right-popover.outerWidth()+settings.surround[1]+settings.alignMargin,center:(b.left+b.right-popover.outerWidth())/2};var align=$.grep($.makeArray(settings.align),function(n){return x[n];});if(align.length==0)align.push("left");for(var i=0;i<align.length;i++){if(x[align[i]]>=x.min&&x[align[i]]<=x.max)return x[align[i]];}
if(settings.forceAlignment)return x[align[0]];if(x.min>x.max)return x.min;return x[align[0]]<x.min?x.min:x.max;};var vertPosition=function(b,popover,settings){var min=$(document).scrollTop()+settings.windowMargin;var max=viewport.height()+$(document).scrollTop()-settings.windowMargin;if(settings.attached){var midpoint=(b.top+b.bottom)/2;if(midpoint-HEADER_HEIGHT<min){min=min+HEADER_HEIGHT<b.bottom?min:b.bottom-HEADER_HEIGHT;}
if(midpoint+FOOTER_HEIGHT>max){max=max-FOOTER_HEIGHT>b.top?max:b.top+FOOTER_HEIGHT;}
}else{min=Math.min(b.top-settings.alignMargin,min);max=Math.max(b.bottom+settings.alignMargin,max);}
var y={min:min-settings.surround[0],max:max-popover.outerHeight()+settings.surround[2],top:b.top-settings.surround[0]-settings.alignMargin,bottom:b.bottom-popover.outerHeight()+settings.alignMargin+settings.surround[2],middle:(b.top+b.bottom-popover.outerHeight())/2};var align=$.grep($.makeArray(settings.align),function(n){return y[n];});if(align.length==0)align.push("top");for(var i=0;i<align.length;i++){if(y[align[i]]>=y.min&&y[align[i]]<=y.max)return y[align[i]];}
if(settings.forceAlignment)return y[align[0]];if(y.min>y.max)return y.min;return y[align[0]]<y.min?y.min:y.max;};var locationFunction={centered:function(b,popover,settings){var y=$(window).scrollTop()+100;return{left:-(popover.outerWidth()/2),right:0,top:y,margin:'0% 50%',fits:true};},top:function(b,popover,settings){var room=b.top-$(document).scrollTop()-settings.locationMargin*2;var triggerInView=(b.left>=$(document).scrollLeft())&&(b.right<viewport.width()+$(document).scrollLeft());return{left:horizPosition(b,popover,settings),top:b.top-popover.outerHeight()-settings.locationMargin+settings.surround[2],fits:triggerInView&&room>=popover.outerHeight()-settings.surround[0]-settings.surround[2]};},left:function(b,popover,settings){var room=b.left-$(document).scrollLeft()-settings.locationMargin*2;return{left:b.left-popover.outerWidth()-settings.locationMargin+settings.surround[1],top:vertPosition(b,popover,settings),fits:room>=popover.outerWidth()-settings.surround[1]-settings.surround[3]};},bottom:function(b,popover,settings){var room=(viewport.height()+$(document).scrollTop())-b.bottom-settings.locationMargin*2;var triggerInView=(b.left>=$(document).scrollLeft())&&(b.right<viewport.width()+$(document).scrollLeft());return{left:horizPosition(b,popover,settings),top:b.bottom+settings.locationMargin-settings.surround[0],fits:triggerInView&&room>=popover.outerHeight()-settings.surround[0]-settings.surround[2]};},right:function(b,popover,settings){var room=(viewport.width()+$(document).scrollLeft())-b.right-settings.locationMargin*2;return{left:b.right+settings.locationMargin-settings.surround[3],top:vertPosition(b,popover,settings),fits:room>=popover.outerWidth()-settings.surround[1]-settings.surround[3]};},over:function(b,popover,settings){var alignTo=popover.find(settings.align||".ap_content *").offset();var corner=popover.offset();var padding={left:alignTo.left-corner.left,top:alignTo.top-corner.top};var left=b.left-padding.left;var top=b.top-padding.top;var adjustedLeft=Math.min(left,viewport.width()+$(document).scrollLeft()-popover.outerWidth()-settings.windowMargin);adjustedLeft=Math.max(adjustedLeft,$(document).scrollLeft()-settings.surround[3]+settings.windowMargin);var adjustedTop=Math.min(top,viewport.height()+$(document).scrollTop()-popover.outerHeight()+settings.surround[2]-settings.windowMargin);adjustedTop=Math.max(adjustedTop,$(document).scrollTop()-settings.surround[0]+settings.windowMargin);return{left:settings.forceAlignment?left:adjustedLeft,top:settings.forceAlignment?top:adjustedTop,fits:left==adjustedLeft&&top==adjustedTop};}}
var addAliases=function(settings){settings.align=settings.align||settings.locationAlign;settings.literalContent=settings.literalContent||settings.loadingContent;}
var preparePopover=function(){if(!preparedPopover){var ie6=jQuery.browser.msie&&parseInt(jQuery.browser.version)<=6;preparedPopover=$(skins[ie6?"default_non_sprited":"default"]).css({left:-2000,top:-2000}).appendTo(rootElement());}};var fixPngs=function(obj){obj.find("*").each(function(){var match=(jQuery(this).css("background-image")||"").match(/url\("(.*\.png)"\)/);if(match){var png=match[1];jQuery(this).css("background-image","none");jQuery(this).get(0).runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+png+"',sizingMethod='scale')";}});};var getDynamicWidth=function(popover,settings){var container=popover.find('.ap_content');if(settings.skin=='default'&&container.length>0){var tempNode=$('<div class="ap_temp">'+container.html()+'</div>');tempNode.css({display:'inline',position:'absolute',top:-9999,left:-9999});rootElement().append(tempNode);var marginLeft=parseInt(container.css("margin-left"))||0;var marginRight=parseInt(container.css("margin-right"))||0;var width=tempNode.width()+marginLeft+marginRight+settings.paddingLeft+settings.paddingRight+2;if(width%2!=0)width++;tempNode.remove();return Math.min(width,viewport.width());}
return null;};var enableDragAndDrop=function(titlebar,popover){titlebar.css('cursor','move');disableSelect(titlebar.get(0));titlebar.mousedown(function(e){e.preventDefault();disableSelect(document.body);var offset=[e.pageX-popover.offset().left,e.pageY-popover.offset().top];var mousemove=function(e){e.preventDefault();popover.css({left:e.pageX-offset[0],top:e.pageY-offset[1],margin:0});if(popover.backing){popover.backing.reposition(e.pageX-offset[0],e.pageY-offset[1]);}};var mouseup=function(e){popover.focus();enableSelect(document.body);$(document).unbind("mousemove",mousemove);$(document).unbind("mouseup",mouseup);};$(document).mousemove(mousemove).mouseup(mouseup);});}
var disableSelect=function(e){if(e){e.onselectstart=function(e){return false;};e.style.MozUserSelect='none';}};var enableSelect=function(e){if(e){e.onselectstart=function(e){return true;};e.style.MozUserSelect='';}};var boundsOfAreaElement=function(area){area=jQuery(area);var coords=jQuery.map(area.attr("coords").split(","),function(n){return Number(n);});if(area.attr("shape").match(/circle/i)){coords=[coords[0]-coords[2],coords[1]-coords[2],coords[0]+coords[2],coords[1]+coords[2]];}
var x=[],y=[];for(var i=0;i<coords.length;i++){(i%2==0?x:y).push(coords[i]);}
var min=[Math.min.apply(Math,x),Math.min.apply(Math,y)];var max=[Math.max.apply(Math,x),Math.max.apply(Math,y)];var mapName=area.parents("map").attr("name");var mapImg=jQuery("img[usemap=#"+mapName+"]");var map=mapImg.offset();map.left+=parseInt(mapImg.css("border-left-width"));map.top+=parseInt(mapImg.css("border-top-width"));return[map.left+min[0],map.top+min[1],map.left+max[0],map.top+max[1]];};$.AmazonPopover={displayPopover:displayPopover,mouseTracker:mouseTracker};if(typeof amznJQ!='undefined'){amznJQ.declareAvailable('popover');}})(jQuery);}

/* amzPopover Ends */

