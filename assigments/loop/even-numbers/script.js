/* Write a program that asks the user for an even number
and then prints all even numbers up to that point excluding 0*/

// 偶数を計算して表示する関数
function printEvenNumbers() {
    var input = document.getElementById('userInput').value;
    var resultElement = document.getElementById('result');
    var userNumber = parseInt(input); // 入力された文字列を整数に変換,文字列'10'を整数10に変換
    // document.getElementById: HTML内の指定されたID（userInputやresult）を持つ要素を取得
    // userInputでは入力された値（文字列,resultでは結果を表示するための要素を取得
  
    // 入力が偶数かどうかを確認
    if (isNaN(userNumber) || userNumber <= 0 || userNumber % 2 !== 0) {
      resultElement.textContent = 'Please enter a valid positive even number.';
      return;
    }
    // isNaN(userNumber)で、入力が数値ではない場合をチェック
    // userNumber <= 0で、0以下の値を排除
    // どれか1つでも条件に当てはまれば、エラーメッセージを表示して処理を終了
  
    // 偶数を計算して配列に追加
    var evenNumbers = []; // 空の配列evenNumbersを作成
    for (var i = 2; i <= userNumber; i += 2) {
      evenNumbers.push(i);
    }
    // forループでは、iを2から始めて、i += 2で偶数だけをインクリメント
    // iがuserNumber以下である限り、偶数をevenNumbersに追加します（push）
  
    // 結果を表示
    resultElement.textContent = 'Even numbers: ' + evenNumbers.join(', ');
    // 配列evenNumbersをカンマ区切りの文字列に変換し、結果をHTML要素resultに表示
    // 入力が10の場合、evenNumbersは[2, 4, 6, 8, 10]となり、joinにより'2, 4, 6, 8, 10'として表示
  }
  
  // ボタンにイベントリスナーを追加
  document.getElementById('submitBtn').addEventListener('click', printEvenNumbers);
  // ボタンsubmitBtnがクリックされたとき、printEvenNumbers関数を実行
  // addEventListenerはHTMLとJavaScriptの動作をつなぐ役割を果たす