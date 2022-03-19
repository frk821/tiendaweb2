export function pintarTienda(){

    let productos = [
        {foto: 'img/productos/chaqbatman.jpg',nombre: "Chaqueta Batman", precio: 60000, descripcion: 'Chaqueta de Batman revestida en su parte interior por una malla de excelente calidad'},
        {foto: 'img/productos/chaqsuperman.jpg',nombre: "Chaqueta Superman", precio: 60000, descripcion: 'Chaqueta de Superman revestida en su parte interior por una malla de excelente calidad'},
        {foto: 'img/productos/camiseta1.jpg',nombre: "Camiseta Blanca JL", precio: 60000, descripcion: 'Camiseta 100% algodón. Estampados personajes de la Liga de la Justicia.'},
        {foto: 'img/productos/camiseta2.jpg',nombre: "Camiseta Logos JL", precio: 60000, descripcion: 'Camiseta 100% algodón. De los personajes de la Liga de la Justicia.'},
        {foto: 'img/productos/camiseta3.jpg',nombre: "Camiseta Personajes JL", precio: 60000, descripcion: 'Camiseta negra 100% algodón. Personajes Liga de la Justicia'},
        {foto: 'img/productos/camiseta4.jpg',nombre: "Camiseta Negra Batman", precio: 60000, descripcion: 'Camiseta Negra 100% algodón. Con estampado de Batman'},
        {foto: 'img/productos/camiseta5.jpg',nombre: "Camiseta Gris Batman", precio: 60000, descripcion: 'Camiseta Gris 100% algodón, excelente calidad. Con estampado de Batman'},
        {foto: 'img/productos/camiseta6.jpg',nombre: "Camiseta Negra JL", precio: 60000, descripcion: 'Camiseta negra 100% algodón. Justice League Zack Snyder'},
        {foto: 'img/productos/camiseta7.jpg',nombre: "Camiseta Roja JL", precio: 60000, descripcion: 'Camiseta roja 100% algodón. Justice League Zack Snyder'},
        {foto: 'img/productos/camiseta8.jpg',nombre: "Camiseta Silver JL", precio: 60000, descripcion: 'Camiseta silver 100% algodón. Justice League Zack Snyder'},
        {foto: 'img/productos/blusa1.jpg',nombre: "Blusa Justice League", precio: 60000, descripcion: 'Blusa Dama 100% algodón. Estampado Mujer Maravilla'},
        {foto: 'img/productos/blusa2.jpg',nombre: "Blusa Batman", precio: 60000, descripcion: 'Blusa Dama 100% algodón. Estampado Batman'},
        {foto: 'img/productos/pantaloneta1.jpg',nombre: "Pantaloneta Batman", precio: 60000, descripcion: 'Espectacular pantaloneta 100% algodón. Estampado logo de Batman'},
        {foto: 'img/productos/pantaloneta2.jpg',nombre: "Pantaloneta Justice League", precio: 60000, descripcion: 'Espectacular pantaloneta 100% algodón. Estampado de la Liga de la Justicia'},
        {foto: 'img/productos/fig_batman.jpg',nombre: "Figura Batman", precio: 60000, descripcion: 'Figura de acción de Batman de la película La Liga de la Justicia, 7 pulgadas'},
        {foto: 'img/productos/fig_superman.jpg',nombre: "Figura Superman", precio: 60000, descripcion: 'Figura de acción de Superman de la película La Liga de la Justicia, 7 pulgadas'},
        {foto: 'img/productos/fig_flash.jpg',nombre: "Figura Flash", precio: 60000, descripcion: 'Figura de acción de Flash de la película La Liga de la Justicia, 7 pulgadas'},
        {foto: 'img/productos/fig_woman.jpg',nombre: "Figura Mujer Maravilla", precio: 60000, descripcion: 'Figura de acción de Mujer Maravilla de la película La Liga de la Justicia, 7 pulgadas'},
        {foto: 'img/productos/fig_cyborg.jpg',nombre: "Figura Cyborg", precio: 60000, descripcion: 'Figura de acción de Cyborg de la película La Liga de la Justicia, 7 pulgadas'},
        {foto: 'img/productos/fig_aquaman.jpg',nombre: "Figura Aquaman", precio: 60000, descripcion: 'Figura de acción de Aquaman de la película La Liga de la Justicia, 7 pulgadas'},
        {foto: 'img/productos/fig_darkseid.jpg',nombre: "Figura Darkseid", precio: 60000, descripcion: 'Figura de acción de Darkseid de la película La Liga de la Justicia, 7 pulgadas'},
        {foto: 'img/productos/fig_steppenwolf.jpg',nombre: "Figura Steppenwolf", precio: 60000, descripcion: 'Figura de acción de Steppenwolf de la película La Liga de la Justicia, 7 pulgadas'}
    ]
    
    //Referencia componente Padre
    let fila = document.getElementById("fila")
    
    productos.forEach(function(producto) {
        let columna = document.createElement("div")
        columna.classList.add("col")
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let foto = document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src = producto.foto
    
        let nombreProducto = document.createElement("h5")
        nombreProducto.classList.add("card-title")
        nombreProducto.classList.add("text-center")
        nombreProducto.textContent=producto.nombre
    
        let precioProducto = document.createElement("h4")
        precioProducto.classList.add("card-text")
        precioProducto.classList.add("text-center")
        precioProducto.textContent=producto.precio
    
        let descripcionProducto = document.createElement("p")
        descripcionProducto.classList.add("card-text")
        descripcionProducto.classList.add("text-center")
        descripcionProducto.textContent=producto.descripcion

        let boton = document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-dark","mx-4", "mb-4")
        boton.textContent="Ver Producto"
        
        //Ordenar la estructura de las tarjetas
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombreProducto)
        tarjeta.appendChild(precioProducto)
        tarjeta.appendChild(descripcionProducto)
        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    });

}


