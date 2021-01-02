function pairSum(nums, target) {
  // Insert code here;

  for(var i = 0; i < nums.length; i++) {

    for(var j = nums.length; j > i; j--) { //j goes backwards to i

      if(nums[i] + nums[j] == target) { //two distinct numbers (i can't be repeated)
        
        return true;
      }
    }
  }

  return false;
}

console.log(pairSum( [1,2,3,4,5], 6)); //true

// Do not edit this line;
module.exports = pairSum;