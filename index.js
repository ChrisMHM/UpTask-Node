const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser')

// helpers con algunas funciones
const helpers = require('helper.js')


// Crear la conexión con la db
const db = require('./config/db')

// Inportar el modelo de la db
require('./models/ProyectosDB')

// db.authenticate()
//     .then(() => console.log("Conectado al Servidor"))
//     .catch(error => console.log(error));

// Crea y autentica la db, revisar el GIST para los problemas de autenticación
db.sync()
    .then(() => console.log("Conectado al Servidor"))
    .catch(error => console.log(error));

// Crear una app de express
const app = express();

// Donde cargar los archivos estáticos
app.use(express.static('public'))

// Habilitar Pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, 'view'));

// Pasar var dump a la aplicación
app.use()

// Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}))

// Habilitar rutas del proyecto
app.use('/', routes());
app.use('/nuevo-proyecto', routes());

app.listen(3000);