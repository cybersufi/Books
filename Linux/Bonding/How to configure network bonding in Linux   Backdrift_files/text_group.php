var AdBrite_Title_Color_Default = '000000';
var AdBrite_Text_Color_Default = '000000';
var AdBrite_Background_Color_Default = 'FFFFFF';
var AdBrite_Border_Color_Default = 'FFFFFF';
var AdBrite_URL_Color_Default = '7F7F7F';
var AdBrite_Title_Color,AdBrite_Text_Color,AdBrite_Background_Color,AdBrite_Border_Color,AdBrite_URL_Color;
AdBrite_Title_Color = AdBrite_IAB_Zone_Test_Color(AdBrite_Title_Color);
AdBrite_Text_Color = AdBrite_IAB_Zone_Test_Color(AdBrite_Text_Color);
AdBrite_Background_Color = AdBrite_IAB_Zone_Test_Color(AdBrite_Background_Color);
AdBrite_Border_Color = AdBrite_IAB_Zone_Test_Color(AdBrite_Border_Color);
AdBrite_URL_Color = AdBrite_IAB_Zone_Test_Color(AdBrite_URL_Color);
var AdBrite_Title_Color_Processed = (AdBrite_Title_Color) ? AdBrite_Title_Color : AdBrite_Title_Color_Default;
var AdBrite_Text_Color_Processed = (AdBrite_Text_Color) ? AdBrite_Text_Color : AdBrite_Text_Color_Default;
var AdBrite_Background_Color_Processed = (AdBrite_Background_Color) ? AdBrite_Background_Color : AdBrite_Background_Color_Default;
var AdBrite_Border_Color_Processed = (AdBrite_Border_Color) ? AdBrite_Border_Color : AdBrite_Border_Color_Default;
var AdBrite_URL_Color_Processed = (AdBrite_URL_Color) ? AdBrite_URL_Color : AdBrite_URL_Color_Default;
function AdBrite_IAB_Zone_Test_Color(color) {
if (typeof(color) != 'string') return false;
if (!color.match(/^[0-9A-Fa-f]{6}$/) && !color.match(/^[0-9A-Fa-f]{3}$/)) return false;
return color;
}
AdBrite_Title_Color = '';
AdBrite_Text_Color = '';
AdBrite_Background_Color = '';
AdBrite_Border_Color = '';
AdBrite_URL_Color = '';

var ADBRITE_setIFrameContent;

if (!ADBRITE_setIFrameContent) {
	ADBRITE_setIFrameContent = [];
}

function AdBriteRender_50270fae_5c8d_45e5_9289_bf9086291c73() {
	var frame = frames.AdBriteFrame_50270fae_5c8d_45e5_9289_bf9086291c73;
	if (frame && frame.document) {
		frame.document.open();
		frame.document.writeln("<html><head><style type='text/css'>");
		frame.document.writeln("body {background-color:#" + AdBrite_Background_Color_Processed + ";font-family:Arial,Helvetica,sans-serif;margin:0;}");
		frame.document.writeln("table {border:1px solid #" + AdBrite_Border_Color_Processed + ";width:468px;height:60px;padding:0;margin:0;overflow:hidden;display:block;}");
		frame.document.writeln("td {vertical-align:middle;text-align:center;font-size:14px;padding:2px 6px;height:54px;width:466px;}");
		frame.document.writeln("td a {text-decoration:none;}");
		frame.document.writeln("td span {display:block;overflow:hidden;}");
		frame.document.write("<\/style><\/head><body><table cellpadding='0' cellspacing='0'><tr><td><span style=''><a href='http://click.adbrite.com/mb/click.php?sid=1610990&banner_id=13384988&variation_id=1723445&uts=1273693982&cpc=302e3235&keyword_id=1474020&ab=171966514&sscup=300cd05e613e39d16a4103fb266424c4&sscra=e8f3c6ebca74cf276dc9d44c2b4186f2&ub=3410917763&guid=65fe48e9-c629-4c2f-a066-424a309f7f0b&odc=grx&rs=&tgt=http%3A%2F%2Fmaxmailhq.com&sc=&adt=5&bg=12578164&bkw=kiit3&nsscup=a6339b168b772fc7551764e1253336e7&r=' style='color:#" + AdBrite_Title_Color_Processed + ";font-weight:bold;text-decoration:underline;' target='_top'>Email Marketing Solution<\/a><\/span><span style=''><a href='http://click.adbrite.com/mb/click.php?sid=1610990&banner_id=13384988&variation_id=1723445&uts=1273693982&cpc=302e3235&keyword_id=1474020&ab=171966514&sscup=300cd05e613e39d16a4103fb266424c4&sscra=e8f3c6ebca74cf276dc9d44c2b4186f2&ub=3410917763&guid=65fe48e9-c629-4c2f-a066-424a309f7f0b&odc=grx&rs=&tgt=http%3A%2F%2Fmaxmailhq.com&sc=&adt=5&bg=12578164&bkw=kiit3&nsscup=a6339b168b772fc7551764e1253336e7&r=' style='color:#" + AdBrite_Text_Color_Processed + ";' target='_top'>Create, Deliver and Track Your Email Marketing Campaigns. Free Trial!<\/a><\/span><span style='background-color:#" + AdBrite_Background_Color_Processed + ";font-size:11px;white-space:nowrap;'><a href='http://click.adbrite.com/mb/click.php?sid=1610990&banner_id=13384988&variation_id=1723445&uts=1273693982&cpc=302e3235&keyword_id=1474020&ab=171966514&sscup=300cd05e613e39d16a4103fb266424c4&sscra=e8f3c6ebca74cf276dc9d44c2b4186f2&ub=3410917763&guid=65fe48e9-c629-4c2f-a066-424a309f7f0b&odc=grx&rs=&tgt=http%3A%2F%2Fmaxmailhq.com&sc=&adt=5&bg=12578164&bkw=kiit3&nsscup=a6339b168b772fc7551764e1253336e7&r=' style='color:#" + AdBrite_URL_Color_Processed + ";text-decoration:underline;' target='_top'>www.maxmailhq.com<\/a><\/span><\/td><\/tr><\/table><a href='http://www.adbrite.com/mb/?s_cid=aba&sid=1610990' style='font-size:11px;text-decoration:none;color:#000000;position:absolute;bottom:1px;right:2px;z-index:1;' target='_top'>Ads by <b>AdBrite<\/b><\/a><\/body><\/html>");
		frame.document.close();
	}
}

