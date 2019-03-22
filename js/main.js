



// function printList( list ){
//   var listHTML = '<ol>';
//   for(var i = 0; i < list.length; i+= 1){
//     listHTML += '<li>' + list[i] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }
//
// function print(html){
//   document.write(html);
// }

// function printList( list ) {
//   var listHTML = '<ol>';
//   for (var i = 0; i < list.length; i += 1) {
//     listHTML += '<li>' + list[i] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }
//
// function print(html) {
//   document.write(html);
// }


// var shoppingList = [
//   'carrots',
//   'milk',
//   'cheese'
// ];




// for (var i = 0; i <= 24; i += 2) {
//   console.log(i);
//
// }


// for(var i = 2; i <= 24; i += 2) {
//   console.log(i);
// }

// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;
//
// function getRandomNumber( upper ){
//   var num = Math.floor(Math.random() * upper) + 1;
//   return num;
// }
//
// while(guessCount < 10) {
//   guess = prompt("choose number between 1 and 10");
//   guessCount += 1;
//   if(parseInt(guess) === randomNumber) {
//     correctGuess = true;
//     break;
//
//   }
// }
// if(correctGuess) {
//   document.write("You got it" + " it took you " + guessCount + " attempt")
// } else {
//   document.write("You lost");
// }






// var html = '';
//
// for(var i = 1; i <= 10; i++){
//   html += '<div>' + i + '</div>';
// }
//
// document.write(html);


// var secret = prompt("What is the secret password?");
//
//
// do {
//   secret = prompt("What is the secret password?");
// } while(secret !== "sesame");
//
// document.write("You know the secret password. Welcome.");

// while ( secret !== "sesame" ) {
//   secret = prompt("What is the secret password?");
// }
// document.write("You know the secret password. Welcome.");

// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;
//
// function getRandomNumber( upper ){
//   var num = Math.floor(Math.random() * upper) + 1;
//   return num;
// }
//
// do {
//   guess = prompt("choose number between 1 and 10");
//   guessCount += 1;
//   if(parseInt(guess) === randomNumber) {
//     correctGuess = true;
//
//   }
// } while(! correctGuess);
//
// document.write("You got it" + " it took you " + guessCount + " attempt")



// var secret = prompt("What is the secret password?");
//
// while(secret !== "sesame") {
//   secret = prompt("That's not it! Try again");
// }
//
//
// document.write("You know the secret password. Welcome.");


// var upper = 10000;
// var randomNumber;
// var guess;
// var computerGuess;
// var attempts = 0;
//
// function getRandom(upper){
//   return Math.floor( Math.random() * upper ) + 1;
// }
// randomNumber = getRandom(upper);
// console.log(randomNumber);
//
//
//
//
// while (guess !== randomNumber) {
//   guess = getRandom(upper);
//   attempts += 1;
// }
//
// document.write("<p>The random number was: " + randomNumber + "</p>");
// document.write("<p> It took the computer " + attempts + " attempts</p>");




/* My version of computer vers computer random*/


// var upper = 10000;
// var randomNumber;
// var guess = false;
// var computerGuess;
// var attempts = 0;
//
// function getRandom(upper){
//   return Math.floor( Math.random() * upper ) + 1;
// }
// randomNumber = getRandom(upper);
// console.log(randomNumber);
//
// while (guess === false ) {
//   computerGuess = getRandom(upper);
//     console.log(computerGuess)
//     if(computerGuess === randomNumber){
//       document.write("The random number is " + randomNumber + " " + computerGuess + " this many "+ attempts + " attempts");
//       guess = true;
//   } else {
//     attempts += 1;
//     guess = false;
//   }
// }


// function randomNumb(upper){
//   return Math.floor( Math.random() * upper ) + 1;
// }
// var counter = 0;
// while (counter < 10) {
//   var randNum = randomNumb(6);
//   document.write(randNum + ' ');
//   counter += 1;
// }



// function getArea(width, length, unit){
//   var area = width * length;
//   return area + " " + unit;
// }
//
// console.log(getArea(10, 20, "sq ft"));

//
// function getRandom(upper, lower){
//   if(isNaN(upper) || isNaN(lower)){
//     throw new Error('error, is not a number');
//   } else {
//     return Math.floor( Math.random() * (upper - lower + 1) ) + lower;
//   }
//
// }
//
// console.log(getRandom(10, 1));
// console.log(getRandom(10, "dog"));
// console.log(getRandom(10, true));


//
// function isEmailEmpty() {
//   var field = document.getElementById('email');
//   if(field.value === ''){
//     return true;
//   } else {
//     return false;
//   }
//
// }
//
// var fieldTest = isEmailEmpty();
// if(fieldTest === true){
//   alert("Please provide your email address");
// }









// function getRandom(){
//   var randomNumber = Math.floor( Math.random() * 6 ) + 1;
//   return randomNumber;
// }
//
// alert(getRandom());
// console.log(getRandom());







