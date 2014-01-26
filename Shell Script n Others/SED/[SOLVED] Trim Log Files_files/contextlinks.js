function setFrameSize(){
		var frameHeight = document.location.hash.replace('#','');
		
		if(frameHeight){
			document.getElementById("netseer_landingpage_frame").height = frameHeight;
		}
}
	
(function () {
	function createCookie(name, value, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(nameEQ) == 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}
		return null;
	}
	function eraseCookie(name) {
		createCookie(name, "", -1);
	}
	
	function getQuerystring(key, url, default_,seperator) {
		if (default_ == null) {
			default_ = "";
		}
		
		if (default_ == null) {
			seperator = "&";
		}
		
		key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?"+seperator+"]" + key + "=([^"+seperator+"#]*)");
		var qs = regex.exec(url);
		if (qs == null) {
			return default_;
		} else {
			return qs[1];
		}
	}
	
	function getLocationForYahoo(url) {
		var vars = url.href.split("$,");
		return vars[vars.length - 1];
	}
	function RemoveHTML(strText) {
		var regEx = /<[^>]*>/g;
		return strText.replace(regEx, "");
	}
	function check(b) {
		return b != null ? "\"" + b + "\"" : "\"\"";
	}
	function encodeUrl(b) {
		if (typeof encodeURIComponent == "function") {
			return encodeURIComponent(b);
		} else {
			return escape(b);
		}
	}
	function decodeUrl(b) {
		if (typeof decodeURIComponent == "function") {
			return decodeURIComponent(b);
		} else {
			return unescape(b);
		}
	}
	function addToUrl(b, a) {
		if (a) {
			window.netseer_ad_url += "&" + b + "=" + a;
		}
	}
	
	function addParam(b, a) {
		if (a) {
			window.netseer_page_params += "&" + b + "=" + a;
		}
	}
	
	function addToUrlNoKey(a) {
		if (a) {
			window.netseer_ad_url += "&" + a;
		}
	}
	
	function addEncodedUrl(b, a) {
		if (a) {
			addToUrl(b, encodeUrl(a));
		}
	}
	function setColor(b, a, d) {
		if (a && typeof a == "object") {
			a = a[d % a.length];
		}
		addToUrl("color_" + b, a);
	}
	function checkClient(b) {
		b = b.toLowerCase();
		if (b.substring(0, 3) != "ca-") {
			b = "ca-" + b;
		}
		return b;
	}
	
	function decode64(input){
		
		var keyStr = "ABCDEFGHIJKLMNOP" +
        "QRSTUVWXYZabcdef" +
        "ghijklmnopqrstuv" +
        "wxyz0123456789+/" +
        "=";
		 var output = "";
	      var chr1, chr2, chr3 = "";
	      var enc1, enc2, enc3, enc4 = "";
	      var i = 0;

	      // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
	      var base64test = /[^A-Za-z0-9\+\/\=]/g;
	      if (base64test.exec(input)) {
		        return "invalid base64 url";
		  }
	      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	      do {
	         enc1 = keyStr.indexOf(input.charAt(i++));
	         enc2 = keyStr.indexOf(input.charAt(i++));
	         enc3 = keyStr.indexOf(input.charAt(i++));
	         enc4 = keyStr.indexOf(input.charAt(i++));

	         chr1 = (enc1 << 2) | (enc2 >> 4);
	         chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	         chr3 = ((enc3 & 3) << 6) | enc4;

	         output = output + String.fromCharCode(chr1);

	         if (enc3 != 64) {
	            output = output + String.fromCharCode(chr2);
	         }
	         if (enc4 != 64) {
	            output = output + String.fromCharCode(chr3);
	         }

	         chr1 = chr2 = chr3 = "";
	         enc1 = enc2 = enc3 = enc4 = "";

	      } while (i < input.length);

	      return output;
	}

	function makeOutput(b, a, d) {
		d = d.substring(0, 2083);
		d = d.replace(/%\w?$/, "");
		
		if(b.netseer_ad_format=='landing_page'){
			if(b.netseer_landing_page_type=='js'){
				a.write("<script type='text/javascript' src=" + check(d) + "></sc"+"ript>");
			} else {
				a.write("<iframe onLoad=\"setFrameSize();\" id=\"netseer_landingpage_frame\"  name=\"netseer_landingpage_frame\" width=" + check(b.netseer_ad_width) + " height=" + check(b.netseer_ad_height) + " src=" + check(d) + " frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" vspace=\"0\" hspace=\"0\" allowtransparency=\"true\" scrolling=\"no\">");
				a.write("</iframe>");
			}
		} else {
		
		if(b.netseer_iframe_buster){
		var destUrl = b.netseer_iframe_buster + "?forward_url="+encodeUrl(d)+"&height="+b.netseer_ad_height+"&width="+b.netseer_ad_width;
		a.write("<iframe name=\"netseer_ads_frame\" width=" + check(b.netseer_ad_width) + " height=" + check(b.netseer_ad_height)  + " src=" + check(destUrl) + " frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" vspace=\"0\" hspace=\"0\" allowtransparency=\"true\" scrolling=\"no\">");
		a.write("</iframe>");
		} else {
		a.write("<iframe name=\"netseer_ads_frame\" width=" + check(b.netseer_ad_width) + " height=" + check(b.netseer_ad_height)  + " src=" + check(d) + " frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" vspace=\"0\" hspace=\"0\" allowtransparency=\"true\" scrolling=\"no\">");
		a.write("</iframe>");
		}
		}
	}
	function setToNull(b) {
		var a = null;
		b.netseer_query = a;
		b.netseer_ad_frameborder = a;
		b.netseer_ad_format = a;
		b.netseer_page_url = a;
		b.netseer_output_format = a;
		b.netseer_language = a;
		b.netseer_gl = a;
		b.netseer_country = a;
		b.netseer_region = a;
		b.netseer_city = a;
		b.netseer_hints = a;
		b.netseer_safe = a;
		b.netseer_encoding = a;
		b.netseer_ad_output = a;
		b.netseer_max_num_ads = a;
		b.netseer_ad_channel = a;
		b.netseer_contents = a;
		b.netseer_alternate_ad_url = a;
		b.netseer_alternate_color = a;
		b.netseer_color_bg = a;
		b.netseer_color_text = a;
		b.netseer_color_link = a;
		b.netseer_color_url = a;
		b.netseer_color_border = a;
		b.netseer_color_line = a;
		b.netseer_adtest = a;
		b.netseer_kw_type = a;
		b.netseer_kw = a;
		b.netseer_num_radlinks = a;
		b.netseer_max_radlink_len = a;
		b.netseer_rl_filtering = a;
		b.netseer_rl_mode = a;
		b.netseer_rt = a;
		b.netseer_ad_type = a;
		b.netseer_image_size = a;
		b.netseer_feedback = a;
		b.netseer_skip = a;
		b.netseer_page_location = a;
		b.netseer_referrer_url = a;
		b.netseer_ad_region = a;
		b.netseer_ad_section = a;
		b.netseer_bid = a;
		b.netseer_cpa_choice = a;
		b.netseer_cust_age = a;
		b.netseer_cust_gender = a;
		b.netseer_cust_interests = a;
		b.netseer_cust_id = a;
		b.netseer_cust_job = a;
		b.netseer_cust_u_url = a;
		b.netseer_sim = a;
		b.netseer_color_bilboard = a;
		b.netseer_banner_id = a;
		b.netseer_network_id = a;
		b.netseer_tracking_url = a;
		b.netseer_tracking_url_encoded = a;
		b.netseer_page_url_key = a;
		b.netseer_search_current_url = a;
		b.netseer_page_params = a;
		b.netseer_page_url_base64 = a;
		b.netseer_landing_page_type = a;
		b.netseer_background_color = a;
		b.netseer_click_target = a;
		b.netseer_recirculation_sites = a;
		b.netseer_partner_search_url = a;
		b.netseer_landing_page_logo = a;
		b.netseer_iframe_buster = a;
	}
	
	function getLandingPageUrl(landingPageId){
		if(landingPageId==3){
		 	return "http://search.netseer.com/contextlinks/ysearch.jsp?";
		}
		
		if(landingPageId==4){
		 	return "http://search.netseer.com/contextlinks/dsearch.jsp?";
		}
		
		if(landingPageId==10){
		 	return "http://search.netseer.com/contextlinks/emsearch.jsp?";
		}

		if(landingPageId==11){
		 	return "http://search.netseer.com/contextlinks/yesearch.jsp?";
		}
		
		if(landingPageId==15){
		 	return "http://search.netseer.com/contextlinks/y2csearch.jsp?";
		}
		
		if(landingPageId==16){
		 	return "http://search.netseer.com/contextlinks/y2csearch.jsp?f=ys";
		}
		
		if(landingPageId==17){
		 	return "http://search.netseer.com/contextlinks/y2csearch.jsp?f=mi";
		}
		
		if(landingPageId==18){
		 	return "http://search.netseer.com/contextlinks/y2csearch.jsp?f=ma";
		}
		
		if(landingPageId==19){
		 	return "http://search.netseer.com/contextlinks/y2csearch.jsp?f=yami";
		}
		
		if(landingPageId==20){
		 	return "http://search.netseer.com/contextlinks/y2csearch.jsp?f=yama";
		}
		
		if(landingPageId==21){
		 	return "http://search.netseer.com/contextlinks/y2csearch.jsp?f=mami";
		}
		
		if(landingPageId==23){
		 	return "http://search.netseer.com/contextlinks/yesearch1.jsp?";
		}
		
		if(landingPageId==25){
		 	return "http://search.netseer.com/contextlinks/ybsearch.jsp?";
		}
		
		if(landingPageId==29){
		 	return "http://search.netseer.com/contextlinks/allrecipes.jsp?";
		}
		
		
			
		
		
		
	}
	function Main() {
		var b = null, a = window, d = document, g = new Date, e = g.getTime(), j = a.netseer_ad_format, src = d.location;		
		a.netseer_page_params = "";
		
		if(a.netseer_partner_search_url && a.netseer_partner_search_url.indexOf("?")<0) {
				a.netseer_partner_search_url = a.netseer_partner_search_url + "?";
		}
		
		if(a.netseer_partner_search_url) {
			a.netseer_partner_search_url = decodeUrl(a.netseer_partner_search_url);
		}
		
		
		// HACK START
		//if(a.netseer_network_id==1006){
			// a.netseer_landing_page_id = 23;
		// }
		
		if(a.netseer_landing_page_id==10){
			a.netseer_landing_page_type = "js";
		}
		
		if(a.netseer_network_id==1009){
			a.netseer_landing_page_id = 19;
		}

		if(a.netseer_network_id==1014){
			a.netseer_partner_search_url = "http%3A%2F%2Fwww.huffingtonpost.com%2Fsearch%2Fns%2F%3F";
		}
		
		
		
		// HACK END

		if (a.netseer_ad_format == "landing_page") {		
			
			a.netseer_ad_url = getLandingPageUrl(a.netseer_landing_page_id);
			
			if(getQuerystring("nid", a.netseer_page_url,"") == ""){
				addToUrl("nid", a.netseer_network_id);
			}
			
			if(getQuerystring("lpid", a.netseer_page_url,"") == ""){
				addToUrl("lpid", a.netseer_landing_page_id);
			}
			addToUrl("et", a.netseer_landing_page_type);
			addEncodedUrl("surl", a.netseer_search_current_url);
			addEncodedUrl("psurl", a.netseer_partner_search_url);
			addToUrl("trurl", a.netseer_tracking_url);
			addToUrl("adtrurl", a.netseer_adclick_tracking_url);
			addToUrl("cookie", a.netseer_user_id);
			addToUrl("q", a.netseer_query);
			
			addToUrlNoKey(a.location.search.substring(1));
						
		} else {
// these parameters are used for ads
			a.netseer_ad_url = "http://search.netseer.com/dsatserving/servlet/BannerServer?";
			if(a.netseer_iframe_buster == null || a.netseer_iframe_buster == ""){
				addEncodedUrl("url", a.netseer_page_url);
			}
			addToUrl("ad_type", a.netseer_ad_type);			
			addToUrl("q", a.netseer_query);
			addToUrl("cookie", a.netseer_user_id);
			addToUrl("lpid", a.netseer_landing_page_id);

// NetSeer Properties
			addToUrl("banner_id", a.netseer_banner_id);
			addToUrl("network_id", a.netseer_network_id);
			addToUrl("output", a.netseer_ad_output);
			addToUrl("tracking_url", a.netseer_tracking_url);
			addEncodedUrl("psurl", a.netseer_partner_search_url);
			
			addToUrl("pp", a.netseer_pcpm);
			addToUrl("bp", a.netseer_bcpm);
			
			
			if(!a.netseer_partner_search_url){
				addEncodedUrl("ref", a.netseer_referrer_url);	
			}
			
		}
		
		if(a.netseer_ad_width!="100%"){
			addParam("cw",a.netseer_ad_width);
		}
		
		if(a.netseer_ad_height!="100%"){
			addParam("ch",a.netseer_ad_height);
		}
		
		if(a.netseer_background_color){
			addParam("bgc",a.netseer_background_color);
		}
		
		if(a.netseer_click_target){
			addParam("ct",a.netseer_click_target);
		}
		
		if(a.netseer_search_box){
			addParam("sb",a.netseer_search_box);
		}
		
		if(a.netseer_rtb_zone_num){
			addParam("rtbzn",a.netseer_rtb_zone_num);
		}
		
		if(a.netseer_rtb_zone_id){
			addParam("rtbzi",a.netseer_rtb_zone_id);
		}
		
		if(a.netseer_rtb){
			addParam("rtb",a.netseer_rtb);
		}

		if(a.netseer_banner_header){
			addParam("blh",a.netseer_banner_header);
		}
		
		if(a.netseer_banner_footer){
			addParam("blf",a.netseer_banner_footer);
		}
		
		if(a.netseer_banner_text_color){
			addParam("btc",a.netseer_banner_text_color);
		}
		
		if(a.netseer_banner_border_width){
			addParam("bbw",a.netseer_banner_border_width);
		}
		
		if(a.netseer_banner_header_background_color){
			addParam("bhbc",a.netseer_banner_header_background_color);
		}
		
		if(a.netseer_banner_header_text_color){
			addParam("bhtc",a.netseer_banner_header_text_color);
		}

		if(a.netseer_recirculation_sites){
			addParam("sites",a.netseer_recirculation_sites);
		}
		
		if(a.netseer_landing_page_logo){
			addParam("logo",a.netseer_landing_page_logo);
		}
		
		
		addEncodedUrl("params", a.netseer_page_params);
		
		
		makeOutput(a, d, a.netseer_ad_url);
		setToNull(a);
	}

	function getLocation(a, b) {
		var url_key = b.netseer_page_url_key;
		
		if(b.netseer_network_id==400){
			var url = getQuerystring("referrer", b.location,"");
			if (url != "") {
				return decodeUrl(url);
			}
			
		}

				
		
		if(b.netseer_network_id==5900 || b.netseer_network_id==5901){
			var url = getQuerystring("path", b.location,"",";");
			if (url != "") {
				if( url == "/sitecore/content/home") {
					return "http://www.lifescript.com/";
				} else {
				url = "http://www.lifescript.com/"+url+".aspx";
				return url;
				}
			}
			
		}
		
		 
		 if(b.location.href.indexOf("tag.admeld.com") >= 0){ 
			 var url = getQuerystring("url", b.location,"");
			 if (url != "") {
				return decodeUrl(url);
			 }
		 }
		 
		 
		 if(b.location.href.indexOf("qualityhealth.com") >= 0 
				 || b.netseer_network_id == 1097
				 || b.netseer_network_id == 4901 
				 || b.netseer_network_id == 4900 
				 || b.netseer_network_id == 1025
				 || b.netseer_network_id == 6400
				 || b.netseer_network_id == 207
				 || (b.netseer_network_id == 904 && (b.location.href.indexOf("ads") >= 0 || b.location.href.indexOf("emediate") >= 0))
		 		){ 
			 var url = a.referrer;
			 if (url) {
				return url;
			 }
		 }
		 
		 if(b.netseer_network_id==1004){
			 var search_bar = a.getElementById("search_bar");
			 if(search_bar){
			 if(search_bar.value && search_bar.value != ""){
				 b.netseer_query = search_bar.value;
			 }
			 }
		 }
		 
		
		if (url_key == null) {
			return b.location;
		} else {
			if (url_key == "%%YAHOO%%") {
				var url = getLocationForYahoo(b.location);
    	// HACK: check if the url is right or not
				var pos = url.indexOf("ad.yieldmanager.com");
				if (pos >= 0) {
					url = a.referrer;
				}
				return decodeUrl(url);
			} else {
				var url = getQuerystring(url_key, b.location);
				return decodeUrl(url);
			}
		}
	}
	function Init() {
		var b = window, a = document, d = a.location, g = a.referrer, e = null;
		// b.netseer_org_error_handler = b.onerror;
		// b.onerror = callMain;
		b.netseer_search_current_url = d;
		
		if (b.netseer_user_id == e || b.netseer_user_id == undefined || b.netseer_user_id == "undefined"){
			var optout = readCookie("netseer_optout");
			if(optout) {
				b.netseer_user_id = '0';
			} else {
				b.netseer_user_id = readCookie("netseer_contextlinks");
			}
			if (b.netseer_user_id == null || b.netseer_user_id === undefined || b.netseer_user_id == "undefined") {
				b.netseer_user_id = Math.floor(Math.random() * 1000000000);
				createCookie("netseer_contextlinks", b.netseer_user_id, 1000);
			}
		}
		
		if (b.netseer_ad_width == e || b.netseer_ad_width == undefined || b.netseer_ad_width == "undefined"){
			b.netseer_ad_width = "100%";
		}
		
		if(b.netseer_page_url_base64 == e) {
		
		
		if (b.netseer_page_url_openx && b.netseer_page_url_openx != "{pageurl}") {
			b.netseer_page_url = b.netseer_page_url_openx; 
		} else if(b.netseer_page_url_rmx && b.netseer_page_url_rmx != "${SOURCEURLENC}"){		
				b.netseer_page_url = b.netseer_page_url_rmx;
		}
			
		if (b.netseer_page_url == e) {
			b.netseer_page_url = getLocation(a, b);
			b.netseer_last_modified_time = Date.parse(a.lastModified) / 1000;
			b.netseer_referrer_url = g;
		} else {
			b.netseer_page_location = d;
			b.netseer_page_url = decodeUrl(b.netseer_page_url);
		}
		} else {
			b.netseer_page_url_base64 = b.netseer_page_url_base64.replace("-","+");
			b.netseer_page_url_base64 = b.netseer_page_url_base64.replace("_","/");
			b.netseer_page_url = decode64(b.netseer_page_url_base64).replace(/\0/g, "");
		}
	}
	Init();
	Main();
})();

