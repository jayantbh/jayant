/**
 * Created by Jayant Bhawal on 05-10-2015.
 */
var s01loaded = false;
var s02loaded = false;
var s03loaded = false;

var skillsJSON = {};
var loadS01 = function(delay,speed){
	if(!s01loaded && isElementInViewport($(".section01"),350)){
		$(".main-title-underline").delay(delay).animate({width: "100%"}, speed, 'easeOutExpo',function(){
			$.each($(".main-title-container ul li .list-container"),function(i,el){
				$(el).delay(i*50).slideDown(200);
			});
		});
		s01loaded = true;
	}
};
var loadS02 = function(delay,speed){
	if(!s02loaded && isElementInViewport($(".section02"),350)){
		$(".project-box.normal .image-box").delay(delay).animate({top: "0"}, speed, 'easeOutExpo');
		$(".project-box.inverse .image-box").delay(delay).animate({bottom: "80px"}, speed, 'easeOutExpo');
		s02loaded = true;
	}
};
var loadS03 = function (delay, speed) {
	if(!s03loaded &&  isElementInViewport($(".section03"),350)){
		$.getJSON('/json/skills.json', function (skills) {
			skillsJSON = skills;
			skills = skills.skill;
			console.log(skills);
			$.each(skills, function (i, val) {
				var skill = $('<span class="skill">'+val.name+'</span>');
				$('.skills-list').append(skill);
			});
		});

		$('.skills-list').delay(delay).slideDown(500);
		console.log("Skills loaded?");
		s03loaded = true;
	}
};
$(window).load(function () {
	loadS01(1000,1500);
	loadS02(1000,1000);
	loadS03(1000,1000);
});
$(document).scroll(function(){
	loadS01(200,1500);
	loadS02(200,1000);
	loadS03(200,1000);
});
