const path = require('path');

/**
 * Esta función verifica si la ruta es absoluta
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {Boolean} Ejemplo: true si es absoluta o false si no es absoluta
 */
const esAbsoluta = (ruta) => {
  if (path.isAbsolute(ruta)) path.isAbsolute(ruta)
}

module.exports = {
  esAbsoluta,
}