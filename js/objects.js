

var person = {
  name: 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['js', '#c', 'HTML', 'CSS']
};

for(var prop in person){
  console.log(prop + ": " + person[prop]);
}

for(var prop in person.skills){
  console.log(prop + ": " + person.skills[prop]);
}

// function print(message){
//   var div = document.getElementById('output');
//   div.innerHTML = message;
// }
//
// var message = '<p> Hello. My name is '+  person.name + '</p>';
// message += '<p> I live in ' + person.country + '</p>';
// person.name = "rainbow-dash";
// message += "<p>I wish my name was " + person.name + "</p>"
// person.age += 1;
// message += '<p> My age is now ' + person.age + '</p>';
// message += "<p> My skills are "  + person.skills.length + " </p>";
// message += person.skills.join(', ') + '</p>';
// print(message);



































//
// var shanghai = {
//   population: 14.35e6,
//   longitude: '31.2000 N',
//   latitude: '121.5000 E',
//   country: 'CHN'
// };
//
// for(var property in shanghai){
//   console.log(property + ": " + shanghai[property]);
// }
