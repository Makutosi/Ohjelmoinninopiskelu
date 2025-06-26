/*  Write a program that adds the first 10 numbers together */

function calculateSum() {
    var sum = 0; // 合計を保存する変数を初期化（最初は0）
    for (var i = 1; i <= 10; i++) // 1から10まで繰り返すループ
    {
        sum += i;
    }
    var outputDiv = document.getElementById("numberOutput"); // HTML内のid="numberOutput"の要素を取得
    outputDiv.textContent = "The sum of the first 10 numbers is: " + sum; // 計算結果をHTMLに表示
}

/*
for (var i = 1; i <= 10; i++) 
i = 1: ループが始まる時、i の値を1に設定。
i <= 10: i が10以下の場合だけ、ループを続ける。
i++: ループが1回終わるたびに i の値を1増やす

sum += i;  現在の数値 i を sum に加えます
最初: sum = 0
1回目: sum = 0 + 1 = 1
2回目: sum = 1 + 2 = 3
最後: sum = 45 + 10 = 55

var outputDiv = document.getElementById("numberOutput");
HTML内で <div id="numberOutput"> に対応する要素を取得
*/