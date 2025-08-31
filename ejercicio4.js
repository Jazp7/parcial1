/* La tienda en línea Carteras VIP recibe pedidos a través de un sistema digital. Cada pedido contiene información del 
cliente, el carrito de compras, un cupón opcional y la fecha de creación. El sistema debe normalizar los datos, calcular 
descuentos, validar inforamción y determinar el estado del pago y el tipo de envío. */

// 1. Crear un objeto pedido con la estructura

let pedido = {
    cliente: {
        nombre: "ana maría GONZÁLEZ",
        codigoCliente: "USR-123"
    },
    carrito: {
        producto: "Cartera de cuero premium",
        precioUnitario: 85.50,
        cantidad: 3
    },
    cupon: "OFERTA2024",
    creadoEn: new Date()
}

// 2. Reto: Normalizar el nombre del cliente en formato Title Case (primera letra en mayúscula, resto en minúscula)
pedido.cliente.nombre = pedido.cliente.nombre.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(" ")

// 3. Obtener el año del pedido con .getFullYear() y mostrarlo
let añoPedido = pedido.creadoEn.getFullYear()

// 4. Convertir la fecha creadoEn a ISO con .toISOString()
pedido.creadoEn = pedido.creadoEn.toISOString()

/*  5. Calcular el subtotal y luego aplicar descuentos acumulados con operadores
    de asignación * 15% si el cupón empieza con "OFERTA". * 5% adicional si la
    la cantidad es mayor o igual a 3 y el subtotal supera 100 
*/

let subtotal = pedido.carrito.precioUnitario * pedido.carrito.cantidad
if (pedido.cupon.startsWith("OFERTA")) {
    subtotal *= 0.85
}
if (pedido.carrito.cantidad >= 3 && subtotal > 100) {
    subtotal *= 0.95
}

//  6. Validar la información:
/*  Si el código de cliente no empieza con "CL-", agregar la propiedad observación
    Si el nombre del producto está vacío o tiene menos de 3 caracteres, reemplazar
    por "PRODUCTO DESCONOCIDO
    Si no hay cupón, eliminar la propiedad cupón
*/

if (!pedido.cliente.codigoCliente.startsWith("CL-")) {
    pedido.observacion = "Código de cliente inválido"
}
if (pedido.carrito.producto.length < 3) {
    pedido.carrito.producto = "PRODUCTO DESCONOCIDO"
}
if (!pedido.cupon) {
    delete pedido.cupon
}

//  7. Usar operadores ternarios para asignar:
/*  estadoPago: "APROBADO" si el total es mayor o igual a 50, "RECHAZADO" en caso contrario
    etiquetaEnvio: "ENVÍO PRIORITARIO" si el total es mayor a 120 o si la
    cantidad es mayor o igual a 5m "ENVÍO ESTÁNDAR" en caso contrario
*/
let estadoPago = (subtotal >= 50) ? "APROBADO" : "RECHAZADO"
let etiquetaEnvio = (subtotal > 120 || pedido.carrito.cantidad >= 5) ? "ENVÍO PRIORITARIO" : "ENVÍO ESTÁNDAR"
pedido.estadoPago = estadoPago
pedido.etiquetaEnvio = etiquetaEnvio

/*  8. Mostrar en consola: nombre normalizado, año, fecha en ISO, subtotal, descuento, total, 
    estado de pago, etiqueta de envío y el objeto final con todos los cambios */
console.log("=== RESUMEN DEL PEDIDO ===")
console.log(`Nombre del cliente: ${pedido.cliente.nombre}`)
console.log(`Año del pedido: ${añoPedido}`)
console.log(`Fecha (ISO): ${pedido.creadoEn}`)
console.log(`Subtotal: $${subtotal.toFixed(2)}`)
console.log(`Estado de pago: ${pedido.estadoPago}`)
console.log(`Etiqueta de envío: ${pedido.etiquetaEnvio}`)

console.log(pedido)