ADBRITE_setIFrameContent.push(AdBriteRender_50270fae_5c8d_45e5_9289_bf9086291c73);

if (!document.body) document.write('<body>');
document.write("<iframe name='AdBriteFrame_50270fae_5c8d_45e5_9289_bf9086291c73' width='468' height='60' frameborder='0' scrolling='no'>");
document.write('</iframe>');
document.writeln('<script type="text/javascript"><!--');
document.writeln('AdBriteRender_50270fae_5c8d_45e5_9289_bf9086291c73();')
document.write('//--></script>');

var ADBRITE;
if (!ADBRITE) {
   ADBRITE = {};
}

if (!ADBRITE.INLINE) {
   ADBRITE.INLINE={};
   ADBRITE.INLINE.keywords_to_inline=[];
   ADBRITE.INLINE.keyword_to_id={};
   ADBRITE.INLINE.span_id='adbriteinline_' + Math.round( Math.random() * 999999999 );
   ADBRITE.INLINE.inline_text_color='#006600';
   ADBRITE.INLINE.inline_underline='http://files.adbrite.com/mb/images/green-double-underline-006600.gif';
   ADBRITE.INLINE.ad_width=310;
   ADBRITE.INLINE.ad_height=284;
   ADBRITE.INLINE.iframe_width=300;
   ADBRITE.INLINE.iframe_height=250;
   ADBRITE.INLINE.time_limits={};
   ADBRITE.INLINE.ad_background='http://files.adbrite.com/mb/images/ab_inline_background.gif';
   ADBRITE.INLINE.ad_server_url_prefix='http://ads-grx.adbrite.com/adserver/';
   ADBRITE.INLINE.inline_ab_logo='http://files.adbrite.com/mb/images/ab_inline_logo.gif';
   ADBRITE.INLINE.supplier='www.adbrite.com';
   ADBRITE.INLINE.config={ 'sid': 1610990,
                             'open_in_new_window': 0,
                             'hostname': 'ads-grx.adbrite.com',
                             'max_words_to_inline': 8,
                             'max_char_for_keywords': 1500,
                             'max_char_for_textnodes': 5000,
                             'max_adserver_calls': 2,
                             'min_char_per_keyword': 3 };
   document.write('<span id="' + ADBRITE.INLINE.span_id + '" name="' + ADBRITE.span_id + '"></span>');
}
var ab_sUserAgent = navigator.userAgent;
var ab_fAppVersion = parseFloat(navigator.appVersion);
var ab_isKHTML = ab_sUserAgent.indexOf('KHTML') > -1 || ab_sUserAgent.indexOf('Konqueror') > -1 || ab_sUserAgent.indexOf('AppleWebKit') > -1;
var ab_isMoz = ab_sUserAgent.indexOf("Gecko") > -1 && !ab_isKHTML;
var ab_isMinMoz1 = ab_isMinMoz1_4 = ab_isMinMoz1_5 = false;
var ab_isOpera = ab_sUserAgent.indexOf('Opera') > -1;
var ab_isIE = ab_sUserAgent.indexOf('compatible') > -1 && ab_sUserAgent.indexOf('MSIE') > -1 && !ab_isOpera;
var ab_isMinIE4 = ab_isMinIE5 = ab_isMinIE5_5 = ab_isMinIE6 = ab_isMinKHTML5 = false;

function ab_compareVersions(sVersion1, sVersion2) {
   var aVersion1 = sVersion1.split('.');
   var aVersion2 = sVersion2.split('.');

   if (aVersion1.length > aVersion2.length) {
      for (var i=0; i < aVersion1.length - aVersion2.length; i++) {
         aVersion2.push('0');
      }
   } else if (aVersion1.length < aVersion2.length) {
      for (vari=0; i < aVersion2.length - aVersion1.length; i++) {
         aVerison1.push('0');
      }
   }

   for (var i=0; i < aVersion1.length; i++) {
      if (aVersion1[i] < aVersion2[i]) {
         return -1;
      } else if (aVersion1[i] > aVersion2[i]) {
         return 1;
      }
   }
   return 0;
}

// this tests for the different versions of mozilla
if (ab_isMoz) {
   var ab_reMoz = new RegExp("rv:(\\d+\\.\\d+(?:\\.\\d+)?)");
   ab_reMoz.test(ab_sUserAgent);
   ab_isMinMoz1 = ab_compareVersions(RegExp["$1"], "1.0") >= 0;
   ab_isMinMoz1_4 = ab_compareVersions(RegExp["$1"], "1.4") >= 0;
   ab_isMinMoz1_5 = ab_compareVersions(RegExp["$1"], "1.5") >= 0;
}

//this tests for the different versions of ie
if (ab_isIE) {
   var ab_re_IE = new RegExp('MSIE (\\d+\\.\\d+)');
   ab_re_IE.test(ab_sUserAgent);
   var ab_fIEVersion = parseFloat(RegExp['$1']);

   // these are the minimal version number that will be accepted
   ab_isMinIE4 = ab_fIEVersion >= 4;
   ab_isMinIE5 = ab_fIEVersion >= 5;
   ab_isMinIE5_5 = ab_fIEVersion >= 5.5;
   ab_isMinIE6 = ab_fIEVersion >= 6.0;
}

if (ab_isKHTML) {
   ab_isMinKHTML5 = ab_fAppVersion >= 5; 
}
// stopword list
var ADBRITE;
if (!ADBRITE) {
   ADBRITE = {};
}

