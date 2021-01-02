function frequencyCounter(word) {
  // Insert code here;

  var arr = [];

  for(var i = 0; i < word.length; i++) {
    var letter = word.charAt(i); //checking the letter at i

    if(arr[letter]) {
      arr[letter]++; //increment the counter for the letter by frequency
    }

    else arr[letter] = 1;
  }

  return arr;

}

console.log(frequencyCounter("racecar"));

// Do not edit this line;
module.exports = frequencyCounter;