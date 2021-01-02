function countOfAllBooleansAndStrings(arr) {
  // Insert code here;

  var total = 0;
  for(var i = 0; i < arr.length; i++) {

    if(arr[i] === true || arr[i] === false || typeof arr[i] === 'string') {

      total++;
    } //end of if
  } //end of for

  return total;
} //end of fcn

console.log(countOfAllBooleansAndStrings( [true, false, 16, "sample"] )); //should output 3

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;