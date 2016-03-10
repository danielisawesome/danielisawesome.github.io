/*

   Description: script to generate greeting based on time of day
   and to get the time and day of users browser and display on webpage 

*/

 





document.getElementById("greeting").innerHTML = greeting;




var updateGreeting = function(hours) {

	var greeting;


	if( hours >= 18) {
		greeting= "Good Evening!!";
		document.getElementById("container").style.backgroundColor = "gold";
	}
	else if( hours >=13 ) {
		greeting = "Good Afternoon!!"
		document.getElementById("container").style.backgroundColor = "red";
	}
	else if( hours >= 0) {
		greeting = "Good Morning";
		document.getElementById("container").style.backgroundColor = "orange";
	}
	else {
		greeting = "Welcome!!";

	}

	return greeting;

}

var updateClock = function() {
var currentTime = new Date();


var currentHours24 = currentTime.getHours(); //get hours from Date()
//console.log("hours: "+currentHours24);
var currentMinutes = currentTime.getMinutes();
//console.log("minutes: "+currentMinutes);
var currentSeconds = currentTime.getSeconds();

// if it's less tan 12 then AM if it's more than 12 than PM
var amOrPM = ( currentHours24 < 12 ) ? "AM" : "PM" ; 

// if the hour is more than 12 subtract 12 to conveert to 12 hour clock otherwise keep the time 
var currentHours12 = (currentHours24 > 12 ) ? currentHours24-12 : currentHours12 ;

// convert hour 0 to 12
currentHours12 = ( currentHours12 == 0 ) ? 12 : currentHours12

// "0" == 0 true
// "0" === 0 false 

// put the time string together ready for display
var currentTimeString = "Current time is " + currentHours12 + " : " + currentMinutes + " : " + currentSeconds + " " + amOrPM; 

document.getElementById("greeting").innerHTML = updateGreeting(currentHours24);
document.getElementById("clock").innerHTML = currentTimeString;

}
