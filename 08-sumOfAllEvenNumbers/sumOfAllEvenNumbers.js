function sumOfAllEvenNumbers(nums) {
  // Insert code here;

  var total = 0;

  for(var i =0; i < nums.length; i++) {
    if(nums[i] % 2 == 0) { //will equal 0 if it is even
      total++;
    } //end of if
  } //end of for

  return total;
} //end of fcn

console.log(sumOfAllEvenNumbers( [2,3,4,6,12] )); //4

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;