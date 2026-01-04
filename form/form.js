// DOM
const formContainer = document.querySelector('.formulario');
const btnToggle = document.querySelectorAll('.toggle-form');
// const formSignin = document.querySelector('.form-signin');
// const formSignup = document.querySelector('.form-signup');

// MUDANÇA DE FORMULARIO
function toggleForm() {
    formContainer.classList.toggle('form-toggle');
}

btnToggle.forEach(btn => {
    console.log("toggle chamado");
    btn.addEventListener('click', () => {
        console.log("clique chamado");
        toggleForm()
    });
});