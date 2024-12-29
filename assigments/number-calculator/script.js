/* Enter five numbers and press the button to print the sum and average of the numbers */

function calculate() {
  // 各入力値を取得
  var input1 = document.getElementById("num1").value;
  var input2 = document.getElementById("num2").value;
  var input3 = document.getElementById("num3").value;
  var input4 = document.getElementById("num4").value;
  var input5 = document.getElementById("num5").value;

  // 各入力値を検証し、無効な場合は計算を中止
  var num1 = validateInput(input1, "num1");
  var num2 = validateInput(input2, "num2");
  var num3 = validateInput(input3, "num3");
  var num4 = validateInput(input4, "num4");
  var num5 = validateInput(input5, "num5");

  if (num1 === null || num2 === null || num3 === null || num4 === null || num5 === null) {
    return; // 無効な入力があれば計算を中止, nullはプログラミングで「値が存在しないこと」を表す特別な値
  }

  // 合計と平均を計算
  var sum = num1 + num2 + num3 + num4 + num5;
  var average = sum / 5;

  // 結果を表示
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Sum: " + sum + "<br>Average: " + average;
}

// 入力を検証する関数
function validateInput(input, fieldName) {
  if (input.trim() === "") { // 空の入力をチェック
    alert("Please enter a value in " + fieldName + "!");
    return null;
  }

  var number = parseFloat(input);
  if (isNaN(number)) { // 数値に変換できない場合をチェック
    alert("Invalid input in " + fieldName + "! Please enter a valid number.");
    return null;
  }

  return number; // 有効な数値を返す
}

// ボタンのクリックイベントを設定
document.getElementById("calculateButton").onclick = calculate;

/* 
validateInput(input1, "num1"); 関数の呼び出し
input1: num1フィールドに入力した文字列
"num1": フィールド名（入力欄の名前）を文字列として渡す。これはエラーの警告メッセージに使われる。

validateInput(input, fieldName)　関数の定義
input: 関数に渡される実際の入力値を受け取る引数の名前。
fieldName: エラー時にどのフィールドで問題が発生したかを表示するための引数の名前

(input.trim() === "")　trim()は文字列の両端にある「余分な空白」を取り除くメソッド
=== ""で、その文字列が空であるかどうかを確認

var number = parseFloat(input);
parseFloat()は文字列を「浮動小数点数」に変換するJavaScriptの関数

(isNaN(number))
isNaN()は値がNaN（数値ではない）であるかどうかを判定する関数　（Not-a-Number）

return　関数の結果（戻り値）を呼び出し元に返すためのキーワード
return null;　関数の結果として「値がない（無効）」ことを返す。
return number;　関数の結果として、有効な数値を返す。
*/ 

  