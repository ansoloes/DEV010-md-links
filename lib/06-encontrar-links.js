const {marked} = require('marked');
const {JSDOM} = require('jsdom');

/**
 * Esta función extrae los links del archivo retornado en la función leerArchivo
 * @param {String} texto El texto retornado de la función leerArchivo
 * @param {String} ruta Ejemplo: './sample/archivo.txt'
 * @returns {Array<object>} Retorna un arreglo de objetos con las propiedades de url, texto y la ruta del archivo
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
  encontrarLinks,
}