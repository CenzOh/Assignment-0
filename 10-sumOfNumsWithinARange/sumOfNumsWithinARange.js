function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var total = 0;
  for(var i = 0; i < nums.length; i++) {

    if(nums[i] >= start && nums[i] <= end) {

      total++;
    }
  }

  return total;
}

console.log(sumOfNumsWithinARange( [ 10,20,30,40,50], 20, 50)) //4

// Do not edit this line;
module.exports = sumOfNumsWithinARange;