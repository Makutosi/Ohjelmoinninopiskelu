/* Write a program that prints the first 10 numbers */

window.onload = function() {
    var button = document.getElementById('show-numbers');
    var numberList = document.getElementById('number-list');

    button.onclick = function() {
        numberList.innerHTML = ''; // Clear existing numbers
        for (var i = 1; i <= 10; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = i;
            numberList.appendChild(listItem);
        }
    };
};