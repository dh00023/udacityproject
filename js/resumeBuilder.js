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
var formatteName = HTMLheaderName.replace("%data%","Dahye Jeong");
$("#header").append(formatteName);
var formattedRole = HTMLheaderRole.replace("%data%","front-end developer");
$("#header").append(formattedRole);