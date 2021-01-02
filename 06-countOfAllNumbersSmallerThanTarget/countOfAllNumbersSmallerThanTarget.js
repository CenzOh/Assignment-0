function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;

  var total = 0;
  for(var i = 0; i < nums.length; i++) {

    if(nums[i] < target) { //will NOT count the target since not statedt "to equal to"

      total++;
    }// end of if
  } //end of for

  return total;
}
console.log(countOfAllNumbersSmallerThanTarget( [10,30,50,70,80,90], 80));
//should output 4 

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;