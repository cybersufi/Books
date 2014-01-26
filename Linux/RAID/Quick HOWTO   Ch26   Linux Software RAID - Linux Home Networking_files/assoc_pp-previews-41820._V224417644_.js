(function($){var _context=$.context;if(!_context){return;}
delete $.context;var _impressionTimers=new Object;var _start_impression_timer=function(popover_id,tag,linkCode,asin)
{var impression_url=_context._impression
+'/s/pp?o='+_context._programID
+'&t='+tag
+'&l='+linkCode
+'&asin='+asin;_impressionTimers[popover_id]=setTimeout(function(){jQuery('#assocImpImg_'+popover_id).attr('src',impression_url);},2000);}
var _stop_impression_timer=function(popover_id)
{clearTimeout(_impressionTimers[popover_id]);}
var _popover_id=1;var _attach_popover_to_link=function(link,asin,linkCode)
{if(!link){return;}
var target=(link.target)?link.target:'_blank';var contentURL=_context._contentURL
+'?asin='+asin
+'&assoc_tag='+_context._tag
+'&linkCode='+linkCode
+'&target='+target;var current_popover_id=_popover_id;_popover_id++;var iframe='<iframe width="450" height="114" frameborder="0" scrolling="no" src="'+contentURL+'"></iframe>';var impressionImage='<img src="" id="assocImpImg_'+current_popover_id+'" style="width:1px;height:1px;border:none;" />';jQuery(link).amazonPopoverTrigger({title:_context._img['/associates/network/amazon-logos/amazon-logo-72-b-efedd4'],width:467,skin:'classic',location:'auto',draggable:true,showOnHover:true,followLink:true,showCloseButton:true,semiStatic:true,hoverHideDelay:500,onShow:function(){_start_impression_timer(current_popover_id,_context._tag,linkCode,asin)},onHide:function(){_stop_impression_timer(current_popover_id)},literalContent:iframe+impressionImage});};$.attach=_attach_popover_to_link;})(window.AssocPreviews);AssocPreviews.linkList=window.amazonLinkList;try{delete window.amazonLinkList;}catch(e){}
for(var i=0;i<AssocPreviews.linkList.length;i++)
{AssocPreviews.attach(AssocPreviews.linkList[i]['obj'],AssocPreviews.linkList[i]['asin'],AssocPreviews.linkList[i]['linkCode']);}