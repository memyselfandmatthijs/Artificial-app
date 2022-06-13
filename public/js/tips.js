document.getElementById("thuisButton").addEventListener("click",toggleThuis);
document.getElementById("dagelijksButton").addEventListener("click",toggleDagelijks);
document.getElementById("alternatiefButton").addEventListener("click",toggleAlternatief);

function toggleThuis(){
    var thuis = document.getElementById("thuis");
    thuis.classList.toggle("hidden")
}

function toggleDagelijks(){
    var dagelijks = document.getElementById("dagelijks");
    dagelijks.classList.toggle("hidden")
}

function toggleAlternatief(){
    var alternatief = document.getElementById("alternatief");
    alternatief.classList.toggle("hidden")
}

