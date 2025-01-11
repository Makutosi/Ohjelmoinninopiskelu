/* Write a function that returns the smallest and largest value from a given array variable. 
For example, minMax([8, 4, 9, 6, 2]) 2 and 9 */

function minMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Input must be a non-empty array";
    }

    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);

    return "Smallest: " + min + ", Largest: " + max;
}

var result = minMax([8, 4, 9, 6, 2]);
console.log(result);

/* 
function minMax(arr)関数定義, arr 配列として渡されるデータを受け取るための引数
if (!Array.isArray(arr) || arr.length === 0) 渡された arr が有効な配列かどうかを確認する条件文
!Array.isArray(arr) 変数 arr が配列でない場合に true 
arr.length === 0  空配列なら長さが 0 なので true

var min = Math.min.apply(null, arr); 配列 arr の中の最小値を取得
Math.min.apply(null, arr)
Math.min は、複数の数値を引数として受け取り、その中の最小値を返す関数
Math.min(1, 5, 3); // 結果: 1
ただし、配列を直接渡すことはできない。
Math.min([1, 5, 3]); // 結果: NaN (配列は無効)
そこで、apply を使って配列の要素を個々の引数として展開。
Math.min.apply(null, [1, 5, 3]);
// Math.min(1, 5, 3) と同じ動作

var max = Math.max.apply(null, arr); 配列 arr の中の最大値を取得
Math.max:
与えられた数値の中で最大値を返す関数。
例: Math.max(3, 5, 1) は 5 を返す。

Math.max.apply(null, arr):
apply を使い、配列の要素を Math.max に渡して最大値を計算。

入力チェック: 配列でない、または空配列ならエラーメッセージを返す。
最小値の計算: 配列の中から最小値を取得。
最大値の計算: 配列の中から最大値を取得。
結果を文字列として返す: 整形した文字列を返す。
*/