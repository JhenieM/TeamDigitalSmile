const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const linkLogin = document.getElementById('linkLogin');
const linkCadastro = document.getElementById('linkCadastro');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

linkLogin.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove("active");
});

linkCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add("active");
});