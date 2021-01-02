class MySolution {
  countDownSum(num) {
    // Insert code here;

    if(num ==1) { //no need to add anything else
      return 1;
    }
    
    else if (num != 0) { 
      return num + this.countDownSum(num - 1); //recursion
    }
  }
}

//console.log(countDownSum(5)); //does not work in the class:(

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;