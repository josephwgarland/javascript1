
/*
var y = 5;

var x = y++; // ++ after the variable, assignment happens first then y unpdates
var x = ++y; // y is updated before assignment happens

*/

var a = 5;

var b = --a; // pre-decrement
var c = a--; // post-decrement (attributed after entire string read)

console.log("A = " + a)
console.log("B = " + b)
console.log("C = " + c)


//COMPARISON  -- -- - --- -- --- --- - - -- --- -- - -


//ex.
var num = 11;
//				true  				true
console.log( (num >= 10) || (num <= 12));
//				true
console.log(num <= 20);



//  == LOOSE  value only  -------------------------

var a = 1;
var b = 1;
a == b;
//true

var a = 1;
var b = "1";
a == b;
//true

var a = 1;
var b = 2;
a == b;
//false

//  === STRICT   value and data type   -  --------------------

var a = 1;
var b = "1";
a === b;
//false

var a = "1";
var b = "1";
a === b;
//true 


//  != LOOSE NOT EQUAL COMPARISON

4 != 4
// false
1 != 4
//true
"4" != 4
//false


// !== STRICT NOT EQUAL COMPARISON 

"4" !== 4
//true
1 !== 4
//true
4 !== 4
//false




// < LESS THAN  -----------------------------------

3<4
//true
3<2
//false

// > GREATER THAN   -----------------------------------

3>2
//true
3>4
//false

//  <= less than or equal to

3<=4
//true
3<=3
//true
3<=2
//false


//  >= greater than or equal to


3>=4
//false
3>=3
//true
3>=2
//true



// LOGICAL =========================================

// &&  AND  ------------- (both sides must be true)

true && true
//true

true && false
//false

false && true
//false

false && false 
//false

//  || OR --------------------- (one side must be true)

true || true
//true
true || false
//true
false || true
//true
false || false 
//false



// parseInt()   ----------

var a = 1.6;
var b = parseInt(a);
// b = 1


parseInt("123")
//123

parseInt("1") + parseInt("2");
// 3


parseInt("egg");
//NaN (not a number)

// TO CHECK NaN:
isNan(Nan);
//true
isNan(3);
//true
isNan("egg")
//false



//  ! = NOT OPERATOR  :

!true 
//false
!false
//true
!!true
//true
!!false
//false


// __________CONTROL FLOW  ____________________________________________


// simple if statement

var condition = true;
if (condition) {

	console.log("yup")
}

//if else, if the first condition is true, run the first
//block, else run the second block

if (false) {
 
    alert("it's true");
 
} else {
 
    alert("it's false");
}

//if else if statements, the last else is our "fallback"
if (condition1) {  //if true, condition 1 will run
 				   // if false go to else if
 
} else if (condition2) {
 				//if true cond2 will run
 				// if false go to else
 
} else {
 	
 
}

//  ex.
if (true) {
 //if block
 alert("1st block is true")
} else if (true) {
 alert("2nd block is true")
 
} else {
  // else block 

}




//if else if statements, the last else is our "fallback"
if (false) {
 alert("1st block is true")
 
} else if (false) {
 alert("2nd block is true")
 } else if (false) {
 alert("3rd block is true")
 } else if (false) {
 alert("4th block is true")
 } else if (true) {
 alert("5th block is true")
}


// EX .

var a = true;
var b = false;
 
//if both a AND b are true...
if (a && b) {
    console.log("both a and b are true");
} else {
    console.log("one of a or b is false");
}
 
//if a OR b is true
if (a || b) {
    console.log("one of a or b is true");
}


//  ===  SWITCH STATEMENT  ===========
// keywords: SWITCH, CASE, BREAK, DEFAULT
//  : opening  ; closing

var condition = "a";
 
switch (condition) {

case "a":
    alert("foo");
    break;  // code will run untill reaches break or end of switch

case "b":
    alert("bar");
    break;

default:
    alert("wasn't foo or bar");
}


//  ====  TERNARY OPERATOR ==============
//It looks like: condition ? trueValue : falseValue;

var loggedIn = true;
var needsLogin = loggedIn ? false : true;
 
var age = 31;
var logout = age < 13 ? true : false;


//REWRITTEN IN IF ELSE :

var loggedIn = true;
//var needsLogin = loggedIn ? false : true;
var needsLogin;
if(loggedIn){
	needsLogin = false;
} else {
	needsLogin = true;
}

 
var age = 31;
//var logout = age < 13 ? true : false;

var logout;
if(age < 13){
	logout = true;
} else {
	logout = false;
}

















