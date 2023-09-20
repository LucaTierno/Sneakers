const containerProductos = document.querySelector(".container-productos");
const verCarrito = document.querySelector(".ver-carrito")
const modalHeaderButton = document.querySelector(".modal-header-button");
const modal = document.getElementById("modal");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const airForce = document.getElementById("airForce");
const airJordan = document.getElementById("airJordan");
const airMax = document.getElementById("airMax");
const airTodos = document.getElementById("airTodos");
const sectionProductosTitulo = document.getElementById("sectionProductosTitulo");
const modalContent = document.getElementsByClassName(".modalContent");

const todosLosProductos = () => {
    sectionProductosTitulo.innerText = "Todos los productos"
    containerProductos.innerHTML = "";
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

            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Producto agregado al carrito.'
              })
        });
    });
}
todosLosProductos(); // Recorremos todos los productos cuando carga la página
airTodos.addEventListener("click", (todosLosProductos));


// Funciones para crear las distintas secciones de productos.

const modeloAirForce = () => {
    sectionProductosTitulo.innerHTML = "Air Force";
    containerProductos.innerHTML = "";

    productos.forEach(producto => {
        if (producto.categoria === "Air Force"){
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

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Producto agregado al carrito.'
                      })
            });
        };
    });
};
airForce.addEventListener("click", (modeloAirForce));

const modeloAirJordan = () => {
    sectionProductosTitulo.innerHTML = "Air Jordan";
    containerProductos.innerHTML = "";

    productos.forEach(producto => {
        if (producto.categoria === "Air Jordan"){
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

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Producto agregado al carrito.'
                      })
            });
        };
    });
};
airJordan.addEventListener("click", (modeloAirJordan));

const modeloAirMax = () => {
    sectionProductosTitulo.innerHTML = "Air Max";
    containerProductos.innerHTML = "";

    productos.forEach(producto => {
        if (producto.categoria === "Air Max"){
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

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Producto agregado al carrito.'
                      })
            });
        };
    });
};
airMax.addEventListener("click", (modeloAirMax));


// ------ LOCAL STORAGE ------

const saveLocal = () => {
    localStorage.setItem("Carrito", JSON.stringify(carrito));
};