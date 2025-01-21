/* */

document.getElementById('reverseButton').addEventListener('click', function () {
    var inputText = document.getElementById('inputText').value;
    var reversedText = '';

    // Loop to reverse the string
    for (var i = inputText.length - 1; i >= 0; i--) {
        reversedText += inputText[i];
    }

    // Display the reversed text
    document.getElementById('result').textContent = 'Reversed: ' + reversedText;
});

