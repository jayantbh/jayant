/**
 * Created by Jayant Bhawal on 05-10-2015.
 */
var s01loaded = false;
var projloaded = false;
var loadS01 = function(){
	if(!s01loaded && isElementInViewport($(".section01"),350)){
		$(".main-title-underline").delay(1000).animate({width: "100%"}, 2000, 'easeOutExpo',function(){
			$.each($(".main-title-container ul li .list-container"),function(i,el){
				$(el).delay(i*50).slideDown(200);
			});
		});
		s01loaded = true;
	}
};
var loadProj = function(){
	if(!projloaded && isElementInViewport($(".section02"),350)){
		$(".project-box.normal .image-box").delay(1000).animate({top: "0"}, 1000, 'easeOutExpo');
		$(".project-box.inverse .image-box").delay(1000).animate({bottom: "80px"}, 1000, 'easeOutExpo');
		projloaded = true;
	}
};
$(window).load(function () {
	loadS01();
	loadProj();
});
$(document).scroll(function(){
	loadS01();
	loadProj();
});
