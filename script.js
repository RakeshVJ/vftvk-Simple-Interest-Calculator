function compute(){
    var P = +document.getElementById("principal").value;
    if(P<=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    var p=Number(P);
    var R = +document.getElementById("rate").value;
    var rate=Number(R);
    var Y = +document.getElementById("years").value;
    var years=Number(Y);
    var year = new Date().getFullYear()+parseInt(Y);
    document.getElementById("result").innerHTML="If you deposit "+p+
    ", at an interest rate of "+rate+
    ", you will receive an amount of "+parseFloat(p*years*rate/100)+
    ", in the year "+year;
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
