/* En un taller de tecnología, se registran los asistentes en un sistema. Cada asistente es representado como un objeto 
con sus datos personales. El sistema debe validar los datos, modificar valores según la edad, y determinar si la persona 
tiene acceso o no. */

// 1. Crear un objeto asistente con las propiedades requeridas
const asistente = {
    nombre: "Luis Fernández",
    edad: 17,
    email: "luis@gmail.com",
    telefono: "555-1234",
    confirmado: false,
    id: "AS-2024-001"
}

// 2. Agregar la propiedad institución al objeto
asistente.institucion = "Tech Academy"

// 3. Modificar el valor de confirmado a false si la edad es menor de 18 años
if (asistente.edad < 18) {
    asistente.confirmado = false
}

// 4. Eliminar la propiedad institución si el correo no termina en .com
if (!asistente.email.endsWith(".com")) {
    delete asistente.institucion
}

// 5. Mostrar el nombre del asistente en minúsculas
console.log(`Nombre del asistente: ${asistente.nombre.toLowerCase()}`)

// 6. Convertir la edad a cadena usando .toString()
asistente.edad = asistente.edad.toString()

// 7. Verificar si el id empieza con "AS-"
let esIdValido = asistente.id.startsWith("AS-")

// 8. Usar operador ternario para determinar el acceso
asistente.acceso = (asistente.edad >= 18) ? true : false

// 9. Mostrar el objeto después de todos los cambios
console.log(asistente)