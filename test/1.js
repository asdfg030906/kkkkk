const iBut = document.getElementById("ibut");
const eBut = document.getElementById("ebut");



function oniClick (event) {
    location.href = "2.html";
    localStorage.setItem("ibut", "ibut");
}

function oneClick (event) {
    location.href = "2.html";
    localStorage.setItem("ebut", "ebut");
}



iBut.addEventListener("click",oniClick);
eBut.addEventListener("click",oneClick);


 


