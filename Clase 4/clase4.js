const fs = require("fs");
function crearLog(accion) {
  
    let log = new Date() + "-" + accion + "\n";

  fs.promises.appendFile("log.txr", log)
    .then(() => console.log("escribi en el archivo"))
    .catch((err) => console.log(err));
}

crearLog("Se registro usuario pepito");
crearLog("Se registro usuario Alejandro");
