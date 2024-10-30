/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Practice, Part 1

function user() {
    let age = +prompt("What is your age?");

    if (age >= 60) {
        console.log("You qualify for the senior discount!");
    }

    if (age < 16) {
        console.log("You are not old enough to drive yet :(");
    }

    if (age == 44) {
        console.log("So is Mr.Squirrel!!");
    }
}

function ask_name() {
    let user_name = prompt("What is your name?");

    if (user_name == "Mr. Squirrel") {
        console.log("🐿️");
    }

    if (user_name.length > 7) {
        console.log("Wow! That's a long name!");
    }

    let user_guess = prompt("How long do you think your name is?");

    if (user_guess == user_name.length) {
        console.log("You are correct! ✔️");
    }

    if (user_guess > user_name.length) {
        console.log("Too high ✖️");
    }

    if (user_guess < user_name.length) {
        console.log("Too low ✖️");
    }
}

//Part 2
