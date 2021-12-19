const confirm = (id, e) => {
  console.log(e.target)
      e.preventDefault () 
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta seguro que quiere eliminar el producto?',
        text: "No se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminalo!',
        cancelButtonText: 'No, no lo elimines!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Producto Eliminado',
            'El producto se elimino correctamente',
            'success'
          )
          setTimeout(() => {
            document.getElementById(id).submit()
          }, 3000);
        } else if (
          // Read more about handling dismissals below 
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'No eliminado',
            'El producto no fue eliminado',
            'error'
          )
        }
      }) 
}

