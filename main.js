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
    alert(`Your friend yells: "Mr. Brash! What are you doing??" Mr. Brash flips around. His eyes are pitch black, he seems to be dripping something?... Almost like an infection...`);
    alert(`There's no doubt about it, he's zombified!`);
    let weapon = prompt(`Mr. Brash runs at you to attack. What do you grab to protect yourself? (1) His laptop or (2) his R2-D2 mug?`);

    if (weapon == 2) {
        laptop()
    }

    if (weapon == 2) {
        mug()
    }
}

function mug() {
    alert(`You smash Mr. Brash's R2-D2 mug on his head and it's super effective! He collapses on the floor. You've won!`);
    alert(`You turn and investgate the electronics Zombie-Brash has smashed. You wonder how he could've gotten zombified... The broken screens of his chromebooks are all static with some sort of substance leaking out of them. You try to tap a few keys on one of the better-off chromebooks. Nothing.`);
    alert(`"Hey, what's that?" asks your friend as they point to a screen. "It almost looks like... Github?..."`);
    alert(`"G-github.. m-mer-merge..." mumbles Mr. Brash, still collpased on the floor.`);
    alert(`"It seems like Mr. Brash was dealing with a merge conflict. I bet I could help him." You walk over to Mr. Brash's desk and start your work. You're extremely lucky he was still logged in. There are remnants on his desk of the mysterious substance found on Mr. Brash and the chromebooks, you're careful to avoid it. "Maybe it was the liquid that infected him while he was solving his merge conflict..."`);
    alert(`"It takes a while, but finally! Merge conflict solved! As you step away from the laptop, you hear bubbling and gurgling... "It's the mysterious substance! It's evaporating!" your friend yells. "Mr. Brash is de-zombiefying!" A few minutes later and Mr. Brash is completely back to normal, eyes and all. He's extremly grateful for all your help and offers to give you extra credit!`);
    alert(`It seems like Github won't be getting the best of you anytime soon...`);
    
    game_over_live()
}

function laptop() {

}

function go_home_first() {
    alert(`You arrive at home and start your usual after school routine. You feel a bit bad for not going to see Mr. Brash with your friend.`);
    alert(`A few hours later you hear loud raps on your front-door... Who could it be?`);
    alert(`You open the door and it's your friend! But something seems off... They're dripping? But it's not water... Next thing you know you're on the ground fighting off your best-friend. "M-merge... M-m-erge..." mumbles your friend with pitch black eyes as they pin you to the ground.`);
    alert(`There's a metallic taste in your mouth and your body starts to burn. You become weaker and weaker with each second that goes by...`);
    alert(`It's no use fighting... Your body becomes something that's not of your own... The infection taking over... Your eyes are forced to black and the last thing you see is the faint outline of the Github logo... They have won.`);

    game_over_die()
}

function go_home_second() {
    alert(`You chickened out and went home. BORING.`);
    alert(`You start your computer science work for the night and spend hours on your project. You finish for the night and go to commit your changes. You see the worst has happened...`);
    alert(`A merge conflict.`);
    alert(`You try to fix your mistakes but it's no use. All of a sudden your computer sparks, the screen is filled with errors and a mysterious liquid explodes from the inside. The substance seeps into your skin and immediately it burns. You feel yourself losing movement abilities. Your vision goes black... It's over. Github has won.`);

    game_over_die()
}

function game_over_live() {
    let live_new_game_exit = prompt(`Congratulations! You've survived this night at Haunted St. Matthew High School! Would you like to (1) try again or (2) exit?`);

    if (live_new_game_exit == 1) {
        start_game()
    }

    if (live_new_game_exit == 2) {
        alert(`Thank you for playing. Have a spooky Halloween...`);
    }
}

function game_over_die() {
    let die_new_game_exit = prompt(`Unfortunatly, you've lost. The infection has won. Would you like to (1) try again or (2) exit?`);

    if (die_new_game_exit == 1) {
        start_game()
    }

    if (die_new_game_exit == 2) {
        alert(`Thank you for playing. Have a spooky Halloween...`);
    }
}