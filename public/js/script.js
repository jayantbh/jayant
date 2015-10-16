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
	var scrollValue = 500;
	if(window.innerWidth>smallWindowWidth){
		scrollValue = 510;
	}
	$(".section02 .scroll-horizontal").stop().animate({scrollLeft: $(".section02 .scroll-horizontal").scrollLeft()-scrollValue},800,'easeOutExpo');
});
$(".section02 .scroll-right").click(function(e){
	var scrollValue = 500;
	if(window.innerWidth>smallWindowWidth){
		scrollValue = 510;
	}
	$(".section02 .scroll-horizontal").stop().animate({scrollLeft: $(".section02 .scroll-horizontal").scrollLeft()+scrollValue},800,'easeOutExpo');
});
$("#skill-search").on('input',function () {
	$(".skills-list").html("");
	var key = $(this).val().trim();
	console.log(key);
	key = escapeRegExp(key);
	var skills = skillsJSON;
	skills = skills.skill;
	console.log(skills);
	$.each(skills, function (i, val) {
		var skillVal = val;
		$.each(val.tags, function (i, val) {
			console.log(key);
			var p = new RegExp(key,'i');
			console.log(p);
			console.log(p.test(val));
			if(p.test(val)){
				var skill = $('<span class="skill">' + skillVal.name + '</span>');
				$('.skills-list').append(skill);
				return false;
			}
		});
	});
});
