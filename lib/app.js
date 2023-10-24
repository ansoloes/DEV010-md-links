const {esAbsoluta} = require('./01-es-absoluta');
const {transformarRuta} = require('./02-transformar-ruta');
const {existeRuta} = require('./03-existe-ruta');
const {verificarExtension} = require('./04-verificar-extension');
const {leerArchivo} = require('./05-leer-archivo');
const {encontrarLinks} = require('./06-encontrar-links');
const {validacionEnlace} = require('./07-validacion-enlaces');

module.exports = {
  esAbsoluta,
  transformarRuta,
  existeRuta,
  verificarExtension,
  leerArchivo,
  encontrarLinks,
  validacionEnlace
};