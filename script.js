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

let nome = "John";
//pegando o id titulo para a variável
const titulo = document.querySelector("#titulo");
//Verificando se foi atribuido a variável o elemento
if(titulo){
    titulo.innerHTML = `Ei ${nome}!`;
}
/*if(confirm("Deseja mostrar a mensagem secreta?")){
    nome = "Daniel";
    titulo.innerHTML = `${nome} é BOFÃO!`
}*/
//alert(`${nome} é Bofão`);
