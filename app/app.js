var tasks = ["first", "second"];

window.addEventListener("load", function(){
    for(var i = 0; i < tasks.length; i++){
        console.log(tasks[i]);

        var list = document.getElementById("list");

        var item = document.createElement("li");
        item.appendChild(document.createTextNode(tasks[i]));

        list.appendChild(item);
    }
});