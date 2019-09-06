const { RHO, G } = require('common');
const { diam } = require('geom');

exports.poids = function (r, h, mat="eau") {
  let vol = diam(r)*h; // [m3]
  let rho = RHO[mat] // [kg/m3]

  let m = vol * rho; // [kg]

  return m * G;
}