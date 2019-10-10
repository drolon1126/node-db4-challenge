
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'egg'},
        {id: 2, ingredient_name: 'cocoa powder'},
        {id: 3, ingredient_name: 'sugar'},
        {id: 4, ingredient_name: 'bread'},
        {id: 5, ingredient_name: 'cheese'}
      ]);
};
