const fs = require('fs');

/**
 * Esta función lee el archivo según la ruta
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {String} Retorna todo el contenido del archivo como String
 */
const leerArchivo = (ruta) => new Promise((resolve, reject) => {
  fs.readFile( ruta, 'utf-8', (err, data) => {
    if (err) reject(err);
    else resolve(data);
  })
})

module.exports = {
  leerArchivo,
}