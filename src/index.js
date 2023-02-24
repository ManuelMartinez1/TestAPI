const express = require('express');
const { use } = require('express/lib/application');
const app = express();
const morgan = require('morgan');
//Configuraciones
app.set('port',3000);
app.set('json spaces',2);
//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/restaurante/',require('./routes/rutas'));

//Corriendo el servidor
app.listen(app.get('port'));
console.log("Mi primer servidor");