if (!ADBRITE.stopword_list) {
   ADBRITE.stopword_list = {"about":1,"above":1,"across":1,"after":1,"afterwards":1,"again":1,"against":1,"all":1,"almost":1,"alone":1,"along":1,"already":1,"also":1,"although":1,"always":1,"among":1,"amongst":1,"amoungst":1,"amount":1,"and":1,"another":1,"anyhow":1,"anyone":1,"anything":1,"anyway":1,"anywhere":1,"are":1,"around":1,"back":1,"became":1,"because":1,"become":1,"becomes":1,"becoming":1,"been":1,"before":1,"beforehand":1,"behind":1,"being":1,"below":1,"beside":1,"besides":1,"between":1,"beyond":1,"both":1,"but":1,"by":1,"call":1,"can":1,"cannot":1,"cant":1,"con":1,"cool":1,"could":1,"couldnt":1,"describe":1,"detail":1,"doesn't":1,"done":1,"down":1,"due":1,"during":1,"each":1,"eight":1,"either":1,"eleven":1,"else":1,"elsewhere":1,"empty":1,"enough":1,"etc":1,"even":1,"ever":1,"every":1,"everyone":1,"everything":1,"everywhere":1,"except":1,"few":1,"fify":1,"fill":1,"find":1,"fire":1,"five":1,"for":1,"former":1,"formerly":1,"found":1,"four":1,"free":1,"from":1,"front":1,"full":1,"further":1,"get":1,"give":1,"had":1,"hadn't":1,"has":1,"hasnt":1,"have":1,"hence":1,"her":1,"here":1,"hereafter":1,"hereby":1,"herein":1,"hereupon":1,"hers":1,"herself":1,"him":1,"himself":1,"his":1,"how":1,"however":1,"inc":1,"indeed":1,"interest":1,"into":1,"its":1,"itself":1,"keep":1,"last":1,"latter":1,"latterly":1,"least":1,"ltd":1,"made":1,"many":1,"may":1,"meanwhile":1,"might":1,"mine":1,"more":1,"moreover":1,"most":1,"mostly":1,"much":1,"must":1,"mustn't":1,"myself":1,"namely":1,"neither":1,"never":1,"nevertheless":1,"next":1,"nine":1,"nobody":1,"none":1,"noone":1,"nor":1,"not":1,"nothing":1,"now":1,"nowhere":1,"off":1,"often":1,"once":1,"one":1,"only":1,"onto":1,"other":1,"others":1,"otherwise":1,"our":1,"ours":1,"ourselves":1,"out":1,"over":1,"own":1,"part":1,"per":1,"perhaps":1,"please":1,"put":1,"rather":1,"same":1,"see":1,"seem":1,"seemed":1,"seeming":1,"seems":1,"several":1,"she":1,"should":1,"show":1,"side":1,"since":1,"sincere":1,"site":1,"six":1,"some":1,"somehow":1,"someone":1,"something":1,"sometime":1,"sometimes":1,"somewhere":1,"still":1,"such":1,"target":1,"take":1,"ten":1,"than":1,"that":1,"the":1,"their":1,"them":1,"themselves":1,"then":1,"thence":1,"there":1,"thereafter":1,"thereby":1,"therefore":1,"therein":1,"thereupon":1,"these":1,"they":1,"third":1,"this":1,"those":1,"though":1,"through":1,"throughout":1,"thru":1,"thus":1,"together":1,"too":1,"top":1,"toward":1,"towards":1,"two":1,"under":1,"until":1,"upon":1,"very":1,"via":1,"was":1,"web":1,"website":1,"well":1,"were":1,"what":1,"whatever":1,"when":1,"whence":1,"whenever":1,"where":1,"whereafter":1,"whereas":1,"whereby":1,"wherein":1,"whereupon":1,"wherever":1,"whether":1,"which":1,"while":1,"whither":1,"who":1,"whoever":1,"whole":1,"whom":1,"whose":1,"why":1,"will":1,"with":1,"within":1,"without":1,"would":1,"www":1,"yet":1,"you":1,"your":1,"yours":1,"yourself":1,"yourselves":1,"save":1,"track":1,"link":1,"links":1,"file":1,"document":1,"video":1,"audio":1,"upload":1,"uploaded":1,"download":1,"downloaded":1,"comment":1,"add":1,"contact":1,"here":1,"requirement":1,"requirements":1,"info":1,"album":1,"rate":1};
}
ADBRITE.INLINE.is_inlined;
ADBRITE.INLINE.start_time;
ADBRITE.INLINE.keywords_already_inlined = [];
ADBRITE.INLINE.keywords_ids_already_inlined_str = "";
ADBRITE.INLINE.text_nodes = [];
ADBRITE.INLINE.adbriteinline_tags = [];
ADBRITE.INLINE.tags_to_ignore = {'A':1,'H1':1,'H2':1,'H3':1,'H4':1,'H5':1,'H6':1,'TH':1,'SCRIPT':1,'NOSCRIPT':1,'SELECT':1,'IFRAME':1,'TITLE':1,'TEXTAREA':1,'DT': 1,'DL':1,'DD':1,'FIELDSET':1,'LEGEND':1,'ACRONYM':1,'ADDRESS':1,'LABEL':1}
ADBRITE.INLINE.tags_to_use = {'P':1,'BODY':1}
ADBRITE.INLINE.current_textnode = 0;
ADBRITE.INLINE.unfiltered_keywords = [];
ADBRITE.INLINE.filtered_keywords = {};
ADBRITE.INLINE.filtered_keywords.ab_length = 0;
ADBRITE.INLINE.ad_url = '';
ADBRITE.INLINE.inline_ad_timeout_handle;
ADBRITE.INLINE.keyword = null;
ADBRITE.INLINE.div_keyword = null;
ADBRITE.INLINE.display_ad = false;
ADBRITE.INLINE.keyword_set_inlined = false;
ADBRITE.INLINE.min_word_count = 13;

ADBRITE.append_onload = function (func) { 
   var oldonload = window.onload;
   if (typeof window.onload != 'function') {
      window.onload = func;
   } else {
      window.onload = function () {
         oldonload();
         func();
      }
   }
}

ADBRITE.append_script = function (url, span_id) {
   var span_to_append = document.getElementById(span_id);
   var ab_script = document.createElement('script');
   ab_script.src = url;
   ab_script.type = 'text/javascript';
   span_to_append.appendChild(ab_script);
}

ADBRITE.element_in_array = function ( element, element_array ) {
   for ( var k = 0; k < element_array.length; k++ )
      if ( element_array[k] == element ) return true;
   return false;
}

ADBRITE.force_browser_cache_of_image = function (url) {
   (new Image(10,10)).src = url;
}

ADBRITE.find_Pos_X = function (obj) {
   var curleft = 0;
   if (obj.offsetParent) {
      while (obj) {
         curleft += obj.offsetLeft;
         obj = obj.offsetParent;
      }
   } else if (obj.x)
      curleft += obj.x;
   return curleft;
}

ADBRITE.find_Pos_Y = function (obj) {
   var curtop = 0;
   if (obj.offsetParent) {
      while (obj) {
         curtop += obj.offsetTop;
         obj = obj.offsetParent;
      }
   } else if (obj.y)
      curtop += obj.y;
   return curtop;
}

ADBRITE.find_page_width = function () {
   var x;
   if (self.innerWidth) x = self.innerWidth;
   else if (document.documentElement.clientWidth && document.documentElement.clientWidth) x = document.documentElement.clientWidth;
   else if (document.body.clientWidth) x = document.body.clientWidth;
   return x;
}

