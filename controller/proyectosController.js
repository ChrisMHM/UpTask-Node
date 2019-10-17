const ProyectosDB = require('../models/ProyectosDB');
const slug = require('slug');

exports.proyectosHome = async (request, response) => {
    const proyectos = await ProyectosDB.findAll();          // Hace una consulta a la db para obtener todos los proyectos

    response.render('index', {
        nombrePagina: 'Proyectos',
        proyectos                                           // Se le pasa el resultado de proyectos a la ruta /
    });
};

exports.formularioProyecto = (request, response) => {
    response.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
};

exports.nuevoProyecto = async (request, response) => {
    // Acceder a valores del formulario
    // console.log(request.body)

    // Validar que tengamos algo en el input
    const { nombre } = request.body;    //Creamos la variable y almacenamos su valor

    let errores = [];

    if (!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'});
    }

    // Si hay errores
    if (errores.length > 0) {
        response.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores                                                     // Se le pasan los errores a la ruta /nuevo-proyecto
        });
    } else {
        // No hay errores
        // Insertar en la BD

        const proyecto = await ProyectosDB.create({ nombre });          // Hace las inserciones a la db
        response.redirect('/');
    }
}