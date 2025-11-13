// BUSCA FICTÍCIA POR CPF
const inputCPF = document.getElementById("cpfBusca");
const consultas = Array.from(document.querySelectorAll(".agendamento"));

inputCPF.addEventListener("input", () => {
  const valor = inputCPF.value.trim();

  if (valor === "") {
    consultas.forEach(c => c.style.display = "block");
    return;
  }

  // Simulação: mostra apenas uma consulta aleatória
  consultas.forEach(c => c.style.display = "none");
  const aleatorio = Math.floor(Math.random() * consultas.length);
  consultas[aleatorio].style.display = "block";
});

// FILTRO DE CONFIRMAR CANCELAMENTO
const checkbox = document.getElementById("confirm_cancelamento");

checkbox.addEventListener("change", () => {
  consultas.forEach(c => {
    const btnConfirmar = c.querySelector(".btn-confirmar-cancelamento");
    const btnCancelar = c.querySelector(".btn-cancelar");

    if (checkbox.checked) {
      // mostra só consultas com "Confirmar Cancelamento"
      c.style.display = btnConfirmar ? "block" : "none";
    } else {
      // mostra todas as consultas
      c.style.display = btnConfirmar ? "block" : "none";
      c.style.display = btnCancelar ? "block" : "none";
    }
  });
});

// MODAL DE CONFIRMAÇÃO
const modal = document.getElementById("modal");
let consultaAtual = null;

// abrir modal ao clicar em "Cancelar"
document.querySelectorAll(".btn-c").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    consultaAtual = e.target.closest(".agendamento");
    modal.style.display = "flex";
  });
});

// fechar modal
document.getElementById("fecharModal").addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "none";
});

// confirmar cancelamento fictício
document.getElementById("btnConfirmar").addEventListener("click", () => {

  if (consultaAtual) {
    consultaAtual.style.display = "none";
    modal.style.display = "none";
    alert("Consulta cancelada com sucesso!");
  }
});

// inicializa mostrando as consultas normais
checkbox.dispatchEvent(new Event("change"));
