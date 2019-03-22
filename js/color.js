
// second step

var html = '';
// var red;   - don't need thes variables
// var green;
// var blue;
var rgbColor;

function randomRGB(){
  return Math.floor(Math.random() * 256 );
}
// new function to seperate the color
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  return color;
}

function print(message){
  document.write(message);
}


for(var i = 1; i <= 10; i++){
  // red = randomRGB();
  // green = randomRGB();
  // blue = randomRGB();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';

}
print(html);


// first step

// var html = '';
// var red;
// var green;
// var blue;
// var rgbColor;
//
// function colorRandom(){
//   return Math.floor(Math.random() * 256 );
// }
//
// for(var i = 1; i <= 10; i++){
//   red = colorRandom();
//   green = colorRandom();
//   blue = colorRandom();
//   rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//   html += '<div style="background-color:' + rgbColor + '"></div>';
//
// }
// document.write(html);
