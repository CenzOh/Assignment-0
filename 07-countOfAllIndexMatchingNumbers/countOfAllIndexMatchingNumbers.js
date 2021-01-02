function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  var total = 0;
  
  for(var i = 0; i < nums.length; i++) { 
    
    if(nums[i] == i) {         
      
      total++;                 

    }// end of if
    
  } //end of for

  return total;
} //end of fcn

console.log(countOfAllIndexMatchingNumbers( [ 2, 3, 3, 4, 6] ));

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;