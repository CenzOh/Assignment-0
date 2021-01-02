function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  var total = 0;
  
  for(var i = 0; i < nums.length; i++) { //we will loop through the array 
    
    if(nums[i] == i) {         //and check if the current value has any duplicates
      
      total++;                 //we check this for each index in the array

    }// end of if
    
  } //end of for

  return total;
} //end of fcn

console.log(countOfAllIndexMatchingNumbers( [ 2, 3, 3, 4, 6] ));

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;