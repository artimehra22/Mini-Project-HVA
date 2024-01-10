 let isstatus = document.querySelector("h5");
 let addFrend = document.querySelector("#add");
 let removeFrend = document.querySelector("#remove");


 addFrend.addEventListener("click",function(){
    isstatus.innerHTML="Frends"
    isstatus.style.color="green"
 })
 removeFrend.addEventListener("click",function(){
    isstatus.innerHTML = "stranger";
    isstatus.style.color="red";
 })