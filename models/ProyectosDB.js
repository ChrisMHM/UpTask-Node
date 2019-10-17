const sequelize = require('sequelize');     // Importa los métodos para el manejo de la db
const db = require('../config/db');         // Contiene la conexión y configuración a la db
const slug = require('slug');               // Biblioteca para convertir cadenas a URL
const shortid = require('shortid');

// Definición de la tabla proyecto
const ProyectosDB = db.define('proyecto', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: sequelize.STRING,
    url: sequelize.STRING
}, {
    // Código para manejar las URL antes de ser insertadas a la db
    hooks: {
        beforeCreate(proyecto) {
            const url = slug(proyecto.nombre).toLowerCase();


            proyecto.url = `${url}-${shortid.generate()}`;
        }
    }
});

module.exports = ProyectosDB;