const express = require('express');

const app = express();

// Configuración de la aplicación
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Aplicación todo list iniciando!');
});

module.exports = app;