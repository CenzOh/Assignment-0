function titleCaseEdit(title) {
  // Insert code here;

  var titleArray = title.split(' '); //title in array

  for(var i = 0; i < titleArray.length; i++) {
    titleArray[i] = titleArray[i].charAt(0).toUpperCase() + //this makes the first letter of the word uppercase
    titleArray[i].substring(1);

  }

  return titleArray.join(' ');
}

console.log(titleCaseEdit("green Eggs and ham")); //test

// Do not edit this line;
module.exports = titleCaseEdit;