// var score = 0;
//
// var question_1 = prompt("Do you like dogs or cats");
// question_1 = question_1.toUpperCase();
//     // question_1.toUpperCase;
// var question_2 = prompt("What is your favorite color");
// question_2 = question_2.toUpperCase();
// var question_3 = prompt("What is the meaning of life");
// question_3 = parseInt(question_3);
// var question_4 = prompt("What is your favorite language");
// question_4 = question_4.toUpperCase();
// var question_5 = prompt("Is star wars better then star star trek");
// question_5 = question_5.toUpperCase();
//
// if(question_1 === "CATS"){
//   score = score + 1;
//   console.log(score);
//   // alert(question_1 + " is right");
// } else {
//   // alert(question_1 + " is wrong.")
// }
//
// if(question_2 === "GREY"){
//   score = score + 1;
//   console.log(score);
//   // alert(question_2);
// }
//
// if(question_3 === 42){
//   score = score + 1;
//   console.log(score);
//   // alert(question_3);
// }
//
// if(question_4 === "JS" || question_4 === "JAVASCRIPT"){
//   score = score + 1;
//   console.log(score);
//   // alert(question_3);
// }
//
// if(question_5 === "STAR WARS"){
//   score = score + 1;
//   console.log(score);
//   // alert(question_3);
// }
//
// if(score >= 5){
//   alert("You have answered " + score + " questions correct. Gold Cup");
// } else if (score >= 3) {
//   alert("You have answered " + score + " questions correct. Silver Cup");
// } else if (score >= 1) {
//   alert("You have answered " + score + " questions correct. Bronze Cup");
// } else {
//   alert("You lose " + score);
// }



// var correctGuess = false;
// var randomNum = Math.floor(Math.random() * 6 ) + 1;
// var guess = prompt('I am thinking of a number between 1 and 6');
//
// if(parseInt(guess) === randomNum){
//   correctGuess = true;
// } else if (parseInt(guess) < randomNum) {
//     var guessMore = prompt("more than " + guess);
//     if(parseInt(guessMore) === randomNum){
//       correctGuess = true;
//     }
// } else if (parseInt(guess) > randomNum) {
//     var guessMore = prompt("less than " + guess);
//     if(parseInt(guessMore) === randomNum){
//       correctGuess = true;
//     }
// }
//
// if(correctGuess){
//   document.write("You guessed the number!!");
// } else {
//   document.write(guessMore + " isn't the right number, the right number is " + randomNum );
// }


// var answer = prompt("What programming language is name of a gem");
// answer = answer.toUpperCase();
// if (answer === 'RUBY'){
//   document.write("<p> That is right. " + answer + " is the correct choice</p>");
// } else {
//   document.write(answer + " isn't the correct choice");
// }


// var money = 9;
// var today = 'Friday'
//
// if ( money >= 100 && today === 'Friday' ) {
//   alert("Time to go to the theater");
// } else if ( money >= 50 && today === 'Friday' ) {
//   alert("Time for a movie and dinner");
// } else if ( money > 10 && today === 'Friday' ) {
//   alert("Time for a movie");
// } else if ( today !== 'Friday' ) {
//   alert("This isn't Friday. I need to stay home.");
// } else {
//   alert("It's Friday, but I don't have enough money to go out");
// }

// alert("It's Friday, but I don't have enough money to go out");


// var userNumber1 = prompt("choose a number");
// userNumber1 = parseInt(userNumber1);
//
// var userNumber2 = prompt("choose a number");
// userNumber2 = parseInt(userNumber2);
//
// var randomNum = Math.floor(Math.random() * (userNumber1 - userNumber2 + 1) + userNumber2);
//
// console.log(randomNum);
//
//
// console.log("Your random number is " + randomNum);

// console.log(Math.floor(Math.random() * 6) + 1);


// var userNumber1 = prompt("Chouse an number");
// var userNumber2 = prompt("choose a number");
//
// var randomNum =
//
// userNumber1 = parseInt(userNumber1)
// userNumber2 = parseInt(userNumber2);
//
// console.log(userNumber1 + " " + userNumber2);
//
// for(i = 0; i <= userNumber2; i++){
//
//   if(i >= userNumber1){
//     console.log(i);
//   }
//
//
// }


// random numbers  -- math object

// console.log(Math.floor(Math.random() * 6) + 1);

// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert(dieRoll);




// var HTMLBadges = prompt('How many html badges?');
// var cssBadges = prompt('How many css badges?');
// var totalBages = parseInt(HTMLBadges) + parseInt(cssBadges);
//
// console.log(totalBages);










// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
//
// console.log(secondsPerDay + " " + " secondsPerDay");
//
// var secondsPerYear = secondsPerDay * daysPerWeek * weeksPerYear;
// var alive = secondsPerYear * 25;
//
// console.log(alive);




// var questions = 3;
//
// var questionsLeft = ' [' + questions + ' questionsLeft]';
//
// var noun = prompt("What is a noun " + questionsLeft);
// questions -= 1;
// var questionsLeft = ' [' + questions + ' questionsLeft]';
// var verb = prompt("What is a verb " + questionsLeft);
// questions -= 1;
// var questionsLeft = ' [' + questions + ' questionsLeft]';
// var adj = prompt("What is an adj " + questionsLeft);
// questions -= 1;
// var questionsLeft = ' [' + questions + ' questionsLeft]';
//
// document.write("John " + verb + " to the " + noun +" he looked very " + adj);
//
// alert("John " + verb + " to the " + noun +" he looked very " + adj);




// variable chagallenge



// var id = "23188xtr";
// var lastName = "Smith";
//
//
// var userName = id.toUpperCase();
// lastName = "#" + lastName;
// lastName = lastName.toUpperCase();
//
// userName += lastName;
//
// console.log(userName);

// var stringToShout = prompt("What should I shout");
// var shout = stringToShout.toUpperCase();
// shout += "!!!"
// alert("You shouted " + shout);


// var passphrase = "Open Sesame";
// console.log(passphrase.length);
// passphrase = passphrase.toLowerCase();
// console.log(passphrase);


// var visitor = prompt("What is your name?");
// var message = "Hello " + visitor + ". Welcome to Treehouse.";
// message = message + "We are so glad you came to visit!";
// document.write(message);


// var yourName = prompt("what is your name");
//
// document.write("Welcome " + yourName);
//


// var message = "Hello";
// alert(message);
//
// message = "Welcome to Js Basics";
// alert(message);
//
// console.log("hello");
