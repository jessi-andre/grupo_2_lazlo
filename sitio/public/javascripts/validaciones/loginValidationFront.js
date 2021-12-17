const emailVerify = async email =>{
    try {
        let respuesta = await fetch('/api/getEmail?email=' + email)  

        let resultado = await respuesta.json()

        return resultado; 
    } catch (error) {
        console.log(error);
    }
}

 
let regExLetter = /^[A-Z]+$/i;
let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;


$('email').addEventListener('blur', async() => {
    if(!$('email').value){
        $('errorEmail').innerText = "El email es obligatorio" 
        $('email').classList.add('is-invalid')
        $('iconEmail').style.color = 'tomato';
    }else if(!regExEmail.test($('email').value)) {
        $('iconEmail').style.color = 'tomato';
        $('errorEmail').innerText = "Tiene que ser un email válido" 
        $('email').classList.add('is-invalid')
        
    }else if (await emailVerify($("email").value) == false) {
        $('campo-vacio').innerText = "Credenciales invalidas" 
        $('email').classList.add('is-invalid')
    }else {
        $('errorEmail').innerText = null
        $('email').classList.remove('is-invalid')
        $('email').classList.add('is-valid')
        $('iconEmail').style.color = 'green';
    }
})
$('email').addEventListener('change', () => {
    $('errorEmail').innerText = null
    $('email').classList.remove('is-invalid')
    $('iconEmail').style.color = '#181913';
})


$('password').addEventListener('blur', () => {
    if(!$('password').value){
        $('errorPassword').innerText = "La contraseña es obligatoria"
        $('password').classList.add('is-invalid')
        $('iconPassword').style.color = 'tomato';
    }
    /*else if (!regExPass.test($('password').value)) {
        $('errorPassword').innerText = "La contraseña debe tener una mayúscula, un número y entre 8 y 12 caracteres"
        $('password').classList.add('is-invalid')
        $('iconPassword').style.color = 'tomato';
    } */else {
        $('errorPassword').innerText = null
        $('password').classList.remove('is-invalid')
        $('password').classList.add('is-valid')
        $('iconPassword').style.color = 'green';
    }
})
$('password').addEventListener('focus', () => {
    $('password').classList.remove('is-invalid')
})



$('login').addEventListener('submit', e => {
    e.preventDefault();

    let elementForm = $('login').elements;


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
        $('login').submit()
    }
 })


 /* ver contraseña */
$('verPass').addEventListener('click', () => {
    $('password').type === "text" ? $('password').type = "password" : $('password').type = "text";
})