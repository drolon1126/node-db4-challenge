const express = require('express');

const RecipeRouter = require('./recipes/recipe-router.js');
const IngRouter = require('./recipes/ingredient-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngRouter);


module.exports = server;