ADBRITE.find_page_height = function () {
   var y;
   if (self.innerHeight) y = self.innerHeight;
   else if (document.documentElement.clientHeight && document.documentElement.clientHeight) y = document.documentElement.clientHeight;
   else if (document.body.clientHeight) y = document.body.clientHeight;
   return y;
}

ADBRITE.find_scroll_y = function () {
   var y;
   if (self.pageYOffset) y = self.pageYOffset;
   else if (document.documentElement && document.documentElement.scrollTop) y = document.documentElement.scrollTop;
   else if (document.body) y = document.body.scrollTop;
   return y;
}

ADBRITE.INLINE.inline_keyword = function ( keyword, keyword_regex, node_array_index ) {
   ADBRITE.INLINE.keywords_already_inlined.push(keyword);
   ADBRITE.INLINE.keyword_set_inlined = true;

   // add keyword_id to keyword string
   var keyword_id_str = '' + ADBRITE.INLINE.keyword_to_id[keyword];
   ADBRITE.INLINE.config.max_char_for_keywords -= (keyword_id_str.length + 1);
   if ( ADBRITE.INLINE.keywords_ids_already_inlined_str.length > 0 ) {
      ADBRITE.INLINE.keywords_ids_already_inlined_str += ',';
   }
   ADBRITE.INLINE.keywords_ids_already_inlined_str += keyword_id_str;

   // inline the keyword
   var node_to_modify = ADBRITE.INLINE.text_nodes[node_array_index];
   var broken_apart_text = null;
   var pre_text = null;
   var post_text = '';
   var inline_text = null;
   var inline_tag = null;
   var pre_broken_node_text = node_to_modify.data; 
   var parent_node = node_to_modify.parentNode;

   //calculate the original keyword
   var start_id = node_to_modify.data.toLowerCase().indexOf(keyword.toLowerCase());
   var end_id = start_id + keyword.length;
   var orig_keyword = node_to_modify.data.slice(start_id,end_id);
   
   broken_apart_text = node_to_modify.data.split(keyword_regex);

   if (broken_apart_text.length == 0) {
      // this happens when the keyword is the only word in the node
      pre_text = document.createTextNode('');
      post_text = document.createTextNode('');
   } else if (broken_apart_text.length == 1) {
      // happens when the keyword is either at the beginning or the end of the node
      if (pre_broken_node_text.toLowerCase().indexOf(keyword.toLowerCase()) == 0) {
      // word to inline is at the beginning of the node
         pre_text = '';
         post_text = broken_apart_text[0];
      } else {
      // word to inline is at the end of the node
         pre_text = broken_apart_text[0];
         post_text = '';
      }

      pre_text = document.createTextNode(pre_text);
      post_text = document.createTextNode(post_text);
   } else {
      if (broken_apart_text.length > 2) {
         for (var i = 1; i < (broken_apart_text.length -1); i++)
            post_text += broken_apart_text[i] + keyword;
         post_text += broken_apart_text[(broken_apart_text.length - 1)];
      } else
         post_text = broken_apart_text[1];

      pre_text = document.createTextNode(broken_apart_text[0]);
      post_text = document.createTextNode(post_text);
   }

   // create the inlined keyword tag
   if (!document.getElementById('AdBriteInlineAd_'+keyword)) {
      inline_tag = document.createElement('a');
      inline_tag.target = (ADBRITE.INLINE.config.open_in_new_window) ? '_blank' : '_top';
      inline_tag.display = "inline";
      inline_tag.id = 'AdBriteInlineAd_' + keyword;
      inline_tag.keyword = keyword;
      inline_tag.name = 'AdBriteInlineAd_' + keyword;
      inline_tag.style.cursor = 'pointer';
      inline_tag.style.color = ADBRITE.INLINE.inline_text_color;
      inline_tag.style.textDecoration = 'none';
      inline_tag.onmouseover = ADBRITE.INLINE.prep_and_show_inline_ad;
      inline_tag.onmouseout = ADBRITE.INLINE.hide_inline_ad_timer;
      inline_tag.style.background = "url('" + ADBRITE.INLINE.inline_underline + "') bottom repeat-x";
      inline_tag.style.marginBottom = "-2px";
      inline_tag.style.paddingBottom = "2px";
      inline_tag.innerHTML = orig_keyword;
      parent_node.replaceChild(post_text, node_to_modify);
      parent_node.insertBefore(inline_tag, post_text);
      parent_node.insertBefore(pre_text, inline_tag);
      ADBRITE.INLINE.text_nodes = [];
      ADBRITE.INLINE.populate_text_nodes();

   }
}

