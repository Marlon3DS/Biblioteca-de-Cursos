const express = require('express');
const routes = express.Router();

const CursoController = require('./controlers/CursoController');

routes.get('/cursos', CursoController.index);
routes.get('/cursos/:id', CursoController.show);
routes.post('/cursos', CursoController.store);
routes.put('/cursos/:id', CursoController.update);
routes.delete('/cursos/:id', CursoController.destroy);

module.exports = routes;