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
var formatteName=HTMLheaderName.replace("%data%","Dahye Jeong");
$("#header").append(formatteName);
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
		"description": "asdfasdfasdfasdfasdf"
	}, {
		"employer": "bacl-end",
		"title": "udacity",
		"location": "America",
		"dates": "2017-3",
		"description": "asdfasdfasdfasdfasdf"
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