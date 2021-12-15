console.log('Validaciones Front')

const $ = id => document.getElementById(id);
const colores = document.querySelectorAll('.checkboxColor');
const talles = document.querySelectorAll('.checkboxTalle');
const regImg = /\.(jpg|jpeg|png|gif|webp)$/




/*---- VALIDACIÓN NOMBRE DEL PRODUCTO ----*/
$('inputNombre').addEventListener('blur', function () {
    if (this.value.length <= 0) {
        $('nameError').innerHTML = "El nombre es requerido";
        $('inputNombre').classList.add('is-invalid');
    } else {
        $('inputNombre').classList.remove('is-invalid');
        $('inputNombre').classList.add('is-valid');
        $('nameError').innerHTML = null;
    }
})

$('inputNombre').addEventListener('focus', function () {
    $('inputNombre').classList.remove('is-invalid');
})

/*---- VALIDACIÓN PRECIO DEL PRODUCTO ----*/
$('inputPrecio').addEventListener('blur', function () {
    if (this.value.length <= 0) {
        $('priceError').innerHTML = "El precio es requerido";
        this.classList.add('is-invalid');
    } else {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        $('priceError').innerHTML = null;
    }
})

$('inputPrecio').addEventListener('focus', function () {
    this.classList.remove('is-invalid');
})

/*---- VALIDACIÓN CATEGORÍA DEL PRODUCTO ----*/
$('inputCategoria').addEventListener('blur', function () {
    if (this.value.length <= 0) {
        $('categoryError').innerHTML = "La categoría es requerida";
        this.classList.add('is-invalid');
    } else {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        $('categoryError').innerHTML = null;
    }
})

$('inputCategoria').addEventListener('focus', function () {
    this.classList.remove('is-invalid');
})

/*---- VALIDACIÓN iMAGEN DEL PRODUCTO ----*/
$('inputImage').addEventListener('change', function (){
    switch (true) {
        case !regImg.exec(this.value):
            $("imageError").innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
            this.classList.add('is-invalid')
            break;
        case !this.value :
            $("imageError").innerHTML = "Tiene subir una imagen"
            this.classList.add('is-invalid');
            
            break
       
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
          
            break;
    }
})

   $('inputImage').addEventListener('focus', function () {
    this.classList.remove('is-invalid');
})

/*---- VALIDACIÓN DESCRIPCIÓN DEL PRODUCTO ----*/
$('inputDescrption').addEventListener('blur', function () {
    if (this.value.length <= 0) {
        $('descrptionError').innerHTML = "La descripción es requerida";
        this.classList.add('is-invalid');
    } else if (this.value.length > 1 && this.value.length < 20) {
        $('descrptionError').innerHTML = "La descripcion debe tener al menos 20 caracteres";
        this.classList.add('is-invalid');
    } else {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        $('descrptionError').innerHTML = null;
    }
})

$('inputDescrption').addEventListener('focus', function () {
    this.classList.remove('is-invalid');
})

/*---- VALIDACIÓN FINAL ----*/
$('productsForm').addEventListener('submit', e => {
    e.preventDefault();

    let elementForm = $('productsForm').elements;

    let errors = false;
    let errorColor = true;
    let errorTalle = true;

    colores.forEach(color => {
        if (color.checked) {
            errorColor = false;
            $('colorError').innerHTML = null
        }
    });

    if (errorColor) {
        errors = true
        $('colorError').innerHTML = "Debe seleccionar al menos un color"
    }

    if ($('inputCategoria').value == 2) {
        talles.forEach(talle => {
            if (talle.checked) {
                errorTalle = false;
                $('sizeError').innerHTML = null
            }
        });

        if (errorTalle) {
            errors = true
            $('sizeError').innerHTML = "Debe seleccionar al menos un talle"
        }
    } else {
        errorTalle = false;
    }


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
        $('productsForm').submit()
    }

})
