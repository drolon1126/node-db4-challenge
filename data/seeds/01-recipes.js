
exports.seed = function(knex) {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'cake'},
        {id: 2, recipe_name: 'grilled cheese'}
      ]);
};
