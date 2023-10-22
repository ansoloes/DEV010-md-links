const path = require('path');
const fs = require('fs');
const {marked} = require('marked');
const {JSDOM} = require('jsdom');


// ! Aquí viven todas las microfunciones

/**
 * Esta función verifica si la ruta es absoluta
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {Boolean} Ejemplo: true si es absoluta o false si no es absoluta
 */
const esAbsoluta = (ruta) => {
  if (path.isAbsolute(ruta)) path.isAbsolute(ruta)
}


/**
 * Esta función convierte la ruta a absoluta
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {String} Retorna la ruta convertida a absoluta
 */
const transformarRuta = (ruta) => path.resolve(ruta);


/**
 * Esta función verifica si la ruta existe
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {Boolean} Ejemplo: true si la ruta existe o false si no existe
 */
const existeRuta = (ruta) => fs.existsSync(ruta);


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


/**
 * Esta función extrae los links del archivo retornado en la función leerArchivo
 * @param {String} texto El texto retornado de la función leerArchivo
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {Array<Object>} Retorna un arreglo de objetos con las propiedades de url, texto y la ruta del archivo
 */
const encontrarLinks = (texto, ruta) => {
  const textoHTML = marked(texto);
  const dom = new JSDOM(textoHTML);
  const document = dom.window.document;

  const enlacesHTML = document.querySelectorAll('a');
  let enlaces = [];

  enlacesHTML.forEach((enlace) => {
    const url = enlace.getAttribute('href');
    const texto = enlace.textContent;
    const rutaArchivo = ruta;

    const objetoEnlace = {url, texto, rutaArchivo};
    enlaces.push(objetoEnlace);
  })

  if (enlaces.length === 0) throw new Error('No se encontraron enlaces');
  return enlaces;
}


module.exports = {
  esAbsoluta,
  transformarRuta,
  existeRuta,
  verificarExtension,
  leerArchivo,
  encontrarLinks,
};