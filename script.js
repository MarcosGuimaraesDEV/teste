const body = document.querySelector("body");
const button = document.querySelector("button");
const list = ["Java", "c++","c#"]


button.addEventListener("click",chamaLista);

function insereBody(item){
    body.innerHTML += "<li>"+ item +"</li>";
}
function chamaLista(){
    if(body){
        list.forEach(insereBody);
    }
}

let a =[1,2];
let b = a;
b = [1,2,3];
console.log(typeof a);
console.log(a);
console.log(b);