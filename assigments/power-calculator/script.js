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

/* 
document.addEventListener("DOMContentLoaded", function() { ... })
ウェブページが完全に読み込まれた後にスクリプトを実行するためのコード
DOMContentLoadedを使用するのは良い習慣
コードの安全性を向上させる。
スクリプトの位置に依存しない。
他のスクリプトとの競合を防ぐ。
プロジェクト規模が拡大しても柔軟に対応できる。*/

// ボタンと結果表示要素を取得
var button = document.getElementById("calculate-btn");
var result = document.getElementById("result");

// ボタンクリック時の処理
button.addEventListener("click", function() {
    // 入力値を取得
    var base = parseFloat(document.getElementById("base").value);
    var exponent = parseFloat(document.getElementById("exponent").value);

    // 計算結果を求める
    var power = Math.pow(base, exponent);

    // 結果を表示
    result.textContent = "Result: " + power;
});

/* 
button.addEventListener("click", function() { ... })
addEventListener メソッド:
ボタン（calculate-btn）に対して「クリック」イベントが発生したときに、指定した関数（イベントリスナー）を実行するよう登録

button:
ここで取得しているのは、HTML のボタン要素 <button id="calculate-btn">Calculate</button> 
getElementById メソッドでボタン要素を取得し、それを button という変数に保存

"click":
ボタンがクリックされたときにトリガーされるイベント名。
イベントには種類がありますが、今回は「クリック」を監視

function():
ボタンがクリックされたときに実行される処理を定義する匿名関数（無名関数）
この中で入力値の取得、計算、結果表示

Math.pow(base, exponent) メソッド:
JavaScript の組み込み関数で、指定された「底（base）」を「指数（exponent）」で累乗（べき乗）します。

Math.pow:
Math は数学的な計算を提供する JavaScript の標準オブジェクト
Math.pow(x, y) は「x の y 乗」を計算。

base と exponent:
ユーザーが入力した底と指数の値
これらはそれぞれ parseFloat 関数で文字列から数値に変換され

textContent:

要素内の純粋なテキスト（HTMLタグを含まない内容）を設定または取得するプロパティ
*/