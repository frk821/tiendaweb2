
export function ampliarInformacion(event){

    let producto = {}
    if(event.target.classList.contains("btn")){
        
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h5").textContent,
            precio:event.target.parentElement.querySelector("h4").textContent,
            descripcion:event.target.parentElement.querySelector("p").textContent
        }

        
        let foto = document.getElementById("fotoinfo")
        foto.src = producto.foto
        let nombre = document.getElementById("nombreinfo")
        nombre.textContent = producto.nombre
        let precio = document.getElementById("precioinfo")
        precio.textContent = producto.precio
        let descripcion = document.getElementById("descripcioninfo")
        descripcion.textContent = producto.descripcion
    }
}