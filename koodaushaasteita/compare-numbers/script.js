/* Make a function that checks whether two given numbers are the same. 
If they are, the function prints "Same" to the console, otherwise "Different numbers".*/

function compareNumbers() {
    // Retrieve input values
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
  
    // Check if either input is empty
    if (num1 === "" || num2 === "") {
      console.log("Please enter both numbers.");
      return;
    }
  
    // Convert inputs to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
  
    // Compare numbers
    if (number1 === number2) {
      console.log("Same");
    } else {
      console.log("Different numbers");
    }
  }

  /* 
  型チェック:　parseIntは整数のみを扱う　parseFloatは浮動小数点数も比較したい場合
  空白値の処理: エラーチェック　入力フィールドが空白の場合、NaN
  */
  