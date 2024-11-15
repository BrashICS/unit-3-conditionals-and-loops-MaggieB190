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

//player_name can be used anywhere in the code
let player_name;
//

/*** Event Listeners ***/

//button is the html id, click is what to listen for and start game is what function to go to when clicked
document.getElementById("adventure_game_button").addEventListener("click", start_game);

document.getElementById("guess").addEventListener("click", guess_10);

/*** Functions ***/

//Lesson 3.1: If statements

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



//Assignment: Halloween Adventure Game

function start_game() {
    //player name as set as a global variable above^^
    player_name = prompt("What is your name?");

    alert(`Welcome ${player_name} to Haunted St. Matthew High School! I hope you're ready for a terrifing experience...`);
    alert(`School has just ended, your friend asks you if you want to go see Mr. Brash with them.`);

    //go see Mr. Brash or go home
    let brash_house = prompt(`Do you (1) go with them to see Mr. Brash or (2) just go home?`);

    if (brash_house == 1) {
        go_brash_room()
    }

    if (brash_house == 2) {
        go_home_first()
    }
}

 //go see Mr. Brash in his class
function go_brash_room() {
    alert(`You and your friend walk to Mr. Brash's room. As you approach, you hear loud noises from his room. It sounds like the smashing of legos?...`);

    //Investigate the noise or go home (the second time this option is there, but with a different outcome)
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
    alert(`Your friend yells: "Mr. Brash! What are you doing??" Mr. Brash flips around. His eyes are pitch black, his skin has gone a murky green, he seems to be dripping something?... Almost like an infection...`);
    alert(`There's no doubt about it, he's zombified!`);
    let weapon = prompt(`Mr. Brash runs at you to attack. What do you grab to protect yourself? (1) His laptop or (2) his R2-D2 mug?`);

    if (weapon == 1) {
        laptop()
    }

    if (weapon == 2) {
        mug()
    }
}

//used the mug as a weapon
function mug() {
    alert(`You smash Mr. Brash's R2-D2 mug on his head and it's super effective! He collapses to the floor. You've won! You turn and investgate the electronics Zombie-Brash has smashed. You wonder how he could've end up this way... The broken screens of his chromebooks are all static with some sort of substance leaking out of them. You try to tap a few keys on one of the better-off chromebooks. Nothing.`);
    alert(`"Hey ${player_name}, what's that?" asks your friend as they point to a screen. "It almost looks like... Github?..."`);
    alert(`"G-github.. m-mer-merge..." mumbles Mr. Brash, still collpased on the floor.`);
    alert(`"It seems like Mr. Brash was dealing with a merge conflict. I bet I could help him." You walk over to Mr. Brash's desk and start your work. You're extremely lucky he was still logged in. There are remnants on his desk of the mysterious substance found on Zombie-Brash and the chromebooks, you're careful to avoid it. "Maybe it was the liquid that infected him while he was solving his merge conflict..." It takes a while, but finally! Merge conflict solved!`);
    alert(`As you step away from the laptop, you hear bubbling and gurgling... "It's the mysterious substance! It's evaporating!" your friend yells. "Mr. Brash is de-zombiefying!" A few minutes later and Mr. Brash is completely back to normal, eyes, skin and all. He's incredibly grateful for all your help and offers to give you extra credit!`);
    alert(`It seems like Github won't be getting the best of you anytime soon...`);
    
    game_over_live()
}

//used the laptop as a weapon
function laptop() {
    alert(`You grab Mr. Brash's laptop and use it to wack him on the head! The laptop shatters to pieces, but Mr. Brash is unfazed. You and your friend try to defend yourselves with anything you can find, using any monitor, PC, cables. You try to reach for a weapon, but end up dipping your hand in a burning liquid. The same one on Mr. Brash, and the one all the devices have been splattering on impact. That can't be a good sign...`);
    alert(`"${player_name}!" Your friend screams for your help as they get taken by Zombie-Brash. Their eyes plead for your saving, but you are not moving. You can't. As your vision darkens you're forced to watch the mysterious liquid creep into your best friends pores and turn them green. You try to scream bloody-mary with all your might, to help them, to help yourself, but all you can do is wait. At least you will be together in the end...`);

    game_over_die()
}

//player chose to go home the first time (they left before getting to Mr. Brash's room)
function go_home_first() {
    alert(`You arrive at home and start to feel a bit bad for not going to see Mr. Brash with your friend.`);
    alert(`A few hours later you hear loud raps on your front-door... Who could it be? You open the door and it's your friend! But something seems off... They're dripping? But it's not water... Next thing you know you're on the ground fighting off your best friend. "M-merge... M-m-erge..." mumbles your friend with pitch black eyes an green tinge to their skin as they pin you to the ground.`);
    alert(`There's a metallic taste in your mouth and your body starts to burn. You see some sort of substance drip into your mouth and turn your skin green. You become weaker and weaker with each second that goes by...`);
    alert(`It's no use fighting... Your body becomes something that's not of your own... The infection taking over... Your eyes are forced to black and the last thing you see is the faint outline of the Github logo... They have won.`);

    game_over_die()
}

