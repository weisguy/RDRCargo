(function(a){function b(a,b){return a.lastIndexOf(".")<=a.lastIndexOf("/")?a+"."+b:a}function c(a,b){var c=a[e]("link");return c.rel="stylesheet",c.type="text/css",c.href=b,c}function d(a,b){return a.replace(g,b+"//")}var e="createElement",f=a.document,g=/^\/\//,h;f&&(h=f.head||(f.head=f.getElementsByTagName("head")[0])),define("link",{load:function(a,e,g,i){var j,k,l;j=e.toUrl(b(a,"css")),l="fixSchemalessUrls"in i?i.fixSchemalessUrls:f&&f.location.protocol,j=l?d(j,l):j,f?(k=c(f,j),h.appendChild(k),g(k.sheet||k.styleSheet)):g(j)}})})(this)