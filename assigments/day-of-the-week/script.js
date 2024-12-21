/* Press the button and it will print the day of the week */

document.getElementById('dayButton').addEventListener('click', function () {
    var dayDisplay = document.getElementById('dayDisplay'); // 表示用の<p>要素を取得
    var date = new Date(); // 現在の日付と時刻を取得するDateオブジェクトを作成
    var day = date.getDay(); // Dateオブジェクトから曜日を数値(0-6)で取得します。0は日曜日、6は土曜日を表す。
    var dayName;

    switch (day) { // `day`の値に応じて曜日名を決定
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

    dayDisplay.textContent = 'Today is ' + dayName + '.'; // 決定した曜日名を<p>要素に表示
});

/* クリックするたびに現在の曜日を正確に表示する
   switch文
    dayの値（0～6）に応じて対応する曜日名を選択
    各caseに該当したとき、dayNameに曜日の名前（例: "Monday"）を割り当て
    breakは、該当するケースを実行した後、残りのケースをスキップするために必要

textContent
    <p>要素（id="dayDisplay"）の内容を変更。'Today is ' + dayName + '.'という文字列を表示。*/

