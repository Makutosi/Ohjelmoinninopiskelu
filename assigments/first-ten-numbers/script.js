/* Write a program that prints the first 10 numbers */
/*
window.onload = function() {
    var button = document.getElementById('show-numbers');
    var numberList = document.getElementById('number-list');

    button.onclick = function() {
        numberList.innerHTML = ''; // Clear existing numbers
        for (var i = 1; i <= 10; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = i;
            numberList.appendChild(listItem);
        }
    };
};
*/

/* window.onload を省略 スクリプトを <body> タグの最後に配置 */
var button = document.getElementById('show-numbers');
var numberList = document.getElementById('number-list');

button.onclick = function() {
    numberList.innerHTML = '';
    for (var i = 1; i <= 10; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = i;
        numberList.appendChild(listItem);
    }
};

/* 
var button = document.getElementById('show-numbers');
HTML内のボタン要素（id="show-numbers"）を取得して、button という変数に格納

button.onclick = function() { ... }
ボタンがクリックされたときに実行する処理を定義
イベントリスナーの一種で、onclick プロパティに関数を設定

numberList.innerHTML = '';
ボタンをクリックするたびにリストを初期化 過去の数字が残るのを防ぐ

document.createElement('li'):
紙を1枚用意する（新しいHTML要素<li> の作成）

var listItem: 作成した <li> 要素を変数 listItem に格納　-> <li></li>

listItem.textContent = i:
紙に数字を書く（textContent に値を設定）i = 1 の場合 <li>1</li>

numberList.appendChild(listItem):
紙を箱（<ul>）に入れる（リストに要素を追加）
appendChild()  指定した要素を親要素の最後に追加
numberList  document.getElementById('number-list') で取得した <ul> 要素
このコードにより、作成した <li> 要素（listItem）をリストの一番下に追加
<ul id="number-list">
</ul>

<ul id="number-list">
    <li>1</li>
</ul>

*/