//player chose to go home the second time (they left after getting to Mr. Brash's room)
function go_home_second() {
    alert(`You chickened out and went home. You hope your friend is okay and wonder what Mr. Brash could've been doing. You could swear you saw some kind of liquid seeping under the cracks in his door...`);
    alert(`You start your computer scie   nce homework and spend hours on your project. You finish up for the night and go to commit your changes, but you see the worst has happened...`);
    alert(`A merge conflict.`);
    alert(`You try to fix your mistakes but it's no use. All of a sudden your computer sparks, the screen is filled with errors and a mysterious liquid explodes from the inside. The substance seeps into your skin turning it green and burning like fire. You feel yourself go limp. Your vision goes black... It's over. Github has won.`);

    game_over_die()
}

//The ending if the player lives
function game_over_live() {
    let live_new_game_exit = prompt(`Congratulations ${player_name}! You've survived this night at Haunted St. Matthew High School! Would you like to (1) try again or (2) exit?`);

    if (live_new_game_exit == 1) {
        start_game()
    }

    if (live_new_game_exit == 2) {
        alert(`Thank you for playing ${player_name}. Have a spooky Halloween...`);
    }
}

//The ending if the player dies
function game_over_die() {
    let die_new_game_exit = prompt(`${player_name}, you've lost. The infection has won. Would you like to (1) try again or (2) exit?`);

    if (die_new_game_exit == 1) {
        start_game()
    }

    if (die_new_game_exit == 2) {
        alert(`Thank you for playing ${player_name}. Have a spooky Halloween...`);
    }
}

//Lesson 3.2: else-if statements

//Part 1

// Setup the menu
function menu() {
let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`
// Prompt with the menu
let selection = Number(prompt(message));

    if (selection == 1) {
        let difficulty = Number(prompt(`What difficulty would you like to play at?
            1 - Easy
            2 - Medium
            3 - Hard`));

        alert(`Let's Play!`);

        if (difficulty == 1) {
            alert(`You selected the easy route.`);
        }
        else if (difficulty == 2) {
            alert(`Most people select medium.`);
        }
        else if (difficulty == 3) {
            alert(`I see you like a challenge!`);
        } 
    }
    else if (selection == 2) {
        alert(`You selected Options`);
    }
    else if (selection == 3) {
        alert(`No new DLC at this time`);
    }
    else if (selection == 4) {
        alert(`Everything is up to date`);
    }
    else if (selection == 5) {
        alert(`Bye!`);
    }
}
//^^ This was the function for menu

//Part 2 AND and OR

function greeting(hour) {
    //hour is in military time
    if ((hour >= 0) && (hour <= 11)) {
        //hour from 0 to 11
        console.log("Good morning! Rise and shine");
    }
    else if ((hour >= 12) && (hour <= 17)) {
        console.log("Good afternoon");
    }
    else if ((hour >= 18) && (hour <= 23)) {
        console.log("Good evening!");
    }
    else if ((hour < 0) || (hour > 23)) {
        return ("Invalid hour!");
}
}

// Optional challenge

function two_digit() {
    let digit = randInt(0, 5);
    console.log(digit)

    if (digit == 0) {
        return ("0")
    }
    if (digit % 2 == 0) {
        return ("Even")
    }
    else if (digit % 2 != 0) {
        return ("Odd")
    }
}


//Lesson 3.3: Else statements
// else is for complete end of if, it is if nothing works, do this (catch all)

//part 1

function is_number(num) {
    if (typeof num == "number") {
        return (`true`);
    }
    else {
        return (`false`);
    }
}

//Part 2

function which_day(n) {
    is_number(n)
    if (n == 1) {
        return ("Monday");
    }
    else if (n == 2) {
        return ("Tuesday");
    }
    else if (n == 3) {
        return ("Wednesday");
    }
    else if (n == 4) {
        return ("Thursday");
    }
    else if (n == 5) {
        return ("Friday");
    }
    else if (n == 6) {
        return ("Saturday");
    }
    else if (n == 7) {
        return (`Sunday`);
    }
    else {
        return (`Invalid type`);
    }
}

//Part 3

