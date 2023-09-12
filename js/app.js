const containerProductos = document.querySelector(".container-productos");
const verCarrito = document.querySelector(".ver-carrito")
const modalHeaderButton = document.querySelector(".modal-header-button");
const modal = document.getElementById("modal");
const cantidadCarrito = document.getElementById("cantidadCarrito");

productos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
    <img class="producto-img" src="${producto.imagen}" alt="">
    <h4 class="producto-titulo">${producto.nombre}</h4>
    <p class="producto-descripcion">${producto.descripcion}</p>
    <p class="producto-precio">$${producto.precio}</p>
    <button class="producto-comprar" id="btnComprar${producto.id}">COMPRAR</button>
    `;

    containerProductos.append(div);

    const btnComprar = document.getElementById(`btnComprar${producto.id}`);

    btnComprar.addEventListener("click", () => {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen
        });
        console.log(carrito);
        carritoCounter();
        saveLocal();
    });
});

// LOCAL STORAGE

const saveLocal = () => {
    localStorage.setItem("Carrito", JSON.stringify(carrito));
};