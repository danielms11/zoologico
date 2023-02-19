const { Trabajador, Animal } = require("./models.js");


// ------- TRABAJADOR

exports.readTrabajadores = (req, res) =>
Trabajador.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readTrabajador = (req, res) =>
Trabajador.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteTrabajador = (req, res) =>
Trabajador.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateTrabajador = (req, res) =>
Trabajador.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createTrabajador = (req, res) =>
    new Trabajador({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ ANIMALES

exports.readAnimales = (req, res) =>
Animal.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readAnimal = (req, res) =>
Animal.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteAnimal = (req, res) =>
Animal.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateAnimal = (req, res) =>
Animal.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, especie: req.body.especie } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createAnimal = (req, res) =>
    new Animal({ nombre: req.body.nombre, especie: req.body.especie })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });