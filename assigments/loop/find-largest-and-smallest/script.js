/* a program that finds the largest and smallest value of five given numbers */

function findValues() {
    var inputs = [
      document.getElementById("num1").value,
      document.getElementById("num2").value,
      document.getElementById("num3").value,
      document.getElementById("num4").value,
      document.getElementById("num5").value
    ];
  
    var numbers = inputs.map(function(num) {
      return parseFloat(num.trim());
    });
  
    if (numbers.some(isNaN)) {
      document.getElementById("result").textContent = 
        "Please enter valid numbers in all fields.";
      return;
    }
  
    var largest = Math.max.apply(null, numbers);
    var smallest = Math.min.apply(null, numbers);
  
    document.getElementById("result").textContent = 
      "Largest: " + largest + ", Smallest: " + smallest;
  }
  