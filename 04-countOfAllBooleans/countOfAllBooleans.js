function countOfAllBooleans(arr) {
  // Insert code here;

  var boolCount = 0;
  for(var i = 0; i < arr.length; i++) { //check the arr for bool

    if(arr[i] === true || arr[i] === false) { //did not realize i need triple =
      boolCount++; //detects a boolean var, increase
    } //end of if
  } //end of for

  return boolCount;

} //end of function

console.log(countOfAllBooleans( [1, 2, true, false] )); //should output 2

// Do not edit this line;
module.exports = countOfAllBooleans;