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