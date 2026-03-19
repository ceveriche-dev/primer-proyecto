let carrito = [];
let total = 0;

function agregar(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  mostrarCarrito();
}

function mostrarCarrito() {
  let lista = document.getElementById("carrito");
  lista.innerHTML = "";

  carrito.forEach((producto, index) => {
    let li = document.createElement("li");
    li.textContent = producto.nombre + " - $" + producto.precio;

    // Botón eliminar
    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => eliminar(index);

    li.appendChild(btn);
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

function eliminar(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  mostrarCarrito();
}

// Limpiar carrito
function limpiarCarrito() {
  carrito = [];
  total = 0;
  mostrarCarrito();
}