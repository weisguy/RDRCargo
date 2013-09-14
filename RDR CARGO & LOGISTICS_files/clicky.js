function startClicky(siteid, dbserver) {
    document.write("<scr" + "ipt src=\"http://static.freewebs.getclicky.com/" + siteid + ".js\"></scr" + "ipt>");
}
/*
var ranOnload = false; // Flag to determine if we've ran the starting stack already.
var origOnLoad = window.onload;

function startClicky(siteid, dbserver) {
    if (document.addEventListener) {
        // Mozilla actually has a DOM READY event.
        document.addEventListener("DOMContentLoaded", function() { if (!ranOnload) { ranOnload=true; injectClickyCode(siteid, dbserver);} }, false);
    } else if (document.all && !window.opera) {
        // This is the IE style which exploits a property of the (standards defined) defer attribute
        document.write("<scr" + "ipt id='DOMReady' defer=true " + "src=//:><\/scr" + "ipt>");
        document.getElementById("DOMReady").onreadystatechange=function(){
            if ( this.readyState == "complete" && (!ranOnload) ) {
                ranOnload = true;
                injectClickyCode(siteid, dbserver);
            }
        }
    }
    window.onload = function() {
        if ( typeof(origOnLoad) == 'function' ) {
            origOnLoad();
        }
        if ( !ranOnload ) {
            ranOnload=true;
            injectClickyCode(siteid, dbserver);
        }
    }
}
function injectClickyCode(siteid, dbserver) {
    var container = document.getElementsByTagName('body')[0];
    var clickyInclude = "<scr" + "ipt src=\"http://static.freewebs.getclicky.com/" + siteid + ".js\" type=\"text/javascript\"></scr" + "ipt>";
    var clickyDiv = document.createElement('div');
    clickyDiv.innerHTML = clickyInclude;
    clickyDiv.id = "clicky-div";
    container.appendChild(clickyDiv);
}
*/