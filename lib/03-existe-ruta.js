const fs = require('fs');

/**
 * Esta función verifica si la ruta existe
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {Boolean} Ejemplo: true si la ruta existe o false si no existe
 */
const existeRuta = (ruta) => fs.existsSync(ruta);

module.exports = {
  existeRuta,
}