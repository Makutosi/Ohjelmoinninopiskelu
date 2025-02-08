/* Make a program that asks the user for two numbers (the second one must be larger) 
and prints the even and odd numbers and their sums in between.*/

function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (num1 >= num2) {
        alert("The second number must be larger than the first number.");
        return;
    }

    var evenNumbers = "";
    var oddNumbers = "";
    var evenSum = 0;
    var oddSum = 0;

    // Determine the starting point for even numbers
    var evenStart = (num1 % 2 === 0) ? num1 : num1 + 1;
    for (var i = evenStart; i < num2; i += 2) {
        evenNumbers += i + " ";
        evenSum += i;
    }

    // Determine the starting point for odd numbers
    var oddStart = (num1 % 2 !== 0) ? num1 : num1 + 1;
    for (var i = oddStart; i < num2; i += 2) {
        oddNumbers += i + " ";
        oddSum += i;
    }

    document.getElementById("evenResult").innerHTML = "Even Numbers: " + evenNumbers + "<br>Sum of Even Numbers: " + evenSum;
    document.getElementById("oddResult").innerHTML = "Odd Numbers: " + oddNumbers + "<br>Sum of Odd Numbers: " + oddSum;
}

