const db = require('../data/dbConfig.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions  
};

function getRecipes(){
  return db('recipes');
}

function getShoppingList(id){
  return db('ingredients as i')
  .join('recipe_ingredients as ri', 'ri.ingredient_id', 'i.id')
  .join('recipes as r', 'r.id', 'ri.recipe_id')
  .where('r.id',id)
  .select('r.recipe_name','i.ingredient_name','ri.quantity');
}

function getInstructions(id){
  return db('steps as s')
    .join('recipes as r', 'r.id','s.recipe_id')
    .where('r.id',id)
    .orderBy('s.step_number')
    .select('s.id','r.recipe_name','s.step_number','s.instructions');
}