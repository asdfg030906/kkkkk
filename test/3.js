const firstB = document.getElementById("firstb");
const oBut = document.getElementById("obut");
const pBut = document.getElementById("pbut");



function onoClick (event) {
    location.href = "4.html";
    localStorage.setItem("obut", "obut")
}

function onpClick (event) {
    location.href = "4.html";
    localStorage.setItem("pbut", "pbut")
}

oBut.addEventListener("click",onoClick);
pBut.addEventListener("click",onpClick);
 
