
var questions = [
  {
    question:'How many states are in US',
    anwser: 50
  },
  {
    question: 'How many continents are there?',
    anwser: 7
  },
  {
    question: 'How many many legs does an insect have',
    anwser: 6
  }
];
var correctAnswers = 0;
var question;
var anwser;
var response;
var html;
var wrongQuestions = [];
var rightQuestions = [];


function print(message){
  var outputDiv = document.getElementById('output');
  output.innerHTML = message;
  // document.write(message);
}

function buildList(arr){
  var listHTML = '<ol>';
  for(var i = 0; i < arr.length; i++){
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;

}


for(var i = 0; i < questions.length; i++){
  question = questions[i].question;
  anwser = questions[i].anwser;
  response = parseInt(prompt(question));
  if(response === anwser){
    correctAnswers += 1;
    rightQuestions.push(question);

  } else {

    wrongQuestions.push(question)
    console.log(wrongQuestions);
  }
}



html = "You got " + correctAnswers + " question(s) right. ";
html += '<h2>You got these questions correct:</h2>';
html += buildList(rightQuestions);
html += "<h2>You got these questions wrong: </h2>";
html += buildList(wrongQuestions)

print(html);






























// duck
