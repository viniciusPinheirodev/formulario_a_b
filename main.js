const form = document.getElementById('form-enviar');

const campoB = document.getElementById('campo-B');
const campoA = document.getElementById('campo-A');
let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Validação aceita pois ${campoB.value} é maior que ${campoA.value}.`

    formEValido = parseInt(campoA.value) < parseInt(campoB.value);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

campoB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = parseInt(campoA.value) < parseInt(campoB.value);

    if(!formEValido) {
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none'
    }
})