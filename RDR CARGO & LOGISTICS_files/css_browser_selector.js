function css_browser_selector(a){var b=a.toLowerCase(),d=function(a){return b.indexOf(a)>-1},e="gecko",f="webkit",g="safari",h="opera",i="mobile",j=document.documentElement,k=[!/opera|webtv/i.test(b)&&/msie\s(\d)/.test(b)?"ie ie"+RegExp.$1:d("firefox/2")?e+" ff2":d("firefox/3.5")?e+" ff3 ff3_5":d("firefox/3.6")?e+" ff3 ff3_6":d("firefox/3")?e+" ff3":d("gecko/")?e:d("opera")?h+(/version\/(\d+)/.test(b)?" "+h+RegExp.$1:/opera(\s|\/)(\d+)/.test(b)?" "+h+RegExp.$2:""):d("konqueror")?"konqueror":d("blackberry")?i+" blackberry":d("android")?i+" android":d("chrome")?f+" chrome":d("iron")?f+" iron":d("applewebkit/")?f+" "+g+(/version\/(\d+)/.test(b)?" "+g+RegExp.$1:""):d("mozilla/")?e:"",d("j2me")?i+" j2me":d("iphone")?i+" iphone":d("ipod")?i+" ipod":d("ipad")?i+" ipad":d("mac")?"mac":d("darwin")?"mac":d("webtv")?"webtv":d("win")?"win"+(d("windows nt 6.0")?" vista":""):d("freebsd")?"freebsd":d("x11")||d("linux")?"linux":"","js"];return c=k.join(" "),j.className+=" "+c,c}css_browser_selector(navigator.userAgent)