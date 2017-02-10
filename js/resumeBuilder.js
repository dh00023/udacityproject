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

//Object
var bio={
	"name" : "Dahye Jeong",
	"role" : "Student",
	"skills":["html","css","ROR","js"],
	"Contacts" : {
		"email" : "asdfa0@email.com",
		"mobile" : "010-xxxx-xxxx",
		"github" : "dh00023",
		"twitter" : "@asdfasdf",
		"location" : "Edmonton, Alberta, Canada"
	},
	"welcomeMessage": "Hello, Welcome to my page",
	"biopic": "images/fry.jpg"
}
var education={
	"school": [{
		"name": "konkuk",
		"location": "Nashville, TN",
		"major": ["statics", "computer science"],
		"graduation": 2018,
		"degree": "석사"
	}, {
		"name": "seoul",
		"location": "Nashville, TN",
		"major": ["statics", "computer science"],
		"graduation": 2018,
		"degree": "university"
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
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var projects={
	"projects": [{
		"title": "make a website",
		"dates": "2017-04",
		"description": "sdjfkljasdkfjlaskdf",
		"images": ["images/197x148.gif","images/197x148.gif"]
	}]
}
bio.display=function(){
	var formattedRole = HTMLheaderRole.replace("%data%","front-end developer");
	$("#header").prepend(formattedRole);
	var formattedName=HTMLheaderName.replace("%data%","Dahye Jeong");
	$("#header").prepend(formattedName);
	var formattedMobile=HTMLmobile.replace("%data%",bio.Contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail=HTMLemail.replace("%data%",bio.Contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub=HTMLgithub.replace("%data%",bio.Contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedTwitter=HTMLtwitter.replace("%data%",bio.Contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedLocation=HTMLlocation.replace("%data%",bio.Contacts.location);
	$("#topContacts").append(formattedLocation);
	var formattedImages=HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedImages);


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
}
//for in,function
//javascript에서 for-in은 안좋음!사용하지말자.for문을사용해!
function displaywork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
//Click해서 x와 y좌표 출력하기.

$(document).click(function(loc) {
  // your code goes here
  var x=loc.pageX;
  var y=loc.pageY;

  logClicks(x,y);
});

//button
function inName(name){
	name=name.trim().split(" ");
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	name[1]=name[1].toUpperCase();
	return name[0]+" "+name[1];
}

//function은 object이다. js의 대부분은 object이다.
projects.display=function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImages=HTMLprojectImage.replace("%data%",projects.projects[project].images[0]);
		$(".project-entry:last").append(formattedImages);
		var formattedImages=HTMLprojectImage.replace("%data%",projects.projects[project].images[1]);
	}	$(".project-entry:last").append(formattedImages);
}
education.display=function(){
	$("#education").append(HTMLschoolStart);
		
	for(e in education.school){
		
		var formattedName=HTMLschoolName.replace("%data%",education.school[e].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree=HTMLschoolDegree.replace("%data%",education.school[e].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates=HTMLschoolDates.replace("%data%",education.school[e].graduation);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation=HTMLschoolLocation.replace("%data%",education.school[e].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor=HTMLschoolMajor.replace("%data%",education.school[e].major);
		$(".education-entry:last").append(formattedMajor);
	}

	$(".education-entry").append(HTMLonlineClasses);
		
	for(ed in education.onlineCourses){
			
		var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[ed].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[ed].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[ed].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL=HTMLonlineURL.replace("%data%",education.onlineCourses[ed].url);
		$(".education-entry:last").append(formattedURL);
		
	}
}
	var formattedMobile=HTMLmobile.replace("%data%",bio.Contacts.mobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail=HTMLemail.replace("%data%",bio.Contacts.email);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub=HTMLgithub.replace("%data%",bio.Contacts.github);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter=HTMLtwitter.replace("%data%",bio.Contacts.twitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation=HTMLlocation.replace("%data%",bio.Contacts.location);
	$("#footerContacts").append(formattedLocation);
bio.display();
displaywork();
projects.display();
education.display();
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
