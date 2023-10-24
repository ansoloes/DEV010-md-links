const fetch = require('isomorphic-fetch');

/**
 * 
 * @param {Array<object>} enlaces 
 * @returns {Array<object>}
 */
const validacionEnlace = (enlaces) => {
  return Promise.all(enlaces.map((enlace) => {
    return fetch(enlace.url)
    .then(response => {
      if (!response.ok) {
          enlace.estado = response.status;
          enlace.mensaje = 'Fallo';
          return enlace;
        } else {
          enlace.estado = response.status;
          enlace.mensaje = 'Ok';
          return enlace;
        }
      })
      .catch(error => {
        enlace.estado = error.message;
        enlace.mensaje = 'Fallo';
        return enlace;
      })
    })
    )}

module.exports = {
  validacionEnlace,
}