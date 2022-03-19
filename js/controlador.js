//Importando Modulos
import { pintarTienda } from "./tienda.js";
import { ampliarInformacion } from "./ampliarInfo.js"

//Llamando modulo de pintar
pintarTienda()

//Llamando modulo ampliar info
let contenedorTienda = document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    ampliarInformacion(event)
    if(event.target.classList.contains("btn")){
        modalinfoproducto.show()
    }
    
})