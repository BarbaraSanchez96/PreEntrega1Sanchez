let productos = prompt("Ingrese cantidad de productos seleccionados")
let total = 0
for (let producto = 1; producto <= productos; producto++) {
    let nombre = prompt("Ingrese tipo de producto")
    let precio = Number(prompt("Ingrese precio del producto"))
    total = total + precio
    console.log(`El producto ${producto} que corresponde a: ${nombre}, tiene un valor de ${precio}`)
}

// let total = 0
// let productosCarrito = 3
// for (let producto = 1; producto <= productosCarrito; producto++) {
//     let nombre = prompt("Ingrese tipo de producto")
//     let precio = Number(prompt("Ingrese el precio del producto"))
//     total = total + precio
//     console.log(`Producto ${producto} de tipo ${nombre} con un valor de ${precio} pesos. El valor final es de ${total} pesos`)
// }
// console.log(`El promedio es de ${productosCarrito}`)