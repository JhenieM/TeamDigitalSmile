const form = document.getElementById("formProfissional");

form.addEventListener("submit", e => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const especialidade = document.getElementById("especialidade").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cro = document.getElementById("cro").value.trim();

    const profissional = { nome, especialidade, telefone, cro };

    const profissionais = JSON.parse(localStorage.getItem("profissionais") || "[]");
    profissionais.push(profissional);
    localStorage.setItem("profissionais", JSON.stringify(profissionais));

    alert("Profissional cadastrado com sucesso!");
    form.reset();
});