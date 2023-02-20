const firstB = document.getElementById("firstb");
const qBut = document.getElementById("qbut");
const wBut = document.getElementById("wbut");



function onqClick (event) {
    location.href = "3.html";
    localStorage.setItem("qbut", "qbut");
}

function onwClick (event) {
    location.href = "3.html";
    localStorage.setItem("wbut", "wbut");
}

qBut.addEventListener("click",onqClick);
wBut.addEventListener("click",onwClick);