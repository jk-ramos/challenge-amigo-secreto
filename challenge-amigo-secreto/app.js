// Array para armazenar os nomes dos amigos
let amigos = [];


// Função para adicionar um amigo à lista
 
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    // Validar se o campo não está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    // Verificar se o nome já existe na lista
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        inputAmigo.value = '';
        return;
    }
    
    // Adicionar o nome ao array
    amigos.push(nomeAmigo);
    
    // Limpar o campo de entrada
    inputAmigo.value = '';
    
    // Atualizar a lista visual
    atualizarListaAmigos();
    
    // Limpar resultado anterior se existir
    limparResultado();
}


 //Função para atualizar a lista visual de amigos
 
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpar a lista atual
    listaAmigos.innerHTML = '';
    
    // Adicionar cada amigo como um item da lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${amigo} 
            <button onclick="removerAmigo(${index})" style="
                margin-left: 10px; 
                padding: 2px 8px; 
                font-size: 12px; 
                background-color: #ff4444; 
                color: white; 
                border: none; 
                border-radius: 3px; 
                cursor: pointer;
            ">✕</button>
        `;
        listaAmigos.appendChild(li);
    });
}


 //Função para remover um amigo da lista
 
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
    limparResultado();
}

// Função para sortear um amigo aleatório
 
function sortearAmigo() {
    // Verificar se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    // Gerar índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obter o amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Exibir o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}

 //Função para limpar o resultado
 
function limparResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}


//Função para adicionar amigo pressionando Enter
 
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
    
    
    inputAmigo.focus();
});


//Função para reiniciar o jogo 
 
function reiniciarJogo() {
    amigos = [];
    atualizarListaAmigos();
    limparResultado();
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}