ADBRITE.INLINE.create_inline_div = function () {
   if (!document.getElementById('adbrite_inline_div')) {
      //outermost div
      var inline = document.createElement('ispan');
      inline.className = 'noadbriteinline';
      inline.id = 'adbrite_inline_div';
      inline.onmouseover = ADBRITE.INLINE.reset_display_inline_ad;
      inline.onmouseout = ADBRITE.INLINE.hide_inline_ad_timer;
      var isty = inline.style;
      isty.display = 'none';
      isty.position='absolute';
      isty.zIndex = '32766';
      isty.width=ADBRITE.INLINE.ad_width + 'px';
      isty.height=ADBRITE.INLINE.ad_height + 'px';
      isty.overflow = "hidden";
      isty.backgroundImage='url(' + ADBRITE.INLINE.ad_background + ')';
      isty.backgroundPosition='top';
      isty.backgroundRepeat='repeat-x';
      isty.backgroundColor='#e2e2e2';
      isty.borderColor='#aaa';
      isty.borderWidth='1px';
      isty.borderStyle='solid';
      isty.opacity=1;
      isty.textAlign='left';
      document.getElementsByTagName('body')[0].appendChild(inline);

      //create & append a link back
      var linkBack = document.createElement('ispan');
      var lbsty = linkBack.style;
      lbsty.display = "inline";
      lbsty.whiteSpace = "nowrap";
      lbsty.position = "absolute";
      lbsty.top = "9px";
      lbsty.right = "14px";
      lbsty.hieght = "14px";
      lbsty.width = "40px";
      lbsty.cursor = "pointer";
      lbsty.fontSize = "14px";
      lbsty.lineHeight = "14px";
      linkBack.innerHTML = '&nbsp;';
      linkBack.onclick = function(){window.open('http://'+ADBRITE.INLINE.supplier)}
      inline.appendChild(linkBack);
 
      //create & append link for '? icon'
      var about = document.createElement('ispan');
      var absty = about.style;
      absty.width = "10px";
      absty.height = "11px";
      absty.backgroundImage = "url('http://files.adbrite.com/mb/images/ab_inline_question.gif')";
	  absty.backgroundRepeat = "no-repeat"; 
      absty.color = "#FFF"; 
      absty.position = "absolute";
      absty.fontFamily = "Arial,Helvetica,sans-serif";
      absty.top = "10px";
      absty.right = "20px";
      absty.cursor = "pointer";
      about.onclick = function () {window.open('http://' + ADBRITE.INLINE.supplier + '/mb/about_inline.php?sid=' + ADBRITE.INLINE.config.sid,'AboutInline', 'menubar=no,location=no,resizeable=no,scrollbars=no,status=no,left=100,top=100,height=300,width=300');}
      inline.appendChild(about);
			
	  //create & append link for 'x icon' (close)
      var ab_inline_close = document.createElement('ispan');
      var ab_inline_close_style = ab_inline_close.style;
      ab_inline_close_style.width = "10px";
      ab_inline_close_style.height = "11px";
      ab_inline_close_style.backgroundImage = "url('http://files.adbrite.com/mb/images/ab_inline_close.gif')";
	  ab_inline_close_style.backgroundRepeat = "no-repeat";
      ab_inline_close_style.color = "#FFF";
      ab_inline_close_style.position = "absolute";
      ab_inline_close_style.fontFamily = "Arial,Helvetica,sans-serif";
      ab_inline_close_style.top = "10px";
      ab_inline_close_style.right = "6px";
      ab_inline_close_style.cursor = "pointer";
      ab_inline_close.onclick = ADBRITE.INLINE.close_inline_ad;
      inline.appendChild(ab_inline_close);

	  //create & append text 'Advertisement'
      var advtext = document.createElement('ispan');
      var advtextsty = advtext.style;
      advtextsty.fontSize = "11px";
      advtextsty.display = "block";
      advtextsty.fontWeight = "bold";
      advtextsty.color = "#FFF";
      advtextsty.display = "block";
      advtextsty.fontFamily = "Arial,Helvetica,sans-serif";
      advtextsty.marginLeft = "120px";
	  advtextsty.marginTop = "8px";
	  advtextsty.padding = "0";
      advtext.appendChild(document.createTextNode("Advertisement"));
      inline.appendChild(advtext);


      //create & append wrapper (for padding purposes)
      var w = document.createElement('ispan');
      w.style.display = 'block';
      w.style.width = (ADBRITE.INLINE.ad_width - 34) + 'px';
      inline.appendChild(w);

      //create & append anchor
      var a = document.createElement('a');
      a.id = 'adbrite-inline-target-url';
      var asty = a.style;
      asty.padding = '0';
      asty.margin = '0';
      asty.border = 'none';
      asty.color = "#000";
      asty.fontWeight = 'normal';
      asty.textDecoration = 'none';
      asty.background = 'transparent';
      asty.cursor = 'pointer';
      asty.position = 'relative';
      asty.top = '33px';
      asty.left = '24px';
      w.appendChild(a);
      
      // adbrite logo
	  var adbrite_inline_logo = document.createElement('ispan');
      adbrite_inline_logo.style.backgroundImage = 'url(' + ADBRITE.INLINE.inline_ab_logo + ')';
      adbrite_inline_logo.style.width = '90px';
      adbrite_inline_logo.style.height = '17px';
      adbrite_inline_logo.style.position = 'absolute';
      adbrite_inline_logo.style.backgroundRepeat = "no-repeat"
      adbrite_inline_logo.style.top = '4px';
      adbrite_inline_logo.style.left = '4px';
	  adbrite_inline_logo.style.cursor = 'pointer';
      adbrite_inline_logo.onclick = function(){window.open('http://' + ADBRITE.INLINE.supplier + '/')}
      inline.appendChild(adbrite_inline_logo);
			
      //create & append ad_headline
      var head = document.createElement('ispan');
      head.id = "adbrite-inline-headline";
      var hsty = head.style;
      hsty.fontSize = "20px";
      hsty.fontFamily = "Arial,Helvetica,sans-serif";
      hsty.fontWeight = "bold";
      hsty.color = "#00F";
      hsty.textDecoration = "underline";
      hsty.whiteSpace = "nowrap";
      a.appendChild(head);
      a.appendChild(document.createElement('br'));

      //create and append ad_text
      var text = document.createElement('ispan');
      text.id = "adbrite-inline-adtext";
      var tsty = text.style;
      tsty.fontSize = "13px";
      tsty.lineHeight= "15px";
      tsty.fontFamily = "Verdana,Arial,Helvetica,sans-serif";
      a.appendChild(text);
      a.appendChild(document.createElement('br'));

      //create and append display url
      var url = document.createElement('ispan');
      url.id = "adbrite-inline-display-url";
      urlsty = url.style;
      urlsty.fontSize = "11px";
      urlsty.lineHeight= "18px";
      urlsty.fontFamily = "Verdana,Arial,Helvetica,sans-serif";
      urlsty.textDecoration = "underline";
      urlsty.color = "#008000";
      a.appendChild(url);
      
      // used for inlineAdPointing
      var ab_pointer = document.createElement('ispan');
      ab_pointer.id = 'ab_pointer';
      ab_pointer.width = 44;
      ab_pointer.height = 30;
      ab_pointer.style.width = ab_pointer.width + 'px';
      ab_pointer.style.height = ab_pointer.height + 'px';
      ab_pointer.style.position='absolute';
      ab_pointer.style.display='none';
      ab_pointer.style.zIndex ='32767';
      ab_pointer.style.backgroundPosition='top left';
      ab_pointer.style.top = 0;
      ab_pointer.style.left = 0;
      ab_pointer.style.backgroundRepeat='no-repeat';
      ab_pointer.onmouseover = ADBRITE.INLINE.reset_display_inline_ad;
      ab_pointer.onmouseout = ADBRITE.INLINE.hide_inline_ad_timer;
      document.getElementsByTagName('body')[0].appendChild(ab_pointer);
   } 
}

