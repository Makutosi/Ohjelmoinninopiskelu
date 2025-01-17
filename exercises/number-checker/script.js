/* Enter a number, the program will tell you whether the number you entered is positive or negative. */

function checkNumber() {
    var input = document.getElementById("numberInput").value;
    var result = document.getElementById("result");

    if (input === "") {
        result.textContent = "Please enter a number.";
        return;
    }

    var number = parseFloat(input);

    if (isNaN(number)) {
        result.textContent = "This's not a valid number.";
    } else if (number > 0) {
        result.textContent = "The number is positive.";
    } else if (number < 0) {
        result.textContent = "The number is negative.";
    } else {
        result.textContent = "The number is zero";
    }
}