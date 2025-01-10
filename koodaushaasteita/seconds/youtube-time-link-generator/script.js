/* A program that, when a user inputs a YouTube URL and a time (hours, minutes, seconds), 
generates and displays a new YouTube link starting at the specified playback time. */

document.getElementById('generateButton').addEventListener('click', function () {
  // 入力値を取得
  const url = document.getElementById('url').value;
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;

  // YouTube URLの形式が正しいか確認
  if (!url || (url.indexOf("youtu") === -1 && url.indexOf("youtube") === -1)) {
      alert("Please enter a valid YouTube URL.");
      return;
  }

  // 時間を秒に変換
  const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

  // 新しいURLを生成
  const separator = url.indexOf("?") !== -1 ? "&" : "?";
  const timeUrl = url + separator + "t=" + totalSeconds;

  // リンクを表示
  const linkElement = document.getElementById('generatedLink');
  linkElement.href = timeUrl;
  linkElement.textContent = "Open Generated Link";
  linkElement.style.display = "block";

  // 作成されたリンクをテキストとして表示
  const displayLink = document.getElementById('displayLink');
  displayLink.textContent = timeUrl;
  displayLink.style.display = "block";
});

/*
document.getElementById('url').value
HTMLに存在するid="url"を持つ要素（通常は<input>タグ）の値を取得
ユーザーが入力したYouTubeのURLをJavaScriptに渡すための部分

parseInt(document.getElementById('hours').value) || 0;
document.getElementById('hours').valueで、HTMLに存在するid="hours"を持つ要素の値を取得
parseInt()関数を使用して、その値を整数に変換

ユーザーが「2」を入力した場合：
parseInt("2") → 2
2 || 0 → 2
変数hoursには2が格納されます。

ユーザーが何も入力しなかった場合：
parseInt("") → NaN （Not-a-Number）
NaN || 0 → 0
変数hoursには0が格納

YouTube URLの形式が正しいか確認
(!url || (url.indexOf("youtu") === -1 && url.indexOf("youtube") === -1))
!url 変数urlが**falsy（偽）**である場合にtrueを返す
null
undefined
空文字列（""）
数値の0
NaN（Not-a-Number）
false

url.indexOf("youtu")
indexOfは、文字列内に特定の部分文字列が存在するかを調べるためのメソッド
url.indexOf("youtu") → 8（「youtu」が文字列の8文字目から始まる）
url.indexOf("youtu") → -1（「youtu」が含まれていない）

const text = "Hello, world!";
console.log(text.indexOf("world")); // 7
console.log(text.indexOf("JavaScript")); // -1

新しいURLを生成
const separator = url.indexOf("?") !== -1 ? "&" : "?";
新しいURLを生成するために、適切な区切り文字（?または&）を決める部分

url.indexOf("?")
文字列urlの中に"?"が含まれているかどうかを調べる
文字列の中で指定された文字（この場合は"?"）が最初に出現する位置のインデックス番号を返す
console.log("https://example.com?name=value".indexOf("?")); // 19
console.log("https://example.com".indexOf("?"));           // -1

!==（厳密な不等号）左辺と右辺が異なる場合にtrueを返し、一致する場合にfalseを返す
url.indexOf("?") !== -1
url内に"?"が存在する場合：indexOf("?")は-1以外の値を返すため、条件式はtrue。
存在しない場合：indexOf("?")は-1を返すため、条件式はfalse

三項演算子 ?: 条件によって異なる値を返す簡潔な構文
const separator = url.indexOf("?") !== -1 ? "&" : "?";
条件：url.indexOf("?") !== -1
trueの場合（"?"が含まれている場合）："&"を返す-> URLの中で、クエリ文字列を始める記号 https://example.com?name=value
falseの場合（"?"が含まれていない場合）："?"を返す-> クエリ文字列の中で複数のパラメータを区切る記号 https://example.com?name=value&age=30

"t="**は、YouTubeのURLで「再生を始める秒数」を指定するためのクエリパラメータ
tは「タイム」, =は「値を代入する」

「クエリ文字列」とは、URLの中でサーバーに追加のデータを渡すために使われる仕組み
URLの中で?以降に記述される部分, サーバーにパラメータ（情報）を送ることができる
クエリ文字列の基本構造　?キー1=値1&キー2=値2&キー3=値3
?：クエリ文字列の始まり、キー：パラメータの名前、=：キーと値を関連付け、パラメータの値、&：複数のパラメータを区切る
YouTubeの動画開始位置指定： https://www.youtube.com/watch?v=abcd1234&t=90
v=abcd1234：動画ID（どの動画を再生するか指定）
t=90：動画の開始時間（90秒後から再生）*/

  