ADBRITE.INLINE.prep_and_show_inline_ad = function () {
   ADBRITE.INLINE.keyword = this.keyword;    

   if ( ADBRITE.INLINE.div_keyword != ADBRITE.INLINE.keyword ) {
      var page_width = ADBRITE.find_page_width();
      var page_height = ADBRITE.find_page_height();
      var scroll_y = ADBRITE.find_scroll_y();
      var div_left = ADBRITE.find_Pos_X(this);
      var div_top = ADBRITE.find_Pos_Y(this);

      var adbrite_inline_div = document.getElementById('adbrite_inline_div');
      adbrite_inline_div.style.display = 'none';
      var ab_pointer = document.getElementById('ab_pointer');

      // find the x value
      if ((div_left + ADBRITE.INLINE.ad_width) > page_width - 30) {
          adbrite_inline_div.style.left = (div_left - (div_left + ADBRITE.INLINE.ad_width - page_width) - 30) + 'px';
          if (page_width - div_left < (ADBRITE.INLINE.ad_width/2)) {
            ab_pointer.horizontal_position = 'right';
          } else {
            ab_pointer.horizontal_position = 'left';
          }
        } else {
          adbrite_inline_div.style.left = div_left + 'px';
          ab_pointer.horizontal_position = 'left';
        }
        // find the y value
        if ((div_top - ADBRITE.INLINE.ad_height) < 0) {
          adbrite_inline_div.style.top = (div_top + ab_pointer.height + 20) + 'px';
          ab_pointer.verticle_position = 'top';
        } else if ((div_top - ADBRITE.INLINE.ad_height) < scroll_y + 10) {
          adbrite_inline_div.style.top = (div_top + ab_pointer.height + 20) + 'px';
          ab_pointer.verticle_position = 'top';
        } else {
          adbrite_inline_div.style.top = (div_top - ADBRITE.INLINE.ad_height - ab_pointer.height + 5) + 'px';
          ab_pointer.verticle_position = 'bottom';
        }
        if (ab_pointer.verticle_position == 'top') {
          ab_pointer.style.top = (div_top + 22) + 'px';
          if (ab_pointer.horizontal_position == 'left') {
          ab_pointer.style.left = div_left + 20 + 'px';
          ab_pointer.style.backgroundImage = 'url(http://files.adbrite.com/mb/images/ab_inline_pointer_top_left.gif)';
        } else {
          ab_pointer.style.left = (div_left - 15) + 'px';
          ab_pointer.style.backgroundImage = 'url(http://files.adbrite.com/mb/images/ab_inline_pointer_top_right.gif)';
        }
      } else {
        ab_pointer.style.top = (div_top - 25 ) + 'px';
        if (ab_pointer.horizontal_position == 'left') {
          ab_pointer.style.left = div_left + 20 + 'px';
          ab_pointer.style.backgroundImage = 'url(http://files.adbrite.com/mb/images/ab_inline_pointer_bottom_left.gif)';
        } else {
          ab_pointer.style.left = (div_left - 15) + 'px';
          ab_pointer.style.backgroundImage = 'url(http://files.adbrite.com/mb/images/ab_inline_pointer_bottom_right.gif)';
        }
      }
      ab_pointer.style.display = 'none';
      ADBRITE.INLINE.display_timeout_handle = setTimeout('ADBRITE.INLINE.display_inline_ad()',400);
   } else
      ADBRITE.INLINE.reset_display_inline_ad();
}

ADBRITE.INLINE.display_inline_ad = function () {
   if (ADBRITE.INLINE.keyword != ADBRITE.INLINE.div_keyword) {
      ADBRITE.INLINE.div_keyword = ADBRITE.INLINE.keyword;
      var adbrite_inline_div = document.getElementById('adbrite_inline_div');
      var ab_pointer = document.getElementById('ab_pointer');
      // reset the div in between keywords
      ADBRITE.INLINE.load_inline_ad();
      adbrite_inline_div.style.display = 'block';
      ab_pointer.style.display = 'block';
      ADBRITE.INLINE.display_ad = true;
   }
}

ADBRITE.INLINE.load_inline_ad = function () {
   var query_string = 'sid=' + ADBRITE.INLINE.config.sid + '&keyword=' + ADBRITE.INLINE.keyword_to_id[ADBRITE.INLINE.keyword] + '&height=' + ADBRITE.INLINE.iframe_height + '&width=' + ADBRITE.INLINE.iframe_width + '&br=1';
   var url = ADBRITE.INLINE.ad_server_url_prefix + 'inline_ad?' + query_string + '&rnd=' + Math.round(Math.random()*99999) + '&keyword_str=' + ADBRITE.INLINE.keyword;
   var adbrite_inline_div = document.getElementById('adbrite_inline_div');
   var adbrite_inline_iframe = document.getElementById('adbrite_inline_iframe');
   if (adbrite_inline_iframe) {
	   adbrite_inline_div.removeChild(adbrite_inline_iframe); 
   }
   adbrite_inline_iframe = document.createElement('IFRAME');
   adbrite_inline_iframe.setAttribute('height',ADBRITE.INLINE.iframe_height);
   adbrite_inline_iframe.scrolling = 'no';
   adbrite_inline_iframe.style.borderStyle = 'solid';
   adbrite_inline_iframe.style.position = 'absolute';
   adbrite_inline_iframe.style.bottom = '4px';
   adbrite_inline_iframe.style.left = '4px';
   adbrite_inline_iframe.style.borderWidth = '1px';
   adbrite_inline_iframe.style.borderColor = '#ccc';
   adbrite_inline_iframe.setAttribute('width',ADBRITE.INLINE.iframe_width);
   adbrite_inline_iframe.setAttribute('src',url);
   adbrite_inline_iframe.setAttribute('id','adbrite_inline_iframe');
   adbrite_inline_div.appendChild(adbrite_inline_iframe);
}

ADBRITE.INLINE.populate_and_display_inline_div = function (ad_headline, ad_text, ad_url, display_url) {
   var keyword_span_id = 'AdBriteInlineAd_' + ADBRITE.INLINE.keyword;
   ADBRITE.INLINE.ad_url = ad_url;
   document.getElementById(keyword_span_id).href = ad_url;
}

ADBRITE.INLINE.populate_inline_div = function (ad_headline, ad_text, ad_url, display_url) {
   var a = document.getElementById('adbrite-inline-target-url');
   a.href = ad_url;
   a.target = (ADBRITE.INLINE.config.open_in_new_window) ? '_blank' : '_top';
   var head = document.getElementById('adbrite-inline-headline');
   head.innerHTML = unescape(decodeURIComponent(ad_headline));
   var text = document.getElementById('adbrite-inline-adtext');
   text.innerHTML = unescape(decodeURIComponent(ad_text));
   var url = document.getElementById('adbrite-inline-display-url');
   if (display_url && display_url != '') {
      url.innerHTML = unescape(decodeURIComponent(display_url));
      url.href = ad_url;
      url.target = (ADBRITE.INLINE.config.open_in_new_window) ? '_blank' : '_top';
   } else {
      url.innerHTML = '';
      url.href = '';
      url.target = '';
   }
}

