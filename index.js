const app = require("./lib/app.js");

const mdLinks = (ruta, validacion) => new Promise((resolve, reject) => {
  if (!app.esAbsoluta(ruta)) ruta = app.transformarRuta(ruta);

  if (!app.existeRuta(ruta)) reject(new Error('No se encontró la ruta'));

  if (!app.verificarExtension(ruta)) reject(new Error('La extensión no es válida'));

  else {
    app.leerArchivo(ruta)
      .then((res) => {
        res = app.encontrarLinks(res, ruta);
        if (!validacion) {
          resolve(res);
        } else {
          app.validacionEnlace(res)
            .then(enlacesValidados => {
              console.log(enlacesValidados);
            })
            .catch(error => {
              console.error(error);
            });
        }
      })
      .catch((err) => {
        reject(err);
      })
  }
});

module.exports = {
  mdLinks,
};
