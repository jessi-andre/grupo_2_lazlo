console.log('cart.js success');

let spanCantidad = document.querySelector('span.badge'); //cantidad de productos en el icono del carrito
let changuito = document.querySelector('#lista-carrito tbody'); //caja donde se van agregar los productos del carrito
let spanTotal = document.getElementById('total'); //h5 el valor total de productos agregados al carrito
let cartHead = document.getElementById('cart-head'); //encabezado de la tabla
let cartFooter = document.getElementById('cart-footer'); //pie de paǵina de la tabla
let cartEmpty = document.getElementById('cart-empty'); //span con la leyenda: no hay productos agregados
let btnCartEmpty = document.getElementById('btn-delete-cart'); //boton para vaciar el carrito
let btnNextBuy = document.getElementById('btn-next-buy'); //boton para continuar con la compra


const mostrarCantidad = changuito => {

    var cantidad = 0;
    var total = 0;

    if(changuito){
        changuito.forEach(item => {
            cantidad += item.cantidad
            total += item.total
        });
    }
    if(spanCantidad){
        spanCantidad.innerHTML = cantidad
        spanTotal.innerHTML = `<span>$</span> <span class="float-end">${total}</span>`
    }

    if(cantidad == 0){
        cartHead.style.display = 'none'
        cartFooter.style.display = 'none'
        cartEmpty.style.display = 'block'
        btnCartEmpty.classList.add('disabled');
        btnNextBuy.classList.add('disabled');
    }else{
        cartHead.style.display = "table-header-group"
        cartFooter.style.display = 'table-footer-group'
        cartEmpty.style.display = 'none'        
        btnCartEmpty.classList.remove('disabled');
        btnNextBuy.classList.remove('disabled');
    }

}


const cargarTabla = carrito => {
    changuito.innerHTML = ""
    carrito.forEach(producto => {
        let item = `
            <td class="col-2">
            <img class="w-100" src="/images/products/${producto.image}" id="imgProduct"> 
            </td>
            <td class="text-center col-3 align-middle">
            <a class="text-danger h5" onClick="removeItem(event,${producto.id})"><i class="fas fa-minus-square"></i></a>
            <span class="h5">${producto.cantidad}<span>
            <a class="text-success h5" onClick="addItem(event,${producto.id})"><i class="fas fa-plus-square"></i></a>
            </td>
            <td class="align-middle">
            ${producto.nombre}
            </td>
           
            <td class="align-middle">
            <span>$</span><span class="float-end">${producto.precio}</span>
            </td>
            <td class="align-middle">
            <span>$</span><span class="float-end">${producto.total}</span>
            </td>
            `;
        changuito.innerHTML += item
    });
    return false
}

const getCarrito = async () => {
    try {
        let response = await fetch('/api/carts/show')
        let result = await response.json()
        if(result.data.length > 0) {
            mostrarCantidad(result.data)
            cargarTabla(result.data)

        }else{
            mostrarCantidad(result.data)

        }
    } catch (error) {
        console.log(error)
    }
}

const addItem = async (e,id) => {
    e.preventDefault()
    try {
        let response = await fetch('/api/carts/add/' + id)
        let result = await response.json()
        mostrarCantidad(result.data);
        cargarTabla(result.data);

    } catch (error) {
        console.log(error)
    }
}

const removeItem = async (e,id) => {
    e.preventDefault()
    try {
        let response = await fetch('/api/carts/remove/' + id)
        let result = await response.json()
        mostrarCantidad(result.data);
        cargarTabla(result.data);

    } catch (error) {
        console.log(error)
    }
}

const emptyCart = async () => {
    try {
        let response = await fetch('/api/carts/empty')
        let result = await response.json()
        changuito.innerHTML = ""
        mostrarCantidad(result.data)
    } catch (error) {
        console.log(error)
    }
}

btnCartEmpty?.addEventListener('click',() => emptyCart())


getCarrito();
