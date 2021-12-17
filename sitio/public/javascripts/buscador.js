const $ = id => document.getElementById(id);


$("buscar").addEventListener("click", (e)=>{
    e.preventDefault();

    if($("busqueda").value){

        $("buscar").submit()
    }


   

    
})



console.log("holis")