

function calculateDaysOld(birthday, today) {
    // 各月の累積日数を格納する配列
    var cumulativeDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    
    // 年月日の抽出
    var birthYear = birthday.getFullYear();
    var birthMonth = birthday.getMonth(); // 0から始まる（1月は0）
    var birthDay = birthday.getDate();

    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();

    // 年単位の日数計算（うるう年を考慮）
    var yearDays = (currentYear - birthYear) * 365.25;

    // 月単位の日数計算
    var birthMonthDays = cumulativeDays[birthMonth] + birthDay;
    var currentMonthDays = cumulativeDays[currentMonth] + currentDay;

    // 現在年が誕生年と異なる場合、月の日数調整
    if (currentYear > birthYear) {
        yearDays -= birthMonthDays; // 誕生年の残り日数を引く
        yearDays += currentMonthDays; // 現在年の経過日数を加える
    } else {
        // 同じ年の場合、単純に月日の日数差を計算
        yearDays = currentMonthDays - birthMonthDays;
    }

    // 結果を整数にして返す
    return Math.floor(yearDays);
}

// 使用例
var birthday = new Date(1990, 5, 15); // 1990年6月15日
var today = new Date(2025, 0, 19);    // 2025年1月19日

console.log("You have lived for " + calculateDaysOld(birthday, today) + " days.");

/* 
累積日数（cumulativeDays）を用意する
var cumulativeDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

誕生日と今日の日付を取得する
var birthYear = birthday.getFullYear();
var birthMonth = birthday.getMonth(); // 0から始まる（1月は0）
var birthDay = birthday.getDate();

var currentYear = today.getFullYear();
var currentMonth = today.getMonth();
var currentDay = today.getDate();
getFullYear() → 西暦（例: 1990年, 2025年）
getMonth() → 0から始まる月番号（例: 1月は0, 2月は1, …）
getDate() → その月の日付（1日, 2日, 3日...）

年単位の日数を計算（うるう年考慮）
var yearDays = (currentYear - birthYear) * 365.25;
1年は365日だが、4年ごとに**うるう年（366日）**があるので、1年=365.25日として計算
(現在の年 - 生まれた年) × 365.25 で、大まかな年数の日数を求める 
たとえば 1990年6月15日生まれ → 2025年1月19日 なら
(2025 - 1990) × 365.25 = 35 × 365.25 = 12783.75日 この時点では誤差があるので、後で調整

誕生月と現在の月の累積日数を取得
var birthMonthDays = cumulativeDays[birthMonth] + birthDay;  生まれた月の日数を計算（1年の何日目か）
1990年6月15日生まれ birthMonthDays = cumulativeDays[5] + 15; -> 151 + 15 = 166（6月15日は166日目）
var currentMonthDays = cumulativeDays[currentMonth] + currentDay;  今日の月の日数を計算（1年の何日目か）
2025年1月19日 currentMonthDays = cumulativeDays[0] + 19; -> 0 + 19 = 19（1月19日は19日目）

誕生年と現在年の月日を調整する
    if (currentYear > birthYear) {
        yearDays -= birthMonthDays; // 誕生年の残り日数を引く
        yearDays += currentMonthDays; // 現在年の経過日数を加える
    } else {
        // 同じ年の場合、単純に月日の日数差を計算
        yearDays = currentMonthDays - birthMonthDays;
    }
「1990年6月15日生まれ」「2025年1月19日が今日」の場合
最初に (2025 - 1990) * 365.25 = 35 × 365.25 = 約12783日 を計算

誕生年の6月15日（1990年6月15日）以前の無関係な日を引く
yearDays -= birthMonthDays; -> birthMonthDays は、誕生日 6月15日までの累積日数（= 31+28+31+30+31+15 = 166日）

現在年の「2025年1月19日」までの経過日数を足す
yearDays += currentMonthDays; -> currentMonthDays は 「2025年1月1日から1月19日までの日数」（= 19日）

else（同じ年の場合） 単純に日数を引く
yearDays = currentMonthDays - birthMonthDays;

結果を整数にして返す
return Math.floor(yearDays);  小数点が出ることがあるので、Math.floor() を使って切り捨て

JavaScriptで getMonth() + 1 を使うときは cumulativeDays の参照を -1 する必要がある！
JavaScript, Java, C言語は 0 から始まる（月: 0〜11）
Python, C#, PHP などの新しい言語は 1 から始まる（月: 1〜12）*/
