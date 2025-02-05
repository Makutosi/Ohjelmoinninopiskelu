/* Calculates the number of days a person has lived since a given date of birth. */

function calculateDaysOld(birthYear, birthMonth, birthDay) {
    var today = new Date();
    var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  
    // 未来の日付をチェック
    if (birthDate > today) {
        return "Future dates are invalid";
    }
  
    // 生年月日と今日の日付の差を計算（ミリ秒単位）
    var timeDiff = today - birthDate; 
    var daysOld = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // ミリ秒を日数に変換
  
    return daysOld;
  }
  
  // 使用例
  var daysOld = calculateDaysOld(2000, 1, 1);
  console.log("You have lived for " + daysOld + " days.");

  /* 
  new Date() を使って 現在の日付と時刻 を取得
  var today = new Date();
  例えば、2025年2月5日 に実行すると today には 2025-02-05T00:00:00.000Z が入る

  birthDate（生年月日を Date オブジェクトに変換）
  var birthDate = new Date(birthYear, birthMonth - 1, birthDay);  例: 2000年1月1日 → new Date(2000, 0, 1)

  birthDate が today より未来だった場合、エラーメッセージを返す
  if (birthDate > today) {
    return "Future dates are invalid";
}

  today（今日の日付） から birthDate（生年月日）を引くと、ミリ秒単位の経過時間 が求められる
  var timeDiff = today - birthDate;  JavaScript の Date オブジェクトでは、日付同士の引き算が可能
  var timeDiff = new Date(2025, 1, 5) - new Date(2000, 0, 1);  timeDiff には、生まれてからのミリ秒数 が入る。

  timeDiff はミリ秒なので、1日のミリ秒数 1000 * 60 * 60 * 24 で割ると日数になる
  var daysOld = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  1日は 1000ミリ秒 × 60秒 × 60分 × 24時間 = 86400000ミリ秒 
  Math.floor() を使って 小数点以下を切り捨てる

    // 25年（うるう年考慮なし）→ 25 × 365.25 = 約 9131 日
    // 2025年2月5日 - 2000年1月1日 のミリ秒数を計算（仮の値）
    var timeDiff = 789923400000; // ミリ秒
    var daysOld = Math.floor(789923400000 / (1000 * 60 * 60 * 24));
    console.log(daysOld); // 9131 日

  return daysOld; 計算した 生きた日数 を関数の戻り値として返す
*/