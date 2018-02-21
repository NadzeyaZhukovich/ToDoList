var tasks = ["finish ToDo project"];
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
    item.appendChild(createCheckbox());
    item.appendChild(createText(task));
    item.appendChild(createRemoveButton());
    list.appendChild(item);
}

function createText(task){
    var text = document.createElement("spun");
    text.appendChild(document.createTextNode(task));
    text.setAttribute('id', 'task'+tasks.length + '_text');
    return text;
}

function createCheckbox(){
    var checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'task'+tasks.length + '_checkbox');
    checkbox.setAttribute('class', 'checkboxStyle');
    checkbox.setAttribute('onChange', 'change(this)');
    return checkbox;
}

function createRemoveButton(){
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "delete";
    removeButton.setAttribute('id', 'task'+tasks.length + '_removeButton');
    removeButton.setAttribute('class', 'deleteButton');
    removeButton.setAttribute('onClick', 'remove("' + 'task'+tasks.length+'")');
    removeButton.setAttribute('type', 'button');
    return removeButton;
}

function remove(id) {
    var item = document.getElementById(id);
    list.removeChild(item);
}

function change(target) {
    var checkboxId = target.id;
    var textId = checkboxId.replace('checkbox', 'text');
    var textHtml = document.getElementById(textId);
    if (target.checked == true) {
        textHtml.setAttribute('class', 'textStyle');
    } else {
        textHtml.removeAttribute('class');
    }
}