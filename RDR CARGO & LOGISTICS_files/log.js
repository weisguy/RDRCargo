top&&top.webs&&top.webs.mode&&(top.webs.mode=="bldr"||top.webs.mode=="dsnr")&&typeof require=="function"&&require(["airbrakeNotifier"],function(){Hoptoad.setKey("d6f560c3b67ba3ef7b364d75750f06ca"),Hoptoad.setEnvironment(webs&&webs.props&&webs.props.environment||"development"),Hoptoad.setErrorDefaults({url:window.location,component:"SiteBuilder"})}),window.webs||(window.webs={}),window.webs.log=function(){var a=["log","debug","dir","info","warn","error","group","groupEnd"],b={},c,d,e=function(a,b){if(!b)return-1;if(typeof b.indexOf=="function")return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},f=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)",c=new RegExp(b),d=c.exec(window.location.href);return d===null?"":d[1]},g=function(a,b){if(window.Hoptoad){var c;if(a&&a.length){c=a[0]?a[0].toString():a[0];for(var d=1,e=a.length;d<e;d++)c+=", "+(a[d]?a[d].toString():a[d])}else c="[no log params]";var f={errorType:"log",message:c};b&&(f.action=b),Hoptoad.notify(f)}};b.enabled=f("log")||[],b.enable=function(a){e(a,b.enabled)===-1&&b.enabled.push(a)},b.trigger=function(a,c){var d=Array.prototype.slice.call(arguments,2);d.splice(0,0,'[LOGGING "'+a+'"]');if(b.enabled.length===0||e(a,b.enabled)!==-1)typeof b[c]=="function"&&b[c].apply(b,d),c==="error"&&g(d,a)};for(c=0;c<a.length;c++)d=a[c],b[d]=function(a){return function(){window.console&&typeof console[a]=="function"&&console[a].apply(console,Array.prototype.slice.call(arguments));if(h[a]instanceof Array)for(var b=0;b<h[a].length;b++)h[a][b].apply(undefined,Array.prototype.slice.call(arguments))}}(d);var h={};return b.bind=function(a,b){h[a]instanceof Array||(h[a]=[]),h[a].push(b)},b.bind("error",g),b}(),typeof define!="undefined"&&define.amd&&define("log",[],function(){return webs.log})