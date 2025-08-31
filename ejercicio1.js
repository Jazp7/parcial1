/* María García, gerente de recursos humanos, necesita crear fichas digitales para nuevos empleados. 
Cada ficha debe contener información personal y calcular algunos datos automáticamente */

// 1. Declare las siguientes variables usando let, const o var según corresponda
const nombreCompleto = "Ana Lucía Rodríguez"
const edad = 38
const salarioBase = 1200.50
let esActivo = true
let departamento = null

// 2. Cree un objeto empleado con las siguientes propiedades
const empleado = {
    nombre: nombreCompleto,
    edad: edad,
    salario: salarioBase,
    activo: esActivo,
    fechaIngreso: new Date(),
    Habilidades: ["Excel", "Power PI", "Análisis"]
}

// 3. Manipule el obejeto
// Agregue la propiedad departamento con valor "Contabilidad"
empleado.departamento = "Contabilidad"

// Modifique el salario aumentándolo en 15%
empleado.salario *= 1.15

// Elimine la propiedad activo
delete empleado.activo

// 4. Genere las siguientes salidas usando template literales
/*  === FICHA DE EMPLEADO ===
    Nombre: ANA LUCÍA RODRÍGUEZ
    Salario: $1,380.58
    Departamento: contabilidad
    Año de ingreso: 2025
    Habilidades (3): Excel, Contabilidad, Análisis 
*/

console.log("=== FICHA DE EMPLEADO ===")
console.log(`Nombre: ${empleado.nombre.toUpperCase()}`)
console.log(`Salario: $${empleado.salario.toFixed(2)}`)
console.log(`Departamento: ${empleado.departamento.toLowerCase()}`)
console.log(`Año de ingreso: ${empleado.fechaIngreso.getFullYear()}`)
console.log(`Habilidades (${empleado.Habilidades.length}): ${empleado.Habilidades.join(", ")}`)

