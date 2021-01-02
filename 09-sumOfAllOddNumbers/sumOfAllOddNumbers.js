function sumOfAllOddNumbers(nums) {
  // Insert code here;

  var total = 0;

  for(var i = 0; i < nums.length; i++) {

    if(nums[i] % 2 != 0) {
      total++;
    }
  }

  return total;
}

console.log(sumOfAllOddNumbers([ 0,1,3,5,6,8])); //3

// Do not edit this line;
module.exports = sumOfAllOddNumbers;