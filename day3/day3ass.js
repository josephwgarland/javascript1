// JAVASCRIPT1-ASSIGNMENT
// 2-29-16
// JOSEPH GARLAND

/*

·         Prompt the user for something that they would like to do.
·         Make sure that the user actually types something.
·         If the user has not typed anything, alert them that they need to type something and then 			  terminate the program.
·         If they have input a to-do item, alert the user with the item and console log it.

*/






var userChoice = prompt("What would you like to do?");


if (userChoice === "" || userChoice === null) {
 	alert("You must type something to enter")
 
} else {
 	alert(userChoice)
}
 
console.log(userChoice);




//TEACHER EX. 

/*

var toDo = prompt("what would you like to do?")

if (toDo === null || toDo === "") {
 	alert("You must type something to enter")
 
} else {
 	alert(toDo)
}
 
console.log(toDo);

*/

