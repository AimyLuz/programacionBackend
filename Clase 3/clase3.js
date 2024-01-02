// let numeros = [1, 2, 3]
// let newNumeros = numeros.map((n)=>n*2)
// console.log(newNumeros)
/*
let usuarios = [{
    id: 1,
    password: "asd",
    user: "asd",
},
{
    id: 2,
    password: "admin",
    user: "admin123",
},
{
    id: 3,
    password: "qwertyui5",
    user: "pepito",
},]

console.log (usuarios.map(x => x.user))
*/

/*function calcular (num1, num2, operacionCallBack){
    if (typeof(num1) === "number" && typeof(num2) === "number"){
        operacionCallBack(num1, num2);

    } else {
        console.log("hubo un error")
    }
}
const sumar = (x, y) => x + y;
calcular(1,2,sumar)
calcular(true,1,sumar)
*/
//Promesas

function dividir (dividendo, divisor){
    return new Promise ((resolve, reject) => {
        if(divisor === 0) {
            reject ("No se pudo dividir")
        } else {
        resolve(dividendo/divisor)
        }
    })
}

dividir(10,2)
    .then((rdo)=> console.log(rdo))
    .catch(((err)=> console.log(err)))
    dividir(10,0)
    .then((rdo)=> console.log(rdo))
    .catch(((err)=> console.log(err)))
