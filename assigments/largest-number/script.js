// Find the largest of five numbers

function largestNumber() {
    var num1, num2, num3, num4, num5, largest;
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    num3 = parseInt(document.getElementById('num3').value);
    num4 = parseInt(document.getElementById('num4').value);
    num5 = parseInt(document.getElementById('num5').value);

    if (num1>num2 && num1>num3 && num1>num4 && num1>num5) {
        largest = num1;
    } else if (num2>num1 && num2>num3 && num2>num4 && num2>num5) {
        largest = num2;
    } else if (num3>num1 && num3>num2 && num3>num4 && num3>num5) {
        largest = num3;
    } else if (num4>num1 && num4>num2 && num4>num3 && num4>num5) {
        largest = num4;
    } else {
        largest = num5;
    }

    document.write("Five numbers: " + num1 + ', ' + num2 + ', ' + num3 + ', ' + num4 + ', ' + num5);
    document.write("<br>Largest number: " + largest);
}