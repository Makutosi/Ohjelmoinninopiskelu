/* Choose 7 different numbers from 40 numbers (1-40) */

function generateLottoNumbers() {
    var numbers = [];
    
    while (numbers.length < 7) {
        var num = Math.floor(Math.random() * 40) + 1;
        if (numbers.indexOf(num) === -1) {
            numbers.push(num);
        }
    }

    // if 文を使ってソート
    numbers.sort(function(a, b) {
        if (a < b) {
            return -1; // a を前にする（降順）
        }
        if (a > b) {
            return 1; // b を前にする（降順）
        }
        return 0; // a と b が等しい場合（順番そのまま）
    });

    document.getElementById("result").innerText = "Lotto Numbers: " + numbers.join(", ");
}

/* 
function generateLottoNumbers() {
この関数は、7つの異なるロット番号を生成し、それを画面に表示する

var numbers = [];
numbers は選ばれたロット番号を格納する配列  最初は空の配列

while (numbers.length < 7) {
配列の長さが7未満の間、ループが続く（つまり、7つの異なる数字が選ばれるまで繰り返す）

ランダムな数値を生成する var num = Math.floor(Math.random() * 40) + 1;
Math.random() は 0以上1未満 の小数を生成する。
Math.random() * 40 は 0以上40未満 の小数を生成する（例：0.5 * 40 = 20.0）。
Math.floor(...) で小数部分を切り捨て、0以上39以下 の整数にする（例：20.9 → 20）。
+ 1 をすることで 1以上40以下 の整数を得る（例：20 + 1 = 21）

indexOf() 配列の中に特定の値があるかどうかを調べるメソッド
配列にある場合 → その値があるインデックス（位置）を返す
配列にない場合 → -1 を返す
var arr = [10, 20, 30, 40];
console.log(arr.indexOf(20)); // 1  -> 20 はインデックス 1 にある
console.log(arr.indexOf(50)); // -1  -> 50 は配列に存在しない

if (numbers.indexOf(num) === -1) {
    numbers.push(num);
}
numbers.indexOf(num) === -1 のとき → num はまだ numbers に存在しない
その場合だけ numbers.push(num); を実行し、新しい数を追加する
つまり、同じ数が2回追加されるのを防ぐ
num = 25 → numbers.indexOf(25) === -1 → numbers.push(25);
num = 10 → numbers.indexOf(10) !== -1（すでにある）→ push しない

sort() メソッドは、配列の要素を並び替えるためのメソッド
デフォルトでは 文字列として並び替える ため、数値の並び替えには注意が必要
var arr = [10, 2, 30, 25, 8];
arr.sort();
console.log(arr); // [10, 2, 25, 30, 8]  正しく並ばない！

if 文の動作
a = 30, b = 10 の場合
30 > 10 なので、return 1;
→ 10 を前にする
a = 10, b = 2 の場合
10 > 2 なので、return 1;
→ 2 を前にする
a = 2, b = 8 の場合
2 < 8 なので、return -1;
→ 2 をそのまま前にする
この比較を繰り返し、最終的に [2, 8, 10, 25, 30] に並ぶ*/

/* 
function generateLottoNumbers() {
    var numbers = [];
    
    while (numbers.length < 7) {
        var num = Math.floor(Math.random() * 40) + 1;
        if (numbers.indexOf(num) === -1) {
            numbers.push(num);
        }
    }

    numbers.sort(function(a, b) { return a - b; });

    document.getElementById("result").innerText = "Lotto Numbers: " + numbers.join(", ");
}
*/

/* 
function(a, b) { return a - b; } のしくみ
（function(a, b) {}）は、「比較関数（Comparison Function）
 [30, 10, 25, 8, 2] をソートする
a = 30, b = 10 の場合

30 - 10 = 20（正の値）
10の方が小さいので、10を前にする
[10, 30, 25, 8, 2]
a = 30, b = 25 の場合

30 - 25 = 5（正の値）
25の方が小さいので、25を前にする
[10, 25, 30, 8, 2]
a = 30, b = 8 の場合

30 - 8 = 22（正の値）
8の方が小さいので、8を前にする
[10, 25, 8, 30, 2]
a = 30, b = 2 の場合

30 - 2 = 28（正の値）
2の方が小さいので、2を前にする
[10, 25, 8, 2, 30]
この比較をすべての要素に対して繰り返し、完全に並び替えられる
[2, 8, 10, 25, 30]*/