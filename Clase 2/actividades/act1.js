
//1. Tengo productos y quiero saber cuales tienen stock
let productos = [{
    nombre: "Plato",
    precio: 50.0,
    stock: 10
},
{
    nombre: "Tenedor",
    precio: 15.0,
    stock: 5
},
{
    nombre: "Cuchara",
    precio: 10.0,
    stock: 0
}]
let productosConStock =[];
for (let producto of productos){
    if (producto.stock > 0){
        productosConStock.push(producto);
    }
}

console.log(productosConStock);


//2 (no preste atencion)


//3. Tengo usuarios y quiero buscar aquellos que sean mayores de 18