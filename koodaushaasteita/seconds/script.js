/* Make a function that converts the given hours, minutes, and seconds into seconds. 
So, calling the function seconds(10, 10, 10) would return 36610 seconds.*/

function seconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

console.log(seconds(10, 10, 10)); // 36610

/*
関数定義:
関数名は seconds で、引数として hours（時）、minutes（分）、seconds（秒）の3つを受け取るる。

計算:
hours * 3600：1時間は3600秒なので、時を秒に変換。
minutes * 60：1分は60秒なので、分を秒に変換。
seconds：与えられた秒をそのまま加えるる。
それらを足し合わせることで、トータルの秒数を算出。

戻り値:
計算結果を関数の戻り値として返す

テスト:
console.log を使って、実際に関数を呼び出し、結果が正しいことを確認

*「戻り値」 は、英語で 「return」 と呼ばれる概念で、関数が処理を終えたあとに「結果」として返す値のこと
function add(a, b) {
  return a + b;
}

let result = add(3, 5); // 関数を呼び出す
console.log(result); // 8 と表示される

return は関数の「結果」を呼び出し元に渡す:

add(3, 5) を呼び出すと、return a + b の計算結果 8 が返される。
この結果が変数 result に代入される。
関数の処理は return を実行すると終了:

return の後に書かれたコードは実行されない。

＊もし関数で return を省略すると、戻り値は自動的に undefined になる
function noReturn() {
  console.log("Hello!");
}

let result = noReturn(); // "Hello!" と表示される
console.log(result); // undefined と表示される


*/