function isPalindrome(word) {
  // Insert code here;

  word = word.toLowerCase(); //so every character is the same and can be read front to back with no issues with caps

  for(var i = 0; i < word.length; i++) {

    if(word[i] != word[word.length - 1 - i]) { //if the first letter does not match the last letter, etc
      return false
    }
  }

  return true; //otherwise

}

console.log(isPalindrome("tacocat")); //taco cat

// Do not edit this line;
module.exports = isPalindrome;