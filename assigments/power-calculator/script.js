/* Write a program that asks the user for two numbers 
and raises the first to the second power, e.g. 5 and 2 = 25*/

/*
// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("power-form");
    var result = document.getElementById("result");

    // Add an event listener to handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the input values
        var base = parseFloat(document.getElementById("base").value);
        var exponent = parseFloat(document.getElementById("exponent").value);

        // Calculate the power
        var power = Math.pow(base, exponent);

        // Display the result
        result.textContent = "Result: " + power;
    });
});
*/

// フォームの要素を取得
var form = document.getElementById("power-form");
var result = document.getElementById("result");

// フォーム送信時のイベントリスナーを追加
form.addEventListener("submit", function(event) {
    event.preventDefault(); // デフォルトのフォーム送信をキャンセル

    // 入力値を取得
    var base = parseFloat(document.getElementById("base").value);
    var exponent = parseFloat(document.getElementById("exponent").value);

    // べき乗を計算
    var power = Math.pow(base, exponent);

    // 結果を表示
    result.textContent = "Result: " + power;
});


/* 
document.addEventListener("DOMContentLoaded", function() { ... })
*/