/*
 * menuExpandable2.js - implements an expandable menu based on a HTML list
 * Author: Dave Lindquist (dave@gazingus.org)
 */

if (!document.getElementById)
    document.getElementById = function() { return null; }

function initializeMenu(menuId, actuatorId) {
    var menu = document.getElementById(menuId);
    var actuator = document.getElementById(actuatorId);

    if (menu == null || actuator == null) return;

    // if (window.opera) return; // Opera 7 works well, so commenting this

    actuator.parentNode.style.backgroundImage = "url(modules/taxonomy_dhtml/plus.gif)";
    actuator.onclick = function() {
        var display = menu.style.display;
        this.parentNode.style.backgroundImage =
            (display == "block") ? "url(modules/taxonomy_dhtml/plus.gif)" : "url(modules/taxonomy_dhtml/minus.gif)";
        menu.style.display = (display == "block") ? "none" : "block";

        return false;
    }
}



