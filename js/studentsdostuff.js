var name;
var track;
var achievements;
var points;
var student;
var message;
var search;
var searchTrack;
var on = true;

function print(message){
  var output = document.getElementById('output');
  output.innerHTML = message;
}

function getStudentReport(student){
  var report = "<h2>Name: " + student.name + "</h2>";
  report += "<p>track: " + student.track + "</p>";
  report += "<p>achievements: " + student.achievements + "</p>";
  report += "<p>Points: " + student.points + "</p>";
  return report;
}

while(true){
  search = prompt("Choose a name?");
  if(search === null || search.toLowerCase() === 'quit'){
    break;
  }
  for(var i = 0; i < students.length; i++){
    student = students[i];
    if(student.name === search){
      message = getStudentReport(student);
      print(message);
    }
    // two names
    // if there isn't a name found

    // // console.log(students[i]);
    // print(message);
  }
}

// function fetchStudent(students){

  // for(var i = 0; i < students.length; i++){
  //   student = students[i];
  //   // console.log(students[i]);
  //   message += "<h2>Name: " + student.name + "</h2>";
  //   message += "<p>track: " + student.track + "</p>";
  //   message += "<p>achievements: " + student.achievements + "</p>";
  //   message += "<p>Points: " + student.points + "</p>";
  // }
//   return message;
// }







// fetchStudent(students);

print(message);





























// for(var i = 0; i < students.length; i++){
//   student = students[i]
//   // name = students[i].name;
//   // track = students[i].track;
//   // achievements = students[i].achievements;
//   // points = students[i].points;
//
//   // message += "<h2>name: " + name + "</h2>";
//   // message += "<p>track: " + track + "</p>";
//   // message += "<p>achievements: " + achievements + "</p>";
//   // message += "<p>points: " + points+ "</p>";
//
//   /// daves work
//   message += "<h2>name: " + student.name + "</h2>";
//   message += "<p>track: " + student.track + "</p>";
//   message += "<p>achievements: " + student.achievements + "</p>";
//   message += "<p>points: " + student.points+ "</p>";
//
// }
// print(message);


// html = "<p>" + name + "</p>";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// document.write(html);
