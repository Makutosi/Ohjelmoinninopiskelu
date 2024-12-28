/* Enter five numbers and press the button to print the sum and average of the numbers */

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value) || 0;
    var num2 = parseFloat(document.getElementById("num2").value) || 0;
    var num3 = parseFloat(document.getElementById("num3").value) || 0;
    var num4 = parseFloat(document.getElementById("num4").value) || 0;
    var num5 = parseFloat(document.getElementById("num5").value) || 0;
  
    var sum = num1 + num2 + num3 + num4 + num5;
    var average = sum / 5;
  
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Sum: " + sum + "<br>Average: " + average;
  }
  
  var button = document.getElementById("calculateButton");
  button.onclick = calculate;
  