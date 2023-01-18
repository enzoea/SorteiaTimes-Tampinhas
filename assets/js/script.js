var numeroSorteado = document.querySelector('div.box h3');
const botaoSortear = document.querySelector('div.box button');
var botaoAlteradoQuantidade = document.querySelector('div.quant h3');
const botaoEnviarQuantidade = document.querySelector('div.quant button');
var quantidadeNumeros = 0;
var quantidadeNumerosFormatados;
var roleta = [];
var aux = 0;
let randomNumber;
let tmp;
var auxSorteio = 0;
var numeroEnviado = "Número enviado";

function enviar(){
    quantidadeNumeros = document.getElementById('numberImput').value;

    if(quantidadeNumeros==0){
        alert("A quantidade de tampinhas a serem sorteadas necessita ser um valor maior que 0.");
        location.reload();
    }
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
botaoEnviarQuantidade.addEventListener("click", () => {
    botaoAlteradoQuantidade.innerHTML = numeroEnviado;
})

botaoSortear.addEventListener("click", () => {
    numeroSorteado.innerHTML = roleta[aux];
       aux++;
        if(auxSorteio==quantidadeNumeros){
            if(auxSorteio==0){
                alert("Necessário digitar o número de tampinhas a serem sorteadas, sendo diferente de 0.");
                location.reload();
            }else{
                alert("Quantidade de números sorteados finalizados");
                location.reload();
            }
        }
    auxSorteio++;
})
