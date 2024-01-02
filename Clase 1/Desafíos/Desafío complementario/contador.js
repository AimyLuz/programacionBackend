class Contador {
    constructor(nombre){
        this.nombre = nombre
        this.cuentaIndividual = 0
    }
    static contadorGlobal = 0

    getResponsable = () => {
        return this.nombre
    }

    contar = () => {
        this.cuentaIndividual++
        Contador.contadorGlobal++
    }

    getCuentaIndividual = () => {
        return this.cuentaIndividual 
    }
    static getCuentaGlobal = () => Contador.contadorGlobal
    
}

const contador1 = new Contador('Jorge')
const contador2 = new Contador('Pepe')

contador1.contar()
contador1.contar()
contador2.contar()

console.log(contador1.getResponsable())
console.log(contador1.getCuentaIndividual())
console.log(contador2.getResponsable())
console.log(contador2.getCuentaIndividual())