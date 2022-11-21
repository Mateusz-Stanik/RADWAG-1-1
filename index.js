const Waga1 = [0, 18, 45];
const Waga2 = [0, 18, 45];
const Waga3 = [0, 18, 45];
const Waga4 = [0, 18, 45];
const Waga5 = [0, 18, 45];

function NewMeasure() {
    let input = prompt("What's the new number?");
    document.getElementById("measurement1").innerHTML = input+"kg";
}

// document.getElementById("measurement1").innerHTML = Waga1[0]+"kg";


document.getElementById("PreviousMasa-1-1").innerHTML = Waga1[1]+"kg";


document.getElementById("PreviousMasa-5-3").innerHTML = Waga1[2]+"kg";

var d = new Date();

if(d.getMinutes<10){
document.getElementById("PreviousTime-1-1").innerHTML = d.getHours()+":0"+d.getMinutes();
}
else{
document.getElementById("PreviousTime-1-1").innerHTML = d.getHours()+":"+d.getMinutes();
}