const http = require("http"); // importamos modulo http´
const PORT = 8080
const server = http.createServer((request, response) => {
    response.end("HOla mundo este es nuestro primer servidor");
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
