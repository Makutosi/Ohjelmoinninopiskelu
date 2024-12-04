// Sort three numbers in ascending order

function sortNumbers() {
    var num1 = parseInt(document.getElementById('first').value);
    var num2 = parseInt(document.getElementById('second').value);
    var num3 = parseInt(document.getElementById('third').value);
  
    var numbers = [num1, num2, num3];
  
    // Sorting with if statements
    if (num1 > num2) {
      var temp = num1;
      num1 = num2;
      num2 = temp;
    }
    if (num2 > num3) {
      var temp = num2;
      num2 = num3;
      num3 = temp;
    }
    if (num1 > num2) {
      var temp = num1;
      num1 = num2;
      num2 = temp;
    }
  
    document.getElementById('result').innerHTML = "Sorted numbers: " + num1 + ', ' + num2 + ', ' + num3;
  }
  