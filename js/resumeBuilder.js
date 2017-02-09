/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append(["Dahye Jeong"]);
/*
var awesomeThoughts="I am Dahye and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);
*/
var formattedName=HTMLheaderName.replace("%data%","Dahye Jeong");
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%","front-end developer");
$("#header").append(formattedRole);

//Object
var bio={
	"name" : "Dahye Jeong",
	"role" : "Student",
	"skills":["html","css","ROR","js"],
	"Contact" : {
		"email" : "asdfa0@email.com",
		"mobile" : "010-xxxx-xxxx",
		"github" : "dh00023",
		"twitter" : "asdfasdf",
		"location" : "seoul"
	},
	"welcomeMessage": "Hello, Welcome to my page",
	"biopic": "images/fry.jpg"
}
var education={
	"school": [{
		"name": "konkuk",
		"location": "seoul",
		"major": ["statics", "computer science"],
		"graduation": 2018,
		"url": "http://likelion.net"
	}, {
		"name": "seoul",
		"location": "seoul",
		"major": ["statics", "computer science"],
		"graduation": 2018,
		"url": "http://likelion.net"
	}],
	"onlineCourses": [{
		"title": "front-end nanodegree",
		"school": "konkuk",
		"dates": "2017-5",
		"url": "https://www.udacity.com/"
	}, {
		"title": "fullstack nanodegree",
		"school": "konkuk",
		"dates": "2017-5",
		"url": "https://www.udacity.com/"
	}]
}
var work = {
	"jobs": [{
		"employer": "front-end",
		"title": "udacity",
		"location": "America",
		"dates": "2017-3",
		"description": "Master the skills required to become a Front-End Web Developer,and start building beautiful, responsive websites optimized for mobile and desktop performance.Learn the fundamentals of how the web works and gain a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript."
	}, {
		"employer": "fullstack",
		"title": "udacity",
		"location": "America",
		"dates": "2017-3",
		"description": "This program will prepare you for a job as a Full Stack Web Developer, and teach you to build complex server-side web applications that use powerful relational databases to persistently store data.You’ll learn to build applications that can support any front-end, and scale to support hundreds of thousands of users"
	}]
}
var projects={
	"projects": [{
		"title": "make a website",
		"dates": "2017-04",
		"description": "sdjfkljasdkfjlaskdf",
		"images": "images/197x148.gif"
	}, {
		"title": "make a portfolio",
		"dates": "2017-05",
		"description": "sdjfkljasdkfjlaskdf",
		"images": "images/197x148.gif"
	}]
}
//if
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
}
//for in
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

}