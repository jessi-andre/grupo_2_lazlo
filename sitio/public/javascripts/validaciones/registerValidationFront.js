const $ = id => document.getElementById(id);

let regExLetter = /^[A-Z]+$/i;
let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/; //mayuscula, numero y 8 a 12 caracteres
const regImg = /\.(jpg|jpeg|png|gif|webp)$/

const emailVerify = async email =>{
    try {
        let respuesta = await fetch('/api/getEmail?email=' + email)  

        let resultado = await respuesta.json()

        return resultado; 
    } catch (error) {
        console.log(error);
    }
}

$('name').addEventListener('focus', () => {
    if ($('name').value.trim() === "") {
        $('errorName').innerHTML = "<span><i class='fas fa-info-circle'></i> Solo caracteres alfabéticos</span>"
    }
})

$('name').addEventListener('blur', () => {

    switch (true) {
        case !$('name').value.trim():
            $('errorName').innerHTML = "<span><i class='fas fa-exclamation-triangle'></i> El nombre es obligatorio</span>"
            $('name').classList.add('is-invalid')
            $('iconFirstName').style.color = "tomato";
            break;
        case $('name').value.trim().length < 2 || $('name').value.trim().length > 30:
            $('errorName').innerText = "Entre 2 y 30 caracteres"
            $('name').classList.add('is-invalid')
            $('iconFirstName').style.color = "tomato";
            break;
        case !regExLetter.test($('name').value.trim()):
            $('errorName').innerText = "Solo caracteres alfabéticos"
            $('name').classList.add('is-invalid')
            $('iconFirstName').style.color = "tomato";
            break;
        default:
            $('name').classList.remove('is-invalid')
            $('name').classList.add('is-valid')
            $('errorName').innerText = null
            $('iconFirstName').style.color = "green";
            break;
    }
})
$('name').addEventListener('keydown', () => {
    $('name').classList.remove('is-invalid')
    $('errorName').innerText = null
})



$('lastName').addEventListener('focus', () => {
    if ($('lastName').value.trim() === "") {
        $('errorLastName').innerHTML = "<span><i class='fas fa-info-circle'></i> Solo caracteres alfabéticos</span>"
    }
})

$('lastName').addEventListener('blur', () => {

    switch (true) {
        case !$('lastName').value.trim():
            $('errorLastName').innerHTML = "<span><i class='fas fa-exclamation-triangle'></i> El apellido es obligatorio</span>"
            $('lastName').classList.add('is-invalid')
            $('iconLastName').style.color = "tomato";
            break;
        case $('lastName').value.trim().length < 2 || $('name').value.trim().length > 30:
            $('errorLastName').innerText = "Entre 2 y 30 caracteres"
            $('lastName').classList.add('is-invalid')
            $('iconLastName').style.color = "tomato";
            break;
        case !regExLetter.test($('lastName').value.trim()):
            $('errorLastName').innerText = "Solo caracteres alfabéticos"
            $('lastName').classList.add('is-invalid')
            $('iconLastName').style.color = "tomato";
            break;
        default:
            $('lastName').classList.remove('is-invalid')
            $('lastName').classList.add('is-valid')
            $('errorLastName').innerText = null
            $('iconLastName').style.color = "green";
            break;
    }
})
$('lastName').addEventListener('keydown', () => {
    $('lastName').classList.remove('is-invalid')
    $('errorLastName').innerText = null
})

$('email').addEventListener('blur', async() => {
    if(!$('email').value){
        $('errorEmail').innerText = "El email es obligatorio"
        $('email').classList.add('is-invalid')
        $('iconEmail').style.color = 'tomato'
    }else if (!regExEmail.test($('email').value)) {
        $('errorEmail').innerText = "Tiene que ser un email válido"
        $('email').classList.add('is-invalid')
        $('iconEmail').style.color = 'tomato'
    }else if ( await emailVerify($('email').value)) {
        $('errorEmail').innerText = "Este email ya existe"
        $('email').classList.add('is-invalid')
        $('iconEmail').style.color = 'tomato'
    }
 else {
        $('errorEmail').innerText = null
        $('email').classList.remove('is-invalid')
        $('email').classList.add('is-valid')
        $('iconEmail').style.color = 'green'
    }
})

$('password').addEventListener('blur', () => {
    if (!regExPass.test($('password').value)) {
        $('errorPassword').innerText = "La contraseña debe tener una mayúscula, un número y entre 8 y 12 caracteres"
        $('password').classList.add('is-invalid')
        $('iconPassword').style.color = 'tomato'
    } else {
        $('errorPassword').innerText = null
        $('password').classList.remove('is-invalid')
        $('password').classList.add('is-valid')
        $('iconPassword').style.color = 'green'
    }
})
$('password').addEventListener('focus', () => {
    $('password').classList.remove('is-invalid')

})

$('password2').addEventListener('blur', () => {
    if ($('password').value !== $('password2').value) {
        $('errorPassword2').innerText = "Las contraseñas no coinciden"
        $('password2').classList.add('is-invalid')
        $('iconPassword2').style.color = 'tomato'
    } else if ($('password').value == "") {
        $('errorPassword2').innerText = "Debes ingresar una contraseña"
        $('password2').classList.add('is-invalid')
        $('iconPassword2').style.color = 'tomato'
    } else {
        $('errorPassword2').innerText = null
        $('password2').classList.remove('is-invalid')
        $('password2').classList.add('is-valid')
        $('iconPassword2').style.color = 'green'
    }
})
$('password2').addEventListener('focus', () => {
    $('password2').classList.remove('is-invalid')

})

$('profile').addEventListener('change', function () {
    switch (true) {
        case !regImg.exec(this.value):
            $("errorImage").innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
            this.classList.add('is-invalid')
            $('iconImage').style.color = "tomato"
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            $('iconImage').style.color = "green"
            $("errorImage").innerHTML = null;
            break;
    }
})



$('registro').addEventListener('submit', e => {
    e.preventDefault();

    let elementForm = $('registro').elements;


    let errors = false
    for (let i = 0; i < elementForm.length - 2; i++) {

        if (!elementForm[i].value) {
            elementForm[i].classList.add('is-invalid')
            $('campo-vacio').innerHTML = "Debes completar todos los campos";
            errors = true
        }
    }



    for (let i = 0; i < elementForm.length - 2; i++) {

        if (elementForm[i].classList.contains('is-invalid')) {
            errors = true
        }
    }

    if (!errors) {
        $('registro').submit()
    }




})
 /* ver contraseña */
 $('verPass').addEventListener('click', () => {
    $('password').type === "text" ? $('password').type = "password" : $('password').type = "text";
})

