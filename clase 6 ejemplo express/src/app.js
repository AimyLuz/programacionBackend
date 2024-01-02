//console.log("creamos todo con comandos, menos le .js");
import express from "express";
const app = express();
const PORT = 8080;
app.get("/", (req, res)=> {
    res.send("Hola mundo, nuestra primera api con express");
});
app.get("/saludo", (req, res)=>{
    res.send("hola mundo este es un saludo")
});
app.listen(PORT, () => {
    console.log (`Servidor escuchando en http://localhost:${PORT}`);
});