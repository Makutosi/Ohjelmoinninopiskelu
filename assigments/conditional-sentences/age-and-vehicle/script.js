/* Write a program that asks the user's age and checks what vehicle they are allowed to drive:
16 years - bicycle, <18 years - moped, otherwise car*/

// Get references to HTML elements
var ageInput = document.getElementById("age");
var checkButton = document.getElementById("checkButton");
var resultParagraph = document.getElementById("result");
//id="age"、id="checkButton"、id="result"の3つの要素をJavaScriptで操作するために取得
//ageInput は年齢を入力する<input>要素
//checkButton はクリックするボタン要素
//resultParagraph は結果を表示する<p>要素

// Add a click event listener to the button
//ボタンがクリックされたときに、指定した関数が実行（function() {}）
checkButton.addEventListener("click", function() {
  var age = parseInt(ageInput.value);
    //ageInput.value:入力ボックスにユーザーが入力した値を取得 文字列（例: "16"）
    //parseInt 文字列を数値（整数）に変換 "16" → 16
  if (isNaN(age) || age <= 0) {
    resultParagraph.textContent = "Please enter a valid age.";
    return;
  }
  /*年齢が無効な場合、エラーメッセージ「Please enter a valid age.」を表示し、以降の処理を終了
   isNaN(age): 年齢が数字でない場合にtrueを返す "abc"のような無効な入力を検出
   age <= 0: 年齢が0以下（負の値など）の場合、無効*/

  var message;

  if (age === 16) {
    message = "You can drive a bicycle.";
  } else if (age < 18) {
    message = "You can drive a moped.";
  } else {
    message = "You can drive a car.";
  }

  resultParagraph.textContent = message;
  //結果を表示する<p>要素の中身を、判定したメッセージに書き換え
});
