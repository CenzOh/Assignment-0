function cutInHalfAndFloor(num) {
  // Insert code here;

  var half = num / 2;
  var final = Math.floor(half); //can use this math function to round down
  return final;
} 

console.log(cutInHalfAndFloor(49));

// Do not edit this line;
module.exports = cutInHalfAndFloor;