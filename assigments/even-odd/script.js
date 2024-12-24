/* Write a program that tells you whether a given number is even or odd */

function checkEvenOrOdd() {
    var input = document.getElementById('numberInput').value; // 入力フィールドの値を取得
    var result = document.getElementById('result');           // 結果を表示する要素を取得
  
    if (input === '') {                                       // 入力が空の場合のチェック
      result.textContent = 'Please enter a number.';          // メッセージを表示
      return;                                                 // 処理を終了
    }
  
    var number = parseInt(input);                             // 入力値を整数に変換
  
    if (isNaN(number)) {                                      // 数値に変換できなかった場合（Not a Number）
      result.textContent = 'That is not a valid number.';     // 無効な値のエラーメッセージを表示
    } else if (number % 2 === 0) {                            // 数値が偶数の場合
      result.textContent = number + ' is even.';              // 偶数であることを表示
    } else {                                                  // 数値が奇数の場合
      result.textContent = number + ' is odd.';               // 奇数であることを表示
    }
  }
  
  var button = document.getElementById('checkButton');        // ボタン要素を取得
  button.onclick = checkEvenOrOdd;                            // ボタンがクリックされたときに関数を実行

/* ===	厳密な等価演算子	型と値の両方が同じ場合のみtrueを返す
   ==	等価演算子	型の違いを無視して値だけを比較する */