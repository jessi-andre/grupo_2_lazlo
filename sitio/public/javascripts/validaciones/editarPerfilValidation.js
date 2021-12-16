const $ = id => document.getElementById(id);

let regExLetter = /^[A-Z]+$/i;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/; //mayuscula, numero y 8 a 12 caracteres


$('firstName').addEventListener('focus', () => {
    if ($('firstName').value.trim() === "") {
        $('errorFirstName').innerHTML = "<span><i class='fas fa-info-circle'></i> Solo caracteres alfabéticos</span>"
    }
})

$('firstName').addEventListener('blur', () => {

    switch (true) {
        case !$('firstName').value.trim():
            $('errorFirstName').innerHTML = "<span><i class='fas fa-exclamation-triangle'></i> El nombre es obligatorio</span>"
            $('firstName').classList.add('is-invalid')

            break;
        case $('firstName').value.trim().length < 2 || $('firstName').value.trim().length > 30:
            $('errorFirstName').innerText = "Entre 2 y 30 caracteres"
            $('firstName').classList.add('is-invalid')

            break;
        case !regExLetter.test($('firstName').value.trim()):
            $('errorFirstName').innerText = "Solo caracteres alfabéticos"
            $('firstName').classList.add('is-invalid')

            break;
        default:
            $('firstName').classList.remove('is-invalid')
            $('firstName').classList.add('is-valid')
            $('errorFirstName').innerText = null
            break;
    }
})
$('firstName').addEventListener('keydown', () => {
    $('firstName').classList.remove('is-invalid')
    $('errorFirstName').innerText = null
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

            break;
        case $('lastName').value.trim().length < 2 || $('firstName').value.trim().length > 30:
            $('errorLastName').innerText = "Entre 2 y 30 caracteres"
            $('lastName').classList.add('is-invalid')

            break;
        case !regExLetter.test($('lastName').value.trim()):
            $('errorLastName').innerText = "Solo caracteres alfabéticos"
            $('lastName').classList.add('is-invalid')

            break;
        default:
            $('lastName').classList.remove('is-invalid')
            $('lastName').classList.add('is-valid')
            $('errorLastName').innerText = null
            break;
    }
})
$('lastName').addEventListener('keydown', () => {
    $('lastName').classList.remove('is-invalid')
    $('errorLastName').innerText = null
})

$('newPassword').addEventListener('blur', () => {
    if (!regExPass.test($('newPassword').value)) {
        $('errorNewPassword').innerText = "La contraseña debe tener una mayúscula, un número y entre 8 y 12 caracteres"
        $('newPassword').classList.add('is-invalid')
    } else {
        $('errorNewPassword').innerText = null
        $('newPassword').classList.remove('is-invalid')
        $('newPassword').classList.add('is-valid')
    }
})
$('newPassword').addEventListener('focus', () => {
    $('newPassword').classList.remove('is-invalid')

})

$('newPassword2').addEventListener('blur', () => {
    if ($('newPassword').value !== $('newPassword2').value) {
        $('errorNewPassword2').innerText = "Las contraseñas no coinciden"
        $('newPassword2').classList.add('is-invalid')
    } else if ($('newPassword').value == "") {
        $('errorNewPassword2').innerText = "Debes ingresar una contraseña"
        $('newPassword2').classList.add('is-invalid')
    } else {
        $('errorNewPassword2').innerText = null
        $('newPassword2').classList.remove('is-invalid')
        $('newPassword2').classList.add('is-valid')
    }
})
$('newPassword2').addEventListener('focus', () => {
    $('newPassword2').classList.remove('is-invalid')

})



$('editarPerfil').addEventListener('submit', e => {
    e.preventDefault();

    let camposObligatorios = [$('firstName'), $('lastName'), $('oldPassword')];

    let errors = false
    for (let i = 0; i < camposObligatorios.length - 2; i++) {

        if (!camposObligatorios[i].value) {
            camposObligatorios[i].classList.add('is-invalid')
            $('campo-vacio').innerHTML = "Debes completar los campos obligatorios (Nombre, apellido y contraseña actual)";
            errors = true
        }
    }

    for (let i = 0; i < camposObligatorios.length - 2; i++) {

        if (camposObligatorios[i].classList.contains('is-invalid')) {
            errors = true
        }
    }

    if (!errors) {
        $('editarPerfil').submit()
    }

})

$('verPass').addEventListener('click', () => {
    $('oldPassword').type === "text" ? $('oldPassword').type = "password" : $('oldPassword').type = "text";
})