ADBRITE.INLINE.hide_inline_ad_timer = function () {
	if (ADBRITE.INLINE.display_ad == false) {
		clearTimeout(ADBRITE.INLINE.display_timeout_handle);
	} else {
		ADBRITE.INLINE.display_ad = false;
		ADBRITE.INLINE.inline_ad_timeout_handle = window.setTimeout(ADBRITE.INLINE.hide_inline_ad, 1000);
	}
}

ADBRITE.INLINE.close_inline_ad = function () {
   ADBRITE.INLINE.display_ad = false;
   ADBRITE.INLINE.inline_ad_timeout_handle = window.setTimeout(ADBRITE.INLINE.hide_inline_ad, 0);
}

ADBRITE.INLINE.hide_inline_ad = function () {
   if ( ADBRITE.INLINE.display_ad == false) {
      var keyword_span_id = 'AdBriteInlineAd_' + ADBRITE.INLINE.keyword;
      document.getElementById(keyword_span_id).onclick = '';
      ADBRITE.INLINE.div_keyword = null;
      var adbrite_inline_div = document.getElementById('adbrite_inline_div');
	  var adbrite_inline_iframe = document.getElementById('adbrite_inline_iframe');
	  var ab_pointer = document.getElementById('ab_pointer');
	  ab_pointer.style.display = 'none';
	  adbrite_inline_div.style.display = 'none';
      if (adbrite_inline_iframe) {
	      adbrite_inline_div.removeChild(adbrite_inline_iframe); 
      }
   }
}



ADBRITE.INLINE.reset_display_inline_ad = function () {
   ADBRITE.INLINE.display_ad = true;
   window.clearTimeout(ADBRITE.INLINE.inline_ad_timeout_handle);
}

ADBRITE.INLINE.reset_text_nodes = function () {
   ADBRITE.INLINE.text_nodes = "";
   ADBRITE.INLINE.text_nodes = [];
}

ADBRITE.INLINE.populate_text_nodes = function () {
   if ( ADBRITE.INLINE.text_nodes.length == 0 ) {
      ADBRITE.INLINE.scan_nodes( document.getElementsByTagName('body')[0], true );
      if ( ADBRITE.INLINE.adbriteinline_tags.length > 0) {
			ADBRITE.INLINE.reset_text_nodes();
         var length = ADBRITE.INLINE.adbriteinline_tags.length;
         for ( var i=0; i < length; i++ ) {
            ADBRITE.INLINE.scan_nodes( ADBRITE.INLINE.adbriteinline_tags[i], false );
			   }
      }
   }
}





	 


ADBRITE.INLINE.scan_nodes = function (node, log_classname) {
   // log the adbriteinline classes

   if ( log_classname == true && ADBRITE.INLINE.tags_to_ignore[node.nodeName.toUpperCase()] != 1 ) {
      if ( node.className && node.className.toLowerCase() == 'adbriteinline' ) {
         ADBRITE.INLINE.adbriteinline_tags.push(node);
      }
   }
   // && node.parentNode.tagName.toUpperCase() == "P"
   if ( node.nodeType == 3    ) {
      // remove all empty text nodes
	  //  
	  if ( node.data.replace(/\s+/g, '') && ADBRITE.INLINE.scan_nodes.word_count(node.parentNode) > ADBRITE.INLINE.min_word_count) {
         ADBRITE.INLINE.text_nodes.push(node);
         rdink = ADBRITE.INLINE.scan_nodes.word_count(node.parentNode);
	  }
   } else {
      for ( var next_node = node.firstChild; next_node != null; next_node = next_node.nextSibling ) {
         var scan_node = true;
         if ( ADBRITE.INLINE.tags_to_ignore[next_node.nodeName.toUpperCase()] == 1  ) scan_node = false;
         if ( next_node.className && (next_node.className.toLowerCase()).indexOf('noadbriteinline') != -1 ) scan_node = false;
         if ( scan_node ) ADBRITE.INLINE.scan_nodes(next_node, log_classname);
      }
   }
}

String.prototype.AB_trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}


ADBRITE.INLINE.scan_nodes.word_count = function(node){
   var count = 0;
	var length = node.childNodes.length;
    for(var i = 0; i < length; i++) {
        var child = node.childNodes[i];
        if(child.nodeType == 3) {
		   var trimmed_data = child.data.AB_trim();
           count += trimmed_data.split(/\s+/).length;
        }
    }
    return count;

}

ADBRITE.INLINE.find_keyword = function ( keyword ) {
   var keyword_regex = new RegExp("\\b" + keyword + "\\b", 'i');
   for ( var i = 0; i < ADBRITE.INLINE.text_nodes.length; i++ ) {
      if ( ADBRITE.INLINE.text_nodes[i].data.search( keyword_regex ) > -1 ) {
        ADBRITE.INLINE.inline_keyword( keyword, keyword_regex, i );
        break;
      }
   } 
}

ADBRITE.INLINE.get_next_keyword = function () {
   var keyword = "";
   // remove any empty keyword sets until a non-empty set is found, or the array is empty
   while ( ADBRITE.INLINE.keywords_to_inline.length > 0 && ADBRITE.INLINE.keywords_to_inline[0].length == 0 )
      ADBRITE.INLINE.keywords_to_inline.shift();

   if ( ADBRITE.INLINE.keywords_to_inline.length > 0 )
      keyword = ADBRITE.INLINE.keywords_to_inline[0][0];

   // remove keyword from keyword set
   ADBRITE.INLINE.remove_keyword_from_list();
   return keyword;
}

ADBRITE.INLINE.remove_keyword_from_list = function () {
   // keyword was found, remove the keyword set
   if ( ADBRITE.INLINE.keyword_set_inlined == true ) {
      ADBRITE.INLINE.keyword_set_inlined = false;
      ADBRITE.INLINE.keywords_to_inline.shift();
   } else {
      // keyword was not found, remove keyword from list
      // if keyword is only keyword is set, remove set
      if ( ADBRITE.INLINE.keywords_to_inline[0].length == 1 ) {
         ADBRITE.INLINE.keywords_to_inline.shift();
      } else {
         ADBRITE.INLINE.keywords_to_inline[0].shift();
      }
   }
}

