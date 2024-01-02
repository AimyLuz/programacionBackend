const mostrarLista = arr => {
    if (arr.length === 0) {
        console.log('lista vacia')
    } else {
        arr.forEach (element => {
            console.log(element)
        });
    }

    return `longitud del array: ${arr.length}` 

}

const arrayVacio =[];
const arrayConElementos = [1, 2, 3, 4];


let variable = mostrarLista (arrayVacio)

console.log(variable)
console.log(mostrarLista(arrayConElementos))
