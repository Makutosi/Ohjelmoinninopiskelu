

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
