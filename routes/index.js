const express = require('express');
const router = express.Router();

// Importar express validator
const { body } = require('express-validator/check')

// Importar controlador
const proyectosController = require('../controller/proyectosController');

module.exports = () => {
    // Envía la ruta principal
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    // Post del formulario
    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(),                     // Valida que el nombre del proyecto no este vacio, con espacios en blaco y con caracteres especiales
        proyectosController.nuevoProyecto);

    return router;
};