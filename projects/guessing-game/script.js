/* */

// ゲーム全体で使う変数をまとめる
var randomNumber; // ランダムな数（1〜10）
var attempts; // 残りの試行回数
var wins = 0; // 勝ちの回数
var losses = 0; // 負けの回数

// HTML要素を取得
var buttonsContainer = document.getElementById("buttons");
var message = document.getElementById("message");
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");
var restartButton = document.getElementById("restart");

function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1; // 1〜10のランダムな数を生成
    attempts = 3; // ユーザーの試行回数を3に設定
    message.textContent = "Pick a number between 1 and 10"; // 初期メッセージ
    buttonsContainer.innerHTML = ""; // ボタンをリセット（新しいゲーム開始時にクリア）

    for (var i = 1; i <= 10; i++) { // 1〜10のボタンを作成
        var button = document.createElement("button");
        button.textContent = i; // ボタンに数字を表示
        button.onclick = makeGuess; // クリック時の処理をセット
        button.dataset.value = i; // 数値をデータ属性に保存
        buttonsContainer.appendChild(button); // ボタンを画面に追加
    }
}

function makeGuess(event) {
    var guess = parseInt(event.target.dataset.value); // クリックしたボタンの数字を取得

    if (guess === randomNumber) { // 正解の場合
        message.textContent = "Correct! You win!"; // 勝ちメッセージ表示
        wins++; // 勝ちカウントを増やす
        winsDisplay.textContent = wins; // HTMLの勝ちカウントを更新
        disableButtons(); // ボタンを無効化（ゲーム終了）
    } else { // 不正解の場合
        attempts--; // 残りの試行回数を減らす

        if (attempts === 0) { // 試行回数が0になったら負け
            message.textContent = "You lost! The number was " + randomNumber; // 負けメッセージ
            losses++; // 負けカウントを増やす
            lossesDisplay.textContent = losses; // HTMLの負けカウントを更新
            disableButtons(); // ボタンを無効化
        } else { // まだ試行回数が残っている場合
            message.textContent = guess > randomNumber ? "Lower!" : "Higher!"; // 高い・低いのヒントを表示
            hideUnavailableNumbers(guess); // 不要な数字のボタンを隠す
        }
    }
}


function disableButtons() {
    var buttons = document.querySelectorAll("#buttons button"); // すべてのボタンを取得
    buttons.forEach(function(button) {
        button.disabled = true; // すべてのボタンを無効化
    });
}


function hideUnavailableNumbers(guess) {
    var buttons = document.querySelectorAll("#buttons button"); // すべてのボタンを取得
    buttons.forEach(function(button) {
        var value = parseInt(button.dataset.value); // ボタンの数値を取得
        if ((guess > randomNumber && value >= guess) || (guess < randomNumber && value <= guess)) {
            button.style.display = "none"; // 不要な数字のボタンを非表示にする
        }
    });
}


restartButton.onclick = startGame;
startGame();
/* 
「Restart Game」ボタンをクリックすると、ゲームをリスタート
ページを読み込んだときに startGame() を実行してゲームを開始*/

/* 
変数定義は最初にまとめると、可読性・保守性が向上
グローバル変数は最初に定義し、関数内のローカル変数と分ける

var を使うと、関数の外で定義された変数はすべてグローバル変数 になる

// ゲーム全体で使う変数
let randomNumber;
let attempts;
let wins = 0;
let losses = 0;

// HTML要素を取得（固定なので const）
const buttonsContainer = document.getElementById("buttons");
const message = document.getElementById("message");
const winsDisplay = document.getElementById("wins");
const lossesDisplay = document.getElementById("losses");
const restartButton = document.getElementById("restart");
*/