ADBRITE.INLINE.find_and_inline_keywords = function () {
   while ( ADBRITE.INLINE.keywords_to_inline.length > 0 && ADBRITE.INLINE.keywords_already_inlined.length < ADBRITE.INLINE.config.max_words_to_inline ) {
      var keyword_to_find = ADBRITE.INLINE.get_next_keyword();
      if ( keyword_to_find ) {
         ADBRITE.INLINE.find_keyword ( keyword_to_find );
      }
   }
}

ADBRITE.INLINE.check_scanning_status = function () {
   var continue_scan = true;
   if ( ADBRITE.INLINE.keywords_already_inlined.length >= ADBRITE.INLINE.config.max_words_to_inline ) {
       continue_scan = false;
   }
   // already inlined enough words
   if ( ADBRITE.INLINE.text_nodes.length < 1 ) {
       continue_scan = false; 	// no nodes to scan/inline
   }
   if ( ADBRITE.INLINE.text_nodes.length == ADBRITE.INLINE.current_textnode ) {
       continue_scan = false;   // reached the last node already
   }
   if ( ADBRITE.INLINE.unfiltered_keywords.length > 0 && ADBRITE.INLINE.filtered_keywords.ab_length != 0) {
       continue_scan = false; // filtered_keyword_array is full
   }
   return continue_scan;
}

ADBRITE.INLINE.build_unfiltered_keyword_array = function () {
   if ( ADBRITE.INLINE.unfiltered_keywords.length == 0 ) {
      var unfiltered_keyword_str = ADBRITE.INLINE.text_nodes[ADBRITE.INLINE.current_textnode].data;
      if ( unfiltered_keyword_str > ADBRITE.INLINE.max_char_for_textnodes )
         unfiltered_keyword_str = unfiltered_keyword_str.slice( 0, ADBRITE.INLINE.max_char_for_textnodes );
      unfiltered_keyword_str = unfiltered_keyword_str.replace(/\s+/g, ' ');
      ADBRITE.INLINE.unfiltered_keywords = unfiltered_keyword_str.split(' ');      
   }
}

ADBRITE.INLINE.keyword_in_stopword_list = function ( keyword ) {
   keyword = keyword.toLowerCase();
   return ( ADBRITE.stopword_list[keyword] ) ? true : false;
}


ADBRITE.INLINE.build_filtered_keyword_array = function () {
   while ( ADBRITE.INLINE.unfiltered_keywords.length > 0 ) {
      if ( ADBRITE.INLINE.filtered_keywords.ab_length + ADBRITE.INLINE.unfiltered_keywords[0].length > ADBRITE.INLINE.config.max_char_for_keywords ) break;

      var keep_keyword = true;
      var keyword = ADBRITE.INLINE.unfiltered_keywords.shift();
	  
      if ( keyword.length < ADBRITE.INLINE.config.min_char_per_keyword ) keep_keyword = false;
      else if ( keyword.match(/\W/) ) keep_keyword = false;
      else if ( ADBRITE.element_in_array( keyword, ADBRITE.INLINE.keywords_already_inlined ) ) keep_keyword = false;
      else if ( ADBRITE.INLINE.keyword_in_stopword_list(keyword) ) keep_keyword = false;
      
      if (keep_keyword == true) {
         if ( !ADBRITE.INLINE.filtered_keywords[keyword] ) {
            ADBRITE.INLINE.filtered_keywords.ab_length = ADBRITE.INLINE.filtered_keywords.ab_length + keyword.length;
            ADBRITE.INLINE.filtered_keywords[keyword] = 1;
         }
      }
   }
}

ADBRITE.INLINE.update_current_textnode = function () {
   if ( ADBRITE.INLINE.unfiltered_keywords.length == 0 ) ADBRITE.INLINE.current_textnode = ADBRITE.INLINE.current_textnode + 1;
}

ADBRITE.INLINE.scan = function () {
   var continue_scanning = ADBRITE.INLINE.check_scanning_status();

   while ( continue_scanning == true ) {
      ADBRITE.INLINE.build_unfiltered_keyword_array();
      ADBRITE.INLINE.build_filtered_keyword_array();
      ADBRITE.INLINE.update_current_textnode();
      continue_scanning = ADBRITE.INLINE.check_scanning_status();
   }
}

ADBRITE.INLINE.converg_filtered_keywords_toString = function () {
   var str = "";
   for ( keyword in ADBRITE.INLINE.filtered_keywords ) {
      if ( keyword == 'ab_length' ) continue;
      if ( str ) str += ",";
      str += keyword;
   }
   return str;
}

ADBRITE.INLINE.send_keyword = function() {
   if ( ADBRITE.INLINE.filtered_keywords.ab_length > 0 && ADBRITE.INLINE.config.max_adserver_calls > 0) {
      ADBRITE.INLINE.config.max_adserver_calls = ADBRITE.INLINE.config.max_adserver_calls - 1;
      var appended_keyword_str = ADBRITE.INLINE.converg_filtered_keywords_toString(); 
      ADBRITE.INLINE.filtered_keywords = {};
      ADBRITE.INLINE.filtered_keywords.ab_length = 0;
      var url = ADBRITE.INLINE.ad_server_url_prefix + 
		  'select_keywords?sid=' + ADBRITE.INLINE.config.sid +
		  '&ik=' + escape(ADBRITE.INLINE.keywords_ids_already_inlined_str) + 
		  '&ck=' + escape(appended_keyword_str);
      ADBRITE.append_script(url, ADBRITE.INLINE.span_id);
   }
}

ADBRITE.INLINE.inline = function () {
   ADBRITE.INLINE.create_inline_div();
   ADBRITE.INLINE.populate_text_nodes();
   ADBRITE.INLINE.find_and_inline_keywords();
   ADBRITE.INLINE.scan();
   ADBRITE.INLINE.send_keyword();
}

if ( ab_isMinKHTML5 || ab_isMinMoz1_5 || ab_isMinIE6 ) {
   if ( !ADBRITE.INLINE.is_inlined ) {
      ADBRITE.INLINE.is_inlined = true;
      // force all images into the browser cache
      ADBRITE.force_browser_cache_of_image(ADBRITE.INLINE.ad_background);   
      ADBRITE.append_onload(ADBRITE.INLINE.inline);
   }
}

