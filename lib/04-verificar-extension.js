const path = require('path');

/**
 * Esta función verifica si la extensión de la ruta es considerada como MarkDown
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {Boolean} Ejemplo: true si la extensión de la ruta es considerada como MarkDown o false si no lo es
 */
const verificarExtension = (ruta) => {
  const extensiones = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];

  if (!extensiones.includes(path.extname(ruta))) false;
  else return true;
}

module.exports = {
  verificarExtension,
}