
exports.seed = function(knex) {
      return knex('recipes').insert([
        {id: 1, recipeName: 'cake'},
        {id: 2, recipeName: 'grilled cheese'}
      ]);
};
