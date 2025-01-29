/* Write a program that asks the user for an even number
and then prints all even numbers up to that point excluding 0*/ 

function showEvenNumbers() {
    var input = document.getElementById("evenNumber").value;
    var resultElement = document.getElementById("result");
    var number = parseInt(input);
    
    if (isNaN(number) || number <= 0 || number % 2 !== 0) {
        resultElement.innerHTML = "Please enter a positive even number.";
        return;
    }

    var resultText = "";
    for (var i = 2; i <= number; i += 2) {
        resultText += i + " ";
    }

    resultElement.innerHTML = resultText;
}
