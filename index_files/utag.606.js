//tealium universal tag - utag.606 ut4.0.201604071206, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={"view":1};u.map={};u.extend=[function(a,b){window.sessioncamConfiguration=window.sessioncamConfiguration||{};window.sessioncamConfiguration.SessionCamPath=b["page.page_id"];window.sessioncamConfiguration.SessionCamPageName=b["page.page_name"];if(document.domain=="book.cathaypacific.com"&&cxDataLayer.page.page_code=="CONF"){jQuery('body').addClass("sessioncamhidetext");};}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"base_url":"//d2oh4tlt9mrke9.cloudfront.net/Record/js/sessioncam.recorder.js"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
if(!window.sessioncamConfiguration){window.sessioncamConfiguration=new Object();};u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":"utag_606"});}};utag.o[loader].loader.LOAD(id);}("606","cathaypacific.main"));}catch(error){utag.DB(error);}
