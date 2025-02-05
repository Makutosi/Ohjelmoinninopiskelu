/* Calculates the number of days a person has lived since a given date of birth. */

function calculateDaysOld(birthYear, birthMonth, birthDay) {
    // Get the current date
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1; // Months are 0-based, so add 1
    var currentDay = today.getDate();
  
    // Array representing cumulative days at the end of each month, starting from index 1
    var daysAtEndOfMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  
    // Calculate the number of days from January 1st to the birthday in the birth year
    var birthDaysThisYear = daysAtEndOfMonth[birthMonth] + birthDay;
  
    // Calculate the number of days from January 1st to today in the current year
    var currentDaysThisYear = daysAtEndOfMonth[currentMonth] + currentDay;
  
    // Calculate the number of years between the birth year and the current year
    var yearsDifference = currentYear - birthYear;
  
    // Calculate the total number of days lived
    var totalDays = (yearsDifference * 365.25) + (currentDaysThisYear - birthDaysThisYear);
  
    // Convert the result to an integer and return it
    return Math.floor(totalDays);
  }
  
  // Example usage
  var daysOld = calculateDaysOld(2000, 1, 1); // Born on January 1, 2000
  console.log("You have lived for " + daysOld + " days.");

  /* 
  関数の定義
  function calculateDaysOld(birthYear, birthMonth, birthDay)
  生年月日を入力すると、その日から今日までの経過日数（何日生きたか）を計算する

  今日の日付を取得
  var today = new Date();
  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth() + 1; // 月は0から始まるため+1
  var currentDay = today.getDate();

  各月の累積日数を表す配列
  var daysAtEndOfMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

  生まれた年の1月1日から誕生日までの日数
  var birthDaysThisYear = daysAtEndOfMonth[birthMonth - 1] + birthDay;
  daysAtEndOfMonth[birthMonth - 1] で、その月の1日までの日数を取得し、生まれた日 (birthDay) を加える
  例：2000年5月20日生まれの場合
  5月1日は daysAtEndOfMonth[5-1] = daysAtEndOfMonth[4] = 120 日目
  20日を足す → 120 + 20 = 140　つまり、2000年1月1日から 5月20日 までは 140 日

  今年の1月1日から今日までの日数
  var currentDaysThisYear = daysAtEndOfMonth[currentMonth - 1] + currentDay;
  例：今日が 2025年2月5日 の場合
  daysAtEndOfMonth[2-1] = daysAtEndOfMonth[1] = 31 → 2月1日は 31日目
  5日を足す → 31 + 5 = 36　　つまり、2025年1月1日から 2月5日 までは 36 日
  
  年数の差を計算
  var totalDays = (yearsDifference * 365.25) + (currentDaysThisYear - birthDaysThisYear);
  yearsDifference * 365.25
  1年の平均日数 を 365.25 として、経過年数分の日数を計算
  （うるう年の影響をざっくり考慮）

  (currentDaysThisYear - birthDaysThisYear)
  今年の経過日数 ー 生まれた年の経過日数　→ 今年の誕生日が来たかどうかを調整
  
  例：2000年5月20日生まれで、今日が 2025年2月5日 の場合

  25年 × 365.25 → 9131.25 日
  currentDaysThisYear (36) - birthDaysThisYear (140) → -104
  合計 9131.25 - 104 = 9027.25 → Math.floor(9027.25) = 9027 　つまり、9027日生きている
  
  結果を返す
  return Math.floor(totalDays);
  小数点以下を切り捨て、整数の日数を返す*/
  