// Define a função 'pesquisar'.
function Buscar() {
    // Obtém a referência do elemento HTML com id "resultados-pesquisa".
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("EntradaPesquisa").value;

    // se campoPesquisa for vazio ou nulo
    if (campoPesquisa == "") {
        section.innerHTML = "<h4>Por favor, digite ou filtre algo para pesquisar.</h4>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa a variável 'resultados' como string vazia.
    let resultados = "";
    let titulo = "";
    let tags = "";

    // Itera sobre cada objeto 'dado' dentro do array 'dados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se o titulo do dado incluir o campo de pesquisa
        if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
    <div class="item-resultado">
        <img src="${dado.imagem}" alt="${dado.titulo}"> 
        <h2>${dado.titulo}</h2>
        <article>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Leia mais aqui</a>
    </div> ` ;
        }
    }

if (!resultados) {
    resultados = "<h4>Não encontramos resultados para a sua pesquisa.</h4>"; }

    // Define o HTML interno da 'section' com o conteúdo da variável 'resultados'.
    section.innerHTML = resultados;
}

function filtrarPorCategoria(categoria) {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
  
    if (categoria === "todos") {
      // Se a categoria for "todos", mostrar todos os jogos (reutilizar a lógica da busca principal)
      for (let dado of dados) { 
        resultados += `
          <div class="item-resultado">
            <img src="${dado.imagem}" alt="${dado.titulo}"> 
            <h2>${dado.titulo}</h2>
            <article>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações</a>
            </article>
          </div>`;
      }
    } else {
      // Filtrar os jogos com base na categoria
      for (let dado of dados) {
        if (dado.tags.toLowerCase().includes(categoria)) { 
          resultados += `
            <div class="item-resultado">
            <img src="${dado.imagem}" alt="${dado.titulo}"> 
              <h2>${dado.titulo}</h2>
              <article>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
              </article>
            </div>`;
        }
      }
    }
  
    if (!resultados) {
      resultados = "<h4>Não encontramos resultados para essa categoria.</h4>";
    }
  
    section.innerHTML = resultados;
  }