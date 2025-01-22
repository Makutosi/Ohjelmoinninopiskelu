/* */

document.getElementById('reverseButton').addEventListener('click', function () {
    var inputText = document.getElementById('inputText').value;
    var reversedText = '';

    // Loop to reverse the string
    for (var i = inputText.length - 1; i >= 0; i--) {
        reversedText += inputText[i];
    }

    // Display the reversed text
    document.getElementById('result').textContent = 'Reversed: ' + reversedText;
});

/* 
ユーザーが入力したテキストを逆順に変換し、結果を表示する
document.getElementById('reverseButton').addEventListener('click', function () {
HTML要素のIDがreverseButtonであるボタンを取得し、そのボタンに対してclickイベントリスナーを設定
ユーザーがボタンをクリックすると、括弧内の無名関数（function () { ... }）が実行

var inputText = document.getElementById('inputText').value;
document.getElementById('inputText')：
HTML要素のIDがinputTextであるテキスト入力フィールドを取得。
.value：
入力フィールドに入力されているテキストの値を取得。
この値を変数inputTextに保存

var reversedText = '';
逆順に変換された文字列を格納するための空文字列の変数reversedTextを初期化

for (var i = inputText.length - 1; i >= 0; i--) {
    reversedText += inputText[i];
}
このforループは、入力文字列inputTextを最後の文字から最初の文字まで1文字ずつ処理。
inputText.length - 1:
入力文字列の最後のインデックスを取得。
例: 入力が"hello"なら、長さは5なので最後のインデックスは4。
i >= 0:
インデックスが0になるまでループを繰り返す。
i--:
各ループでiを1ずつ減らします（逆方向に進む）。
reversedText += inputText[i]:
入力文字列のi番目の文字をreversedTextに追加。
これにより、文字列が逆順に構築

document.getElementById('result').textContent = 'Reversed: ' + reversedText;
document.getElementById('result')：
IDがresultであるHTML要素（<p>タグ）を取得。
.textContent：
要素内のテキスト内容を設定または更新。
'Reversed: ' + reversedText：
"Reversed: "という固定の文字列と、逆順にした文字列reversedTextを連結し、結果として表示*/