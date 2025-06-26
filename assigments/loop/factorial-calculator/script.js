/* Write a program that calculates the product of a given number (e.g.: 4 -> 4*3*2*1 = 24) */

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    var result = 1;
    for (var i = n; i > 1; i--) {
      result *= i;
    }
    return result;
  }
  
  function calculateFactorial() {
    var input = document.getElementById("numberInput").value;
    var number = parseInt(input, 10);
  
    if (isNaN(number) || number < 0) {
      document.getElementById("result").textContent = "Please enter a valid non-negative number.";
    } else {
      var fact = factorial(number);
      document.getElementById("result").textContent = "The factorial of " + number + " is " + fact + ".";
    }
  }
  