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
    return; // 無効な入力があれば計算を中止
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

  