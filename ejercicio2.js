/* En la tienda Snack Express, un cliente realiza una compra de chocolates. El sistema debe calcular el monto 
total a pagar y determinar si se trata de una compra "grande" o "regular", tomando en cuenta la cantidad 
y el subtotal. Además, el sistema aplicará descuentos con base en un cupón. */

// 1. Declarar las variables nombreCliente, producto, precioUnidad, cantidad y cupon
const nombreCliente = "Carlos Mendoza"
const producto = "Chocolates"
const precioUnidad = 2.50
let cantidad = 10
let cupon = "DESCUENTO10"

// 2. Mostrar el nombre del cliente en mayúsculas y el nombre del producto con su cantidad de caracteres
console.log(`Cliente: ${nombreCliente.toUpperCase()}`)
console.log(`Producto: ${producto} (${producto.length} caracteres)`)

// 3. Calcular el subtotal multiplicando precio por cantidad
let subtotal = precioUnidad * cantidad

/*  4. Aplicar un 10% de descuento si el cupon empieza con "SWEET", en caso contrario no aplicar descuento 
    (usar operador ternario) */
let descuento = cupon.startsWith("SWEET") ? subtotal * 0.10 : 0

// 5. Usar un operador de asignación para acumular el valor del descuento
subtotal -= descuento

// 6. Calcular el total restando el descuento al subtotal
let total = subtotal

// 7. Evaluar si la compra es grande (cantidad > 3 && subtotal >= 10) o regular
let tipoCompra = (cantidad > 3 && subtotal >= 10) ? "grande" : "regular"

/*  8. Mostrar en consola todos los resultados: nombre del cliente, producto y longitud, 
    subtotal, descuento, total final y el mensaje de compra */
console.log("=== RESUMEN DE COMPRA ===")
console.log(`Cliente: ${nombreCliente.toUpperCase()}`)
console.log(`Producto: ${producto} (${producto.length} caracteres)`)
console.log(`Cantidad: ${cantidad}`)
console.log(`Subtotal: $${subtotal.toFixed(2)}`)
console.log(`Descuento: $${descuento.toFixed(2)}`)
console.log(`Total a pagar: $${total.toFixed(2)}`)
console.log(`Tipo de compra: ${tipoCompra}`)
