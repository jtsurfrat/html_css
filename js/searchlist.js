// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var months2 = months.join(', ');
//
// console.log(months2);
//
// months2.typeOf()


// console.log('hi')

var inStock = ['apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrorts', 'broccoli', 'pizza'];

var search;

function print(message){
  document.write('<p>' + message + '</p>');
}

while(true){
  search = prompt('Search for a product in our Store. Type quit to exit');
  search = search.toLowerCase();
  if( search === 'quit'){
    break;
  } else if (search === 'list') {
    print(inStock.join(','));
  } else {
    if(inStock.indexOf(search) > -1){
      print('Yes, we have ' + search + ' in the store.')
    } else {
      print(search +" no we dont' have that item.")
    }
  }

}























// []
