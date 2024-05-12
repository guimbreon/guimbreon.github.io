
function criarFiltros() {
    const filtrosDiv = document.getElementById("filtros");

    // Lista todos os ids únicos de projetos
    const todosIds = listaProjetos.flatMap(projeto => projeto.id);
    const idsUnicos = Array.from(new Set(todosIds));

    // Cria um botão de filtro para cada id único
    idsUnicos.forEach(id => {
        const filtroBtn = document.createElement("button");
        filtroBtn.textContent = id;
        filtroBtn.addEventListener("click", () => filtrarProjetos(id));
        filtrosDiv.appendChild(filtroBtn);
    });
    const filtroReset = document.createElement("button");
    filtroReset.addEventListener("click", () => resetFilters());
    filtroReset.innerHTML = "Reset"
    filtrosDiv.appendChild(filtroReset);
}


    // Função para filtrar posts
function filtrarProjetos(city) {
    // Remover a classe 'selected' de todos os botões
    var buttons = document.querySelectorAll('.filters button');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });
  
    // Adicionar a classe 'selected' ao botão clicado
    event.target.classList.add('selected');
  
    // Implemente a lógica para filtrar os posts com base na cidade
    var posts = document.querySelectorAll('.post');
    posts.forEach(function(post) {
        if (post.id === city) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}

// Função para resetar os filtros
function resetFilters() {
    // Remover a classe 'selected' de todos os botões
    var buttons = document.querySelectorAll('.filters button');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });
  
    // Implemente a lógica para resetar os filtros
    var posts = document.querySelectorAll('.post');
    posts.forEach(function(post) {
        post.style.display = 'flex';
    });
}


// Chamando a função para criar os filtros quando a página carrega
window.addEventListener("load", criarFiltros);