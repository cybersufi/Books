
// StartRemote: Open a new window enough for a 640x480 picture and load
// the specified URL into it.
var remoteWin = null;
function StartRemote(url,orientation) {

	var undefined;
	height = new Number;
	width = new Number;

	// Determine chosen orientation, can be either landscape or portrait
	if (orientation == null || orientation == undefined)
		orientation = 'landscape';
	if (orientation == 'landscape') {
		height = 500;
		width = 660;
	} else if (orientation == 'portrait') {
		width = 520;
		height = 670;
	} else if (orientation.match('.*x.*')) {
		words = orientation.split('x');
		width= 20 + parseInt(words[0]);
		height= 40 + parseInt(words[1]);
		// alert ('Orientation: ' + orientation + ' : ' + width + 'x' + height);
	} else {
		// Display error and default to landscape
		alert ("Invalid orientation: " + orientation);
		height = 500;
		width = 660;
	}

	// remoteWin = window.open(url,"GAGMEREMOTE",'width=670,height=520,resizable=yes,scrollbars=yes');
	remoteWin = window.open(url,'GAGMEREMOTE','width='+width+',height='+height+',resizable=yes,scrollbars=no');
	remoteWin.focus();
	// Make sure it's the proper size...
	remoteWin.resizeTo(width,height);
}

// StartRemoteMov: Open a new window where the contents is a Quicktime (or
// other) movie.  Here we want a status bar so the person viewing can see
// how long it will take.
function StartRemoteMov(url) {
	remoteWin = window.open('',"GAGMEREMOTE2",'width=670,height=520,resizable=yes,scrollbars=yes,statusbar=yes');
	remoteWin.statusbar.visibe = true;
	remoteWin.location = url;
	remoteWin.focus();
}

// This is kind of like the old version except you can put in
// more info.  This one will create a window then write HTML
// into it.
function StartRemoteFull(url,bgcolor,text,orientation) {

	var undefined;
	height = new Number;
	width = new Number;

	// What browser are we running?
	var exploder = navigator.appName.indexOf("Microsoft") != -1;

	// Allow the text field to be left blank, default to empty string.
	if (text == null || text == undefined)
		text = '';

	// Allow the bgcolor field to be left blank, default to white.
	if (bgcolor == null || bgcolor == undefined)
		bgcolor = 'white';

	// Determine chosen orientation, can be either landscape or portrait
	if (orientation == null || orientation == undefined)
		orientation = 'landscape';
	if (orientation == 'landscape') {
		height = 500;
		width = 660;
		oheight = 480;
		owidth = 640;
	} else if (orientation == 'portrait') {
		width = 520;
		height = 670;
		oheight = 640;
		owidth = 480;
	} else if (orientation.match('.*x.*')) {
		words = orientation.split('x');
		width= 20 + parseInt(words[0]);
		height= 40 + parseInt(words[1]);
		owidth = parseInt(words[0]);
		oheight = parseInt(words[1]);
		// alert ('Orientation: ' + orientation + ' : ' + width + 'x' + height);
	} else {
		// Display error and default to landscape
		alert ("Invalid orientation: " + orientation);
		height = 500;
		width = 660;
	}

	// We need to add to the height of the screen to compensate for
	// a really long description string.  We're allocating roughly
	// 90 characters per line, and about 20 extra pixels per extra
	// line of text.  There will always be an extra space just in
	// case someone uses a big ugly font.
	height = height + (22 * Math.ceil(text.length / 90));

	// Add 20 pixels for close window gif at bottom.
	height += 20;

	// Microsoft Exploder doesn't make the screen the size we ask
	// for so we have to fudge it ask for something bigger..
	if (exploder) {
		height += 20;
		width += 20;
	}

	remoteWin = window.open('','GAGMEREMOTE','width='+width+',height='+height+',resizable=yes,scrollbars=no');
	// If we're running JavaScriptVersion >= 1.2, then we need to do
	// and explicit resize.  This is due to a bug in IE 5.0
	// if (exploder) {
		remoteWin.resizeTo(width,height);
	// }

	remoteDoc = remoteWin.document;

	// remoteDoc = docuement.open("text/html");
	remoteDoc.write("<TITLE>" + url + "</TITLE>");
	remoteDoc.write("<BODY BGCOLOR=" + bgcolor + ">");
	// remoteDoc.write("<CENTER>" + "AppName: " + navigator.appName + " Version: " + JavaScriptVersion + " : " + text);
	remoteDoc.write("<CENTER>" + text);
	remoteDoc.write("<IMG SRC=");
	remoteDoc.write(url);
	remoteDoc.write(" HEIGHT=" + oheight + " WIDTH=" + owidth);
	remoteDoc.write(">");
	remoteDoc.write("<BR><A HREF=\"javascript:window.close()\"><IMG SRC=\"/greg/gif/closewin.gif\" WIDTH=360 HEIGHT=20 ALIGN=LEFT BORDER=0></A>");
	remoteDoc.close();

	remoteWin.focus();

}


// Show a NEW! tag if this item is less than a month old
function NewItem(expires)
{
	exp = new Date(expires);
	cur = new Date();
	if (cur.getTime() < exp.getTime())
		document.write("<IMG SRC=\"/gif/new2.gif\" WIDTH=31 HEIGHT=12 BORDER=0 ALT=NEW TITLE=NEW>" );
}

// Show a UPDATED! tag if this item is less than a month old
function UpdatedItem(expires)
{
	exp = new Date(expires);
	cur = new Date();
	if (cur.getTime() < exp.getTime())
		document.write("<IMG SRC=\"/gif/updated.gif\" WIDTH=42 HEIGHT=12 BORDER=0 ALT=UPDATED TITLE=UPDATED>" );
}

// Update the status bar
function UpdateStatus(msg) {
	window.status = msg
	return true
}


// Do nothing
function DoNothing() {
	return
}

//
// Function to create a spam-resistant E-mail link
function AddAddress(address,host) {

	document.write(address);
	document.write("@");
	document.write(host);
}


//////////////////////////////////////////////////////////////////////
// Create a new window to E-mail a report to someone...
//////////////////////////////////////////////////////////////////////

// Global variable for window reference.
var emailWindow;
// Generate new window
function makeEmailWindow (url) {
// alert ("url: " + url);
        // Make sure it isn't already opened
        emailWindow = window.open(url,"emailWindow","height=300,width=400");
        emailWindow.focus();
}


//////////////////////////////////////////////////////////////////////
// Show JHEAD in an iframe, if the browser is capable of that.
//////////////////////////////////////////////////////////////////////
function showJhead (iframe,url) {
// alert ("url: " + url);

	height = 200;

	if(window.frames[iframe]) {
		ht = document.getElementById(iframe).style.height;
		if (! ht || ht == "0pt" || ht == "0px") {

			// document.getElementById(iframe).style.height = height;
			window.frames[iframe].location = url;
			window.scrollTo(0,640);
			document.getElementById(iframe).style.height = 5;
			for (h = 10 ; h <= height ; ) {
				document.getElementById(iframe).style.height = h;
				window.scrollTo(0,640);
				napms(8);
				// setTimeout("document.getElementById(iframe).style.height = " + h + "; window.scrollTo(0,640);",h*2);
				h = h + 5;
			}
			document.getElementById(iframe).style.height = height;
		} else {
			document.getElementById(iframe).style.height = 0;
			window.scrollTo(0,0);
		}
	}
	return false;
}


/*
 * This function will not return until (at least)
 * the specified number of milliseconds have passed.
 * It does a busy-wait loop.
 */
function napms(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

