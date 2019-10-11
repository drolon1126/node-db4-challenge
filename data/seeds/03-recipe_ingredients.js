
exports.seed = function(knex) {
  
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1, measurement:"whole"},
        {recipe_id: 1, ingredient_id: 2, quantity: 2, measurement:"tbsp"},
        {recipe_id: 1, ingredient_id: 3, quantity: 0.25, measurement:"cup"},
        {recipe_id: 2, ingredient_id: 4, quantity: 2, measurement:"slice"},
        {recipe_id: 2, ingredient_id: 5, quantity: 1, measurement:"slice"},
        
      ]);
};
