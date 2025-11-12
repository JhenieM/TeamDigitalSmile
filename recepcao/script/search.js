// ======== BUSCA FICTÍCIA POR CPF ========
const inputCPF = document.getElementById("cpfBusca");
const listaConsultas = document.getElementById("listaConsultas");
const consultas = Array.from(document.querySelectorAll(".agendamento"));

inputCPF.addEventListener("input", () => {
    const valor = inputCPF.value.trim();
    if (valor === "") {
        consultas.forEach(c => c.style.display = "block");
        return;
    }

    // Mostrar 1 consulta aleatória simulando busca
    consultas.forEach(c => c.style.display = "none");
    const aleatorio = Math.floor(Math.random() * consultas.length);
    consultas[aleatorio].style.display = "block";
});

// ======== CANCELAMENTO (MODAL SIMULADO) ========
const checkbox = document.getElementById("confirm_cancelamento");
const modal = document.getElementById("modal");
let consultaAtual = null;

document.querySelectorAll(".btn-cancelar").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        if (!checkbox.checked) {
            alert("Marque 'Confirmar Cancelamento' antes de prosseguir.");
            return;
        }
        consultaAtual = e.target.closest(".agendamento");
        modal.style.display = "flex";
    });
});

document.getElementById("btnConfirmar").addEventListener("click", () => {
    const tel = document.getElementById("telConfirm").value.trim();
    if (tel === "") {
        alert("Digite seu telefone para confirmar.");
        return;
    }
    if (consultaAtual) {
        consultaAtual.style.display = "none";
        modal.style.display = "none";
        alert("Consulta cancelada com sucesso!");
    }
});

document.getElementById("fecharModal").addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "none";
});