var tasks = ["first", "second"];
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
    item.appendChild(document.createTextNode(task));
    list.appendChild(item);
}