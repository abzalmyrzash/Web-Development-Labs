var startTime_calls = 0;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    month = checkTime(month);
    day = checkTime(day);
    document.getElementById('date').innerHTML =
    day + "/" + month + "/" + year;

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();

var item = document.getElementById("item");
var table = document.getElementById("table");
item.value = "";
var emptyError = false;

function checkboxClicked(checkbox, label){
    label.style = checkbox.checked ? "text-decoration:line-through" : "text-decoration:normal";    
}

function deleteClicked(tr){
    table.removeChild(tr);
}

function buttonClicked(){
    if(item.value != '')
    {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.class = "checkbox";

        var deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.className = "deleteButton";

        var label = document.createElement("label");
        label.innerHTML = item.value;
        
        
        td.append(checkbox);
        td.append(label);
        td.append(deleteButton);

        tr.appendChild(td);
        table.appendChild(tr);
        
        
        checkbox.addEventListener("change", () => checkboxClicked(checkbox, label));
        deleteButton.addEventListener("click", () => deleteClicked(tr));

        item.value = "";
    }
    else{
        item.placeholder = "Please enter name of a new task!";
        item.style = "color:red";
        emptyError = true;
    }
}

function itemClicked(){
    if(emptyError){
        item.style = "color:black";
        item.placeholder = "New Task";
        emptyError = false;
    }
}

item.addEventListener("click", itemClicked);
