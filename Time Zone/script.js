function convertTime(){
var time=document.getElementById("timeInput").value;
var date=document.getElementById("dateInput").value;
var timeZone=selector.options[selector.selectedIndex].text;

var c= moment.tz(date + " " + time, timeZone);
console.log(c.format());

const DateTime = luxon.DateTime;
var dt = DateTime.fromISO(c.format());

dt = dt.setZone(dstSelector.options[dstSelector.selectedIndex].text);
console.log(dt.toISO({suppressMilliseconds: true}));
console.log(dt.toLocaleString(DateTime.DATETIME_FULL));

var output = document.getElementById("result");
output.innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL);
}

var areaSelector = document.getElementById("starting-area");
var dstAreaSelector = document.getElementById("ending-area");

var numAreas = 10;
var areasArr = new Array();

for(var i =0;i<numAreas;i++){
    areasArr[i] = new Option();
}
areasArr[0] = new Option("America", "America");
areasArr[1] = new Option("Africa", "Africa");
areasArr[2] = new Option("Antarctica", "Antarcatica");
areasArr[3] = new Option("Arctic", "Arctic");
areasArr[4] = new Option("Asia", "Asia");
areasArr[5] = new Option("Atlantic", "Amtlantic");
areasArr[6] = new Option("Australia", "Australia");
areasArr[7] = new Option("Europe", "Europe");
areasArr[8] = new Option("Indian", "Indian");
areasArr[9] = new Option("Pacific", "Pacific");

for(var i=0;i<numAreas;i++){
    areaSelector.addEventListener(areasArr[i]);
}

for(var i  =0; i<numAreas;i++){
    dstAreaSelector.add(new Option(areasArr[i].text, areasArr[i].value));
}
n=100;
arr= new Array();
for(var i=0;i<n;i++){
    arr.push(new Option());
}

arr[0] = new Option("America/Chicago", "America/Chicago");
arr[1] = new Option("America/Denver", "America/Denver");
arr[2] = new Option("America/Los_Angeles", "America/Los_Angeles");
arr[3] = new Option("America/New_York", "America/New_York");
arr[4] = new Option("America/Tokyo", "America/Tokyo");

var selector = document.getElementById("initial-time-zones");
var dstSelector = document.getElementById("dest-time-zones");

function addOptions(){
    let areaChoosen = areaSelector.options[areaSelector.selectedIndex].text;
    if(areaChoosen != 'other'){
        for(var i=0; i<n; i++){
            if(arr[i].text.includes(areaChoosen)){
                selector.add(arr[i]);
            }
        }
    }
    else{
        for(var i=0; i<n;i++){
            selector.add(arr[i]);
        }
    }
}
addOptions();

function addDstOption(){
    let areaChoosen = dstareaSelector.options[areaSelector.selectedIndex].text;
    if(areaChoosen != 'other'){
        for(var i=0; i<n; i++){
            if(arr[i].text.includes(areaChoosen)){
                dstselector.add(new Option(arr[i].text,arr[i].value));
            }
        }
    }
    else{
        for(var i=0; i<n;i++){
            dstselector.add(new Option(arr[i].text,arr[i].value));
        }
    }
}
addDstOptions();
function resetStartTzDropdown(){
    for(var i=selector.options.length -1;i>=0;i++){
        selector.remove(i);
    }
    addOptions();
}

function resetStartTzDropdown(){
    for(var i=selector.options.length -1;i>=0;i++){
        selector.remove(i);
    }
    addOptions();
}

