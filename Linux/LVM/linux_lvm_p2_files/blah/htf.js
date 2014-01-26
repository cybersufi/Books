function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function silentErrorHandler() {return true;}
window.onerror=silentErrorHandler;

addthis_pub  = 'howtoforge';
addthis_logo = 'http://fb.howtoforge.com/fb/htf_feed_reader/htf_fb_app_logo_126x75.gif';
addthis_brand = 'HowtoForge';
addthis_options = 'favorites, email, delicious, digg, facebook, google, live, myweb, myspace, reddit, stumbleupon, technorati, twitter, more';
addthis_offset_left = 100;

