<<<<<<< HEAD
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
=======
let nome = "John";
let a =[1,2];
let b = a;
b.push(3);
console.log(a);
console.log(b);
//pegando o id titulo para a variável
const titulo = document.querySelector("#titulo");
//Verificando se foi atribuido a variável o elemento
if(titulo){
    titulo.innerHTML = `Ei ${nome}!`;
}
if(confirm("Deseja mostrar a mensagem secreta?")){
    nome = "Daniel";
    titulo.innerHTML = `${nome} é BOFÃO!`
}
//alert(`${nome} é Bofão`);
>>>>>>> 6873fd3e69f7312b51a35a5bf829c1bac6c51e47
