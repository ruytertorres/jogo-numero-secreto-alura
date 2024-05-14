//

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
exibirTextoNaTela('p', `Escolha um númer de 1 a ${numeroLimite}`);
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
}
mensagemInicial()

console.log(numeroSecreto);

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'ACERTOU!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acerto o Número Secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número é Menor');
        } else {
            exibirTextoNaTela('p', 'O número é Maior');
            }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido)
        console.log(listaNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*
let listaLinguagemProgamacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(listaLinguagemProgamacao)
console.log(`${listaLinguagemProgamacao[0]}, ${listaLinguagemProgamacao[1]}, ${listaLinguagemProgamacao[4]}`)
*/
/*
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
}

  // Exemplo de uso
  let numero = prompt('Precisa de qual TABUADA?');;
  mostrarTabuada(numero);
*/
/*
function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);
*/
/*
let largura = prompt('Defina o valor do Largura em CM');
let comprimento = prompt('Defina o valor do Comprimento em CM');

largura = parseFloat(largura);
comprimento = parseFloat(comprimento);

function areaPerimetro(){
    console.log("A area é: " + largura * comprimento +"M²");
    console.log("O perimetro é: " + 2 * (largura + comprimento) + " Metros");
}
areaPerimetro()
*/
/*
let dollar = 5.30
let real = prompt('converta seu U$ em R$');

function converterReal(){
    console.log(real * dollar);
}
converterReal()
*/
/*
function calcularFatorial(numero){
    if(numero === 0 || numero === 1){
        return 1
    }
    let fatorial = 1;
    for(let i = 2; i <= numero; i++){
        fatorial*=i;
    }
    return fatorial
}

let numero = prompt('Digite um número para fatorar');
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
*/
/*
let altura = prompt('Qual a sua altura?');
let peso = prompt('Qual o seu peso');

function calcularIMC(){
    
    return console.log(peso/(altura*altura)*10000);
}

calcularIMC();
*/
/*
let receberNumero = prompt('Digite um numero');
let resultado = verificarChute()
function verificarChute(){
    return receberNumero * receberNumero
}

console.log(resultado)
*/
/*
let numero0 = prompt('Digite um numero');
let numero1 = prompt('Digite um numero');
let numero2 = prompt('Digite um numero');

numero0 = parseInt(numero0);
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

function verificarChute(){
    console.log((numero0 + numero1 + numero2)/3)
}
*/
/*
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', `olá ${nome}`)
*/
/*
let nome = prompt('Digite seu nome');

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', `olá ${nome}`)
*/
/*
let mudarH1 = document.querySelector('h1');
mudarH1.innerHTML = 'teste de mudança do h1';
//----------------------------------------------------------------
function verificarChute(){
    let cidade = prompt('Qual sua cidade favorita?');
    alert(`Eu já visitei ${cidade}, e é uma cidade muito linda!!!`)
}
//================================================================
function verificarChute(){
    let numeroUm = prompt('Vamos somar? informe um numero...');
    let numeroDois = prompt('Vamos somar? informe outro numero...');
    numeroUm = parseInt(numeroUm);
    numeroDois = parseInt(numeroDois);

    let resultado = numeroUm + numeroDois

    alert(`o resultado de ${numeroUm} + ${numeroDois} = ${resultado}`)
}

*/