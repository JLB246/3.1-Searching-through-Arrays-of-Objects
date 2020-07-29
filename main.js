// IMPORTANT: do not change this array or any of the 
// objects within it. The tests rely on it.
var companies = [
  { name: 'Apple', symbol: 'APPL', sharePrice: 147.06 },
  { name: 'Tesla', symbol: 'TSLA', sharePrice: 316.83 },
  { name: 'Google', symbol: 'GOOG', sharePrice: 942.63 },
  { name: 'Facebook', symbol: 'FB', sharePrice: 149.64 }
]

// 1. Collect a searchString from the user.

var searchString = prompt('Which company do you want to find?')


// 2. Loop through the companies to see if you can find a match
var foundCompany = null;

for (var i=0; i<companies.length; i++){
  var currentCompany = companies[i];
  
  if (currentCompany.symbol === searchString){
    foundCompany = currentCompany;
    break;
  }
}

if (foundCompany === null){
  console.log('null');
} else {
  console.log('The price of ' + foundCompany.name + ' is ' + foundCompany.sharePrice);
}

// 3. If a match was found (or not found), log it as described on the right.


// TEST CODE: Do not edit below this line.
console.log('********** TEST CODE **********')
if( foundCompany === null ){
  console.log('not found')
} else {
  console.log('a match was found')
}
