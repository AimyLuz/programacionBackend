/* hand of labs
Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
nombre
lugar
precio (deberá agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)
El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.

*/

class TicketManager{
    #eventos = [];
    #precioBaseDeGanancia = 500;
    #id = 0;

    getEventos(){
        return this.#eventos; 
    }
    agregarEvento (nombre, lugar, precio, capacidad, fecha){
        let evento = {
            id: this.#id,
            nombre: nombre,
            lugar: lugar, 
            precio: precio,
            capacidad: capacidad,
            fecha: fecha,
            participantes: []
        }
        this.#id = this.#id + 1
        this.#eventos.push(evento);
    }
    agregarUsuario (){
        
    }
}
