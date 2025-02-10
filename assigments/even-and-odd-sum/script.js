/* Make a program that asks the user for two numbers (the second one must be larger) 
and prints the even and odd numbers and their sums in between.*/

function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (num1 >= num2) {
        alert("The second number must be larger than the first number.");
        return;
    }

    var evenNumbers = [];
    var oddNumbers = [];
    var evenSum = 0;
    var oddSum = 0;

    // Determine the starting point for even numbers
    var evenStart = (num1 % 2 === 0) ? num1 : num1 + 1;
    for (var i = evenStart; i < num2; i += 2) {
        evenNumbers.push(i); // 偶数を配列に追加
        evenSum += i; // 偶数の合計を更新
    }

    // Determine the starting point for odd numbers
    var oddStart = (num1 % 2 !== 0) ? num1 : num1 + 1;
    for (var i = oddStart; i < num2; i += 2) {
        oddNumbers.push(i); // 奇数を配列に追加
        oddSum += i; // 奇数の合計を更新
    }

    // 配列をカンマ区切りの文字列に変換
    document.getElementById("evenResult").innerHTML = 
    "Even Numbers: " + evenNumbers.join(", ") + "<br>Sum of Even Numbers: " + evenSum;

    // 配列をカンマ区切りの文字列に変換
    document.getElementById("oddResult").innerHTML = 
    "Odd Numbers: " + oddNumbers.join(", ") + "<br>Sum of Odd Numbers: " + oddSum;
}

/* 
この calculate 関数は、2つの数値を入力し、それらの間にある偶数と奇数をリストアップし、それぞれの合計を計算して表示する

入力値の取得
var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value);
document.getElementById("num1").value で <input> の値を取得。
parseInt() を使って文字列から整数に変換

入力チェック
if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
}
isNaN(num1) は num1 が数値でない場合に true。
num1 または num2 が数値でなければ、アラートを表示し、処理を終了

数値の大小関係チェック
if (num1 >= num2) {
    alert("The second number must be larger than the first number.");
    return;
}
num1 が num2 以上だった場合、アラートを表示して終了。
これは「最初の数値 num1 が num2 より小さい」ことを保証するため

偶数・奇数の変数を用意
それぞれ格納するための変数を定義
var evenNumbers = [];  偶数を格納するための配列 （Array）
var oddNumbers = [];  奇数を格納するための 配列（Array） 
var evenSum = 0;  偶数の合計　ループの中で、偶数が見つかるたびに 加算 される
var oddSum = 0;  奇数の合計　　ループの中で、奇数が見つかるたびに 加算 される

*偶数のリストと合計を計算
var evenStart = (num1 % 2 === 0) ? num1 : num1 + 1;
for (var i = evenStart; i < num2; i += 2) {
    evenNumbers.push(i); // 配列に追加
    evenSum += i;
}

var evenStart = (num1 % 2 === 0) ? num1 : num1 + 1;    
evenStart は、ループの開始地点を決める変数 
三項演算子 「条件が true なら 値1 を、それ以外なら 値2 を使う」
偶数ならそのまま使う,奇数なら +1 して偶数にする

for (var i = evenStart; i < num2; i += 2)  -> for (初期値; 条件; 更新処理) { 処理内容 }
i を evenStart（最初の偶数）に設定, i が num2 より小さい間はループを続ける, i に 2 を足して次の偶数にする

push(i) → 配列に i を追加
+= i → 合計値に i を加算



*奇数のリストと合計を計算
var oddStart = (num1 % 2 !== 0) ? num1 : num1 + 1;
for (var i = oddStart; i < num2; i += 2) {
    oddNumbers.push(i); // 配列に追加
    oddSum += i;
}
num1 が奇数ならそのまま、偶数なら +1 して奇数から始める。
for ループで i を2ずつ増やしながら num2 の手前までの奇数を取得。
oddNumbers に文字列として追加し、oddSum に加算

結果をHTMLに出力
document.getElementById("evenResult").innerHTML = "Even Numbers: " + evenNumbers + "<br>Sum of Even Numbers: " + evenSum;
document.getElementById("oddResult").innerHTML = "Odd Numbers: " + oddNumbers + "<br>Sum of Odd Numbers: " + oddSum;
偶数のリストと合計を evenResult に表示。
奇数のリストと合計を oddResult に表示
*/
