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
    if (inputLength() > 0 && event.which == 13) {
        createTask();
    }
}

enterButton.addEventListener("click", addTaskOnClick);
input.addEventListener("keypress", addTaskOnEnter);