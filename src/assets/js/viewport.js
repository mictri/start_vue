var baseW = 560; //break poiint setting add viewport
var iOSviewportW = 0;
var viewport = 960; // width viewport;
var ua = navigator.userAgent.toLowerCase();
var isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipod') > -1 || ua.indexOf('ipad') > -1;
if (isiOS) {
  iOSviewportW = document.documentElement.clientWidth;
}
function updateMetaViewport() {
  var viewportContent;
  var w = window.outerWidth;
  //if(isiOS){
  //	w = iOSviewportW;
  //}
  if (w > baseW) {
    viewportContent = 'width=device-width,initial-scale=1,user-scalable=no';
  } else {
    viewportContent = 'width=device-width, shrink-to-fit=no';
  }
  document.querySelector("meta[name='viewport']").setAttribute('content', viewportContent);
}

window.addEventListener('resize', updateMetaViewport, false);
window.addEventListener('orientationchange', updateMetaViewport, false);

var ev = document.createEvent('UIEvent');
ev.initEvent('resize', true, true);
window.dispatchEvent(ev);


/*
var baseW = 319;	//break poiint setting add viewport 
var baseW_ipad = 560;	//break poiint setting add viewport 
var ua = navigator.userAgent.toLowerCase();
var isiOS = (ua.indexOf("iphone") > -1) || (ua.indexOf("ipod") > -1) || (ua.indexOf("ipad") > -1);
if(isiOS){
	iOSviewportW = document.documentElement.clientWidth;
}
function updateMetaViewport(){
	var viewportContent;
	var w = window.outerWidth;
	//if(isiOS){
	//	w = iOSviewportW;
	//}
	if(w > baseW_ipad){
		viewportContent = "width=device-width,initial-scale=1,user-scalable=no'";
	}
	else
	if(w > baseW){
		viewportContent = "width=560,user-scalable=no,shrink-to-fit=no";
	}else{
		viewportContent = "width=device-width, shrink-to-fit=no";
	}
	document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
}

window.addEventListener("resize", updateMetaViewport, false);
window.addEventListener("orientationchange", updateMetaViewport, false);

var ev = document.createEvent("UIEvent");
ev.initEvent("resize", true, true)
window.dispatchEvent(ev);
*/