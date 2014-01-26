var m3_up=location.protocol=='https:'?'https://':'http://';
var m3_url=m3_up=='https:'?az_us:az_u;
var m3_u=m3_up + m3_url + az_js;
var m3_r=Math.floor(Math.random()*99999999999);
if (!document.MAX_used) document.MAX_used = ',';

function az_adjs(z, n) {
  var az="<scr"+"ipt type='text/javascript' ";
  az+="src='"+m3_u+"?zoneid="+z+"&amp;withtext="+az_wt+"&amp;cb="+m3_r;
  if (!document.MAX_used != ',') az+="&amp;exclude="+document.MAX_used;
  if (document.referrer) az+="&amp;referer="+escape(document.referer);
  if (document.content) az+="&context="+escape(document.context);
  if (document.mmm_fo) az+="&amp;mmm_fo=1";
  az+="'></scr"+"ipt>";
  document.write(az);
}
