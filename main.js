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

//Halloween Assignment

function start_game() {
    let name = prompt("What is you name?");

    alert(`Welcome ${name} to Haunted St. Matthew High School! I hope you're ready for a terrifing experience...`);
    alert(`School has just ended, your friend asks you if you want to go see Mr. Brash with them.`);

    let brash_house = prompt(`Do you (1) go with them to see Mr. Brash or (2) just go home?`);

    if (brash_house == 1) {
        go_brash_room()
    }

    if (brash_house == 2) {
        go_home_first()
    }
}

function go_brash_room() {
    alert(`You and your friend hear loud noises from Mr. Brash's room. It sounds like the smashing of legos?...`);
    let noise_chicken = prompt(`Do you (1) investigate or (2) chicken out?`);

    if (noise_chicken == 1) {
        investigate_noise()
    }

    if (noise_chicken == 2) {
        go_home_second()
    }

}

function investigate_noise() {
    alert(`You and your friend enter Mr. Brash's room. You see him unsteadily walking around his room and smashing his electronics!`);
    alert(`Your friend yells: "Mr. Brash! What are you doing??"`);
    alert(`Mr. Brash flips around. His eyes are dark, his veins are rough and coursing... Almost like an infection...`);
    alert(`There's no doubt about it, he's zombified!`);
    let weapon = prompt(`Mr. Brash runs at you to attack. What do you grab to protect yourself? (1) His laptop or (2) his R2-D2 mug?`);

    if (weapon == 2) {
        mug()
    }
}

function mug() {
    alert(`You smash Mr. Brash's R2-D2 mug on his head and it's super effective!`);
    alert(`Mr. Brash collapses on the floor.`);
    alert(`You and your friend flip some tables and stack them ontop. You've won! But now what?...`);
    alert(`You turn and investgate the electronic Zombie-Brash has smashed. You wonder how he could've gotten zombified...`);
    ///COntinue to have him mumble abt gitbhub, solve his issue story done, brash no zombie
}

function go_home_first() {
    alert(`You arrive at home and start your usual after school routine.`);
}

function go_home_second() {
    alert(``)
}