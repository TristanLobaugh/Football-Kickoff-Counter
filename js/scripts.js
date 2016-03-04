var endTime = new Date(2016,2,4,17,0,0);
var endTimeStamp = Date.parse(endTime);
var timer = document.getElementById("countdown-wrapper");
var weeks = document.getElementById("weeks");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

function timeTillDoomsDay(){	
	// var now	= new Date();
	// var nowTimestamp = Date.parse(now);
	var nowTimestamp = Date.now();
	var timeDifference = endTimeStamp - nowTimestamp;
	var timeStampInSeconds = timeDifference / 1000;
	var seconds = Math.floor(timeStampInSeconds % 60);
	var minutes = Math.floor((timeStampInSeconds / 60) % 60);
	var hours = Math.floor(timeStampInSeconds / (60 * 60) % 24);
	var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) % 7);
	var weeks = Math.floor(timeStampInSeconds / (60 * 60 * 24 * 7));

// Javascript Object Notation
	var timeObject = {
			weeks: weeks,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
	};



	if(timeDifference <= 0)	{
		document.getElementById("countdown-wrapper").style.display = "none";
		document.getElementById("kickoff-wrapper").style.display = "block";

	}

	return timeObject;

}

function initTimer(){
	var timeObjectReturned = timeTillDoomsDay();

	weeks.innerHTML = timeObjectReturned.weeks;
	days.innerHTML = timeObjectReturned.days;
	hours.innerHTML = timeObjectReturned.hours;
	minutes.innerHTML = timeObjectReturned.minutes;
	seconds.innerHTML = timeObjectReturned.seconds;
}




setInterval(initTimer, 500);













