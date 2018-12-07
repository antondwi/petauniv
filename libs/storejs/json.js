//>>built
define(["dojo","dijit","dojox"],function(u,v,w){this.JSON||(this.JSON={});(function(){function k(a){return 10>a?"0"+a:a}function p(a){q.lastIndex=0;return q.test(a)?'"'+a.replace(q,function(a){var c=t[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,d){var c,e,m=f,g,b=d[a];b&&"object"===typeof b&&"function"===typeof b.toJSON&&(b=b.toJSON(a));"function"===typeof h&&(b=h.call(d,a,b));switch(typeof b){case "string":return p(b);case "number":return isFinite(b)?
String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null";f+=n;g=[];if("[object Array]"===Object.prototype.toString.apply(b)){e=b.length;for(a=0;a<e;a+=1)g[a]=l(a,b)||"null";d=0===g.length?"[]":f?"[\n"+f+g.join(",\n"+f)+"\n"+m+"]":"["+g.join(",")+"]";f=m;return d}if(h&&"object"===typeof h)for(e=h.length,a=0;a<e;a+=1)c=h[a],"string"===typeof c&&(d=l(c,b))&&g.push(p(c)+(f?": ":":")+d);else for(c in b)Object.hasOwnProperty.call(b,c)&&(d=l(c,b))&&g.push(p(c)+(f?": ":
":")+d);d=0===g.length?"{}":f?"{\n"+f+g.join(",\n"+f)+"\n"+m+"}":"{"+g.join(",")+"}";f=m;return d}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var r=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
q=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f,n,t={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,d,c){var e;n=f="";if("number"===typeof c)for(e=0;e<c;e+=1)n+=" ";else"string"===typeof c&&(n=c);if((h=d)&&"function"!==typeof d&&("object"!==typeof d||"number"!==typeof d.length))throw Error("JSON.stringify");return l("",{"":a})});
"function"!==typeof JSON.parse&&(JSON.parse=function(a,d){function c(a,f){var g,b,e=a[f];if(e&&"object"===typeof e)for(g in e)Object.hasOwnProperty.call(e,g)&&(b=c(e,g),void 0!==b?e[g]=b:delete e[g]);return d.call(a,f,e)}a=String(a);r.lastIndex=0;r.test(a)&&(a=a.replace(r,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,
"")))return a=eval("("+a+")"),"function"===typeof d?c({"":a},""):a;throw new SyntaxError("JSON.parse");})})()});