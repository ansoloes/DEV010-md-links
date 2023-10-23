const app = require("./lib/app.js");

const mdLinks = (ruta) => new Promise((resolve, reject) => {
    if (!app.esAbsoluta(ruta)) ruta = app.transformarRuta(ruta);

    if(!app.existeRuta(ruta)) reject(new Error('No se encontró la ruta'));

    if (!app.verificarExtension(ruta)) reject(new Error('La extensión no es válida'));

    app.leerArchivo(ruta)
      .then((res) => {
        res = app.encontrarLinks(res, ruta);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      }) 

  });

//console.log(mdLinks("./samples/example1.md").then((res) => console.log(res)).catch((err) => console.log(err.message)));

module.exports = {
  mdLinks,
};
