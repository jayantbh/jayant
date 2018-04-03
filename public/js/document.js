/**
 * Created by Jayant Bhawal on 05-10-2015.
 */
var s01loaded = false;
var s02loaded = false;
var s03loaded = false;
var s04loaded = false;
var s05loaded = false;

var skillsJSON = {};
var loadS01 = function(delay,speed){
	if(!s01loaded && isElementInViewport($(".section01"),350)){
		$(".main-title-underline").delay(delay).animate({width: "100%"}, speed, 'easeOutExpo',function(){
			$(".loading-text-s01").addClass("animate-slide-down");
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
		if(window.innerWidth>smallWindowWidth) {
			$(".project-box.inverse .image-box").delay(delay).animate({bottom: "80px"}, speed, 'easeOutExpo');
		}
		else{
			$(".project-box.inverse .image-box").delay(delay).animate({bottom: "0px"}, speed, 'easeOutExpo');
		}
		s02loaded = true;
	}
};
var loadS03 = function (delay, speed) {
	if(!s03loaded &&  isElementInViewport($(".section03"),650)){
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
var loadS04 = function(delay,speed){
	var strings = {
		intro : [
			"Life",
			"Hi.",
			"I'm Jayant, a 'normal' 22 year old.",
			"I've always been fascinated by computers in general,",
			"but very little access until I was old enough.",
			"Fortunately, I had pretty decent peers through school and college,",
			"some of whom were pretty pivotal in how things went for me.",
			"I've been able to use the help offered by my peers,",
			"and use it to do cool stuff and land opportunities,",
			"that makes others say 'This dude is lucky!'...",
			"Maybe I am, or maybe I've worked hard enough. Who knows."
		],
		mid : [
			"But...",
			"I’m not all screens and keyboards.",
			"I love history! Natural, cultural, political, name it.",
			"I love Art and Crafts! I have a thing for wood and stone crafts.",
			"I love some sports! Badminton and Table Tennis the most.",
			"I LOVE DOGS. My favorite dog is my pet who's bit me the most.",
			"I love spending an evening watching a never-seen movie with my peeps.",
			"Lord of the Rings! Game of Thrones! Halo! Breaking Bad!",
			"And I LOVE trying out new food. (You can visibly tell.)",
			"Also,",
			"I’m incredibly hardworking. My employers I'm sure will agree. :)",
			"And pretty importantly, I'm a massive gaming fan."
		]
	}
	var sequenceDelay = delay;
	if(!s04loaded &&  isElementInViewport($(".section04"),350)){
		s04loaded = true;
		var index = 0;
		var delayGap = 180;
		var i;
		addTextByDelay($(".title"),strings.intro[index++],30,sequenceDelay); sequenceDelay+=1000;
		addTextByDelay($(".greeting"),strings.intro[index++],30,sequenceDelay); sequenceDelay+=600;
		addTextByDelay($(".intro.line-1"),strings.intro[index++],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;
		addTextByDelay($(".intro.line-2"),strings.intro[index++],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;
		addTextByDelay($(".intro.line-3"),strings.intro[index++],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;
		addTextByDelay($(".intro.line-4"),strings.intro[index++],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;
		addTextByDelay($(".intro.line-5"),strings.intro[index++],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;
		addTextByDelay($(".intro.line-6"),strings.intro[index++],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;
		addTextByDelay($(".intro.line-7"),strings.intro[index++],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;
		addTextByDelay($(".intro.line-8"),strings.intro[index++],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;
		addTextByDelay($(".intro.line-9"),strings.intro[index],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;

		index = 0;
		for(i = 1; i <= 12; i++){
			addTextByDelay($(".social.line-"+i),strings.mid[index],5,sequenceDelay); sequenceDelay+=(strings.mid[index].length*10+delayGap); delayGap+=20;
			index++;
		}

		//index = 0;
		//for(i = 1; i <= 3; i++){
		//	addTextByDelay($(".post.line-"+i),strings.post[index++],5,sequenceDelay); sequenceDelay+=(strings.mid[index].length*10+delayGap); delayGap+=20;
		//}
        //
		//index = 0;
		//for(i = 1; i <= 3; i++){
		//	addTextByDelay($(".scores.line-"+i),strings.scores[index++],5,sequenceDelay); sequenceDelay+=(strings.mid[index].length*10+delayGap); delayGap+=20;
		//}
	}
};
$(window).load(function () {
	loadS01(1000,1500);
	loadS02(1000,1000);
	loadS03(1000,1000);
	loadS04(1000,1000);
});
$(document).scroll(function(){
	loadS01(200,1500);
	loadS02(200,1000);
	loadS03(200,1000);
	loadS04(200,1000);
});
