/* Enter the year and check if it is a leap year. */

document.getElementById("checkButton").addEventListener("click", function () {
    var year = document.getElementById("yearInput").value;
    var resultText = "";
  
    if (year === "") {
      resultText = "Please enter a year.";
    } else {
      year = parseInt(year, 10);
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        resultText = year + " is a leap year.";
      } else {
        resultText = year + " is not a leap year.";
      }
    }
  
    document.getElementById("result").textContent = resultText;
  });

  /* イベントリスナーの設定
    　document.getElementById("checkButton").addEventListener("click", function () {
     　document.getElementById("checkButton")　HTMLのid="checkButton"の要素（ボタン）を取得
      .addEventListener("click", function () {...})　ボタンがクリックされたときに実行される関数を登録

    年の入力値を取得
    　var year = document.getElementById("yearInput").value;
      document.getElementById("yearInput")　HTMLのid="yearInput"の要素（入力フィールド）を取得
      .value　入力フィールドに入力された値を文字列として取得

    　判定結果を保存するための変数を初期化　var resultText = "";

    入力値の検証
    　if (year === "") {
        resultText = "Please enter a year.";
      }　ユーザーが何も入力していない場合、エラーメッセージを設定

    うるう年の判定 　year = parseInt(year, 10);
      parseInt(year, 10)　入力された文字列を整数に変換、10は10進数として解釈することを指定、10 は、基数（radix）
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      条件式：
      year % 4 === 0　年が4で割り切れる
      year % 100 !== 0　年が100で割り切れない
      year % 400 === 0　年が400で割り切れる
    結果メッセージを生成
    　resultText = year + " is a leap year.";
      resultText = year + " is not a leap year.";
　　
    結果を表示
    　document.getElementById("result").textContent = resultText;
      document.getElementById("result")　HTMLのid="result"の要素（結果表示用の段落要素）を取得
      .textContent　段落要素にテキストを設定

       */
  