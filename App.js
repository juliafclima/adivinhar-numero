let listaNumerosSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoTela("h1", "Jogo dos números secretos");
  exibirTextoTela("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
  let quantidadeElementosLista = listaNumerosSorteados.length;

  if (quantidadeElementosLista == numeroMaximo) {
    listaNumerosSorteados = [];
  }

  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute.trim() == "") {
    return;
  }

  if (chute == numeroSecreto) {
    exibirTextoTela("h1", "Parabéns, você acertou!");

    let paralavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${paralavraTentativa}!`;

    exibirTextoTela("p", mensagensTentativas);

    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("chutar").setAttribute("disabled", "");
  } else {
    let resposta =
      chute > numeroSecreto
        ? exibirTextoTela("p", `O número secreto é MENOR que ${chute}`)
        : exibirTextoTela("p", `O número secreto é MAIOR que ${chute}`);
    console.log(resposta);
  }

  tentativas++;
  limparCampo();
}

function novoJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("chutar").removeAttribute("disabled");
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
