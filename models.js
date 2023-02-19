const mongoose = require('mongoose');

const Trabajador = mongoose.model('Trabajador',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Animal = mongoose.model('Animal',
  new mongoose.Schema({ nombre: String, especie: String })
);

module.exports = {
  Trabajador: Trabajador,
  Animal: Animal
}