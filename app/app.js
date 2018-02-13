var tasks = ["first", "second"];

window.addEventListener("load", function(){
    var list = document.getElementById("list");
    for(var i = 0; i < tasks.length; i++){
        showTask(list, tasks[i]);
    }
});

function showTask(list, task) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(task));
    list.appendChild(item);
}