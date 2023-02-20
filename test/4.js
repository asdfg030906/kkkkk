const firstB = document.getElementById("firstb");
const iBut = document.getElementById("ibut");
const eBut = document.getElementById("ebut");

const qBut = document.getElementById("qbut");
const wBut = document.getElementById("wbut");

const oBut = document.getElementById("obut");
const pBut = document.getElementById("pbut");

const vBut = document.getElementById("vbut");
const xBut = document.getElementById("xbut");


function onvClick(event){
    localStorage.setItem("vbut","vbut");
}

function R_1(event) {
if(window.localStorage.getItem("ibut") && window.localStorage.getItem("qbut")
&& window.localStorage.getItem("obut") && window.localStorage.getItem("vbut")){
    location.href = "5.html";
    window.localStorage.clear();
}}

 function onxClick(event){
    localStorage.setItem("xbut","xbut");
}

function R_2(event) {
    if(window.localStorage.getItem("ibut") && window.localStorage.getItem("qbut")
    && window.localStorage.getItem("obut") && window.localStorage.getItem("xbut")){
        location.href = "6.html";
        window.localStorage.clear();
    }}


function R_3(event) {
    if(window.localStorage.getItem("ibut") && window.localStorage.getItem("qbut")
    && window.localStorage.getItem("pbut") && window.localStorage.getItem("xbut")){
        location.href = "7.html";
        window.localStorage.clear();
    }}


   function R_4(event) {
    if(window.localStorage.getItem("ibut") && window.localStorage.getItem("wbut")
    && window.localStorage.getItem("pbut") && window.localStorage.getItem("xbut")){
        location.href = "8.html";
        window.localStorage.clear();
    }}

     
function R_5(event) {
 if(window.localStorage.getItem("ebut") && window.localStorage.getItem("wbut")
&& window.localStorage.getItem("pbut") && window.localStorage.getItem("xbut")){
  location.href = "8.html";
  window.localStorage.clear();
 }}
     


function R_6(event) {
    if(window.localStorage.getItem("ebut") && window.localStorage.getItem("wbut")
   && window.localStorage.getItem("pbut") && window.localStorage.getItem("vbut")){
     location.href = "9.html";
     window.localStorage.clear();
    }}


    
function R_7(event) {
if(window.localStorage.getItem("ebut") && window.localStorage.getItem("wbut")
&& window.localStorage.getItem("obut") && window.localStorage.getItem("vbut")){
 location.href = "10.html";
 window.localStorage.clear();
}}

function R_8(event) {
    if(window.localStorage.getItem("ebut") && window.localStorage.getItem("qbut")
    && window.localStorage.getItem("obut") && window.localStorage.getItem("vbut")){
     location.href = "11.html";
     window.localStorage.clear();
    }}

function R_9(event) {
if(window.localStorage.getItem("ebut") && window.localStorage.getItem("qbut")
&& window.localStorage.getItem("pbut") && window.localStorage.getItem("vbut")){
location.href = "12.html";
window.localStorage.clear();
}}


function R_10(event) {
    if(window.localStorage.getItem("ibut") && window.localStorage.getItem("wbut")
    && window.localStorage.getItem("obut") && window.localStorage.getItem("xbut")){
        location.href = "13.html";
        window.localStorage.clear();
    }}

function R_11(event) {
if(window.localStorage.getItem("ibut") && window.localStorage.getItem("wbut")
&& window.localStorage.getItem("pbut") && window.localStorage.getItem("vbut")){
location.href = "14.html";
window.localStorage.clear();
 }}

 function R_12(event) {
if(window.localStorage.getItem("ebut") && window.localStorage.getItem("qbut")
&& window.localStorage.getItem("obut") && window.localStorage.getItem("xbut")){
location.href = "15.html";
 window.localStorage.clear();
    }}

vBut.addEventListener("click",onvClick);
vBut.addEventListener("click",R_1); 
xBut.addEventListener("click",onxClick);
xBut.addEventListener("click",R_2); 
xBut.addEventListener("click",onxClick);
xBut.addEventListener("click",R_3); 
xBut.addEventListener("click",onxClick);
xBut.addEventListener("click",R_4); 
xBut.addEventListener("click",onxClick);
xBut.addEventListener("click",R_5); 
vBut.addEventListener("click",onvClick);
vBut.addEventListener("click",R_1);
vBut.addEventListener("click",onvClick);
vBut.addEventListener("click",R_6); 
vBut.addEventListener("click",onvClick);
vBut.addEventListener("click",R_7);
vBut.addEventListener("click",onvClick);
vBut.addEventListener("click",R_8);
vBut.addEventListener("click",onvClick);
vBut.addEventListener("click",R_9);
xBut.addEventListener("click",onxClick);
xBut.addEventListener("click",R_10); 
vBut.addEventListener("click",onvClick);
vBut.addEventListener("click",R_11);
xBut.addEventListener("click",onxClick);
xBut.addEventListener("click",R_12);