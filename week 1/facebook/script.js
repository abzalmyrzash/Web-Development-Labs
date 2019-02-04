var day = document.getElementById("birth-day");
var month = document.getElementById("birth-month");
var year = document.getElementById("birth-year");

var curDate = (new Date)
var curYear = curDate.getFullYear();
var curMonth = curDate.getMonth() + 1;
var curDay = curDate.getDate();

var n = 30;

for(var i = curYear; i >= 1905; i--){
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    year.options.add(option);
}

year.value = curYear - 25;
month.value = curMonth;

var isLeapYear = function(y){
    if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0) return 1;
    return 0;
}

var addDayOptions = function(){
    while (day.lastChild) {
        day.removeChild(day.lastChild);        
    }

    for(var i = 1; i <= n; i++){
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        day.options.add(option);
    }
    day.value = curDay;
}

var yearChanged = function(){
    if(month.value == 2) {
        n = 28 + isLeapYear(year.value);
        addDayOptions();
    }
}

var monthChanged = function(){
    switch(month.value){
        case "1": case "3": case "5": case "7": case "8": case "10": case "12":
            n = 31; break;
        case "2": n = 28 + isLeapYear(year.value); break;
    }

    addDayOptions();
}

month.addEventListener("change", monthChanged);
year.addEventListener("change", yearChanged);


switch(month.value){
    case "1": case "3": case "5": case "7": case "8": case "10": case "12":
        n = 31; break;
    case "2": n = 28 + isLeapYear(year.value); break;
}

addDayOptions();