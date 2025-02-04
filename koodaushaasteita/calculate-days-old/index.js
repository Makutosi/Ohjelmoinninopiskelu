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
  console.log("You have lived for " + daysOld + " days."); // You have lived for 9166 days. 4.2.2025

/* 
function calculateDaysOld(birthYear, birthMonth, birthDay) {
calculateDaysOld という名前の関数を定義
birthYear（生まれた年）、birthMonth（生まれた月）、birthDay（生まれた日）という3つの引数を受け取る
これらを使って、生年月日から今日までの経過日数を計算

var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
Date オブジェクトを使って、生年月日を表す birthDate を作成
JavaScriptでは月が0から始まる ため、birthMonth - 1 として 1 を引く
例えば 2000, 1, 1（2000年1月1日）と指定すると、new Date(2000, 0, 1) となる

var today = new Date();
today は 今日の日付 を取得するための Date オブジェクト　new Date() だけで現在の日付と時刻を取得できる

var differenceInMilliseconds = today - birthDate;
today（今日）から birthDate（生年月日）を引くことで、2つの日付の差 を計算
JavaScript では、日付を引き算すると「ミリ秒単位（1/1000秒）」の差が求められる

var daysOld = differenceInMilliseconds / (1000 * 60 * 60 * 24);
differenceInMilliseconds は ミリ秒単位の差 なので、これを 日単位 に変換する必要がある
1日は 1000ミリ秒 × 60秒 × 60分 × 24時間 = 86400000ミリ秒 なので、
differenceInMilliseconds を 86400000 で割ると 日数 に変換できる

return Math.floor(daysOld);
daysOld は計算の結果、小数になる可能性があり、Math.floor() を使って、小数点以下を切り捨てし、整数に
例えば daysOld = 8796.75 なら、Math.floor(8796.75) → 8796 となる

var daysOld = calculateDaysOld(2000, 1, 1);
calculateDaysOld(2000, 1, 1) を呼び出すことで、2000年1月1日生まれの人が 何日生きているか を計算

console.log("You have lived for " + daysOld + " days.");
console.log() を使って、計算結果を表示

new Date(birthYear, birthMonth - 1, birthDay) で生年月日を作る（JSの月は0から始まる）。
new Date() で今日の日付を取得する。
today - birthDate で ミリ秒単位の差 を計算する。
1日のミリ秒（86400000）で割って 日数 に変換する。
Math.floor() で整数化して結果を返す。
*/
  