class Persona {
    constructor(nombre){
        this.nombre = nombre 
    }

    static especie = 'humano'

    saludar = () => {
        console.log(`hola soy ${this.nombre}`)
    }

    getEspecie = () => {
        console.log(`Mi especie es ${Persona.especie}`)
    }
}

