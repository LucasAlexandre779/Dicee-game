
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // gerando um numero aleatório 

let randomImg = "dice" + randomNumber1 + ".png" // selecionando a imagem com a variavel subistituindo o numero

let randomPasta = "imagens/" + randomImg; // complementando a ingressao 

let imagem1 = document.querySelectorAll("img")[0]; // selecionando a Tag "img" no HTML

imagem1.setAttribute("src" , randomPasta); // atribuindo um valor a saida da imagem

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImg2 = "imagens/dice" + randomNumber2 + ".png"

let imagem2 = document.querySelectorAll("img")[1];

imagem2.setAttribute("src" , randomImg2)

if( randomNumber1 > randomNumber2 ){
document.querySelector("h1").innerHTML = " Player 1 wins !";
}else if(randomNumber1 < randomNumber2 ){
document.querySelector("h1").innerHTML = " Player 2 wins !";
}else{
    document.querySelector("h1").innerHTML = "Draw"
}