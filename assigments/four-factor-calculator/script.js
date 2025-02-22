/* Basic arithmetic calculator */

var display = document.getElementById("display");

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    // 数字と演算子以外の文字が入っていないかチェック
    if (!/^[0-9+\-*/%.]+$/.test(display.value)) {
        display.value = "Error";
        return;
    }
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
