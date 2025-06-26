/* Write a program that prints the first 10 numbers */

document.getElementById('show-numbers').addEventListener('click', function () {
    var numbers = '';
    for (var i = 1; i <= 10; i++) {
        numbers += i + ' ';
    }
    document.getElementById('numberOutput').textContent = numbers;
});

/* 
document.getElementById('show-numbers')
HTML内の特定のIDを持つ要素を取得するメソッド
'show-numbers' は、HTMLの <button> 要素に設定されたID

.addEventListener('click', function ()
.addEventListener メソッド click）が発生したときに、特定の動作を実行するよう登録
function ()
無名関数（anonymous function）を直接イベントリスナーに渡す
この無名関数が、クリック時に実行される処理の中身を定義

ページを開いたときは、numberOutput は空の状態
ボタン（show-numbers）をクリックすると、printFirstTenNumbers 関数が呼び出され
関数が1から10までの数を生成し、それを numberOutput の <p> タグに出力*/