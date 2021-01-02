function fizzBuzz(start, end) {
  // Insert code here;
  var array = [];

  for(var i = start; i <= end; i++) {

    if(i % 3 == 0 && i % 5 != 0) { //is a multiple of 3
      array.push("Fizz");
    }

    else if(i % 3 != 0 && i % 5 == 0) { //multiple of 5
      array.push("Buzz");
    }

    else if( i % 3 == 0 && i % 5 == 0) { //multiple of both 3 and 5
      array.push("FizzBuzz"); //tried to not repeat myself but did not work
    } 

    else { //otherwise
      array.push(i); 
    }
  }

  return array;
}

console.log(fizzBuzz(1,15));

// Do not edit this line;
module.exports = fizzBuzz;