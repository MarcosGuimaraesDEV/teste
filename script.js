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


//Desafio Dio
let quantidadeGolpes =10;

let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 0; i < quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = i % minerais.length;
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  console.log( i+1 + ": " + minerais[minaIndex] );
}
