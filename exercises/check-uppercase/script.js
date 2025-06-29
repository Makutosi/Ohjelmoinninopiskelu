/* Write a program that checks if the first letter of a given string is uppercase */

function checkUppercase() {
    var inputText = document.getElementById("inputText").value;
    var result = document.getElementById("result");
  
    if (inputText.length === 0) {
      result.textContent = "Please enter a string.";
      return;
    }
  
    var firstChar = inputText.charAt(0);
    if (firstChar === firstChar.toUpperCase() && isNaN(firstChar)) {
      result.textContent = "The first letter is uppercase.";
    } else {
      result.textContent = "The first letter is not uppercase.";
    }
  }
  