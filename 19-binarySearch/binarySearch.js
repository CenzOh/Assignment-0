class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;

    var half = Math.floor(nums.length /2); //split in half to find target easier

    if(nums[half] > target) {
      var left = nums.slice(0, half); //breaking down into quarter

      return this.binarySearch(left, target); //using recursion 
    }

    else if(nums[half] < target) {
      var right = nums.slice(half + 1, nums.length); //right side

      return this.binarySearch(right, target);
    }

    else if(nums[half] == target) { //found it!!
      return true;
    }

    else { //can't find it
      return false;
    }
  }
}

//console.log(binarySearch( [2,4,6,8,10], 4)); //didn't work again in a class :()

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;