function guess_10() {
    //make the user input a number thats a guess for the hidden random number generated ^^
    let rnd_guess_10 = Number(randInt(1, 10)); 

    let user_guess_10 = +prompt(`A random number from 1-10 has been generated, take a guess as to what it is!
    Enter your guess:`);

    //user was correct
    if (user_guess_10 == rnd_guess_10) {
        let continue_guess_game = prompt(`That's correct! The random number was ${rnd_guess_10}. Enter (1) to play again, or (2) to quit.`);
            if (continue_guess_game == 1) {
                guess_10();
            }
    }
    //user out of range
    else if ((user_guess_10 > 10) || (user_guess_10 < 1)) {
        alert(`Your guess was out of the required range (1-10). The random number was ${rnd_guess_10}`);
    }
    else if (user_guess_10 < rnd_guess_10) {
        alert(`Ha ha! Too low! The random number was ${rnd_guess_10}`);
    }
    else if (user_guess_10 > rnd_guess_10) {
        alert(`Too high! The random number was ${rnd_guess_10}`);
    }
    //if they mess things up somehow
    else {
        alert(`There was an error. Try again.`);
    }
}

//Lesson 3.4 While loop
//Practice

//part 1 countdown
function countdown(start, stop) {
    let attempts = 0;
    if (start < stop) {
        return -1
    }
    while (start >= stop ) {
        console.log(start);
        //this is the same as start = start - 1
        start--;
        attempts++;
    }
    //need to make this return how many times it loops
    return (attempts)
}

//Part 2 random until stop
function random_until(min, max, stop) {
    let rnd_num_until = randInt(min, max)
    //if min bigger, infinite loop
    if (max <= min) {
        return -1
    }
    //if never stops, infinite loop
    if ((stop > max) || (stop < min)) {
        return -1
    }

    while (rnd_num_until != stop) {
        //if its not the stop value, print and pick another
        console.log(rnd_num_until);
        rnd_num_until = randInt(min, max);
    }
    return stop;
}

//Part 3 average

function average(n) {
    let avg = 0;
    let count = 1;

    while (count <= n) {
        //+= is adding to a variable, avg = avg + Number(prompt...
        avg +=  +prompt(`Please enter value ${count}/${n}`);
        //same as count +=
        count++;
    }

    //uses round function from earlier
    avg = round(avg/n, 1);
    console.log(`The average is ${avg}`);
}

//Lesson 3.5: interlude strings
//last character in a string is always length - 1
// [ short for @, character at that location in the string

function find_char(str) {
    let letter_char = str[str.length - 9];
    console.log(letter_char);
}

function print_every_letter(str) {
    let current_letter = 0;
    
    while (current_letter < str.length) {
      console.log(str[current_letter]);
      current_letter++;
    }
}

//part 1: print reverse
function print_reverse(str) {
    //start with blank string to build up the letters
    let output = "";

    //start one after the end of the string
    let i = str.length - 1
    while (i >= 0) {
        // add one letter to the output string, ++ is add 1
        output += str[i]
        //by subtracting, its working backwards, thus reversing
        i--;
    }
    console.log(output);
}

//part 2: goblins and dragons

function dragons_and_goblins(str) {
    let letter_look = 0;
    let dragon_count = 0;
    let goblin_count = 0;

    //make sure the letter it is on is les than the string length
    while (letter_look < str.length) {
        if (str[letter_look] == "d") {
            dragon_count++;
        }
        else if (str[letter_look] == "g") {
            goblin_count++;
        }
        //at the end of each loop, increase it by 1, to look at the next letter
        letter_look++;
    }
    console.log(`Dragons: ${dragon_count} Goblins: ${goblin_count}`);
}

//part 3: 

function add(str) {
    let current_number = 0;
    let convert_str = Number(str);
    
    while (current_number < convert_str.length) {
        console.log(str[current_number]);
        current_number++;
    } 
}

//Lesson 3.6: Do... While

function print_odd(n) {
    // n == isNaN wont work, cuz isNaN is a JS function
    if ((n < 1) || (isNaN(n))) {
        return;
    }

    let start_num = 1;
    do {
        console.log(start_num);
        start_num = start_num + 2;
    } while (n >= start_num)
   
    console.log("Hooray!");
}

function negative_only() {
    let input_num;
    
    do {
        input_num = +prompt("Please enter a negative number");
        //make sure it repeats while number is positive (more than 0)
        //make it check if its a number
    } while ((input_num >= 0) || isNaN(input_num));

    return input_num;
}

function parrot() {
    let input_parrot = "";

    do {
        input_parrot = prompt("Please enter some text or the word 'quit' to exit:");
        console.log(input_parrot.toUpperCase(), "🦜");
        //to lower case is a function so need to brackets below
    } while (input_parrot.toLowerCase() != "quit");
}
