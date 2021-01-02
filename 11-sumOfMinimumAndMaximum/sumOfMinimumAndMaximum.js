function sumOfMinimumAndMaximum(nums) {
  // Insert code here;

  var min = Math.min.apply(Math, nums);

  var max = Math.max.apply(Math,nums);

  var sum = min + max;
  return sum;
}

console.log(sumOfMinimumAndMaximum([1,2,3,10]));

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;