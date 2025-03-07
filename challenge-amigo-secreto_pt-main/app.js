//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos_lista = [];
let listaAmigos = document.getElementById('listaAmigos');
let sorteado = document.getElementById('resultado');

function sortearAmigo() {
    if (amigos_lista.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    sorteado.innerHTML = '';
    let sorteado_indice = Math.floor(Math.random() * amigos_lista.length);
    let sorteado_nome = amigos_lista[sorteado_indice];
    let novo_elemento = document.createElement('li');
    novo_elemento.textContent = sorteado_nome;
    sorteado.appendChild(novo_elemento);
    amigos_lista.splice(sorteado_indice, 1);
}

function adicionarAmigo() {
    let amigo_nome = document.getElementById('amigo').value.trim();
    if (amigo_nome === '') {
        alert("Por favor, insira um nome de amigo.");
        return;
    }
    amigos_lista.push(amigo_nome);
    let novo_elemento = document.createElement('li');
    novo_elemento.textContent = amigo_nome;
    listaAmigos.appendChild(novo_elemento);
    document.getElementById('amigo').value = '';
}