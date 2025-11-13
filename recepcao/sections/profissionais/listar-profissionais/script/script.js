const lista = document.getElementById("listaProfissionais");
const busca = document.getElementById("busca");
let profissionais = JSON.parse(localStorage.getItem("profissionais") || "[]");

function salvar() {
    localStorage.setItem("profissionais", JSON.stringify(profissionais));
}

function render() {
    lista.innerHTML = "";
    profissionais.forEach((p, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${p.nome}</td>
          <td>${p.especialidade}</td>
          <td>${p.telefone}</td>
          <td>${p.cro}</td>
          <td class="acoes">
            <button class="btn-editar" onclick="editar(${i})">Editar</button>
            <button class="btn-deletar" onclick="deletar(${i})">Excluir</button>
          </td>
        `;
        lista.appendChild(tr);
    });
}

function editar(index) {
    const novoNome = prompt("Novo nome:", profissionais[index].nome);
    const novaEsp = prompt("Nova especialidade:", profissionais[index].especialidade);
    const novoTel = prompt("Novo telefone:", profissionais[index].telefone);
    const novoCro = prompt("Novo CRO:", profissionais[index].cro);

    if (novoNome && novaEsp && novoTel && novoCro) {
        profissionais[index] = { nome: novoNome, especialidade: novaEsp, telefone: novoTel, cro: novoCro };
        salvar();
        render();
    }
}

function deletar(index) {
    if (confirm("Tem certeza que deseja excluir este profissional?")) {
        profissionais.splice(index, 1);
        salvar();
        render();
    }
}

busca.addEventListener("input", () => {
    const termo = busca.value.toLowerCase();
    const linhas = lista.querySelectorAll("tr");
    linhas.forEach(l => {
        const texto = l.innerText.toLowerCase();
        l.style.display = texto.includes(termo) ? "" : "none";
    });
});

render();