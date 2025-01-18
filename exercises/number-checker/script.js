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

/* 
function checkNumber()  関数定義
この関数はボタンがクリックされたときに呼び出され、ユーザーが入力した値をチェック

document.getElementById("numberInput")
<input> 要素を取得 id="numberInput"

.value 入力フィールドに入力された値を文字列として取得

var input 取得した値を input という変数に保存

document.getElementById("result") <p> 要素を取得 id="result"

var result 結果を表示するこの要素を result という変数に保存

if (input === "") 入力が空欄（空文字列）かどうかをチェック

result.textContent = "Please enter a number."; 結果表示用の <p> 要素に「Please enter a number.」というメッセージを表示

return; 関数をここで終了 それ以上の処理は行われません

parseFloat(input) input を浮動小数点数（数値）に変換 入力が数値でない場合は NaN（Not a Number）が返されます

var number 変換された数値を number という変数に保存

isNaN(number) number が有効な数値かどうかをチェック 数値でない場合（NaN）に true を返す

result.textContent = "That's not a valid number."; 結果表示用の <p> 要素に「That's not a valid number.」というメッセージを表示

*/