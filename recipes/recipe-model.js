const db = require('../data/dbConfig.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getIngredientRecipes
};

function getRecipes(){
  return db('recipes');
}

function getShoppingList(id){
  return db('ingredients as i')
  .join('recipe_ingredients as ri', 'ri.ingredient_id', 'i.id')
  .join('recipes as r', 'r.id', 'ri.recipe_id')
  .where('r.id',id)
  .select('r.recipeName','i.ingredientName','ri.quantity','ri.measurement')
}

function getInstructions(id){
  return db('steps as s')
    .join('recipes as r', 'r.id','s.recipe_id')
    .where('r.id',id)
    .orderBy('s.step_number')
    .select('s.id','r.recipeName','s.stepNum','s.instructions');
}

function getIngredientRecipes(id){
  return db('ingredients as i')
  .join('recipe_ingredients as ri', 'ri.ingredient_id', 'i.id')
  .join('recipes as r', 'r.id', 'ri.recipe_id')
  .where('i.id',id)
  .select('i.ingredientName','r.recipeName');
}