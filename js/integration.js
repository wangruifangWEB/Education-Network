(function () {
try {
var loc=''; var ref='';
try{loc=encodeURIComponent(document.location.toString().substr(0,700));}catch(e){}
try{ref=encodeURIComponent(document.referrer.toString().substr(0,700));}catch(e){}
var width = screen.width;
var height = screen.height;
var src_url="https://i.ctnsnet.com/int/integration?cguid=6dc24e01b2764139bab8725771a5a106&pixel=2969443&nid=304041&cont=s&loc="+loc+"&ref="+ref+"&cb="+new Date().getTime()+"&w="+width+"&h="+height;
var iframe=document.createElement("iframe");
if (iframe.attachEvent){iframe.attachEvent('onload', send);}
else{iframe.onload = send;}
iframe.src="javascript:false";
(iframe.frameElement || iframe).style.cssText = "width: 0; height: 0; border: 0; display: none;";
var scripts = document.getElementsByTagName('script');
scripts[scripts.length-1].parentNode.appendChild(iframe);
function send() {
var fdoc = iframe.contentWindow.document;
var s=fdoc.createElement("script");
s.async=true;
s.src=src_url;
fdoc.getElementsByTagName("head")[0].appendChild(s);
};
} catch (e) {}
})();