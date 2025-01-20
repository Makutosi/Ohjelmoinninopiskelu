/* Calculates the number of days a person has lived since a given date of birth. */

function calculateDaysOld(birthYear, birthMonth, birthDay) {
    // 生年月日と今日の日付を生成
    var birthDate = new Date(birthYear, birthMonth - 1, birthDay); // 月は0から始まる
    var today = new Date();
  
    // 日付の差分をミリ秒で取得し、日数に変換
    var differenceInMilliseconds = today - birthDate;
    var daysOld = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  
    // 結果を整数にして返す
    return Math.floor(daysOld);
  }
  
  // 使用例
  var daysOld = calculateDaysOld(2000, 1, 1); // 2000年1月1日生まれ
  console.log("You have lived for " + daysOld + " days.");

/* 
birthDate と today を作成
var birthDate = new Date(2000, 0, 1); // 2000年1月1日
var today = new Date(2025, 0, 20);   // 2025年1月20日

差分をミリ秒単位で計算
var differenceInMilliseconds = today - birthDate;
console.log(differenceInMilliseconds); // 789500400000 ミリ秒

ミリ秒を日数に変換
var oneDayInMilliseconds = 1000 * 60 * 60 * 24;
var days = differenceInMilliseconds / oneDayInMilliseconds;
console.log(days); // 9124 日
*/
  