/* */

var input = document.getElementById("userInput");
var enterButton = document.getElementById("enterButton");
var taskList = document.getElementById("taskList");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return taskList.getElementsByTagName("li").length;
}

function createTask() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    taskList.appendChild(li);
    input.value = "";

    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", function() {
        li.remove();  // アイテムを完全に削除
    });
}

function addTaskOnClick() {
    if (inputLength() > 0) {
        createTask();
    }
}

function addTaskOnEnter(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createTask();
    }
}
//(inputLength() > 0 && event.which == 13)
// event.which == 13 → Enterキーが押されたときに処理を実行
// event.which は キーコード（数値）を取得 する
// Enterキーのキーコードは 13

enterButton.addEventListener("click", addTaskOnClick);
input.addEventListener("keypress", addTaskOnEnter);

/* 
HTML要素を取得
document.getElementById("userInput") で テキスト入力欄 を取得
document.getElementById("enterButton") で ボタン を取得
document.getElementById("taskList") で タスクリスト（ul要素） を取得

入力された文字列の長さを取得
function inputLength() {
    return input.value.length;
}
input.value.length を返す関数
入力欄に何も入力されていない場合は 0 になる

リストの要素数（タスク数）を取得
function listLength() {
    return taskList.getElementsByTagName("li").length;
}
taskList（<ul id="taskList"> のこと） の 子要素 の中から <li> をすべて取得。
.length を使って <li> の数を返す

getElementsByTagName は、指定したタグ名の要素をすべて取得するメソッド 
<ul id="myList">
    <li>りんご</li>
    <li>バナナ</li>
    <li>オレンジ</li>
</ul>
var list = document.getElementById("myList");
var items = list.getElementsByTagName("li");

console.log(items.length); // 3 （リストのアイテム数）
console.log(items[0].textContent); // "りんご"
console.log(items[1].textContent); // "バナナ"
console.log(items[2].textContent); // "オレンジ"

タスクを作成する関数
function createTask() {
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode(input.value)); 
    taskList.appendChild(li);
    input.value = ""; 
}
var li = document.createElement("li");  → 空の <li></li> を作る

li.appendChild(document.createTextNode(input.value));   入力したテキストを <li> に追加
→ 例えば、input.value = "宿題をする" の場合
→ <li>宿題をする</li> ができる

taskList.appendChild(li); 作った <li> を <ul> に追加

input.value = ""; → 次のタスクを入力しやすくする 入力欄を空にする

👉 createElement() で タグ を作る
👉 createTextNode() で テキスト を作る
👉 appendChild() で 親要素の中に追加 する

タスクの完了（クリックで打ち消し線）
li.addEventListener("click", function() {
    li.classList.toggle("done");
});

element.addEventListener("イベントの種類", function); 
"click" → クリックした時に実行 する処理
function() { ... } → クリックされたら実行される関数

classList.toggle("done")
👉 要素の class を追加・削除するメソッド。
toggle("クラス名") を使うと、クラスがあれば削除、なければ追加 する

JavaScriptだけでは見た目が変わらないので,done クラスをCSSで定義
.done {
    background: lightgreen;
    text-decoration: line-through;
}
    
削除ボタンを追加
var deleteButton = document.createElement("button");
deleteButton.appendChild(document.createTextNode("X"));
li.appendChild(deleteButton);
<button> を作成し、「X」というテキストを追加。
<li> の中に削除ボタンを追加。

削除ボタンの機能
deleteButton.addEventListener("click", function() {
    li.remove();
});
削除ボタンをクリックすると li.remove() が実行され、タスクが完全に削除される

ボタンをクリックした時にタスクを追加
function addTaskOnClick() {
    if (inputLength() > 0) {
        createTask();
    }
}
inputLength() > 0 の場合のみ createTask() を実行。空欄のまま追加されるのを防ぐ

Enterキーでタスクを追加
function addTaskOnEnter(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createTask();
    }
}

イベントリスナーの追加
enterButton.addEventListener("click", addTaskOnClick);
enterButton をクリックすると addTaskOnClick() が実行される。

input.addEventListener("keypress", addTaskOnEnter);
input にフォーカスがあり、Enterキーを押すと addTaskOnEnter() が実行される。

ToDoリストの機能：
-新しいタスクを追加
「Add」ボタンを押すか、Enterキーで追加。
空欄では追加されない。
-タスクをクリックで完了
タスクをクリックすると "done" クラスが適用 される（CSSで打ち消し線を追加可能）。
-タスクを削除
X ボタンを押すとタスクが削除される。
*/