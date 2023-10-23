const path = require('path');

/**
 * Esta función convierte la ruta a absoluta
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {String} Retorna la ruta convertida a absoluta
 */
const transformarRuta = (ruta) => path.resolve(ruta);

module.exports = {
  transformarRuta,
}