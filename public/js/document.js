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
var loadS04 = function(delay,speed){
	var strings = {
		intro : [
			"Life",
			"Hi.",
			"I'm Jayant, a 20 year old really happy geek.",
			"Since I was very young,",
			"I had a significant amount of interest in computers, ",
			"but very little access until I was old enough.",
			"I made some really great friends in school ",
			"who were quite like me, yet so different.",
			"Half of them were geeks/nerds, like me. ",
			"That really helped boost my exposure to the world of tech."
		],
		mid : [
			"But...",
			"I’m not all tech and geekiness.",
			"I’ve got more decade long friends than I could count on one hand.",
			"I’ve got parents that only a lucky few ever have.",
			"I’ve got the greatest girlfriend one could ask for.",
			"I’ve got an incredible mentor who is probably why you’re even seeing this.",
			"I’ve got two dogs, with whom I have kind of a love/hate relationship.",
			"I absolutely love dogs though.",
			"I AM A HUGE FOODIE. HUGE. (Quite clearly visible too.)",
			"Also,",
			"I’m incredibly hardworking. The people mentioned above can vouch for that."
		]
		//,
		//post : [
		//	"I never really focused on academics just for the sake of grades.",
		//	"I focused on learning what was interesting, regardless of the hits my grades were taking.",
		//	"In any case, if you’re interested in my academic score, here they are:",
		//],
		//scores : [
		//	"Class 10th - Army Public School Barrackpore: 9.0 CGPA",
		//	"Class 12th - Army Public School Barrackpore: 77.0%",
		//	"West Bengal University of Technology (2nd year): 6.75 YGPA."
		//]
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
		addTextByDelay($(".intro.line-5"),strings.intro[index],5,sequenceDelay); sequenceDelay+=(strings.intro[index].length*10+delayGap); delayGap+=20;

		index = 0;
		for(i = 1; i <= 9; i++){
			addTextByDelay($(".social.line-"+i),strings.mid[index++],5,sequenceDelay); sequenceDelay+=(strings.mid[index].length*10+delayGap); delayGap+=20;
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
	//loadS04(1000,1000);
});
$(document).scroll(function(){
	loadS01(200,1500);
	loadS02(200,1000);
	loadS03(200,1000);
	//loadS04(200,1000);
});
