let amigos = [];



function sortearAmigo() {
  

  limparTela(); // Limpa a tela de resultados
  exibirResultadoSorteio(paresAmigos);
}

function exibirResultadoSorteio(paresAmigos) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  paresAmigos.forEach(par => {
    const itemResultado = document.createElement("li");
    itemResultado.textContent = `${par.amigo} tirou ${par.sorteado}`;
    resultado.appendChild(itemResultado);
  });
}

function novoSorteio() {
  amigos = [];
  atualizarListaAmigos();
  limparTela(); // Limpa a tela de resultados
}

// Função limparTela() movida para fora de exibirResultadoSorteio()
function limparTela() {
  document.getElementById("resultado").innerHTML = "";
}

