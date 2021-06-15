const express = require('express');  
const routes = require('./routes');
const path = require('path');  //es una libreria de Node, que leer los archivos, file system
const bodyParser = require('body-parser');

//crear la conexion a la base de datos
const db = require('./config/db');

db.authenticate()
  .then(()=> console.log('Conectando al Servidor'))
  .catch(error => console.log(error));

//crear una app de espress
const app = express();

// Donde cargar los archivos estaticos
app.use(express.static('public'));

//Habilitar Pug
app.set('view engine', 'pug');

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes() );

app.listen(3000);


