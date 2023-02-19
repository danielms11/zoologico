const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/trabajadores",      cors(), controller.readTrabajadores);   // Read All
router.get    ("/trabajadores/:id",  cors(), controller.readTrabajador);    // Read
router.delete ("/trabajadores/:id",  cors(), controller.deleteTrabajador);  // Delete
router.put    ("/trabajadores/:id",  cors(), controller.updateTrabajador);  // Update
router.post   ("/trabajadores",      cors(), controller.createTrabajador);  // Create

router.get    ("/animales",     cors(), controller.readAnimales);  // Read All
router.get    ("/animales/:id", cors(), controller.readAnimal);   // Read
router.delete ("/animales/:id", cors(), controller.deleteAnimal); // Delete
router.put    ("/animales/:id", cors(), controller.updateAnimal); // Update
router.post   ("/animales",     cors(), controller.createAnimal); // Create


module.exports = router;