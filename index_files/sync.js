function RProfiler(){} (function(){var restUrl ="g.3gl.net/jp/v2/M"; var cfgUrl ="g.3gl.net/jp/211/v2/C"; var gsTime=(new Date()).getTime();var RP=window.RProfiler;if(!RP||RP.d){return;}RP.a={};RP.addInfo=function(iType,key,value){if(iType===undefined||iType===null){return;}if(value===undefined||value===null){RP.a[iType]=key;}else{if(key===undefined||key===null){return;}if(!RP.a[iType]){RP.a[iType]={};}RP.a[iType][key]=value;}};if(!document.getElementById||!(window.attachEvent||window.addEventListener)){return;}RP.d={s:gsTime,lT:-1,jsC:undefined,jsE:undefined,Lf:-1};var $E=RP.$E=(function(){var sc={};function add(type,el,fn){if(!sc[type]){sc[type]=[];}sc[type].push([el,type,fn]);}var atEv=(window.attachEvent)?true:false;return{add:function(type,el,fn){add(type,el,fn);if(atEv){el.attachEvent('on'+type,fn);}else{el.addEventListener(type,fn,false);}},clearAll:function(){for(var type in sc){var e,evs=sc[type];if((evs) && (evs.length>0)){for(var i=0;i<evs.length;i++){e=evs[i];if(atEv){e[0].detachEvent(e[1],e[2]);}else{e[0].removeEventListener(e[1],e[2],false);}}}}sc={};}};})();function regPL(){RP.d.lT=(new Date()).getTime();RP.d.Lf=1;}$E.add('load',window,regPL);function addErrorToList(m,u,l){RP.d.jsC++;var k=[m,u,l].join(':'),bFound=false;var e=RP.d.jsE;for(var i=0;i<e.length;i++){if(e[i][0]===k){e[i][4]++;bFound=true;break;}}if(!bFound){e.push([k,m,u,l,1]);}}if(!!window.opera){function regJsError(e){var ev=(e.target)?e.target:e.srcElement;if(ev.nodeType==3){ev=ev.parentNode;}addErrorToList('N/A',ev.src||ev.URL,'N/A');return false;}RP.d.jsC=0;RP.d.jsE=[];$E.add('error',document,regJsError);}else if("onerror" in window){RP.d.jsC=0;RP.d.jsE=[];var orgOnErr=window.onerror;window.onerror=function(m,u,l){addErrorToList(m,u,l);var r=false;if(!!orgOnErr){r=orgOnErr(m,u,l);}return r;};}if(!!window.__cpCdnPath){restUrl=__cpCdnPath.trim();}var r=document.createElement("iframe");var s=r.style;s.position="absolute";s.top="-10000px";s.left="-1000px";var at=document.getElementsByTagName('script')[0];at.parentNode.insertBefore(r,at);var i=r.contentWindow.document.open('text/html','replace');var pr=window.location.protocol+'//';i.write("<body onload='function f(u){ var d=document, s = d.createElement(\"script\"); s.type=\"text/javascript\"; s.src=u; d.body.appendChild(s); } f(\""+pr+cfgUrl+"\"); f(\""+pr+restUrl+"\");'><\/body>");i.close();})(); 

var cxDataLayerEnv = function(){
d = document.domain
if (d == 'www.cathaypacific.com' || d == 'book.cathaypacific.com' || d == 'www.dragonair.com' || d == 'book.dragonair.com' || d == 'holidays.cathaypacific.com'){
	env = 'prod'
}else{
	env = 'qa'
}
return env;
}();
var cxDataLayer = cxDataLayer || {};
document.write('\x3Cscript src=//tags.tiqcdn.com/utag/cathaypacific/main/' + cxDataLayerEnv + "/utag.sync.js" + '>\x3C/script>')

if(cxDataLayerEnv == 'qa'){
window.AAccessibilityCoreDemoPageHTMLExtension = true;
document.write('\x3Cscript src=//assets.cathaypacific.com/libs/accessibility/core.js>\x3C/script>');
AAccessibilityCore.setTrapErrors(false); AAccessibilityCore.setLogging(true);
};