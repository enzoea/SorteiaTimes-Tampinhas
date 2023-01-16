var numeroSorteado = document.querySelector('div.box h2')
const botaoSortear = document.querySelector('div.box button')
var quantidadeNumeros;
var quantidadeNumerosFormatados;
var roleta = [];
var aux = 0;
let randomNumber;
let tmp;

function enviar(){
    quantidadeNumeros = document.getElementById('numberImput').value;
    for(i=1; i<=quantidadeNumeros; i++){
        roleta.push(i);
    }

    for (let i = quantidadeNumeros; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = roleta[randomNumber];
        // troca o número aleatório pelo atual
        roleta[randomNumber] = roleta[i];
        // troca o atual pelo aleatório
        roleta[i] = tmp;
    }
}

botaoSortear.addEventListener("click", () => {
    numeroSorteado.innerHTML = roleta[aux];
    aux++;
})