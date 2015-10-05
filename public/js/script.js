/**
 * Created by Jayant Bhawal on 05-10-2015.
 */
$(".main-list-container a").click(function(e){
	e.preventDefault()
	var ID = $(this).attr("href");
	ID = ID.substr(1);
	console.log($(ID).position())
	scrollTo($(ID),0);
});
$(".section02 .scroll-left").click(function(e){
	$(".section02 .scroll-horizontal").stop().animate({scrollLeft: $(".section02 .scroll-horizontal").scrollLeft()-510},800,'easeOutExpo');
});
$(".section02 .scroll-right").click(function(e){
	$(".section02 .scroll-horizontal").stop().animate({scrollLeft: $(".section02 .scroll-horizontal").scrollLeft()+510},800,'easeOutExpo');
});
