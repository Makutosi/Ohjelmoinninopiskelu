/* Press the button and it will print the day of the week */

document.getElementById('dayButton').addEventListener('click', function () {
    var dayDisplay = document.getElementById('dayDisplay'); // 表示用の<p>要素を取得します。
    var date = new Date(); // 現在の日付と時刻を取得するDateオブジェクトを作成します。
    var day = date.getDay(); // Dateオブジェクトから曜日を数値(0-6)で取得します。0は日曜日、6は土曜日を表します。
    var dayName;

    switch (day) { // `day`の値に応じて曜日名を決定します。
        case 0:
            dayName = 'Sunday'; // dayが0の場合
            break;
        case 1:
            dayName = 'Monday'; // dayが1の場合
            break;
        case 2:
            dayName = 'Tuesday'; // dayが2の場合
            break;
        case 3:
            dayName = 'Wednesday'; // dayが3の場合
            break;
        case 4:
            dayName = 'Thursday'; // dayが4の場合
            break;
        case 5:
            dayName = 'Friday'; // dayが5の場合
            break;
        case 6:
            dayName = 'Saturday'; // dayが6の場合
            break;
        default:
            dayName = 'Unknown'; // 不正な値が入った場合（通常は起こりません）。
    }

    dayDisplay.textContent = 'Today is ' + dayName + '.'; // 決定した曜日名を<p>要素に表示します。
});

