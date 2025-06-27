/* the program converts a 2-dimensional array to a table format.
For example, [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]] */

// ページが読み込まれたときに実行される処理
// データ（2次元配列）
var data = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

// ボタンを取得（再利用可能にする）
var button = document.getElementById("show-table");

// テーブルを作成する関数（引数なしで data を使う）
function createTable() {
    var container = document.getElementById("table-container");
    var existingTable = container.querySelector("table");

    if (existingTable) {
        // すでにテーブルがある場合、表示/非表示を切り替える
        existingTable.style.display = (existingTable.style.display === "none") ? "table" : "none";
        return;
    }

    var table = document.createElement("table");

    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < data[i].length; j++) {
            var cell = document.createElement("td");
            cell.textContent = data[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
}

// ボタンをクリックしたら createTable() を実行
button.onclick = createTable;



/* 
var data = [...
配列の中に、さらに配列（行）を格納 → 2次元配列の形になっている

var button = document.getElementById("show-table"); -> getElementById("show-table") で、ボタンの要素を取得
var container = document.getElementById("table-container"); 
-> getElementById("table-container") で、表を表示するための <div> を取得

function createTable(array) {
-createTable という関数を定義, 引数 array に2次元配列を受け取る, この配列を元に、表（<table>）を作成する

var table = document.createElement("table");
document.createElement("table") → <table> タグ（空のテーブル要素）をJavaScriptで新しく作成
var table に作成した <table> 要素を格納
<table></table> （HTMLにはまだ追加されていない）

配列の行（<tr>）を作成 for (var i = 0; i < array.length; i++) {  -> for ループを使って、配列の各行を処理
配列の行数 array.length → 例えば [ [1,2,3], [4,5,6] ] なら 2行 なので、i = 0, 1 の2回ループする

var row = document.createElement("tr");
新しい <tr> （行）を作成 document.createElement("tr") 
var row に作成した <tr> を格納
（1回目のループ時）
<table>
    <tr></tr> <!-- 1行目作成 -->
</table>

各セル（<td>）を作成 for (var j = 0; j < array[i].length; j++) { -> 2つ目の for ループは 1行の中の各要素（列）を処理
その行の列数 array[i].length → 例えば [1,2,3] なら 3列 なので、j = 0, 1, 2 の3回ループする

var cell = document.createElement("td");
新しい <td> （セル）を作成 document.createElement("td")
var cell に作成した <td> を格納
（1行目・1列目のセルが作成された時点）
<table>
    <tr>
        <td></td> <!-- 1行1列目 -->
    </tr>
</table>

セルにデータを入れる cell.textContent = array[i][j];
array[i][j] をセルの textContent にセット → 例えば array[0][0] は 1 なので、<td>1</td> になる
（1行目・1列目にデータが入った時点）
<table>
    <tr>
        <td>1</td> <!-- 1が入る -->
    </tr>
</table>

セルを行に追加 row.appendChild(cell);
appendChild(cell) で、作成した <td> を <tr> に追加
1行目に順番にセルが追加される
<table>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>1</td>
        <td>24</td>
    </tr>
</table>

行をテーブルに追加  table.appendChild(row);
appendChild(row) で、作成した <tr> を <table> に追加 

この処理を for ループで すべての行に対して繰り返す
<table>
    <tr>
        <td>1</td><td>2</td><td>1</td><td>24</td>
    </tr>
    <tr>
        <td>8</td><td>11</td><td>9</td><td>4</td>
    </tr>
    <tr>
        <td>7</td><td>0</td><td>7</td><td>27</td>
    </tr>
    <tr>
        <td>7</td><td>4</td><td>28</td><td>14</td>
    </tr>
    <tr>
        <td>3</td><td>10</td><td>26</td><td>7</td>
    </tr>
</table>



*/
