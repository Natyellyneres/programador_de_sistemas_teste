function loadCharacters() {
  fetch("http://localhost:5577/api/Anime")
    .then((response) => response.json())
    .then((data) => {
      const list = document.getElementById("character-list");
      list.innerHTML = "";
      data.forEach((animes) => {
        list.innerHTML += `
            <div>
            <p>${animes.titulo} (${animes.genero}) - ${animes.ano_lancamento}</p>
            <button onclick="deleteCharacter(${animes.id_anime})">Deletar</button>
                    <button onclick="editCharacter(${animes.id_anime}, '${animes.Titulo}, ${animes.Genero}, ${animes.ano_lancamento}')">Editar</button>
                </div>`;
      });
    })
    .catch((error) => console.error("Erro:", error));
}
//Adicionar nova pessoa
document.getElementById("character-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const Titulo = document.getElementById("Titulo").value;
  const Genero = document.getElementById("Genero").value;
  const ano_lancamento = document.getElementById("ano_lancamento").valeu;

  fetch("http://localhost:5577/api/Anime", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Titulo, Genero, ano_lancamento }),
  })
    .then(() => {
      loadCharacters();
      document.getElementById("character-form").reset();
    })
    .catch((error) => console.error("Erro:", error));
});

// Deletar pessoa
function deleteCharacter(id) {
  fetch(`http://localhost:5577/api/Anime/${id}`, { method: "DELETE" })
    .then(() => loadCharacters())
    .catch((error) => console.error("Erro:", error));
}

// Editar pessoa
function editCharacter(id, Titulo, Genero, ano_lancamento) {
  const TituloNovo = prompt("Novo ANime ", Titulo);
  const GeneroNovo = prompt("Genero:", Genero);
  const ano_lancamentoNovo = prompt("Ano:", ano_lancamento);

  fetch(`http://localhost:5577/api/Anime/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Titulo: TituloNovo,
      Genero: GeneroNovo,
      ano_lancamento: ano_lancamentoNovo,
    }),
  })
    .then(() => loadCharacters())
    .catch((error) => console.error("Erro:", error));
}
// carregar a lista ao abrir a pagina
loadCharacters();
