alert("hi");


// now for the variables

var x = 7;
var y = 7;

var x + var y;

// if statement

if(5>10){
	console.log("You'll never see this message because 5 is not greater than 10");
}
else{
	console.log("You will see this message because 5 is not greater than 10");
}

// things less than 10

var little = 9;

if(little <10) {
	alert("The variable is less than 10");
}
else{
	alert("Little is " + little);
}

// Strings if else statement

var StringOne = "This is my first string"
var StringTwo = "This is my second string"

if(StringOne == StringTwo){
	alert("Strings are equal");
}
else{
	alert("Strings are not equal")
}



// if else statement

if(5>10){
	console.log("You will not see this statement");

}else if(5==5){
	console.log("Yes, you will see this statement")
}else{
	console.log("you will see this statement because 5 is not greater than 10")
}




//functions example

function addTwo(some_number){
	return some_number + 2;
}
console.log(addTwo(4))

// name example

function alertname(personsname){
	return alert(personsname);
}
console.log("Sam");

alertname(personsname);

// now a no argument function

nameChoice("bob")
;

function
// Door exammple

var door = promt("Please input a number")

function doorprize(choice){
if(choice == 3){
	alert("You do not win anything");
}else if(choice == 2){
	alert("You could have won something, but you still lost");
}else if(choice == 1){
	alert("WOW! YOU'RE A WINNER");
}else{
	alert("You are the worst");
}
};


var door1 = "door1";
var door2 = "door2";
var door3 = "door3";

function doorChoice(door){
	if (door == door1){
		alert("Woulda");
	}else if (door == door2){
		alert("Shoulda");
	}else if (door == door3){
		alert("Coulda");
	}else if (door == 5){
		alert("You won 5 dollars")
	}
	else{
		alert("You didnt win anything");
	}
};












