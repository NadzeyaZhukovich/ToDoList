var tasks = ["first"];
var list = document.getElementById("list");

window.addEventListener("load", function(){
    for(var i = 0; i < tasks.length; i++){
        showTask(list, tasks[i]);
    }
});

document.getElementById("button").addEventListener("click", function(){
    var input = document.getElementById("input").value;
    tasks[tasks.length] = input;
    showTask(list,input);
    document.getElementById("input").value = "";
});

function showTask(list, task) {
    var item = document.createElement("li");
    item.setAttribute('id', 'task'+tasks.length);
    item.appendChild(document.createTextNode(task));
    item.appendChild(createRemoveButton());
    list.appendChild(item);
}

function createRemoveButton(){
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "delete";
    removeButton.setAttribute('class', 'DeleteButton');
    removeButton.setAttribute('onClick', 'remove("' + 'task'+tasks.length+'")');
    removeButton.setAttribute('type', 'button');
    return removeButton;
}

function remove(id) {
    var item = document.getElementById(id);
    list.removeChild(item);
}