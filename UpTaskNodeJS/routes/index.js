const express = require('express');
const router = express.Router();  //.Router() es un método de express

// importar el controlador
const proyectosController = require('../controllers/proyectosController');

//Exporto mi funcion 
module.exports = function (){
   // ruta para el home
   router.get('/', proyectosController.proyectosHome);
   router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
   router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);
   return router;
}