

// JAVASCRIPT 1 -day4notes.js
// 3-2-2016
// Joseph Garland




// TEXT GAME ///////


"use strict";

var enter = confirm("You are outside of a forest cabin. Press OK to enter.")

if(enter){
	var bowls = prompt("You see three bowls or porridge. Eat 1, 2, or 3?");

	if(bowls == 1){
		alert("The porridge is too cold. The end!");
	}
	else if ( bowls == 2 ) {
		alert("The porridge is too hot. The end!");
	}
	else {
		alert("It was delicious");
		var hours = "The porridge made you sleepy. sleep for how many hours?";
		var sleep = prompt(hours);
			sleep = parseInt(sleep);
		if( sleep < 2 ){
			alert("You wake up just in time, and scamper away.");
		}	else {
			alert("You sleep too late. The hungry bears eat you.");
		}
		alert('The End!');
	}
} else {
	alert("And that's the world's shortest story. The End!");
}






// TEXT GAME ///////