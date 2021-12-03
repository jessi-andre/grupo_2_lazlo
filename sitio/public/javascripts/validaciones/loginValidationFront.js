const $ = id => document.getElementById(id);

let regExLetter = /^[A-Z]+$/i;
let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; //mayuscula, numero y 6 a 12 caracteres


$('email').addEventListener('blur', () => {
    if (!regExEmail.test($('email').value)) {
        $('errorEmail').innerText = "Tiene que ser un email válido"
        $('email').classList.add('is-invalid')
    } else {
        $('errorEmail').innerText = null
        $('email').classList.remove('is-invalid')
        $('email').classList.add('is-valid')
    }
})


$('password').addEventListener('blur', () => {
    if (!regExPass.test($('password').value)) {
        $('errorPassword').innerText = "La contraseña debe tener una mayúscula, un número y entre 6 y 12 caracteres"
        $('password').classList.add('is-invalid')
    } else {
        $('errorPassword').innerText = null
        $('password').classList.remove('is-invalid')
        $('password').classList.add('is-valid')
    }
})
$('password').addEventListener('focus', () => {
    $('password').classList.remove('is-invalid')

})





$('registro').addEventListener('submit', e => {
    e.preventDefault();

    let elementForm = $('registro').elements;


    let errors = false
    for (let i = 0; i < elementForm.length - 1; i++) {

        if (!elementForm[i].value) {
            elementForm[i].classList.add('is-invalid')
            $('campo-vacio').innerHTML = "Debes completar todos los campos";
            errors = true
        }
    }



    for (let i = 0; i < elementForm.length - 1; i++) {

        if (elementForm[i].classList.contains('is-invalid')) {
            errors = true
        }
    }

    if (!errors) {
        $('registro').submit()
    }





 })
