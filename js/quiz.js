
// two demensional array , hold question anwsers
var anwser;
var score = 0;
var right = [];
var wrongQuest = [];
var rightUl;
var wrongUl;
var correct;

var questions = [
                  ['What is the meaning of life', "42"],
                  ['Better Pet, cat or dog?', 'cat'],
                  ['Rolling Stones vs Beetles', 'rolling stones']
              ];

function print(message, wrongUl, score){
  document.write(message + " " + wrongUl + " <h3>Your score is: "+  score + "</h3>");


}

rightUl = "<h3>Right anwsers </h3><ul>";
wrongUl = "<h3>Wrong anwsers are </h3><ul>";

for(var i = 0; i < questions.length; i++){
  anwser = prompt(questions[i][0]);

  if(questions[i][1] === anwser){
    score += 1;
    // correct = true;
    rightUl += "<li> " + questions[i] + " </li>";
    rightUl += "</ul>";
  // print(anwser, correct, score);

    // print()
  } else {
    wrongUl += "<li> " + questions[i] + " </li>";
    wrongUl += "</ul>";
    // correct = false;
    // print(anwser,correct);

  }

}
print(rightUl, wrongUl, score);
// loop,
// use prompt method to ask questions
// conditional statemtn to see if anwser matches players anser
// when loop is finish show how many right questions that was anwsered
// print to screen

































// var anwser;
// var score = 0;
// var right = [];
// var wrongQuest = [];
// var questions = [
//                   ['What is the meaning of life', "42"],
//                   ['Better Pet, cat or dog?', 'cat'],
//                   ['Rolling Stones vs Beetles', 'rolling stones']
//               ];
//
// function print(message){
//   document.write(message);
// };
//
// function printQuestions(questions){
//   var listHTML = '<ol>';
//   for(var i = 0;i <= questions.length; i++){
//     anwser = prompt(questions[i][0]);
//     anwser = anwser.toLowerCase();
//     if(anwser === questions[i][1] ){
//       score += 1;
//
//       right.push(questions[i]);
//       // questions.shift();
//       console.log(questions);
//       console.log(right[i])
//       // listHTML += "<li>" + right[i]+ "</li>"
//
//     } else {
//       // wrongQuest.push(questions[i]);
//
//     }
//     listHTML += "<li>" + right[i]+ "</li>"
//     console.log(score);
//     listHTML += '</ol>';
//     print(listHTML);
//     // console.log(right[]);
//
//   }
// }
//
// printQuestions(questions);
