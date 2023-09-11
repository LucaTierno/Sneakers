let carrito = [];

const pintarCarrito = () => {

    modal.innerHTML = "";
    modal.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader"
    modalHeader.innerHTML = `<h3 class = "modalHeaderTittle">Carrito</h3>`;

    modal.append(modalHeader);

    const modalButton = document.createElement("h3");
    modalButton.innerText = "X";
    modalButton.className = "modalHeaderButton";

    modalButton.addEventListener("click", () => {
        modal.style.display = "none"
    });

    modalHeader.append(modalButton);
    
    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modalContent"
        carritoContent.innerHTML = `
        <img src="${producto.imagen}"
        <h3>${producto.nombre}</h3>
        <p class="modalContent-precio">$${producto.precio}</p>
        `;

        modal.append(carritoContent);

        let eliminar = document.createElement("button");
        eliminar.innerHTML = '<i class="bi bi-trash3"></i>';
        eliminar.className = "eliminar";

        carritoContent.append(eliminar);

        eliminar.addEventListener("click", () => eliminarProducto(producto.id));
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "totalContent"
    totalBuying.innerHTML = `<p class="totalContentTexto">Total a pagar: $${total}</p>`

    modal.append(totalBuying);

};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (productId) => {
    carrito = carrito.filter((producto) => producto.id !== productId);
    pintarCarrito();
};
