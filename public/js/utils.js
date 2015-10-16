/**
 * Created by Jayant Bhawal on 05-10-2015.
 */

var smallWindowWidth = 1220;

var isElementInViewport = function (el,tolerance,offset) {

	//special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}

	var rect = el.getBoundingClientRect();
	//console.log(rect.top+" "+rect.bottom+" -"+tolerance+" "+(window.innerHeight+tolerance))
	return (
		rect.top >= -tolerance &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight+tolerance) && /*or $(window).height() */
		rect.right <= (window.innerWidth) /*or $(window).width() */
	);
};
var scrollTo = function(el,offset){
	$("body").animate({scrollTop: el.position().top+offset},800);
};
var escapeRegExp = function(str) {
	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};
var addTextByDelay = function(elem,text,speed,wait){
	setTimeout(function () {

		//console.log(text)
		var index=0;
		var intObject= setInterval(function() {
			elem.html(elem.html()+text[index]);
			index++;
			if(index>=text.length){
				clearInterval(intObject);
			}
		}, speed);
	},wait);
};
